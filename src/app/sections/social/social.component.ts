import { Component, inject } from '@angular/core';
import { Network } from 'src/app/models/network';
import { RouterService } from 'src/app/services/router';

import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { SkillComponent } from 'src/app/components/skill/skill.component';

@Component({
  standalone: true,
  selector: 'app-social',
  imports: [CommonModule, MatIconModule, SkillComponent],
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
