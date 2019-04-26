require 'csv'

class InventoryService
  def initialize(file_path, inventory_type)
    @file_path = file_path
    @inventory_type = inventory_type
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
    invalid_student_data = []
    students_data = CSV.parse(file, headers: true)
    students_data.each do |student|
      byebug
      s = Student.new(student.to_hash)
      if s.valid?
        s.save
      else
        invalid_student_data << (student.to_h.keys << s.errors)
      end
    end
  end

  def upload_classroom_data(file_path)

  end
end
