const Node = require('./node')

class Bst {
  constructor(cmp) {
    this.root = null
    this.compare = cmp || ((a, b) => a < b ? -1 : 1)
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value)
  }

  search(key) {
    return this._search(this.root, key) || 'Unable to find an entry with a key of "' + key + '"'
    
  }

  _insert(current, key, value) {
    if (current) {
      const comparison = this.compare(key, current.key)
      if (comparison < 0) {
        if (current.left) {
          this._insert(current.left, key, value)
        } else {
          current.left = new Node(key, value)
        }
      } else if (comparison > 0) {
        if (current.right) {
          this._insert(current.right, key, value)
        } else {
          current.right = new Node(key, value)
        }
      } else {
        throw new ReferenceError('Key already exists')
      }
    } else {
      current = new Node(key, value)
    }
    return current;
  }

  _search(current, key) {
    if (current) {
      const comparison = this.compare(key, current.key)
      if (key === current.key) {
        return current.value
      } else if (comparison < 0) {
        return this._search(current.left, key)
      } else {
        return this._search(current.right, key)
      }
    }
    return false
  }

  // below methods exist for debugging purposes only
  printTree() {
    const str = this.preOrderPrint(this.root, '')
    return str.substring(0, str.length - 3)
  }

  preOrderPrint(start, traversal) {
    if (start) {
      traversal += String(`${start.key}:${start.value}`) + ' | '
      traversal = this.preOrderPrint(start.left, traversal)
      traversal = this.preOrderPrint(start.right, traversal)
    }
    return traversal
  }
}

module.exports = Bst