class ChangeStudendIdsAttendance < ActiveRecord::Migration[5.2]
  def up
    remove_column :attendance, :student_ids
    add_column :attendance, :student_id, :integer
    add_column :attendance, :notified_at, :datetime
  end

  def down
    add_column :attendance, :student_ids, :text
  end
end
