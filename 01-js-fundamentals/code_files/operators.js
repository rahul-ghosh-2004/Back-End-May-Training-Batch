/*

1. Arithmetic (+, -, *, /, %)
$ node 
> 10 + 20
30
> 10 - 5
5
> 10 / 5
2
> 10 / 3
3.3333333333333335
> 10 % 7
3
> 10 * 2
20
>


2. Logical ( and, or, not )
   and: 1 1 1
        1 0 0
        0 1 0
        0 0 0

    or: 1 1 1
        1 0 1
        0 1 1
        0 0 0

    not: 1 --> 0
         0 --> 1
> let a = 10
undefined
> let b = 20
undefined
> a
10
> b
20
> a == 10 and b == 20
a == 10 and b == 20
        ^^^

Uncaught SyntaxError: Unexpected identifier 'and'
> a == 10 && b == 20
true
> a == 10 && b == 10
false
>
>
>
> a == 10 || b == 5
true
> a == 5 || b == 5
false
>
>
>
>
> true
true
> !true
false
> !0
true
> 1 == true
true
> !true
false
>



3. Comparison ( <, >, <=, >=, ==, !=, === )
   == -> Only values
   === -> Check value and also the data type
> 10 == 10
true
> 10 == 10
true
> 10 === 10
true
> 10 === 10
true
> 10 == "10"
true
>
> // == ===
undefined
> 10 === "10"
false
> typeof 10 == typeof "10"
false
>
> 10 != 20
true
> 10 > 1
true
> 10 < 1
false
> 10 < 20
true
> 10 <=10
true
> 10 <=20
true
> 10 < 20 || 10 == 20
true
>
>
> 10 >= 1
true
>



4. Assignment (=, +=, -=, *=, /=, %=)

*/

// let a = 10
// a %= 2

// console.log(a);