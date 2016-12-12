class Message < ApplicationRecord
  validates :user,
            :author_name,
            :body,
            presence: true

  belongs_to :user
end
