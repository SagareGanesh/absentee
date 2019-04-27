language = 'English'

if language == 'English'
  school = School.find_or_create_by(
    name: 'Josh',
    school_type: 'primary',
    contact_number: '9921998433',
    language: 'en'
  )

  admin = school.users.find_or_create_by(
    name: 'Ganesh Sagare',
    role: User::ROLES[:admin],
    email: 'ganesh@joshsoftware.com',
    contact_no: '91234567890'
  )

  principle = school.users.find_or_create_by(
    name: 'Pramod Shinde',
    role: User::ROLES[:principal],
    email: 'pramod@joshsoftware.com',
    contact_no: '91234567890'
  )

  classes   = (1..5).to_a
  divisions = ('A'..'C').to_a

  first_names = %w[Ganesh Akshay Swati Pragati Pramod Yogesh Anil Pinky Payal Priyanka]
  last_names  = %w[Yadav Bhalerav Raut Mayura Khatar Shinde Garud Jadhav Kakade Sagare]
  mobile_number = '9921998433'
  acd_year      = '2019'
  roll_nos      = (101..200).to_a

  classes.each do |class_name|
    divisions.each do |division|
      student_count = (50..70).to_a.sample

      roll_nos.each_with_index do |roll_no, index|
        next if index > student_count

        name = "#{first_names.sample} #{last_names.sample}"
        school.students.create(
          roll_number:      roll_no,
          name:             name,
          class_name:       class_name,
          division:         division,
          academic_year:    acd_year,
          notification_nos: mobile_number
        )
      end
    end
  end

else

  school = School.find_or_create_by(
    name: 'जोश',
    school_type: 'प्राथमिक',
    contact_number: '९९२१९९८४३३',
    language: 'mr'
  )

  admin = school.users.find_or_create_by(
    name: 'गणेश सागर',
    role: User::ROLES[:admin],
    email: 'ganesh@joshsoftware.com',
    contact_no: '९९२१९९८४३३'
  )

  principle = school.users.find_or_create_by(
    name: 'प्रमोद शिंदे',
    role: User::ROLES[:principal],
    email: 'pramod@joshsoftware.com',
    contact_no: '९९२१९९८४३३'
  )

  classes   = ('१'..'५').to_a
  divisions = ['अ', 'ब', 'क']

  first_names = %w[गणेश अक्षय स्वाती प्रगती प्रमोद योगेश अनिल पिंकी पायल प्रियंका]
  last_names  = %w[यादव भालेरव राऊत मयूर खटार शिंदे गरुड जाधव काकडे सागर]
  mobile_number = '९९२१९९८४३३'
  acd_year      = '२०१९'
  roll_nos      = ('१०१'..'२००').to_a

  classes.each do |class_name|
    divisions.each do |division|
      student_count = (50..70).to_a.sample

      count = 0
      roll_nos.each do |roll_no|
        next if count > student_count

        name = "#{first_names.sample} #{last_names.sample}"
        school.students.create(
          roll_number:      roll_no,
          name:             name,
          class_name:       class_name,
          division:         division,
          academic_year:    acd_year,
          notification_nos: mobile_number
        )
        count += 1
      end
    end
  end

end