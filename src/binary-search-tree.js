const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;   
  }

  add(data) {

    this.treeRoot = insert(this.treeRoot, data);

    function insert(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = insert(node.left, data);
      }

      if (data > node.data) {
        node.right = insert(node.right, data);
      }

      return node; 
    }
  } 
  

  has(data) {
    return !!this.find(data)
  }

  find(data) {
   
    function search(node, data){

      if (!node) {
        return null;
      }

      if (node.data === data){
        return node;
      }

      return node.data > data ? search(node.left, data) : search(node.right, data);
 
    }
    return search(this.treeRoot, data);
  }

  remove(data) {

    function removeNode(node, data){
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }
        if(node.right && node.left){
          let minRight = node.right;
          
          while(minRight.left){
            minRight = minRight.left
          }
          node.data = minRight.data;

          node.right = removeNode(node.right, minRight.data);

          return node;
        }
      }
    }

    removeNode(this.treeRoot, data);
  }

  min() { 
    if (!this.treeRoot){
      return;
    }

    let min = this.treeRoot;

    while(min.left){
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.treeRoot){
      return;
    }

    let max = this.treeRoot;

    while(max.right){
      max = max.right;
    }

    return max.data;
  }
}

const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(54);
      tree.add(2);
      tree.add(6);
      tree.add(8);
      tree.add(31);
      tree.add(1);
      tree.add(5);
      tree.remove(6);
      tree.has(6);
      tree.min();
      tree.max();

module.exports = {
  BinarySearchTree
};