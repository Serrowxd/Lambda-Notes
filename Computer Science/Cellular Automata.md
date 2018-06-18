# Cellular Automata

**The general idea being that you have a grid of cells that act independently based on a system of rules**

https://www.youtube.com/watch?v=E8kUJL04ELA

`const MODULO = 8;` = 8 different colors of cells.

R B G A - 0 is empty and 255 is max. A is Alpha

```JS
for (let i = 0; i < 1000; i += 4) {
  // R B G A - 0 is empty and 255 is max.
  screenBuffer[i + 0] = 0; // R
  screenBuffer[i + 1] = 0; // G
  screenBuffer[i + 2] = 0; // B
  screenBuffer[i + 3] = 255; // A
}
```

// break //

**that bitwise OR is the same as doing Math.trunc btw, because javascript truncates numbers to 32bits to do bitwise ops** - from Ronnie

// break //
