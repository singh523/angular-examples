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
    `
    */
   template: `
   <button class="btn btn-primary" [class.active]="isActive">Save</button>
   `
})
export class CoursesComponent {
    title = "List of course";
    imageUrl = "http://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-landscape-407021107";
    colspan=2;
}
