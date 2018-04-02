#HTML / CSS

W3c.org // Writes the compendium for a baseline web browser.

Html5 Doctype is a standard

Codepen.io

You can set <name> tags, but they are not consistent across browsers.

https://meyerweb.com/eric/tools/css/reset/

//

#CSS Selectors:

Element/Class/ID/Multiple Classes

Anything inside of an element will inherit the colors from the CSS.

You can only have 1 ID but multiple classes. Only use ID’s when you have to.

!important in CSS makes Class more important than ID.

It should always go Element/Class/ID.

Never use Important unless you absolutely have to. Usually in an emergency.

//

Width:
Height:
Border:
Color:
Background-color:

Class weights go from left to right in terms of “box box1” where .box will go and then .box1 will go next.

Left to Right in the HTML, Top to Bottom in the CSS.

Top to Bottom always wins in specificity.

Box Model is t r b l for padding, or clockwise for your top right bottom and left. 20px 30px 40px 60px, top right bottom left padding.

Always zero value while padding/margining or you will short value it. 20px 30px 0 60px // 20px 30px 60px will give 20px top 30px left and right and 60px bottom, 20px 30px will be top bottom and left right.

*{} will select every element and apply it to the whole thing.

<nav> is an element name and can be referenced in css as nav {}

Margin: 0 auto; // this sets your margin to equal on either side.

You can also use %’s to define how much of a container you are using.

Display: inline-block; // this sets everything in a line for an list item.

Block takes up the whole width, inline-block takes up what’s available in the content.

---

Margin is top and bottom and left and right.

Inline is small inline-block is larger.

Images are always inline not inline-block.

Images listen to white space in HTML when going by inline-block.

---

Floats take an element off the page, lift it, and then allow items to go under it.

Clear puts a block under the float to avoid it being crushed with other stuff. Always put it below the last float that is being adjusted.

Always clear in the same direction that you floated, but you can also clear both.

If you have a float, you always have to have a clear for it.

Every property for every element comes as Static in it’s position.

Position: relative; // gives elements relative position to itself, usually children.

Position: absolute; // Gives an element an absolute position from the page. Top/Left/Right/Bottom, it also needs to be harnessed by position: relative to the parent elements.

Position: fixed; // keeps the element fixed to the viewport.

---

#CONTAINER

Display: flex; // tells the children elements to go left to right, by default. It will also try to fit every child within the width of the parent container, regardless of the defined width of the child.

Display: flex-direction; // row/row-reverse/column/column-reverse ; flex defines row by default.

Row-reverse can be used to reverse the order of the children within the container.

Column causes the children to stack downwards, where our main axis is up/down and our cross axis is left/right.

Column-reverse does the same thing as column, but in the other direction.

FLEX ALWAYS GOES ON THE PARENT CONTAINER

Flex-wrap; // causes the children to wrap within the container. Nowrap/wrap/wrap-reverse. It retains the integrity of your flex items regardless of the size. Nowrap is the default for flex-wrap.

Flex-flow; // shorthand for flex-direction and flex-wrap. The default is row nonwrap.

Flex-flow: column wrap; // wraps the elements while keeping them in a column.

Justify-content; // flex-start, flex-end, center, space-between, space-around, space-evenly // will justify content within the container. Flex-start is the default value.

Box Model is margin padding border content.

Space-between will listen to child margin.

Space-around will give equal margins of space around each element.

Space-evenly will put space evenly between each element.

Align-items = cross axis.

Align-items; // flex-start, flex-end, center, baseline, stretch //

Flex-start will align them to the start of the container, the basic level for for align-items.

Flex-end is the bottom of the axis.

Center will center the items within the container along the cross axis.

Baseline aligns the content based on the bottom of the text within the elements.

Stretch is the default, it will stretch to fill the container.

Align-content; // Aligns the flex containers lines within the cross axis. Uses the same settings as Justify Content.

—> main axis, |v| cross axis (downwards). Column reverses this.


#CHILDREN

Only go 1 deep when it comes to parents and children for Flexbox.

Order: integer; // controls where the element is positioned within the container. Default is 0.

Flex-grow; // defines the ability for the item to grow if necessary.

Flex-shrink; // defines the ability for the item to shrink if necessary.

Flex-basis; // defines the default size of an element before the remaining space is distributed. Size is based on the items content.

Flex; // shorthand for flex-grow, flex-shrink, and flex-basis combined. Grow/shrink/basis in that order.

Align-self; // allows the default alignment, or the one specified by align-items, to be overridden for individual flex items. Same settings as align-content.


---


#Responsive Layout:

Fixed: Doesn’t move, very rigid.
Adaptive: Adapts to the viewport and device, then changes on a breakpoint.
Fluid: 100% based on the viewport but can have strange effects at different sizes.
Responsive: Fluid + Adaptive = all bases covered from phone to desktop.

Always be aware of the different browsers and how they impact your design in a website.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Always insert this into your website HTML.  Really really big when it comes to responsive web design.

Min-width will force an element or item to do exactly what you tell it to do, ignoring browser margins.

@media print { … } will target printers. You can introduce styles that remove styles and padding to allow for easier printing.

When using @media you want to nest a selector (.box, header) within to be modified.

@media (max-width: 850px) {
 .box {
  Background: red;
 }
}

This is a media breakpoint. You hit the max-width breakpoint and the color will change.

//

With REM 62.5% base HTML text at 1.5rem is 15px exactly.

VW is based off the viewport.

Project: All pixels should be in Rems.

62.5% with Rems applies to the entire document, and it’s equal to 15 pixels. 62.5% of the default browser setting, or the viewport.

If it’s below 320 pixels, it doesn’t need to be a %. Everything else needs to be a %.

300-400 pixels is the sweet spot.

Max-width: 880px; // this constrains the fluidity of the other items.

Inline block still accounts for div whitespace.

Divide the child element into the parent element and you will get a percent, move the decimal accordingly.

child / parent = %

700/880 = 80% rounded up. Can also get specific up to 79.5%.

When going by margin, you still divide by the parent element.

So 40 px of margin

40/880 = 4% or 4.5%

Always divide by the parent element.

Child will divide by it’s immediate parent.

You can use calc() for exact percentages, but it is not widely supported. Doing it yourself eliminates complexity.