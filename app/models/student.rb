class Student < ApplicationRecord
  belongs_to :school
  has_many :attendance

  default_scope -> { where(active: true) }
end