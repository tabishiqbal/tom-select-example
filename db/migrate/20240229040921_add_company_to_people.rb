class AddCompanyToPeople < ActiveRecord::Migration[7.1]
  def change
    add_reference :people, :company, foreign_key: true
  end
end
