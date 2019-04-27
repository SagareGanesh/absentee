class ApplicationController < ActionController::API
  before_action :set_current_school

  private

  def set_current_school
    @current_school ||= School.first
    if @current_school.language == 'mr'
      ActiveRecord::Base.establish_connection(:replica_mr)
    end
  end
end
