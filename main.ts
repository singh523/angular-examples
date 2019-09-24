import {Point} from './point'
import {LikeComponent} from './like.component';

console.log("Test Method");
let p = new Point(120,201);
console.log(p.draw());


let component = new LikeComponent(10,true);
component.onClick();
console.log(component.likesCount);

component.onClick();
console.log('like component'+ component.likesCount);

component.onClick();
component.onClick();
component.onClick();
console.log('like component'+ component.likesCount);
