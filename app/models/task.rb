class Task < ActiveRecord::Base
  validates :title, :body, :presence => true
end
