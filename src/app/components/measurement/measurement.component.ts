import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import "rxjs-compat/add/operator/finally";

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  public measurement;
  public isLoading = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
  //  this.getMeasurement();
  }

  getMeasurement(): void {
    this.measurement = null;
    this.isLoading = true;
    this.appService.getMeasurement()
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        console.log(res);
        if(res) {
          this.measurement = <any>res;
        }
      }, (err: any) => {
        console.log(err.status); console.log(err);
      });
  }

  get thingSpeakFields(): JSON {
    if (this.measurement && this.measurement.includes('{')) {
      let str = this.measurement.split('{');
      str = "{" + str[str.length-1];
      return JSON.parse(str);
    }
    return null;
  }
}
