// // function loadTodos(){
// //       fetch('https://jsonplaceholder.typicode.com/todos')
// //       .then(res => res.json())
// //       .then(data => displayTodos(data))
// // }

// // function displayTodos(todos){
// //       const todoContainer = document.getElementById('todos-container');
// //      for(const todo of todos){
// //       const todoDiv = document.createElement('div');
// //       todoDiv.innerHTML =`
// //       <h3> title: ${todo.title}</h3>
// //       <p> User: ${todo.userId}</p>
// //       <p>Is completed: ${todo.completed === true? 'complete': 'not complete'}</p>
// //       `;
// //       todoContainer.appendChild(todoDiv)
// //      }
// // }


// // loadTodos()
// // const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// // console.log(stuInfo.name);
// // const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
// // const userName = data.result[0].userName.name
// // console.log(userName)

// // const array = { hobbies: ["dancing", "singing", "acting"] };
// // console.log(JSON.stringify(array));

// const dreamGirl = [
//       {
//         sokina: {
//           name: "bbu",
//           height: "5.4",
//           family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//           age: undefined,
//           contactInfo: [
//             {
//               facebook: {
//                 link: "https://www.facebook.com/",
//                 followers: "12545",
//                 status: "single",
//                 friendsList: [{ name: "rofik" }, undefined],
//               },
//             },
//             { instagram: "https://www.instagram.com/" },
//           ],
//         },
//       },
//     ];
//     const instagram = dreamGirl[0].sokina.contactInfo[1].instagram     

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

 const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 

