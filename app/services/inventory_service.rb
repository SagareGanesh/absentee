require 'csv'

class InventoryService
  def initialize(file_path, inventory_type, current_school)
    @file_path = file_path
    @inventory_type = inventory_type
    @current_school = current_school
  end

  def upload_data
    case @inventory_type
    when 'student'
      upload_student_data(@file_path)
    when 'classroom'
      upload_classroom_data(@file_path)
    when 'teacher'
      upload_teacher_data(@file_path)
    end
  end

  def upload_student_data(file_path)
    file = File.read(file_path)
    students_data = CSV.parse(file, headers: true)
    invalid_student_data = [students_data.headers << 'error_messages']
    students_data.each do |student|
      student_data = student.to_hash.merge('school_id' => @current_school.id)
      s = Student.find_or_create_by(roll_number: students_data['roll_number'], class_name: students_data['class_name'], division: student_data['division'], school_id: student_data['school_id'])
      s.update(name: student_data['name'], academic_year: student_data['academic_year'], notification_nos: student_data['notification_nos'])
      s.valid? ? s.save : invalid_student_data << (student.to_h.values << s.errors.messages).flatten
    end
    invalid_student_data.length > 1 ? generate_error_csv(invalid_student_data) : nil
  end

  def generate_error_csv(invalid_data)
    CSV.open("error_data.csv", "wb") do |csv|
      invalid_data.each {|data| csv << data}
    end
    File.read('error_data.csv')
  end

  def upload_classroom_data(file_path)

  end
end
