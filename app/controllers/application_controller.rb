class ApplicationController < ActionController::API
  before_action :set_current_school, if: :current_school

  private

  def current_school
    @current_school ||= School.first
  end

  def set_current_school
    School.current_id =  current_school.id
  ensure
    School.current_id = nil
  end
end
