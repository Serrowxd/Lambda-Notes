# Basics

[Video Here](https://www.youtube.com/watch?v=gfkTfcpWqAY)

### C# vs .NET

C# is a programming language

.NET is a framework for building applications on Windows - .NET is not limited to C#

### Basic Notes

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

### Variables and Constants

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
