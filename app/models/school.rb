class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy

  def grouped_stundents
    students_list = {}
    self.students.select(:id, :name, :roll_number, :class_name, :division, :school_id)
      .select('attendance.id as attendace_id')
      .left_joins(:attendance)
      .order(:class_name, :division, :roll_number)
      .uniq
      .each_slice(100) do |batch|
        class_students = batch.group_by{|b| b.class_name }
        class_students.each do |k, v|
          class_students[k] = v.group_by{|h| h.division }
        end
      students_list.merge!(class_students)
    end
    students_list
  end

  def search_students(params)
    class_names = self.students.pluck(:class_name).uniq
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
