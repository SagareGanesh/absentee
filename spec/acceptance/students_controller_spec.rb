require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "V1" do
  header "Accept", "application/vnd.parenotify.com; version=1"
  header "Content-Type", "application/json"
  header "X-Api-Key", "94b2fff3e7fd9b9c391a2306"

  post "/students/upload" do
    parameter :file, "New file to upload"
    let(:file) { Rack::Test::UploadedFile.new('spec/fixtures/students.csv', 'text/csv') }

    example_request "Uploading a students file" do
      expect(status).to eq(200)
    end
  end

  get "/students" do
    parameter :offset, "Page offset"
    parameter :size,   "Page size", default: 10

    let(:offset) { 0  }
    let(:size)   { 10 }

    let!(:school) { FactoryBot.create(:school) }
    let!(:students) { create_list(:student, 10, school: school) }

    example_request "List of students" do
      expect(status).to eq(200)
    end
  end
end
