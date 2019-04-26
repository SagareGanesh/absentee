class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :absentees, dependent: :destroy
end
