class ApplicationController < ActionController::API
  before_action :set_current_school

  private

  def set_current_school
    @current_school ||= School.first
  end
end
