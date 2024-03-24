import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  //Income
  lastMonthsIncome = ['Janeiro: 1000 AOA','Fevereiro: 1000 AOA','Março: 1000 AOA'];
  currentMonthIncome = '20000 AOA';


   //Expense
   lastMonthsExpense = ['Janeiro: 1000 AOA','Fevereiro: 1000 AOA','Março: 1000 AOA'];
   currentMonthExpense = '10000 AOA';

  //To Do trans
   todoTransactions = [
    {description:'Pagar contas de luz e água'},
    {description:"Comprar legumes"},
    {description:"Enviar dinheiro para família"},
   ];


  constructor( public router : Router){}

  onIncome(){
    this.router.navigate(['/budget-planner/income']);
  }


  onExpense() {
    this.router.navigate(['/budget-planner/expense']) ;
  }

  onTodo() {
      this.router.navigate(['/budget-planner/todo']);
    }

}
