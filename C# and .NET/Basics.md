# Basics

[Video Here](https://www.youtube.com/watch?v=gfkTfcpWqAY)

## C# vs .NET

C# is a programming language

.NET is a framework for building applications on Windows - .NET is not limited to C#

## Basic Notes

CLR = Common Language Runtime

Languages are not compiled directly into machine code, they are ran through something called IL Code (Intermediate Language Code) - or ByteCode. CLR changes IL Code into Native Code, or machine code - this is known as Just-in-time Compilation, or **JIT**.

**net architecture**

Applications at a high level are built from classes.

`class` is made up of Data and Methods.

Data represents the "state" of the application.

Classes can be organized by `Namespaces` - Namespace is a container for related classes.

`Assembly` is used to contain the related Namespaces - like an EXE or a DLL (Dynamically Linked Library).

Applications run 1 or more assemblies.

---

`using System;` this is how you do imports in C#, if you want to use different namespaces, you have to import them.

```C#
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Hello Github!");
        }
    }
}
```

`Main` - the entrypoint to your application, this is a Method (or a Function).

`Methods` have input and output, so what goes inside (here) is the input to the method, which is known as paramaters or arguments - these are optional. We can see this as 'args' which is of the type string[] - or string array.

`void` is the return type, or the output of the method. Void in C# means nothing, so the Main method will return nothing.

C# is case sensative, so functions (like in JavaScript) will be created with a capital letter.

_Note that when using VS, methods are labeled with a purple cube - they perform functions for you when utilizing dot notation._

**Ctrl-F5 will run your project**

## Variables and Constants

`Variable`: A name given to a storage location in memory.

`Constant`: An immutible value that does not change for the life of the appliaction.

To declare a variable in C#, we use a type, followed by an identifier.

So `int` would be a number.

```C#
int number;
int Number = 1;
```

These are different - given that C# is case sensative. You cannot use a variable unless you initialize it. That's why `int number;` will return nothing and the program will not be compiled.

```C#
const float Pi = 3.14f;
```

Here we have a constant, a data type, an identifier, and then a value.

**Identifiers cannot start with a number, use camelCase**. They also cannot be reserved words like `int`, however if you need to use it you can prefix it with @. So `@int` will work. Always make sure to use **meaningful names** - rather than using `fn` use `firstName`.

**3 good naming conventions to use**

- _Camel Case_: firstName
- _Pascal Case_: FirstName
- _Hungarian Notation_: strFirstName

In Hungarian Notation you prefix the name of the variable with the data type it uses. It's not used in C#, however it is used in C and C++.

**For Local Variables:** _Camel Case_ - `int number;`
**For Constants:** _Pascal Case_ - `const int MaxZom = 5;`

### Primitive Types

|                  | C# Type | .NET Type | Bytes | Range                   |
| ---------------- | ------- | --------- | ----- | ----------------------- |
| Integral Numbers | byte    | Byte      | 1     | 0 to 255                |
|                  | short   | Int16     | 2     | -32,768 to 32,767       |
|                  | int     | Int32     | 4     | -2.1B to 2.1B           |
|                  | long    | Int64     | 8     | ...                     |
| Real Numbers     | float   | Single    | 4     | -3.4x10^38 to 3.4x10^38 |
|                  | double  | Double    | 8     | ...                     |
|                  | decimal | Decimal   | 16    | -7.9x10^28 to 7.9x10^28 |
| Character        | char    | Char      | 2     | Unicode Characters      |
| Boolean          | bool    | Boolean   | 1     | True/False              |

**C# Keywords are always lowercase**

[C# Primitive Types - Less Used](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/built-in-types-table)

With Real Numbers, `Double` is the default used by the C# Compiler. If you want to use a float, you have to declare it as such.

```C#
float number = 1.2f;
```

The suffix `f` tells the compiler to treat the number as a float.

The same applies to `Decimals` -

```C#
decimal number = 1.2m;
```

The suffix `m` tells the compiler to treat the number as a decimal.

### Non-Primitive Types

- String
- Array
- Enum
- Class

## Overflowing

```C#
byte number = 255;

number = number + 1; // 0
```

This is known as overflowing. We're rendering 255 as a byte, which is the maximum number. We then increase the number by 1, and attempt to render 256 inside byte. This will return 0 because we've exceeded the maximum of the byte data type.

In C# by default, we don't have built-in overflow checking.

```C#
checked
 {
   byte number = 255;

   number = number + 1;
 }
```

Here we will no longer have overflow. In this case it will throw an exception, and the program will crash until you handle the exception. You likely will not use this in the real world.

## Scope

**Scope is where a variable, or constant, has meaning and is accessible**

```C#
<!-- a cannot be accessed up here -->
{
  byte a = 1;
  {
    byte b = 2;
    {
      byte c = 3;
      // everything can be accessed here, including c.
    }
    // b can be accessed here, as can a, but not c.
  }
  // a can be accessed here, but not b or c.
}
```

**Ctrl-Shift-B will compile and build your program, then check for errors**

Note that characters are encased in a single quote `char character = 'A';` while strings are encased in a double quote `string firstName = "Kevin";`.

In Visual Studio, everything in a blue color is usually a keyword.

You can use a small code snippet like `cw` then hit tab and it will automatically create a `Console.WriteLine` for you.

A super easy way of doing data types is also just putting `var` - this will make the compiler do all the work for you.

```C#
  static void Secondary(string[] args)
  {
      Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
  }
```

This is called a `format string`. At runtime, inside the curly braces {0} represents the first argument after the format string, and {1} represents the 2nd argument - similar to arrays and indexing.

---

**Implicit Type Conversion**

```C#
byte b = 1;
int i = b;
```

There is no data loss here, however we are changing the value type.

```C#
int i = 1;
float f = i;
```

Again, no data loss.

**Explicit Type Conversion**

```C#
int i = 1;
byte b = i;
```

This will not compile, and there is a chance for data loss.

_Casting_

```C#
int i = 1;
byte b = (byte)i;
```

This means you are aware of the data loss (if relevant) and you want to go ahead with the conversion.

```C#
float f = 1.0f;
int i = (int)f;
```

Another example of a explicit type casting conversion.

**None-compatible Types**

```C#
string s = "1";
int i = (int)s;
```

This will not compile, because they are not compatible types. In cases like this we use the convert class, or parse method.

```C#
string s = "1";

int i = Convert.ToInt32(s);

int j = int.Parse(s);
```

Convert class is part of the .NET framework, so you utilize the .NET type.

Parse method takes a string and tries to convert it to the target type.

_Convert Class Types_

- `ToByte()`
- `ToInt16()`
- `ToInt32()`
- `toInt64()`

---

```C#
static void Six(string[] args)
{
    try
    {
        var number = "1234";
        int i = Convert.ToInt32(number);
        Console.WriteLine(i);
    }
    catch (Exception)
    {
        Console.WriteLine("The number could not be converted to a byte.");
    }
}
```

This is known as a "Try - Catch". This is similar to how CRUD opperations work in NodeJS - the compiler will attempt to run the code, if it is unable to it will `catch` and run the code defined in the exception.

## Operators

**Arithmetic Operators**

|           | Operator | Example |
| :-------: | :------: | :-----: |
|    Add    |    +     |  a + b  |
| Subtract  |    -     |  a - b  |
| Multiply  |    \*    | a \* b  |
|  Divide   |    /     |  a / b  |
| Remainder |    %     |  a % b  |
