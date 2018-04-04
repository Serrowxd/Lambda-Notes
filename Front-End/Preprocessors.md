# Preprocessors

`Less > Compiler (JS) > CSS`

You can nest with less code.

```CSS
.parent {
Code
 .child {
 Code
   .grandchild {
   Code
   }
 }
}
```

Don’t nest too far

Only use it as much as you can to get the specificity you need and don’t use it for anything you don’t need.

//

## Variables

`@primary-color: blue;`

You use this as a baseline for different things.

```CSS
.parent {
 Color: @primary-color;
}
```

This sets the parent color to blue without changing the color to blue.

This works really well when you have multiple selectors based on the colors or selectors. So you can build themes with the variables and make it easier to make changes later on down the line.

Variables must be at the top top of the page, because we are still effected by the cascade.

Pseudo-selectors are things like after, hover, active, anytime you’re doing something with a link - this is a pseudo-selector. It uses an ampersand, or &.

```CSS
&:hover {
 Color: red;
}
```

This changes the color of the nested item. It goes below the element you’re adjusting.

So like

``` CSS
.parent {
 Color: purple;

 }
 &: hover {
  Color: red;
 }
}
```

You will nest it within it’s immediate parent, as it’s still effected by the same cascade of specificity.

`&:after` puts it at the end of the element, `&:before` puts it at the beginning, `&:hover` gives it a hover element, and `&:active` is for clicks..

You can assign anything to a variable, so these could be used in a variable to change multiple items.

You can nest media queries within code selectors. It still effects the immediate parent due to specificity.

The media queries will always bubble to the immediate parent, so you will need to make addition queries to the children as well. It’s a lot of media queries, but it’s very worth it and a lot easier to read and work with.

---

## Media Quires can also be set in variables.
```CSS
@phone - “(max-width: 500px)”;

@media @phone {
Background: black;
}
```
This sets the media width and breakpoint in one go.

//

Mix-ins are classes that are placed inside other classes.

```CSS
.button-styles-lambda {
  width: 200px;
  height: 50px;
}

button {
  background: gray;
  color: white;
  font-size: 16px;
  border: 1px solid black;
  .button-styles-lambda;
  //.button-creator(200px,100px);
}
```

Button is being put in as a mix-in.

Mix-ins, like other things, should always be at the top of the page.

You can mix in variables with mix ins that go into classes.

Variables > Mix ins > general styles > Components > Pages

`Waterfall order.`

Mix-ins must be applied the the UL tag not the a tag.



