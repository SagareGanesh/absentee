class School < ApplicationRecord
  has_many :divisions, dependent: :destroy
end
