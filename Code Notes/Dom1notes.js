// Rubber Ducky -- Sometimes when saying the problem outloud you will solve it yourself, so say it to your "rubber ducky" first.

// DOM = Document Object Model

const array = [["ivan", 29], ["daniel", 34], ["kayla", 29]];
const object = {
    ivan: 29,
    daniel: 34,
    kayla: 29
};

// function findKalya (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] === "kayla") {
//             return array[i][1];
//         }
//     }
// } // long way

// findKalya(array);

// function findKalya (friends) {
//     return friends.kayla
// } // quick way

// findKalya(object);

// name, age
// given a name, I get an age
// fasetest retrieval

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        this. children.push(new Tree(value));
    }
}

// created a new tree and added 3 children.

const myTree = new Tree(1);
myTree.addChild(1);
myTree.addChild(2);
myTree.addChild(3);
myTree.children[0].addChild(1);
myTree.children[2].addChild(1);
myTree.children[2].addChild(2);

console.log(myTree);

