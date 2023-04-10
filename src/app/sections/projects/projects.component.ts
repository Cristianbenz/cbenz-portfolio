import { Component, inject } from "@angular/core";

import data from '../../../projects.json';
import { Project } from "src/app/models/project";
import { RouterService } from "src/app/services/router";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
    private _routerService = inject(RouterService)
    public current = this._routerService.getSection;
    public projects: Array<Project> = data;

    constructor() {
        this._routerService.currentSection.subscribe(section => this.current = section)
    }
}