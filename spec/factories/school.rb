FactoryBot.define do
  factory :school, class: 'School' do
    name        { "#{Faker::Name.unique.name} School" }
    school_type { "primary" }
  end
end
