class AddAttendanceStatus < ActiveRecord::Migration[5.2]
  def change
    create_table :attendance_status do |t|
      t.string :date
      t.string :class_name
      t.string :division
    end
    add_reference :attendance_status, :school, foreign_key: true
  end
end
