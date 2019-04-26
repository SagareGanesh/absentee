class AddSchool < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :school_type
      t.string :contact_number
      t.timestamps
    end
  end
end
