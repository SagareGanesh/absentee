class AttendanceService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def submit
    attendance = create_attendance
    send_notifications
    true
  end

  private

  def create_attendance
    school = School.find params[:school_id]

    attendance_status = school.attendance_status.create(
      date:       Date.today,
      class_name: params[:class_name],
      division:   params[:division]
    )

    params[:student_ids].each do |student_id|
      school.attendance.create(
        student_id:           student_id,
        attendance_status_id: attendance_status.id,
        class_name:           params[:class_name],
        division:             params[:division],
        date:                 Date.today
      )
    end
  end

  def send_notifications
    Attendance.includes(:student).where(date: Date.today).where.not(notified_at: nil)
      .find_each do |attendance|
      attendance.student.notification_nos.split(',').each do |mob_no|
        puts "#{mob_no} => Your child #{student.name} is absent today."
        attendance.update_columns(notified_at: DateTime.now)
      end
    end
  end
end