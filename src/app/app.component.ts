import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor() {}
  myForm = {
    shape: null,
    color: null,
    fill: false
  };

  shapes = [];

  ngOnInit() {}

  submit(data) {
    this.shapes.push(data.value);
  }
}
