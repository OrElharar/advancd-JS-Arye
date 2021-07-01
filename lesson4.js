function Reactangle (height, width) {
   
    this.height = height,
    this.width = width
}
Reactangle.prototype.toString = function(){
    return "Height: "+this.height+", Width: "+this.width;
}
Reactangle.prototype.getPerimeter = function(){
    return (this.width+this.height)*2;
}
Reactangle.prototype.getArea = function(){
    return this.height*this.width;
}
function Square(height){
    Reactangle.call(this, height, height)
}
Square.prototype = Object.create(Reactangle.prototype,{
    constractor: 
    {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
})
Square.prototype.toString = function(){
    return "Height&Width: "+this.height;
}
const square = new Square(5);
const reactangle = new Reactangle(5,10);
console.log(reactangle.toString(), reactangle.getArea(), reactangle.getPerimeter(), (reactangle instanceof Reactangle));
console.log(square.toString(), square.getArea(), square.getPerimeter(), (square instanceof Reactangle));
