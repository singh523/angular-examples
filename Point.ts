 export class Point {
    constructor(private _x?:number, private _y?:number){
        this._x = _x;
        this._y = _y;
    }

    draw(){
        console.log('x:'+this._x+ ' Y :'+this._y);
    }

    getDistance(another: Point){
        // ...
    }

    setX(val){
        if(val<0){
            throw new Error("Value cannot be less than zero");
        }
        this._x = val;
    }

    getX(){
        return this._x;
    }
}

let point = new Point(12,78);
point.setX(21);
point.draw();