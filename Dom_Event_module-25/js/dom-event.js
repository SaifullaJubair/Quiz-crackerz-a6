//option 1 directly set on the html element;
//<button onclick="document.body.style.backgroundColor = 'yellow'">yellow</button>

//option 2 add onclick funtion on the html element button er moddhe funtion call kora hoy.
//<button onclick="makeRed()">Make red</button>
//Important We will use this manytimes
function makeRed(){
      document.body.style.backgroundColor='red';
}

//option 3 id dia funtion set kore kora hoy js file a .onclick use kora hoy  
const makeBlue = document.getElementById('blue');
      makeBlue.onclick = make_blue;//script er moddhe .onclick use korle function er just name lakhte hoy call kora lage na ;
      function make_blue(){
      document.body.style.backgroundColor= 'blue';
}
//option 3 another 
//variable.onclick er moddhe direct funtion set kora hoy.
const purpleButton = document.getElementById('purple')
      purpleButton.onclick = function makePurple(){
      document.body.style.backgroundColor = 'purple';
}

//option 4
const pinkButton = document.getElementById('pink');
      pinkButton.addEventListener('click',makePink);
      function makePink(){
      document.body.style.backgroundColor='pink';
}
//option-4 another
const greenButton = document.getElementById('green');
      greenButton.addEventListener('click',function makeGreen(){
      document.body.style.backgroundColor='green';});

//option -4 final variable diclare na korei direct documentid dia .addEventListener er moddhe funtion likhe color set kora jai.aikhane funtion er nam na dileo chole bcoz direct use kora hosse
// we will use sometimes
      document.getElementById('golden').addEventListener('click',function(){
      document.body.style.backgroundColor ='goldenrod'
     })
     


