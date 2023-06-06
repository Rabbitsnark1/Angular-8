import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
@Component({
    selector: 'my-app',
    styles:[`
        .nav{ clear: both;}
        a {float: left;}
        .active a {color:red;}
    `],
    template: `<div>
                    <ul class="nav">
                    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                        <a routerLink="">Главная</a>
                    </li>
                    <li routerLinkActive="active">
                        <a routerLink="/about">О сайте</a>
                      </li>  
                    </ul>
                    <router-outlet></router-outlet>
                    </div>`
})
export class AppComponent {}
// implements OnInit {

//     user: User;

//     constructor(private httpService: HttpService){}

//     ngOnInit(){
//         this.httpService.getData().subscribe({next:(data:any) => this.user=new User(data.name, data.age)});
//     }
// }

// selector: 'my-app',
// styles: [`
//     input.ng.touched.ng-invalid {border:solid red 2px;}
//     input.ng.touched.ng-valid {border:solid green 2px;}
// `],
// template: `<from [formGroup]="myForm" novalidate (ngSubmit)="submit()">
//                 <div class="form-group">
//                 <input class="form-control" name="name" FormControlName="useName" />

//                 <div class="alert alert-danger"
//                     *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
//                     Не указано имя
//                 </div> 
//             </div>
//             <div class="form-group">
//                 <label>Email</label>
//                 <input class="form-controll" name="email" FormControlName="userEmail" />

//                 <div class="alert alert-danger"
//                     *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
//                     Некорректный email
//                     </div>
//                 </div>
//                 <div formArrayName="phones">
//                     <div class="form-group *ngFor="let phone of getFormsControls()['controls']; let i = index">
//                         <label>Телефон</label>
//                         <input class="form-control" FormControlName="{(i)}" />
//                     </div>    
//                 </div>
//                 <div class="form-group">
//                     <button class="bth bth-default" (click)="addPhone()"/>
//                         Добавить телефон
//                     </button>
//                     <button class="bth bth-default" [disabled]="myForm.invalid">
//                         Отправить
//                     </button>    
//                 </div>
//             </form>`
    // myForm : FormGroup;
    // constructor(private formBuilder: FormBuilder){
    
    //     this.myForm = formBuilder.group({

    //         "userName": ["Tom", [Validators.required]],
    //         "userEmail": ["", [ Validators.required, Validators.email]],
    //         "phone": formBuilder.array([
    //             ["+7", Validators.required]
    //         ])
    //     });
    // }
    // getFormsControls() : FormArray{
    //     return this.myForm.controls[`phones`] as FormArray;
    // }
    // addPhone(){
    //     (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    // }
    // submit(){
    //     console.log(this.myForm);
    // }
                             
    // title: string = "";
    // price: number = 0;
    // company: string = "";
// export class Item{
//     purchase: string;
//     done: boolean;
//     price: number;

//     constructor(purchase: string, price: number) {

//         this.purchase = purchase;
//         this.price = price;
//         this.done = false;
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `<div>
//         <div>
//             <inputt [(ngModel)]="name" placeholder = "Модель" />
//             <button (click)="addItem(name, price)">Добавить</button>
//         </div>
//         <table >
//             <tr *ngFor="let item of items">
//                 <td>{{item}}</td>
//             </tr>
//         </table>
//     </div>`,
//     providers: [DataService] 
// })
// export class DataComponent  {

//     items: string[] = [];
//     constructor(private dataService: DataService) {}

//     addItem(name: string){ this.dataService.addData(name); }
//     ngOnInit(){ this.items = this.dataService.getData(); }
// }    
//     // template: `<data-comp></data-comp>
//     //             <data-comp></data-comp>`
//     // template: `<div class="panel">
//     //     <div><input [(ngModel)]="name" placeholder = "Модель" />
//     //         <button> (click)="addItem(name">Добавить</button>
//     //     </div>
    //     <table>
    //         <tr *ngFor="let item of items">
    //             <td>{{item}}</td>            
    //         </tr>
    //     </table>
    // </div>`,
    // providers: [DataService]
    // template: `<p @while="condition">
    //     Первый параграф
    // </p>
    // <p @while="!condition">
    //     Второй параграф
    // </p>
    // <button (click)="toggle()">Toggle</button>`    
    // template: `<div [NgSwitch]="count">
    //              <ng-template NgSwitchCase="1">{{count * 10}}</ng-template>
    //              <ng-template NgSwitchCase="2"{{count * 100}}</ng-template>
    //              <ng-template NgSwitchDefault>{{count * 1000}}</ng-template>
    //             </div>`
    // items: string[] = [];
    // name: string = "";
    // constructor(private dataService: DataService) {}

    // addItem(name: string){

    //     this.dataService.addData(name);
    // }
    // ngOnInit(){
    //     this.items = this.dataService.getData();
    // }
    // template: `<div
    //                 <p bold>Hello Angular</p>
    //                 <p>Angular представляет модульную архитектуру приложения</p>
    //             </div>`
    // template: `<div [ngClass]="{verdanaFont:true}">
    //                 <h1>Hello Angular</h1>
    //                 <p>
    //                     Angular 15 представляет модульную архитектуру приложения
    //                 </p>
    //             </div>
    //             <button (click)="toggle()">Toggle</button>`,
    // styles: [
    //     `.invisible{display:none;}`]            
    // visiblity: boolean = true;
    // toggle(){
    //     this.visiblity=!this.visiblity;
    // }
    // isRed = false;
    // name = "Tom";
    // age = 25;

    // template: <h1>Project</h1>
    //         <p>Angular</p>,
    // styles: [`
    // h1, h2{color.navy;}
    // p{font-size:13px; font-family:Verdana;}
    // `]    
//     template: <label>Введите имя:</label>
//                 <input [(ngModel)]="name" placeholder="name">
//                 <h1>Добро пожаловать {{name}}!</h1>
// })
// export class AppComponent {
//     name: "";
// }
    //  `<div class="page-header">
    //     <h1> Список покупок </h1>
    // </div>
    // <div class="panel">
    //     <div class="from-inline">
    //         <div class="from-group">
    //             <div class="col-md-8">
    //                 <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
    //             </div>
    //         </div>
    //         <div class="form-group">
    //             <div class="col-md-6">
    //                 <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
    //             </div>
    //         </div>
    //         <div class="form-group">
    //             <div class="col-md-offset-2 col-md-8">
    //                 <butten class="bth bth-default" (click)="addItem(text, price)">Добавить</butten>
    //             </div>
    //         </div>
    //     </div>
    //     <table class="table table-striped">
    //         <thead>
    //             <tr>
    //                 <th>Предмет</th>
    //                 <th>Цена</th>
    //                 <th>Выкупили</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr *ngFor="let item of items">
    //                 <td>{{item.purchase}}</td>
    //                 <td>{{item.price}}</td>
    //                 <td><input types="checkbox" [(ngModal)]="item.done" /></td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>`
// })
// export class AppComponent {
//     // text: string = "";
//     // price: number = 0;

//     // items: Item[] = [
//     //     { purchase: "Виноград", done: false, price: 15.9 },
//     //     { purchase: "Морская капуста", done: false, price: 1.2 },
//     //     { purchase: "Тайская капуста", done: false, price: 1.9 },
//     //     { purchase: "Сметана", done: false, price: 1.0 },
//     // ];
//     // addItem(text: string, price: number): void {

//     //     if (text == null || text.trim() == "" || price == null)
//     //         return;
//     //     this.items.push(new Item(text, price));
//     // }
// }



