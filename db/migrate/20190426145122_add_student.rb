class AddStudent < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :roll_number
      t.string :notification_nos
      t.timestamps
    end
    add_reference :students, :class_room, foreign_key: true
    add_reference :students, :school, foreign_key: true
  end
end
