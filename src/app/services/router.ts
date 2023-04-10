import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private sectionSubject: BehaviorSubject<string>;
  public currentSection: Observable<string>;

  public get getSection () {
    return this.sectionSubject.value;
  };

  constructor() {
    this.sectionSubject = new BehaviorSubject<string>(window.location.hash || 'home');
    this.currentSection = this.sectionSubject.asObservable();
  }

  setSection(section: string) {
    this.sectionSubject.next(section);
  }
}