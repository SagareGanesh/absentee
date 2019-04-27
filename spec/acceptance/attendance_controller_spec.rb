require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "V1" do
  header "Accept", "application/vnd.parenotify.com; version=1"
  header "Content-Type", "application/json"
  header "X-Api-Key", "94b2fff3e7fd9b9c391a2306"

  post "/attendance/submit" do
    parameter :school_id, "School Id"
    parameter :student_ids, "Absent student Ids"
    parameter :class_name, "Class Name"
    parameter :division, "Division"

    let(:school) { create(:school) }
    let(:school_id) { school.id }
    let(:student_ids) { '1,2,3' }
    let(:class_name) { '9' }
    let(:division) { 'A' }

    let(:raw_post) { params.to_json }

    example_request "Submitting attendance" do
      expect(status).to eq(200)
    end
  end

  get '/attendance' do
    let!(:school) { FactoryBot.create(:school) }
    let!(:students) { create_list(:student, 10, school: school) }
    example_request 'List of attendance' do
      expect(status).to eq(200)
    end
  end
end