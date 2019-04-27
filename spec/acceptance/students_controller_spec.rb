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
    parameter :q,   "Search query"
    parameter :class_name,   "Search class_name"

    let(:offset) { 0  }
    let(:size)   { 10 }

    let!(:school) { FactoryBot.create(:school) }
    let!(:students) { create_list(:student, 10, school: school) }

    example_request "List of students" do
      expect(status).to eq(200)
    end
  end

  post "/students" do
    parameter :name, "Student Full Name"
    parameter :roll_number,       "Student Roll Number"
    parameter :class_name,        "Student Class ex. 9"
    parameter :division,          "Student Division ex A"
    parameter :academic_year,     "Academic year ex 2019"
    parameter :notification_nos,   "Mobile numbers ex. 9096089881"

    let(:name)              {'akshay kakade'}
    let(:roll_number)       {'2'}
    let(:class_name)        {'9'}
    let(:division)          {'A'}
    let(:academic_year)     {'2019'}
    let(:notification_nos)  {'9096089881'}
    let!(:school) { FactoryBot.create(:school) }

    let(:raw_post) { params.to_json }

    example_request "Create Student" do
      expect(status).to eq(200)
    end
  end

  get "/students/:id" do
    parameter :id, "Student uniq id"
    let!(:school)  {FactoryBot.create(:school)}
    let(:id)   {FactoryBot.create(:student, school_id: school.id).id}

    example_request "Get student data" do
      expect(status).to eq(200)
    end
  end

  patch "/students/:id" do
    parameter :id, "Student uniq id"
    parameter :name,  "Student name"
    parameter :roll_number, "Student Roll number"
    let!(:school)  {FactoryBot.create(:school)}
    let(:id)   {FactoryBot.create(:student, school_id: school.id).id}

    let(:name)          {'pramod shinde'}
    let(:roll_number)   {'23'}

    let(:raw_post) { params.to_json }

    example_request "Update student" do
      expect(status).to eq(200)
    end
  end
end
