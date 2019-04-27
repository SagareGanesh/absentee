class V1::SchoolsController < V1::BaseController
  def details
    render json: {
      name: @current_school.name,
      class_names: @current_school.students.pluck(:class_name).uniq,
      divisions:   @current_school.students.pluck(:division).uniq
    }, status: 200
  end

  ## update all student class to next level
  # params
  # {
  #   school_id: 1,
  #   next_act_year: '2021'
  # }
  #
  def elevation
    school = School.find params[:school_id]

    school.class_wise_division
  end
end
