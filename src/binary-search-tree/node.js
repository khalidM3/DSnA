export default class BST {
  constructor(root) {
    this.root = root;
  }

  insert(node, data) {
    if(!this.root) return this.root = new Node(data)
    if( data > this.root.data) return this.insert()
  }
}