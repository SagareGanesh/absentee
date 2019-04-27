school = School.find_or_create_by(name: 'Josh', school_type: 'primary', contact_number: '9921998433')
admin  = school.users.find_or_create_by(name: 'Ganesh Sagare', role: User::ROLES[:admin], email: 'ganesh@joshsoftware.com', contact_no: '91234567890')
principle = school.users.find_or_create_by(name: 'Pramod Shinde', role: User::ROLES[:principal], email: 'pramod@joshsoftware.com', contact_no: '91234567890')

data = [
  ['101', 'Ganesh Sagare', 'A', '2018', '9921998433'],
  ['102', 'Akshay Kakade', 'B', '2018', '9921998433'],
  ['103', 'Swati Jadhav',  'C', '2018', '9921998433'],
  ['104', 'Pragati Garud', 'D', '2018', '9921998433'],
  ['105', 'Pramod Shinde', 'E', '2018', '9921998433'],
]

data.each do |roll_no, name, div, acd_year, mob_nos|
  50.times do |i|
    school.students.create(
      roll_number:      roll_no,
      name:             "#{name} #{i}",
      class_name:       [1, 2, 3, 4, 5].sample,
      division:         div,
      academic_year:    acd_year,
      notification_nos: mob_nos
    )
  end
end