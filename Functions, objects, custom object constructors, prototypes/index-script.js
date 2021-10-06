// class key-word implementation
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        console.log("x:", this.x, "y:", this.y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ExtendedPoint extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    display() {
        super.display();

        console.log("z:", this.z);
    }

    move(x, y, z) {
        super.move(x, y);

        this.z = z;
    }
}

var point = new Point(4, 8);
var extendedPoint = new ExtendedPoint(4, 8, 15);

//function implementation
function FunctionPoint(x, y) {
    this.x = x;
    this.y = y;
}

FunctionPoint.prototype.display = function () {
    console.log("x:", this.x, "y:", this.y);
}

FunctionPoint.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

function FunctionExtendedPoint(x, y, z) {
    FunctionPoint.apply(this, [x, y]);

    this.z = z;

    this.display = function () {
        FunctionPoint.prototype.display.call(this);

        console.log("z:", this.z);
    }

    this.move = function (x, y, z) {
        FunctionPoint.prototype.move.apply(this, [x, y]);

        this.z = z;
    }
}

FunctionExtendedPoint.prototype = Object.create(FunctionPoint.prototype);

var functionPoint = new FunctionPoint(4, 8);
var extendedFunctionPoint = new FunctionExtendedPoint(4, 8, 15);