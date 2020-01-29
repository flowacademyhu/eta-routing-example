import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-eta';
  constructor(private router: Router) {}

  public navigate(url: string) {
    this.router.navigate([url], {queryParams: {kiskutya: 'hellóka'}});
  }

  /* router segítségével queryparamsokat adunk át a komponensünknek, egy objectben */
}
