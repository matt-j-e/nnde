const Node = require('./node')

class Bst {
  constructor(cmp) {
    this.root = null
    this.compare = cmp || ((a, b) => a < b ? -1 : 1)
  }

  insert(key, value) {
    const inserted = this._insert(this.root, key, value)
    // this.root = this._insert(this.root, key, value)
    this.root = inserted
    if (inserted) return `Inserted ${key}`
  }

  search(key) {
    return this._search(this.root, key) || 'Unable to find an entry with a key of "' + key + '"'
    
  }

  _insert(current, key, value) {
    if (current) {
      if (key === current.key) throw new ReferenceError('Key already exists')
      const comparison = this.compare(key, current.key)
      if (comparison < 0) {
        if (current.left) {
          this._insert(current.left, key, value)
        } else {
          current.left = new Node(key, value)
        }
      } else {
        if (current.right) {
          this._insert(current.right, key, value)
        } else {
          current.right = new Node(key, value)
        }
      }
    } else {
      current = new Node(key, value)
    }
    return current;
  }

  _search(current, key) {
    if (current) {
      if (key === current.key) return current.value
      const comparison = this.compare(key, current.key)
      if (comparison < 0) {
        return this._search(current.left, key)
      } else {
        return this._search(current.right, key)
      }
    }
    return false
  }
}

module.exports = Bst