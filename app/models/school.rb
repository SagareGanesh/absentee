class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy

  def self.current_id=(id)
    Thread.current[:school_id] = id
  end

  def self.current_id
    Thread.current[:school_id]
  end
end
