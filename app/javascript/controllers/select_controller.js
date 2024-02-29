import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

export default class extends Controller {
  initialize() {
    this.initializeTomSelect = this.initializeTomSelect.bind(this)
  }

  connect() {
    this.initializeTomSelect()
    document.addEventListener("turbo:load", this.initializeTomSelect)
  }

  disconnect() {
    document.removeEventListener("turbo:load", this.initializeTomSelect)
  }

  initializeTomSelect() {
    new TomSelect(this.element, {
      plugins: ['remove_button'],
      allowEmptyOption: true,
      placeholder: "Select",
      maxItems: 1 // use with mutli-select
    });
  }
}
