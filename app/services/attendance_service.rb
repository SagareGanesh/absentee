class AttendanceService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def submit
    attendance = create_attendance
    send_notification(attendance)
    true
  end

  private

  def create_attendance
    school = School.find params[:school_id]

    school.attendance.create(
      student_ids: params[:student_ids].split(','),
      class_name:  params[:class_name],
      division:    params[:division]
    )
  end

  def send_notification(attendance)
    students = Student.where(id: attendance.student_ids)
                      .select(:name, :notification_nos)

    students.each do |student|
      student.notification_nos.split(',').each do |mob_no|
        puts "#{mob_no} => Your child #{student.name} is absent today."
      end
    end
  end
end