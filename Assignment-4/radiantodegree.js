//1.Radian to Degree convert
function radianToDegree(radian){
      if(typeof radian !== 'number'){
            return 'Please Input a number';
      }
//pi variable declare pi =3.1416 = Math.PI
      const pi = Math.PI; 
      const degree = radian*180/pi;
 return degree;
 }
 //radian to degree formula = 1*180/3.1416
 
 const convertDegree = radianToDegree(3);
 console.log(convertDegree);
