// Exercice 6.1
// class Circle {
//     constructor(xPos, yPos, radius) {
//         this.xPos = xPos;
//         this.yPos = yPos;
//         this.radius = radius;
//     }
  
//     move(xOffset, yOffset) {
//         this.xPos += xOffset;
//         this.yPos += yOffset;
//     }
  
//     get surface() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// const myCircle = new Circle(0, 0, 5);
// console.log(myCircle.surface); // Output: 78.53981633974483
// myCircle.move(2, 3);
// console.log(myCircle.xPos); // Output: 2
// console.log(myCircle.yPos); // Output: 3


// Exercice 6.2
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if((this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftXPos + this.width > otherRectangle.topLeftXPos) && (this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length && this.topLeftYPos + this.length > otherRectangle.topLeftYPos)){
            return true;
        } else{
            return false;
        }
        // const xOverlap = this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftXPos + this.width > otherRectangle.topLeftXPos;
        // const yOverlap = this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length && this.topLeftYPos + this.length > otherRectangle.topLeftYPos;
        // return xOverlap && yOverlap;
    }
}

const myRectangle = new Rectangle(0, 0, 5, 10);
const otherRectangle = new Rectangle(13, 13, 15, 15);
console.log(myRectangle.collides(otherRectangle)); // Output: true

// Exercice 6.3
const rectangles = [];

// Generate 1000 random rectangles
for (let i=0; i<1000; i++) {
    const xPos = Math.floor(Math.random() * 1000);
    const yPos = Math.floor(Math.random() * 1000);
    const width = Math.floor(Math.random() * 100);
    const length = Math.floor(Math.random() * 100);
    rectangles.push(new Rectangle(xPos, yPos, width, length));
}

// Find all colliding rectangles
const collidingRectangles = [];

for (let i=0; i<rectangles.length; i++) {
    for (let j=i+1; j<rectangles.length; j++) {
        if (rectangles[i].collides(rectangles[j])) {
            collidingRectangles.push([rectangles[i], rectangles[j]]);
        }
    }
}

// Display colliding rectangles
console.log(collidingRectangles);