class AddAttendance< ActiveRecord::Migration[5.2]
  def change
    create_table :attendance do |t|
      t.date :date
      t.text :student_ids, default: [], array: true
      t.string :class_name
      t.string :division
    end
    add_reference :attendance, :school, foreign_key: true
  end
end
