# React I

You nest components inside other components.

Front-end Frameworks are made to provide structure and work-flow to a page.

`React` and `Angular` are both front-end frameworks.

`package.json` means you should be running npm within that directory `(normally)` to install dependencies.

Under index.js

```JS
render(<App />, document.getElementById(’root’));
```

This sets the root in the js file, which can then be called by the HTML.

`<div id=”root”></div>` this is usually where you connect your react to your HTML - typically you won’t need to set this up, because it will usually be done for you.

You can name ‘root’ whatever you want, it’s just a placeholder for what is called by the index.js file.

A react component is anything that is rendered onto a page.

```js
import React from ‘react’;
```

this will import your react information at the top of the file when using a react file.

You call a component with `<ComponentName />`

```js
const BasicComponent = () => <div>Text</div>;
```

This can be called with

`<BasicComponent />` in the Index.js

---

```js
const App = () => (
  <div style={styles}>
    <BasicComponent />
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);
```

This is also a component, where it’s an arrow function that adds divs in the index file. You’re basically writing HTML inside react components.

BasicComponent changes its position based on it’s location within the div styles div.

There always needs to be a root level div, and you nest things inside that div. You can put them in whatever order or level of nesting you want, but it all comes through the root.

```JS
import React, { Component } from ‘react’;
```

this is destructoring

```JS
class BasicClassComponent extends Component { }
```

You can also use

```JS
import React from ‘react’;
```

```JS
class BasicClassComponent extends React.Component { }
```

#### Both of these work.

The base component class is provided by React.

---

A single page application loads once and then doesn’t have to reload. It gets called from the server and then it’s does.

---

You can apply props or styles with

```JS
this.props.object
this.state.object
```

Inside a function component you use curly braces with the name of the prop inside the object.

---

A prop is shorthand for “properties”. Props are how components talk to each other. Props also flow downwards from the parent component.

---

`window.localStorage` will store it locally, persisting even after you close the page. — 10mb in chrome and firefox
`window.sessionStorage` will store it for the duration of the browser being open. After the browser is closed, the information deletes itself.

You will need to adjust your arrays to become objects — when utilizing local or session storage, they take on the form of objects.

`sessionStorage.setItem(’key’, ‘value’);` — key value pair. Keys and values need to be strings.

`sessionStorage.getItem(’key’);`

---

#### A stateless component does not have a “class”

## React Life-Cycle

Everything inside a component class needs to returned with a render method. —

```JS
render() { return (content); }
```

With React, you future proof your career. It’s going to be around for a very long time and it’s constantly updated.

```JS
{this.state.chars.map(char => <div> {char} </div>) }
```

implicit return, where map returns a new array of characters.

Div can be changed to li if within an <ul> tag.

```JS
<ul>
  {this.state.chars.map((char, index) => (
    <li key={char + index}> {char} </li>
  ))}
</ul>
```

`setState` doesn’t work immediately, it can queue changes what is sent to the dom.

`componentDidMount()` is built into the react API, it comes from the React component.

//

Only implement `PropTypes` on levels where props are required, you don’t want to put it on the global level.

Any global dependencies you want to organize separately at the top, local you’ll want to put together below that.

When you import proptypes, you import as `PropTypes`, then you utilize it as —

```JS
PeopleList.propTypes = {
  people = PropTypes.bool
};

// You can also use

PeopleList.propTypes = {
  people = PropTypes.bool.isRequired
};

// This makes the boolean required.

PeopleList.propTypes = {
  people = PropTypes.array.isRequried
};

// This makes an array required.
```

It’s more or less a checklist that the code does for itself rather than using a `console.log();`

---

```JS
PersonCard.propTypes = {
  person: PropTypes.object,
};

//This checks to see if the PersonCard object “person” is an object.

PersonCard.propTypes = {
  person: PropTypes.shape({
    email: PropTypes.string,
    etc etc
  })
};

//This checks specific items inside the person object. You can drill as many times as you need to.

friends: PropTypes.arrayOf(PropTypes.object),
```
