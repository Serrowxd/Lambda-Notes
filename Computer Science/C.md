# The Language C

Most Developers are language agnostic - they may not have multiple "main languages", but they have experience in other languages and can pick them up in about ~2 weeks tops if needed.

#### Hello World in C

```C
#include <stdio.h>

int main(void)
{
  printf("Hello World!\n");

  return 0;
}
```

#### Notes of Above Code

`Header File`: It contains function signatures and such that we need to bring into the C program || **.h**

`#include`: #include <stndlb.h> and #include <stdio.h> bring in functions that are built in to the computer by default.

`int`: Is basically the same thing as `function` from JavaScript.

`main`: The name of the function above.

`void`: Means that nothing will be passed. You can also leave it blank, but by putting void makes it more explicit.

`printf();`: Just prints it to the console - similar to `console.log`. \n is telling the computer to create a new line.

`return`: returning 0 or 1 in a C program is like different HTTP status codes, however there is no specific reasoning to them. Returning 0 might be like a 200, but a 1 might be more like a 500. You could also return a string, but this would change the `int` to `string` - however this is not something you will see very many C programs doing.

#### Compiling C code

```
gcc c_intro.c -o c_intro
```

gcc is the compiler, c_intro.c is the origin file, -o is the output direction, c_intro is the output file.

Running the file will be `./c_intro` with c_intro being the output file, and then it will run your C code and give you the output file.

```C
#include <stdio.h>

int other_function(void)
{
  // code
}

int main(void)
{

  other_function();

  printf("Hello World!\n");

  int age = 23;

  char *c = "Goodbye";

  printf("%s\n", c);

  return 0;
}
```

**If you don't call `other_function` from inside `main` then it will never be used. `main` is a reserved keyword.**

`float`: an integer modification `float weight = 132.65;`
`char`: a character `char b = 'c';`
`char`: a string is just a bunch of characters. `char *c = "Goodbye";` || `char *` is the default way of defining a string with a character.

```C
#include <stdio.h>

int main(void)
{
  printf("Hello World!\n");

  int age = 23;
  float weight = 132.65;

  char b = `c`;

  char b[] = { 'H', 'e', 'l', 'l', 'o' }; // character array
  int a[] = { 1, 2, 3, 4, 5 }; // this is an array
  a[2]; // this is saying grab whatever is at the intial index of a, go two spaces after it then grab me that. So it would give you back 3 from the above array.

  int y[5]; // this is not declaring an integer array with a 5 inside it, this is declaring an integer array with space for 5 integers.

  // Arrays in C
  // 1. A contiguous block of memory in RAM.
  // 2. A pointer to the first element in the array.


  [1, 2, 3, 4, 5]
  ['G', 'o', 'o', 'd', 'b', 'y', 'e', '\0'] // '\0' denotes the end of a string in C - this is a `null character`

  char *c = "Goodbye";

  printf("%s\n", c);

  return 0;
}
```

`arrays`: A continguous block of memory in ram. There is no way of creating a dynamic number of slots for the array, but you can reserve sections of memory that allow you resize the chunk of memory you are using.
