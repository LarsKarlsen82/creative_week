
const myRect {
    constructor (ctx) {

        this.ctx = ctx;

        this.updateRect();
    }
    updateRect() {
        this.x = Math.random() * 100;
        this.y = Math.random() * 600;
        this.width = Math.random() * 100;
        this.height = Math.random() * 20 + 5;
        
        this.drawRect();
    }

}

