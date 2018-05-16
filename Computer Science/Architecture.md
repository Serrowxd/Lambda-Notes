# Computer Architecture

_The goal of this week is not to learn how to write an emulator, it's to learn how to problem solve_ - **Beej**

"The Elements of Computing Systems" - A book to read.

## Terminology

`PC` = Program Counter - Goes into memory and stores that information in the IR.

`IR` = Instruction Register - Takes the information from the PC and uses it to complete a task.

`Clock Cycle` = 1 instruction per clock cycle. A 1ghz is 1 billion clock cycles per second.

`Resgisters` = R0 - R7

`DMA` = Direct Memory Access

`IP` = Deals with Routing

**Internet Protocol**
`TCP` = Deals with Data Integrity

**Transmission Control Protocol**
`UDP` = Deals with Data Integrity, a peer to TCP

# Day 2

```JS
let x = 5;
let y = 0b101;
let z = 0x3

if (x === y) {
  console.log("Yes!");
}
```

In this case, `0b101` is the same as `5` in binary.

So it takes `0b` and stores it as `101` - if you're not telling JavaScrip that it is binary by saying `0b101` then it will not understand that it is binary and read it as a decimal number.

`0x` means that it is a "base-16" number.

`Base-16` is 0-9 and A-F.

You can convert a number to it's binary form by doing `x.toString(16)` - this will return the `base-16` format of the number, aka "1f5f8d3" in the case of "5".

---

#### `Base-2`

1101

8s: 1

4s: 1

2s: 0

1s: 1

Numbers going upwards from 1 are done in powers, where they multiply by themselves.

`1 * 8 + 1 * 4 + 0 * 2 + 1 * 1 = 13`

#### `Base-2`

123

100s: 1
10s: 2
1s: 3

`1 * 100 + 2 * 10 + 3 * 1 = 123`

# Day 3

When you are typing and a key is pressed, an interrupt is raised and the interrupt handler takes care of the rest.

`DMA` = Direct Memory Access

`IP` = Deals with Routing

**Internet Protocol**
`TCP` = Deals with Data Integrity

**Transmission Control Protocol**
`UDP` = Deals with Data Integrity, a peer to TCP

`10.` IP's are private addresses.

`192.168.` are private lan addresses.

[Godbolt](https://godbolt.org/) = A way of testing your combiled machine code.

[Shadertoy](https://www.shadertoy.com/) = Custom-written shaders
