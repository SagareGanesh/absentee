class School < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :attendance, dependent: :destroy

  after_create :create_tenant

  def tenant_name
    short_name
  end

  private

  def create_tenant
    Apartment::Tenant.create(tenant_name)
  end
end
