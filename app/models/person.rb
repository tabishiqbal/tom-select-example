class Person < ApplicationRecord
  belongs_to :company, optional: true

  attribute :region, :string

  enum region: {
    usa: "USA Only",
    north_america: "North America Only",
    south_america: "South America Only",
    canada: "Canada Only",
    americas: "Americas Only",
    europe: "Europe Only",
    uk: "UK Only",
    emea: "EMEA Only",
    asia: "Asia Only",
    africa: "Africa Only",
    other: "Other"
  }
end
