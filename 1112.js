//JAVASCRIPT
//Programs are composed of intructions given to computers
//Each instruction represents a statement
//      Example =    variableType variableName = 'wise quarter';
//In Apex and Javascript, multiple  statements can be written on a single line by seperating them with semicolon
//      variableType variableName = 'wise quarter'; variableType variableName2 = 'wise quarter';
//Keywords and name in Javascript are case sensitive
//      variableName != VariableNAME

// Single Line Comment

/* 
    Multiple Comment
*/
/*  Javascript Identifiers / Names
        Names can start with;
            -letters
            -the $ sign
            -underscore (_)
        Names cannot start with a number
*/
//Javascript Variables: Syntax ==> type nameOfVariable = initialValue;
//In Javascript, It's not mandatory to specify the data type when we creating a variable, It's not a Strongly Typed Language.
//      nameOfVariable = initialValue;   ==>   isim = 'wise';
//Variables act as containers for holding information
/*  There are 4 ways to declare a variable in Javascript;
        -var        ==> var isim= 'wise';
        -let        ==> let isim= 'wise';
        -const      ==> const isim= 'wise';
        -nothing    ==> isim= 'wise';
    If a variable is declared but not initialized (no value is given), it becomes undefined
        Example ==>   var isim;
*/
//var
/*Variables declared with "nothing" can be re-declared later with the "var" keyword
        isim='wise';
        var isim = 'quarter';

Variables declared with the "var" keyword;
    -can be re-declared using "var" anywhere      
        var isim ='wise';
        var isim ='quarter';
    -can be reassigned new values.
        var isim ='wise';
        isim ='quarter';  ==>re-assign
    -are hoisted to the top and can be initialized at any point
    -are not block-scoped. Meaning, even if declared within a code block, they can be accessed from outside that block
*/
isim ='USA';
console.log(isim)

Name1= 'England';
console.log(Name1);
var Name1= 'Spain';
console.log(Name1);
Name1 = 5;
console.log(Name1);

let city1='Ankara';
city1='Istanbul';
console.log(city1);
{
    let city2='Konya';
    console.log(city2);
}
const num = 300;
