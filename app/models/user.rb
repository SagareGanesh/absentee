class User < ApplicationRecord
  belongs_to :school

  ROLES = {
    principal: 'principal',
    admin: 'admin'
  }.freeze
end