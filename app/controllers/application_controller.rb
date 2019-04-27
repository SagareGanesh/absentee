class ApplicationController < ActionController::API
  before_filter :scope_current_school, if: :current_school

  private

  def current_school
    @current_school ||= School.first
  end

  def scope_current_school
    School.current_id =  current_school.id
    yield
  ensure
    School.current_id = nil
  end
end
