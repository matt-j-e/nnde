# Binary Search Tree - How to use

## Import the module

```js
const Bst = require('path/to/module')
```

## Create a BST instance

Create an instance that uses the default compare function which is based on JavaScript's default sort behaviour.

```js
const bst = new BST()
```

Or pass in your own custom compare function. This must evaluate to:
- `< 0` to take the **left** branch, or
- `> 0` to take the **right** branch

```js
function cmp(a, b) {
  <-- YOUR CUSTOM COMPARE FUNCTIONALITY -->
}
const bst = new Bst(cmp)
```

## Available methods

### Insert

```js
bst.insert(<key>, <value>)
```

### Search

```js
bst.search(<key>)
```

## Example

To run this in the Node REPL:
- in the terminal navigate to the BST folder
- start the REPL with the command `node`

```bash
const Bst = require('./bst')
const bst = new Bst()

bst.insert('matt', 123)
bst.insert('rob', 234)
bst.insert('kirstie', 345)

bst.search('kirstie') // returns 345
bst.search('matt') // returns 123
bst.search('jane') // Unable to find an entry with a key of "jane"

bst.insert('rob', 567) // throws a ReferenceError because key already exists
```