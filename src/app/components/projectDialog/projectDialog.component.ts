import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Project } from "src/app/models/project";

@Component({
    selector: 'project-dialog',
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