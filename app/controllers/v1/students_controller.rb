class V1::StudentsController < V1::BaseController

  def upload
    InventoryService.new(params[:file].tempfile.path, 'student')
    render json: { message: 'File uploaded successfully' }, status: 200
  end

  def create
    s = Student.new(student_params)
    if s.save!
      render json: {message: 'successfully created'}, status: :ok
    else
      render json: { message: s.errors.messages }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  def edit
  end

  private

  def stuedent_params
    params.require(:student).permit(:name, :roll_number, :class_name, :division, :academic_year, :notification_nos])
  end
end
