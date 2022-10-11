import { compose, pipe } from "lodash/fp";
import {produce} from "immer";

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

    -------------currying function-----------------------------
    function (){

        return function (){

        }
    }

    ------------pure function------------------


    let input = "   javaScript    ";
    let output = "<div>" + input.trim() + "</div>";
    
    const trim = str => str.trim();
    // const wrapInDiv = str => `<div>${str}</div>`;
    // const wrapInSpan = str => `<span>${str}</span>`;
    const wrap = type => str => `<${type}>${str}</${type}>`;
    const toLowerCase = str => str.toLowerCase();
    
    const transform = pipe(trim, toLowerCase, wrap("div"));
    console.log(transform(input));


    ------------update object-----------------


    const person = { name: "Tushar",
    address: {
        country: "India",
        city: "San Francisco"
    }
    };
    // const updated = Object.assign({}, person, {name: "Bob"},{age: 23})
    const updated = {...person,
        address: {...person.address},
         name: "Bob"};
    // updated.address.city = "USA"
    console.log(person)

    --------update Array-----------

    const numbers = [1, 2, 3];
 
    const index = numbers.indexOf(2)
    const added = [...numbers.slice(0, index),
        4,
        ...numbers.slice(index)
        ];
    const remove = numbers.filter(n => n !== 2 );
    console.log(remove)
 
    const updated = numbers.map(n => 2 ? 20 : n );
    console.log(updated)

    --------enforcing immutability------------
    immutable 
    immer
    mori

    -------immutable.js-------------

    let book = Map({title: "Harry Potter"});
 
    function publish(book){
        book.set("isPublished", true);
    }
 
    book = publish(book);
 
    console.log(book.toJS());

    -----------immer.js-------------
    let book = {title: "Harry Potter"};
 
    function publish(book){
        return produce(book, draftBook => {
            draftBook.isPublished = true;
        });
    }
 
    let updated = publish(book);
 
    console.log(book);
    console.log(updated);


    =============>Redux<====================

    function reducer(store, action){
        const updated = {...store};
        update.products = ?????
    }

    Action(Event) {dispatch} -> STORE -> Reducer(Event Handler)

    */









