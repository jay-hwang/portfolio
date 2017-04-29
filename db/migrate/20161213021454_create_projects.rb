class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :image_url
      t.string :github_url
      t.string :live_url
      t.string :stack, null: false

      t.timestamps
    end
  end
end
