# NamasteNode-JS-EP-04: Mastering Module Exports & Requires - Unlocking Node JS Power!
**Episode 4: Module Export & Requirements**
---------------------------------------------------------------- 
We all know that keeping all the Node.js code in a single file is not a good practice, We need multiple files to create a large project, So we will explore how we can create those files and import concepts like modules and export requirements.
<br>

## CommonJS Modules (CJS):
<br>
## How do we make the two modules work together?
- using a *require function*
## What is a *require function* ?
- In Node.js, the *require()* function is a built-in function that allows us to include or require other modules into our main modules.

## If i write a function in another module, can i use that function in a different module?
- No , because Modules protect their variables and functions from leaking by default.
- We can achieve it by *exporting the function* using *module.exports* and later importing it with the help of *require()*
- if we have to export multiple functions and variables then we can export them by wrapping them inside an object.
` let x = 'exports in React exports in Node';

function calculateSum(a, b) {
    let sum = a + b;
    console.log('result of calculate sum: ', sum);
}

module.exports = {
    x: x,
    calculateSum: calculateSum,
}
`
## Important Note: 
When using the following import statement:
<br>

` const {x, calculateSum}= require("./sum"); `

<br>

We can omit the .js extension, and it will still work correctly.

**summary:** 
- To use private variables and functions in other modules, we need to export them. This allows other parts of our application to access and utilize those variables and functions.

## ES Modules (ESM) mjs:
<br>

|      **CommonJS Modules (cjs)**     |        **ES Modules (mjs)**        |
|:-----------------------------------:|:----------------------------------:|
|              require()              |               export               |
|            module.exports           |        import {} from "path"       |
|              Older Way              |              Newer Way             |
| **Code runs in *synchronous* manner | **Code runs in asynchronous manner |
| **runs in non strict mode           | **runs in strict mode              |

- There are two major differences between these two modules systems that are important to note:

**Synchronous vs Asynchronous:**
- Common JS modules require modules in a synchronous manner, meaning that the next line of code will execute only after the *module has been loaded.*
- ES modules load modules asynchronously, allowing more efficient and flexible code execution. 
  
**Strict mode:**
- Common JS modules runs in non-strict mode, while ES modules execute in strict mode. This means that ES modules enforce stricter parsing and error handling, makes them genrally safer and more reliable to use.
- Overall, ES modules are considered better due to these advantages.  

**To use ES modules:**

- create a *package.json* file
- ` { "type" : "module" } ` in it.
- This setting indicates that our code will use ES module syntax. 

**Strict Mode Example:** 

- In a CommonJS module, you can define a variable without using var , let , or 
const , and the code will execute without throwing an error because it operates
in non-strict mode.


- In ES module, we cannot define a variable without using var, let or const, the code will throw an error. i.e we cannot define the variables without declaring them first.

**What is module.exports?**

- *module.exports* is an empty object by default. {}
- so while exporting a function or variable can write like this as well:
- module.exports.x = x;
- module.exports.calculateSum = calculateSum;
