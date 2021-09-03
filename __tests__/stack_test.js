/**
 * @author: Asiri Hewage
 * @description Stack class implementation using javascript
 */
const Stack = require('../src/common/Stack');
const Node = require('../src/common/Node');

test("Add elements into stack and pop", () => {
    // initialize stack
    const s = new Stack();
    // add element 1
    s.push("First Element");
    // add element 2
    s.push("Second Element");
    // add element 3
    s.push("Third Element");
    // remove element 3
    s.pop();
    // remove element 2
    s.pop();
    expect(s.peek()).toStrictEqual(new Node("First Element"));
});
