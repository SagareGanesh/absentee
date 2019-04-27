class ApplicationController < ActionController::API
  before_action :set_current_school

  private

  def set_current_school
    @current_school ||= School.first
    env_name = @current_school.language == 'mr' ? :replica_mr : :development
    ActiveRecord::Base.establish_connection(:env_name)
  end
end
