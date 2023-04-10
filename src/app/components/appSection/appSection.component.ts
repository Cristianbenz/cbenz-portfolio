import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-section',
  templateUrl: './appSection.component.html',
  styleUrls: ['./appSection.component.scss']
})
export class AppSectionComponent {
  @Input() section: string = 'home';
}