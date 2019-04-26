class AddStudent < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :roll_number
      t.string :class_name
      t.string :division
      t.string :academic_year
      t.string :notification_nos
      t.timestamps
    end
    add_reference :students, :school, foreign_key: true
  end
end
