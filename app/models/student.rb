class Student < ApplicationRecord
  belongs_to :school
  has_many :attendance

  validates :name, presence: true
  validates :roll_number, presence: true
  validates :class_name, presence: true
  validates :class_name, presence: true
  validates :division, presence: true
  validates :academic_year, presence: true
  validates :notification_nos, presence: true

  default_scope -> { where(active: true) }
end