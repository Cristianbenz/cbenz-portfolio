import { Component, inject } from "@angular/core";
import { RouterService } from "src/app/services/router";

import skills from "../../../skills.json"
import { Skill } from "src/app/models/skill";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    private _routerService = inject(RouterService)
    public current = this._routerService.getSection;

    public programmingLanguages: Array<Skill> = skills.programmingLanguages;
    public frameworksTechs: Array<Skill> = skills.frameworks;
    public databaseTechs: Array<Skill> = skills.database;
    public tools: Array<Skill> = skills.tools;
    public others: Array<Skill> = skills.others;

    constructor() {
        this._routerService.currentSection.subscribe(section => this.current = section)
    }
}