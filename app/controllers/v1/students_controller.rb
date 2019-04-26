class V1::StudentsController < V1::BaseController

  def upload
    # InventoryService.new(params[:file].tempfile.path, 'student')
    render json: { message: 'File uploaded successfully' }, status: 200
  end
end
