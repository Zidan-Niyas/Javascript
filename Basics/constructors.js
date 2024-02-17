// Use of constructor function for scalability
function counter() {
    var count = 0;
    this.incrementCounter = function () {  // constructor
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {  // constructor
        count--;
        console.log(count);
    }
}

var counter1 = new counter();
counter1.incrementCounter();
counter1.decrementCounter();
