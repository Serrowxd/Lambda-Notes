Maybe you would use a conditional block function and a binary state property?

```JS
this.state = {
  darkTheme: false,
};

toggleClassName() {
  const darkTheme = this.state.darkTheme;
  this.setState({
    darkTheme: !darkTheme,
  })
}

applyTheme(base) {
  if (this.state.darkTheme) {
    return `${base}--dark`;
  } else {
    return base;
  }
}
```

then nav of class Nav could have

`<nav className={applyTheme('Nav')}/>`

You can use regex to replace every className with a method call, while preserving the base class. I tested this and it works.

```JS
find: `(className=)['"](.*)['"]`
replace: `$1{applyTheme('$2')}`
```

From William Pelton
