import { CourseService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    /*template: `
        <h2>{{title}}</h2>
        <img src="{{imageUrl}}"/>
        <h1 [textContent]="title"></h1>
        <img [src] = "title"/>
        <table>
            <tr>
                <td [attr.colspan]="colspan"></td>
            </tr>
        </table>

        //ex2
        template: `
            <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
            </div>
   `
    `
    ex:3
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
    ex:4
    <input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()"/>
    ex:5 twoway binding
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    */
    template: `
   {{course.title | uppercase| lowercase | summary}} <br/>
   {{course.students | number}} <br/>
   {{course.rating | number:'1.2-2'}} <br/>
   {{course.price | currency:'AUD':true:'3.2-2'}}
   {{course.releaseDate | date:'shortDate'}}
   `
})
export class CoursesComponent {
    
    email="me@example.com";
    course = {
        title: "The complete angular course and the value of this is substring of ",
        rating: 4.9330,
        students: 3022,
        price: 190.22,
        releaseDate: new Date(2019, 2,2)

    }

    onKeyUp() {
        console.log("enter pressed: " + this.email);
    }

    
}
