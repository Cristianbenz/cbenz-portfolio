import { Component, inject } from "@angular/core";
import { RouterService } from "src/app/services/router";

@Component({
    standalone: true,
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    private _routerService = inject(RouterService)
    public current = this._routerService.getSection;

    constructor() {
        this._routerService.currentSection.subscribe(section => this.current = section)
    }
}