import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-section',
  templateUrl: './appSection.component.html',
  styleUrls: ['./appSection.component.scss']
})
export class AppSectionComponent {
  @Input() section: string = 'home';
}