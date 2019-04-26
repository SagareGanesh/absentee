class RenameDivisionToClassRoom < ActiveRecord::Migration[5.2]
  def up
    rename_table :divisions, :class_rooms
  end
end
