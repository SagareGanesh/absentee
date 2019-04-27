class AddLanguageToSchool < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :language, :string
  end
end
