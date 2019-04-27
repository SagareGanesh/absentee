class V1::SchoolsController < V1::BaseController
  def details
    render json: {
      name: @current_school.name,
      class_names: @current_school.students.pluck(:class_name).uniq,
      divisions:   @current_school.students.pluck(:division).uniq
    }, status: 200
  end

  def set_language
    @current_school.update_attributes(language: params[:locale])
    render json: {message: 'language updated successfully'}, status: :ok 
  end
  
  ## update all student class to next level
  # params
  # {
  #   school_id: 1,
  # }
  #
  def elevation
    school = School.find params[:school_id]
    school.elevation
  end
end
