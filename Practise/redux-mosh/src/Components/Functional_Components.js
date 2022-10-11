import {compose, pipe, trim} from "lodash";

const Functions = () => {
  /*
    
    -------------------Higher order functions(())-----------------

    function sayHello(){
           return function() {
             return "Hello world";
         };
     }
 
     let fn = sayHello();
     let message = fn();
     ------------------------------
     function sayHello(){
         return "Hello World";
     }
     function greet(fnMessage){
         console.log(fnMessage());
     }
     greet(sayHello);

     
     let numbers = [1, 2, 3];
     numbers.map(numbers => numbers *2)


     setTimeout(() => console.log("Hello"),1000);

    --------------------Functional Compositions------------------
    let input = "   javaScript    ";
    let output = "<div>" + input.trim() + "</div>";
 
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`;
    const toLowerCase = str => str.toLowerCase();
 
    const result = wrapInDiv(toLowerCase(trim(input)));
    =>  trim
    =>  wrapInDiv

    -------------------Functional Compositions and piping---------
    const transform = compose(wrapInDiv, toLowerCase, trim);
    transform(input);
    const transform = pipe(trim, toLowerCase, wrapInDiv);
    transform(input);

    -------------currying-----------------------------
    */

    let input = "   javaScript    ";
    const trim = str => str.trim();
    const wrap = (type, str) => `<${type}>${str}</${type}>`
    const toLowerCase = str => str.toLowerCase();

    const transform = pipe(trim, toLowerCase, wrap);
    console.log(transform(input));





  return <h1>function</h1>;
};

export default Functions;
