class Project < ApplicationRecord
  validates :user_id,
            :title,
            :description,
            :stack,
            presence: true

  belongs_to :user
end
