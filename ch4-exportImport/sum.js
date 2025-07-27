//module protects there variables and functions from leaking

// let x = "abra ka dabra";

// function calculateSum(a, b) {
//   const sum = a + b;

//   console.log(sum);
// }

// module.exports = calculateSum

// module.exports = calculateSum;
// module.exports = {
//      calculateSum: calculateSum,
//       x: x
//      };

//----

export let x = "gili gili";

export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// export default calculateSum;

