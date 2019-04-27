class AttendanceStatus < ApplicationRecord
  self.table_name = 'attendance_status'

  has_many :attendance, dependent: :destroy
  belongs_to :school
end