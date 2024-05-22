import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

export default class extends Controller {

  connect() {
    this.initializeTomSelect()
  }

  initializeTomSelect() {
    new TomSelect(this.element, {
      plugins: ['remove_button'],
      allowEmptyOption: true,
      placeholder: "Select",
      maxItems: 10 // use with mutli-select
    });
  }
}
