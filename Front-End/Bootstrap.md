# Bootstrap

Boostrap is a UI Framework. It’s not react, it’s not javascript. It’s just front-end UI.

We only need compiled CSS and Javascript Bootstrap for the basics.’

You never modify bootstrap, you just override it with specificity.

JQuery first, Boostrap second. Always Always Always Always.

	Bootstrap uses a series of containers, rows, and columns to layout and align content.

--

# Bootstrap II

Cross-browser Forms blow up - Firefox, Safari, Chrome all look different.

Form-group is really small but very required when adding form to your page.

It comes as

```HTML
<form>
 <div class=”form-group”>

This is a form group example

<div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
```

ID would be similar to the Label and would be the top section of the input, placeholder being the text where you input your information.

Each form item needs its own .form-group div

Row flex-row-reverse gives a flex row in reverse, and can be added to the div class, you can add multiple to the same div class.

M is for margin
P is for padding

T is for top
B is for bottom
L is for left
R is for right
X / Y are for *left-right *top-bottom

So it would go mt for margin top or mb for margin bottom.

Mt-5 is a top margin of 5 pixels

So it would look like

`<div class=”row (```) mt-5 mb-3”>` that gives 5 points of margin to the top and 3 points of margin to the bottom of the div.

You cannot use rem or em, it’s always in pixels.

It doesn’t matter where you put it, but you want your most specific adjustments to be the furthest left.


