class Attendance < ApplicationRecord
  self.table_name = 'attendance'

  belongs_to :school
end