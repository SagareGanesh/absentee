class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy

  def grouped_stundents
    students_list = {}
    self.students.select(:id, :name, :roll_number, :class_name, :division, :school_id).find_in_batches(batch_size: 100) do |batch|
      class_students = batch.group_by{|b| b.class_name }
      class_students.each do |k, v|
        class_students[k] = v.group_by{|h| h.division }
      end
      students_list.merge!(class_students)
    end
    students_list
  end
end
