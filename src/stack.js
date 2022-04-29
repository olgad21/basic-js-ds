const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


class Stack {
  stack = [];

  push(element) {
    this.stack.push(element);
    console.log(this.stack)
  }

  pop() {

    const peekEl = this.peek();
    this.stack.pop();
    
    return peekEl
  }

  peek() {
    console.log(this.stack[this.stack.length-1]);
    return this.stack[this.stack.length-1];
  }
}


module.exports = {
  Stack
};

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.peek();
stack.pop();
stack.peek();

console.log()


