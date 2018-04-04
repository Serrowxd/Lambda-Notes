# DOM

### Dom = Document Object Model

## Tree data structures.

Each node in the tree is in itself a tree. That means all the children of the root will have the same properties.

Nested Objects essentially.

Adding children to the tree will go like this
```JS
const myTree = new Tree(1);
myTree.addChild(1);
myTree.addChild(2);
myTree.addChild(3);
myTree.children[0].addChild(1);
myTree.children[2].addChild(1);
myTree.children[2].addChild(2);
```

You create a tree with a root at new `Tree(1);`

You create a new branch with a value of 1, a value of 2, and a value of 3.

`.children[0]` means you will go to index 0

You can have multiple branches with a value of 1, both on the root and in the main branches. Any node can have as many children as you want with any value.

The nesting in HTML indicates where you will be in the tree, based on open and closing tags.

---

## Why the DOM?

It’s so you can manipulate things on the page after it’s already loaded. All the event based things are tracked through the DOM.

The root of the DOM in Console is “document”
```JS
document.getElementsByClassName("nav-bar");
```

This brings back an HTML collection that has all the elements that are nested in document that have the class name, or “nav-bar”.
```JS
let navBar = document.getElementsByClassName("nav-bar")[0];
```

This stores a reference to the nav bar in the console.
```JS
navBar.classList brings back a DOMTokenList.

navBar.classList.remove(”nav-bar”); // this removes the nav bar element from the page.

navBar.parentElement.removeChild(navBar); // This also removes the nav bar from the page, where (navBar) is referencing the element itself, so it removes the entire thing.
```

---

An `event` is whenever your page reacts to a users input.

`mkdir` events creates a folder in terminal.

---

`Suit CSS` — also what the WoW Website was built on // this is a naming convention.

`suitcss.github.io`

`Smaccs` is another popular naming convention. This one is a little more complex. // `smaccs.com`

---

`getbem.com/naming/`

Elements are always elements of the block, not of each other

— modifiers can only be applied to the block, the current rule set by Ivan // not sure if consistent?`
