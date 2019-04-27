class V1::StudentsController < V1::BaseController
  before_action :load_student, only: [:update, :destroy, :show]

  def index
    school = School.first
    render json: school.search_students(params), status: 200
  end

  def upload
    InventoryService.new(params[:file].tempfile.path, 'student')
    render json: { message: 'File uploaded successfully' }, status: 200
  end

  def create
    s = Student.new(student_params.merge(school_id: current_school.id))
    if s.save!
      render json: {message: 'successfully created'}, status: :ok
    else
      render json: { message: s.errors.messages }, status: :unprocessable_entity
    end
  end

  def update
    if @student.update_attributes(student_params)
      render json: {message: 'updated successfully'}, status: :ok
    else
      render json: {message: @student.errors.message}, status: :unprocessable_entity
    end
  end

  def destroy
  end

  def show
    render json: @student.as_json(except: [:school_id]), status: :ok
  end

  private

  def student_params
    params.require(:student).permit(:name, :roll_number, :class_name, :division, :academic_year, :notification_nos)
  end

  def load_student
    @student = Student.find params[:id]
  end
end
