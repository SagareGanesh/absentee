class Attendance < ApplicationRecord
  self.table_name = 'attendance'

  belongs_to :school
  belongs_to :student
  belongs_to :attendance_status
end