export class LikeComponent{
    constructor(public likesCount: number, public isSelected: boolean){
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }

    onClick(){      
        this.likesCount += (this.isSelected)?1:-1;
        this.isSelected = !this.isSelected;
    }
}