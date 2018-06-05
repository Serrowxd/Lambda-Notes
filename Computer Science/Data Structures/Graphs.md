# Graph Data Structures

`Network Graph` - The connections of nodes that may have multiple different connectors. Similar to things like a transit map, facebook friends, instant messenger apps, the internet, etc.

The internet was designed to have redundancy - so it will always have a route to take, even if one doesn't work.

A graph can be weighted - or basically how expensive or distant the connections are, essentially the cost of the movement. You'll always want to go to the lowest cost.

Some graphs can be cyclical(check the spelling on this) or acyclical.

Cyclic being a loop cycle essentially.

You can use a matrix to map your datastructure, or a list.

Example:
P | A B C
A | 0 1 0
B | 0 0 1
C | 0 1 0

This shows that A and B are connected, but A is not connected to C.
Same goes for B, which it shows that it is not connected to A but it is connected to C.

What are arrays in JavaScript? Objects
