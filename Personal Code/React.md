# React Code

## React Animations onClick

**JavaScript**

```JS
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.fade = false;
    this.fadingDone = this.fadingDone.bind(this);
  }
  componentDidMount() {
    const elm = this.refs.button;
    elm.addEventListener('animationend', this.fadingDone);
  }
  componentWillUnmount() {
    const elm = this.refs.button;
    elm.removeEventListener('animationend', this.fadingDone);
  }
  fadingDone() {
    this.setState({ fade: false });
  }
  render() {
    const fade = this.state.fade;

    return (
      <div>
        <h1 className={fade ? 'fade' : ''}> OwO </h1>
        <button ref="button" onClick={() => this.setState({ fade: true })}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
```

**CSS**

```CSS
.fade {
  animation-duration: 6s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

When clicked, the button will change the state of `h1` to `fade`, triggering the animation.

---

