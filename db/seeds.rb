school = School.create(name: 'Josh', school_type: 'primary', contact_number: '9921998433')
admin  = school.users.create(name: 'Ganesh Sagare', role: 'admin', email: 'ganesh@joshsoftware.com')

data = [
  ['101', 'Ganesh Sagare', 'A', '2018', '9921998433'],
  ['102', 'Akshay Kakade', 'B', '2018', '9921998433'],
  ['103', 'Swati Jadhav',  'C', '2018',  '9921998433'],
  ['104', 'Pragati Garud', 'A', '2018', '9921998433'],
  ['105', 'Pramod Shinde', 'B', '2018', '9921998433'],
  ['106', 'Swati Jadhav',  'C', '2018',  '9921998433']
]
10.times do |i|
  data.each do |roll_no, name, div, acd_year, mob_nos|
    school.students.create(
      roll_number:      roll_no,
      name:             "#{name} #{i}",
      class_name:       i+1,
      division:         div,
      academic_year:    acd_year,
      notification_nos: mob_nos
    )
  end
end