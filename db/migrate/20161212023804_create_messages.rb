class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.string :author_name, null: false
      t.string :subject
      t.string :body, null: false
      t.string :reference

      t.timestamps
    end
  end
end
