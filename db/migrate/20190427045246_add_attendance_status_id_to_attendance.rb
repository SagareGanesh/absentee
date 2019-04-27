class AddAttendanceStatusIdToAttendance < ActiveRecord::Migration[5.2]
  def change
    add_column :attendance, :attendance_status_id, :integer
  end
end
