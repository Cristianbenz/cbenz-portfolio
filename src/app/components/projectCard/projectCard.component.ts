import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Project } from "src/app/models/project";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ProjectDialogComponent } from "../projectDialog/projectDialog.component"
import { MatIconModule } from "@angular/material/icon";

@Component({
    standalone: true,
    selector: 'project-card',
    imports: [CommonModule, MatDialogModule, MatIconModule],
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