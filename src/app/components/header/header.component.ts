import { Component, inject } from '@angular/core';
import { NavLink } from 'src/app/models/navLink';
import { RouterService } from 'src/app/services/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    private _routerService = inject(RouterService)
    public actual: string = this._routerService.getSection;

    constructor() {
        this._routerService.currentSection.subscribe(section => {
            this.actual = section
        });
    }

    public links: Array<NavLink> = [
        {
            id: 'home',
            text: 'Home',
        },
        {
            id: 'about',
            text: 'About',
        },
        {
            id: 'projects',
            text: 'Projects',
        },
        {
            id: 'skills',
            text: 'Skills',
        },
        {
            id: 'social',
            text: 'Contact & Social',
        }
    ];

    setSection(section: string) {
        this._routerService.setSection(section);
    }
}