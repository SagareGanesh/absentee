FactoryBot.define do
  factory :student, class: 'Student' do
    name        { Faker::Name.name }
    roll_number { Faker::Number.decimal_part(3) }
    class_name  { Faker::Number.digit }
    division { Faker::Alphanumeric.alpha(1).upcase }
    academic_year { 2019 }
    notification_nos { Faker::Number.decimal_part(10) }
  end
end