import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSlideOut = true;

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
}


constructor(
  private router : Router,
 ){}


onDash(){
  this.router.navigate(['/budget-planner/dashboard']);
}
onProfile(){
  this.router.navigate(['/budget-planner/profile']);
}
onHistory(){
  this.router.navigate(['/budget-planner/history']);
}
onLogout(){
  this.router.navigate(['/budget-planner/lgout']);
}

}
