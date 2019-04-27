require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "V1" do
  header "Accept", "application/vnd.parenotify.com; version=1"
  header "Content-Type", "application/json"
  header "X-Api-Key", "94b2fff3e7fd9b9c391a2306"

  get '/schools/details' do
    let!(:school) { FactoryBot.create(:school) }
    let!(:students) { create_list(:student, 5, school: school) }

    example_request "School Details" do
      expect(status).to eq(200)
    end
  end
end