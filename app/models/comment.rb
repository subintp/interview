class Comment < ActiveRecord::Base

  validates :body, presence: true, allow_blank: false
  belongs_to :post

end
