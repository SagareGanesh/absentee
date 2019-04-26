class AddUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role
      t.timestamps
    end
    add_reference :users, :school, foreign_key: true
  end
end
