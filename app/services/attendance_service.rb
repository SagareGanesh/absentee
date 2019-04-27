require "net/https"
require "json"

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

    params[:student_ids].each do |student_id|
      school.attendance.create(
        student_id:  student_id,
        class_name:  params[:class_name],
        division:    params[:division],
        date: Date.today
      )
    end
  end

  def send_notifications
    Attendance.includes(:student).where(date: Date.today).where.not(notified_at: nil)
      .find_each do |attendance|
      attendance.student.notification_nos.split(',').each do |mob_no|
        msg = "तुमचे पाल्य #{student.name} आज शाळेत आले नाही"
        url = URI.parse('http://api.textlocal.in/send/?')

        response = Net::HTTP.post_form(url, apiKey: TEXT_LOCAL_API_KEY, sender: 'TXTLCL', message: msg.squish, numbers: student.notification_nos, unicode: true)
        status = JSON.parse(response.body)['status']
        status.eql?('success') ? attendance.update_attibutes(notified_at: DateTime.now) : 'message not sent'
      end
    end
  end
end