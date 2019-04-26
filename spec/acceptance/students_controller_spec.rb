require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "V1" do
  header "Accept", "application/vnd.parenotify.com; version=1"
  header "Content-Type", "application/json"

  post "/students/upload" do
    parameter :file, "New file to upload"
    let(:file) { Rack::Test::UploadedFile.new('spec/fixtures/students.csv', 'text/csv') }

    example_request "Uploading a students file" do
      expect(status).to eq(200)
    end
  end
end
