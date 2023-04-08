import { Component } from "@angular/core";
import { Network } from "src/app/models/network";

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent {
   public networks: Array<Network> = [
    {
        icon: 'code',
        name: 'Github',
        link: 'https://github.com/Cristianbenz/tab=repositories',
    },
    {
        icon: 'account_box',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/cristian-benitez'
    },
    {
        icon: 'mail',
        name: 'contactocbenitez@gmail.com',
        link: 'mailto:contactocbenitez@gmail.com'
    }
   ]; 
}