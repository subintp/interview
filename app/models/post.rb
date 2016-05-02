class Post < ActiveRecord::Base

  validates :title, presence: true, allow_blank: false
  validates :body, presence: true, allow_blank: false

  has_many :comments, dependent: :destroy
  has_many :votes, dependent: :destroy


end
