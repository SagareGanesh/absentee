# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_26_150011) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "class_rooms", force: :cascade do |t|
    t.string "name"
    t.integer "class_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "school_id"
    t.index ["school_id"], name: "index_class_rooms_on_school_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.integer "school_type"
    t.string "contact_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.integer "roll_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "division_id"
    t.index ["division_id"], name: "index_students_on_division_id"
  end

  add_foreign_key "class_rooms", "schools"
  add_foreign_key "students", "class_rooms", column: "division_id"
end
