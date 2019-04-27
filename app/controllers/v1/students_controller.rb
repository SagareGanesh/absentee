class V1::StudentsController < V1::BaseController

  def index
    school = School.first
    students = school.students.offset(params[:offset]).limit(10).order(:id)
    render json: { total: school.students.count, students: students }, status: 200
  end

  def upload
    # InventoryService.new(params[:file].tempfile.path, 'student')
    render json: { message: 'File uploaded successfully' }, status: 200
  end
end
