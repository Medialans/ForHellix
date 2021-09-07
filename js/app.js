import Field from "./1998/Field.js"
import Listener from "./System/Listener.js"

var study = new Vue({
  el: "#vue-app",
  data: {
    field:new Field(1998)
  }
});