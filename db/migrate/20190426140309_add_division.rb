class AddDivision < ActiveRecord::Migration[5.2]
  def change
    create_table :divisions do |t|
      t.string  :name
      t.integer :class_name
      t.timestamps
    end

    add_reference :divisions, :school, foreign_key: true
  end
end
