class V1::AttendanceController < V1::BaseController

  def index
    render json: @current_school.attendace_list(Date.today), status: 200
  end

  ## submit absent student list
  # eg.
  # params = {
  #   school_id: '1',
  #   student_ids: '1,2,3',
  #   class_name: '9',
  #   division: 'A'
  # }
  # result = create attendance record
  def submit
    result = AttendanceService.new(params).submit
    render json:  @current_school.attendace_list(Date.today), status: 200
  end
end