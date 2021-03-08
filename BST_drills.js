const BinarySearchTree = require('./BST');

function main() {
    const BST = new BinarySearchTree();
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);
    //console.log(thirdLargest(BST));
    console.log(isBalanced(BST))
    
    const BST2 = new BinarySearchTree();
    BST2.insert('E');
    BST2.insert('A');
    BST2.insert('S');
    BST2.insert('Y');
    BST2.insert('Q');
    BST2.insert('U');
    BST2.insert('E');
    BST2.insert('S');
    BST2.insert('T');
    BST2.insert('I');
    BST2.insert('O');
    BST2.insert('N');
    //console.log(thirdLargest(BST2))
}

//main();

// 4. What does this program do?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
// This function will sum all of the key values of a binary search tree

// 5. Height of a BST
//Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
function height(tree){
    //check to see if tree is null
    if (!tree) {
        return -1
    }
    let leftCount = 1 + height(tree.left);
    let rightCount = 1 + height(tree.right);
    if (leftCount > rightCount) {
        return leftCount;
    }
    else {
        return rightCount;
    }
}
//The time complexity is linear O(n) size it will traverse each node of the tree

// 6. Is it a BST?
//Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
function isBST(tree) {
    if (!tree.left && !tree.right) {
        return 0
    }
    else if (!tree.left) {
        isBST(tree.right)
    }
    else if (!tree.right) {
        isBST(tree.left)
    }
    else if (tree.left > tree.right){
        return `Not a binary search tree`
    }
    else {
        isBST(tree.left)
        isBST(tree.right)
    }
    return `This is a binary search tree`
}

// 7. 3rd largest node
//Write an algorithm to find the 3rd largest node in a binary search tree.

function thirdLargest(tree) {
    //find the max value of the tree
        if (!tree.right) {
            maxNode = tree;
        }
        else{
            thirdLargest(tree.right);
        } 
    //find the third largest
    //if there is a left child to maxNode
    if (maxNode.left) {
        let secondLargest = maxNode.left;
        if(secondLargest.right){
            return secondLargest.right
        }
        else if(secondLargest.left){
            return secondLargest.left
        }
        else {
            return maxNode.parent
        } 
    }
    //if the maxNode has no children
    else {
        let secondLargest = maxNode.parent;
        if (secondLargest.left){
            return secondLargest.left
        }
        else {
            return secondLargest.parent
        }
    }
    //return maxNode
}

// 8. Balanced BST
//Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
function isBalanced(tree){
    if (!tree) {
        return 0
    }
    let leftCount = 1 + height(tree.left);
    let rightCount = 1 + height(tree.right);
    if (leftCount - rightCount > 1 || rightCount - leftCount > 1) {
        return false
    }
    return true;
}

// 9. Are they the same BSTs?
/*You are given two arrays which represent two sequences of keys that are used to create two binary search trees. 
Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. 
You may use another data structure such as an array or a linked list but don't construct the BST. 
What is the time complexity of your algorithm? 
E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs 
and your program should return true.
*/
function sameBST(array1, array2) {
    //check to see if the root element will be the same and if the arrays have the same length
    if(array1[0] !== array2[0] || array1.length !== array2.length){
        return false
    }
    //create temporary arrays to push left and right branches
    let tempLeft1 = [];
    let tempRight1 = [];
    let root = array1[0];
    //loop through each element of the first array and sort into left and right arrays
    for(let i = 1; i < array1.length; i++) {
        if(array1[i] < root){
            tempLeft1.push(array1[i])
        }
        else {
            tempRight1.push(array1[i])
        }
    }
    //loop through each element of the second array and sort into left and right arrays
    let tempLeft2 = [];
    let tempRight2 = [];
    for(let i = 1; i < array2.length; i++) {
        if(array2[i] < root){
            tempLeft2.push(array2[i])
        }
        else {
            tempRight2.push(array2[i])
        }
    }
    //check to see if sorted left branch arrays match
    if(tempLeft1.sort().join('') !== tempLeft2.sort().join('')) {
        return false
    }
    //check to see if sorted right branch arrays match
    if(tempRight1.sort().join('') !== tempRight2.sort().join('')) {
        return false
    }
    else {
        return true
    }
}
//console.log(sameBST([3, 5, 4, 6, 1, 0, 2],[3, 1, 5, 2, 4, 6, 0]))

