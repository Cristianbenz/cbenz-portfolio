import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Project } from "src/app/models/project";
import { MatButtonModule } from "@angular/material/button"

@Component({
    standalone: true,
    selector: 'project-dialog',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './projectDialog.component.html',
    styleUrls: ['./projectDialog.component.scss']
})
export class ProjectDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ProjectDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public project: Project
    ) {}

    closeDialog() {
        this.dialogRef.close();
    }
}