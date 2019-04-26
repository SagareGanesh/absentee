school = School.create(name: 'Josh', school_type: 'primary', contact_number: '9921998433')
admin  = school.users.create(name: 'Ganesh Sagare', role: 'admin', email: 'ganesh@joshsoftware.com')

data = [
  ['101', 'Ganesh Sagare', '9', 'A', '2018', '9921998433'],
  ['102', 'Akshay Kakade', '9', 'A', '2018', '9921998433'],
  ['103', 'Swati Jadhav', '9', 'A', '2018', '9921998433'],
  ['104', 'Pragati Garud', '9', 'A', '2018', '9921998433'],
  ['105', 'Pramod Shinde', '9', 'A', '2018', '9921998433'],
]
data.each do |roll_no, name, class_name, div, acd_year, mob_nos|
  school.students.create(
    roll_number:      roll_no,
    name:             name,
    class_name:       class_name,
    division:         div,
    academic_year:    acd_year,
    notification_nos: mob_nos
  )
end