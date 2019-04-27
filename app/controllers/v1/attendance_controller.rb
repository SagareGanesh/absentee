class V1::AttendanceController < V1::BaseController

  def index
    school = School.first
    render json: school.grouped_stundents, status: 200
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
    render json: { success: result }
  end
end