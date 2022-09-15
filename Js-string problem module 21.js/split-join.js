// Module 21.3
 const names = ' rana babul mina raju siam. samin sonia noyon maisha .sagor shovon shoykot palash sumia';
const parts = names.split(' '); // cost er moddhe ja ja thakbe shob alada hoye jabe akta array hobe.
console.log(parts);


const namess = ' rana babul mina raju siam samin. sonia noyon maisha sagor. shovon shoykot palash sumia';
const partss = namess.split('.'); //all string er moddhe joto . ase shekan theke sentecse hoye array moddhe boshe jabe 
console.log(partss);
const namesss = ' rana babul mina raju siam .samin sonia noyon maisha sagor. shovon shoykot palash sumia';
const part = namesss.split(''); //string er moddhe joto character thakbe
console.log(part);

const slice = names.slice(7,11); //kono akta part slice kore kete near jonno .slice use kore ()er moddhe man likhe dite hoy
console.log(slice) 
const substrating = names.substring(7,11); //.slice er motoi
console.log(slice) 