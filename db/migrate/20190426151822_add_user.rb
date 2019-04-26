class AddUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role, default: "", null: false
      t.string :email, default: "", null: false
      t.string :encrypted_password, default: "", null: false
      t.timestamps
    end
    add_reference :users, :school, foreign_key: true
  end
end
