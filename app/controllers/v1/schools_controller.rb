class V1::SchoolsController < V1::BaseController
  def details
    render json: {
      name: @current_school.name,
      class_names: @current_school.students.pluck(:class_name).uniq,
      divisions:   @current_school.students.pluck(:division).uniq
    }, status: 200
  end
end
