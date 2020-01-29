import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
public getParam: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('param1', params.kiskutya);
      console.log('param2', params);
      this.getParam = params.kiskutya;
    });
  }

  /* activatedroute queryparams --> felíratkozás után már látjuk az átadott queryparamokat */

}
