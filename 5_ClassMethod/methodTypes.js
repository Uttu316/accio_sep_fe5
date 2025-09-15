class A {
  constructor() {
    //instance methods
    this.x = 2;
    this.sayHello = function () {
      console.log("hello");
    };
  }
  //prototype methods
  sayBye() {
    console.log("Bye");
  }

  //static methods
  static sum(a, b) {
    return a + b;
  }

  //private method
}

const a = new A();
const b = new A();

console.log(a.sayHello === b.sayHello);

console.log(a.sayBye === b.sayBye);

const o = A.sum(2, 3);
console.log(o);
