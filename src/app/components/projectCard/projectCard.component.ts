import { Component, Input } from "@angular/core";
import { Project } from "src/app/models/project";
import { MatDialog } from "@angular/material/dialog";
import { ProjectDialogComponent } from "../projectDialog/projectDialog.component"

@Component({
    selector: 'project-card',
    templateUrl: './projectCard.component.html',
    styleUrls: ['./projectCard.component.scss']
})
export class ProjectCardComponent {
    @Input() project!: Project;
    public isHovered: boolean = false;
    constructor(
        public _dialog: MatDialog
    ) {}

    openDialog() {
        this._dialog.open(ProjectDialogComponent, {
            data: this.project
        })
    }

    hover(state: boolean) {
        this.isHovered = state;
    }
}