class School < ApplicationRecord
  has_many :divisions, dependent: :destroy
  has_many :users. dependent: :destroy
end
