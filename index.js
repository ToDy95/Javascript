// document.addEventListener('DOMContentLoaded', function () {
//   let input = document.createElement('input');
//   document.body.appendChild(input);
//   let myArray = ['mere', 'pere', 'calculator', 'gogosi', 'biciclete', 'cal'];

//   input.id = 'myId';
//   myId.addEventListener('change', function (event) {
//     const res = myArray.filter(e => e.includes(event.target.value));

//     res.map((e, i) => {
//       console.log(e);
//       const h1 = document.createElement('h1');
//       h1.innerHTML = e;
//       h1.setAttribute('id', `abc + ${i}`);
//       document.body.appendChild(h1);
//       h1.id = `abc + ${i}`;
//       h1.style.color = 'blue';
//     });
//   });
//   // let myBtn = document.getElementById('button1');
//   // myBtn.addEventListener('click', function (params) {
//   //   alert(2);
//   // });
//   // let myInput = document.getElementById('input1');

//   // myInput.addEventListener('change', function (event) {
//   //   const res = myArray.filter(e => e.includes(event.target.value));

//   //   console.log(res);
//   //   res.map((e, i) => {
//   //     const h1 = document.createElement('h1');
//   //     h1.innerHTML = e;
//   //     h1.setAttribute('id', `abc + ${i}`);
//   //     document.body.appendChild(h1);
//   //     h1.id = `abc + ${i}`;
//   //     h1.style.color = 'blue';
//   //   });
//   // });

//   const callApi = async () => {
//     let data = [];

//     let call = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let response = await call.json();
//     await data.push(response);

//     return data;
//   };

//   const a = callApi();
//   console.log(a);
// });
