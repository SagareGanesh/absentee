class AddStudent < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string  :name
      t.integer :roll_number
      t.timestamps
    end
    add_reference :students, :division, foreign_key: true
  end
end
