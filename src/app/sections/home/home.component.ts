import { Component, inject } from '@angular/core';
import { RouterService } from 'src/app/services/router';
@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    private _routerService = inject(RouterService)
    public current = this._routerService.getSection;

    constructor() {
        this._routerService.currentSection.subscribe(section => this.current = section)
    }
}