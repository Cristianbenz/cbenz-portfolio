import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLink } from 'src/app/models/navLink';
import { RouterService } from 'src/app/services/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule],
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