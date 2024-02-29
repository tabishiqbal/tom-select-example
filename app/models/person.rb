class Person < ApplicationRecord
  belongs_to :company, optional: true
end
