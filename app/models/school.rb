class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy

  after_create :create_tenant

  def tenant_name
    short_name
  end

  def self.current_id=(id)
    Thread.current[:school_id] = id
  end

  def self.current_id
    Thread.current[:school_id]
  end

  def self.set_ryan
    School.current_id = School.find_by(short_name: 'ryan').id
  end

  def create_tenant
    Apartment::Tenant.create(tenant_name)
  end
end
