class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy
  has_many :attendance_status, dependent: :destroy

  def attendace_list(date)
    {
      students:   grouped_stundents,
      attendance: attendace_status_for(date)
    }
  end

  def grouped_stundents
    students_list = {}
    data = self.students
      .select(:id, :name, :roll_number, :class_name, :division, :school_id)
      .select('attendance.id as attendace_id')
      .left_joins(:attendance)
      .order(:class_name, :division, :roll_number)
      .uniq

    class_students = data.group_by{|b| b.class_name }
    class_students.each do |k, v|
      class_students[k] = v.group_by{|h| h.division }
    end
    students_list.merge!(class_students)
    students_list
  end

  def attendace_status_for(date)
    status_data = attendance_status
      .where(date: date)
      .pluck(:class_name, :division)

    data = {}
    class_wise_division.each do |class_name, divisions|
      data[class_name] =
        divisions.inject({}) do |hash, division|
          hash[division] = status_data.include?([class_name, division])
          hash
        end
    end

    data
  end

  def class_wise_division
    class_division = Student.pluck(:class_name, :division).uniq
    class_division_info = class_division.group_by{ |a| a[0] }

    class_division_info.each do |class_name, divisions|
      arr = divisions.flatten
      arr.delete(class_name)
      class_division_info[class_name] = arr
    end

    class_division_info
  end

  def elevation
    current_acd_year = Date.today.year
    next_acd_year    = Date.today.year + 1

    class_names = class_wise_division.keys.sort
    students
      .where(class_name: class_names.last)
      .update_all(active: false)

    class_names[0..-2].each_with_index do |class_name, index|
      students.where(
        class_name: class_name,
        academic_year: current_acd_year
      ).update_all(
        class_name: class_names[index + 1],
        academic_year: next_acd_year
      )
    end
  end

  def notify_principle
    remaining_attendance = {}

    class_wise_division.each do |class_name, divisions|
      divisions.each do |division|
        remaining_attendance[class_name] ||= []
        if attendance_status.where(class_name: class_name, division: division, date: Date.today).blank?
          remaining_attendance[class_name] << division
        end
      end
    end

    remaining_attendance.each{ |k, v| remaining_attendance.delete(k) if v.empty? }

    if remaining_attendance.present?
      msg = "Attendance is not registered for following class : "
      remaining_attendance.each{ |class_name, divisions| divisions.each{ |div| msg += "#{class_name}-#{div}, " }}

      users.where(role: User::ROLES[:principal]).each do |principal|
        MessageService.new(msg, principal.contact_no, principal).send_sms
      end
    end
  end


  def self.current_id=(id)
    Thread.current[:school_id] = id
  end

  def self.current_id
    Thread.current[:school_id]
  end

  def search_students(params)
    class_names = self.students.order(:class_name).pluck(:class_name).uniq
    filter = "name ilike (?) OR roll_number like (?)"
    students = self.students.where(filter, "%#{params[:q]}%", "%#{params[:q]}%") if params[:q].present?
    students = (students || self.students).where(class_name: params[:class_name]) if params[:class_name].present?
    students = students.present? ? students : self.students
    total = students.count
    students = students.offset(params[:offset]).limit(params[:size] || 10).order(:id)
    {
      page_count: (total.to_f/params[:size].to_i || 10).ceil,
      class_names: class_names,
      students: students
    }
  end
end
