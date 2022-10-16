// let x = ["a", "b", "c", "d"];
// let y = [1, 2, 3, 4];

// let newArray = x.map(function (e, i) {
//   return e + "," + y[i];
// });
// console.log(newArray);

let x = ["s","t"];
let y = ["karan","balbir","vikrant"];
let z = [1,2,3,4,5,6,7,8,9];
let x1 = ["song1", "song2", "song3", "song4"];
let y1 = ["Deepak", "Sonu", "papu", "rahul", "kunal"];

let lengthOfx = x.length;
let lengthOfy = y.length;
let lengthOfz = z.length;
let lengthOfx1 = x1.length;
let lengthOfy1 = y1.length;

const totalArrays = [lengthOfx,lengthOfy, lengthOfz, lengthOfx1, lengthOfy1];
const findMax = Math.max(...totalArrays);

for(let i = 0; i < findMax; i++){
    let newArray = [];
    let valueX = x[i] + y[i] + z[i] + x1[i] + y1[i]
    // let valueY = y[i];
    // let valueZ = z[i];
    // let valueX1 = x1[i];
    // let valueY1 = y[i];
    newArray.push(valueX)
    // return newArray;
    console.log(newArray);
}


// console.log("FindMax " + findMax);

