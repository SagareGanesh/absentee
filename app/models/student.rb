class Student < ApplicationRecord
  belongs_to :school
  has_one :attendance
end