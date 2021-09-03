/**
 * @author: Asiri Hewage
 * @description Stack class implementation using javascript
 */
'use strict';
const Node = require('./Node');

module.exports = class Stack {

    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push (value) {
        let node = new Node(value);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else if (this.size >= 1) {
            let currFirst = this.first;
            this.first = node;
            this.first.next = currFirst;
        }
        return this.size++;
    }

    pop () {
        if (this.size === 0) {
            return null;
        }
        let temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return this.first;
    }

    peek(){
        return this.first;
    }

    count(){
        return this.size;
    }
}
