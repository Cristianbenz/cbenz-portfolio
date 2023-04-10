import { Component, inject } from '@angular/core';
import { Network } from 'src/app/models/network';
import { RouterService } from 'src/app/services/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  private _routerService = inject(RouterService);
  public current = this._routerService.getSection;

  public networks: Array<Network> = [
    {
      icon: 'code',
      name: 'Github',
      link: 'https://github.com/Cristianbenz?tab=repositories',
    },
    {
      icon: 'account_box',
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/cristian-benitez',
    },
    {
      icon: 'mail',
      name: 'contactocbenitez@gmail.com',
      link: 'mailto:contactocbenitez@gmail.com',
    },
  ];

  constructor() {
    this._routerService.currentSection.subscribe(
      (section) => (this.current = section)
    );
  }
}
