import { Component } from "@angular/core";

import data from '../../../projects.json';
import { Project } from "src/app/models/project";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
    public projects: Array<Project> = data;
}