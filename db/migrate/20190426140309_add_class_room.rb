class AddClassRoom < ActiveRecord::Migration[5.2]
  def change
    create_table :class_rooms do |t|
      t.string :name
      t.string :division
      t.timestamps
    end

    add_reference :class_rooms, :school, foreign_key: true
  end
end
