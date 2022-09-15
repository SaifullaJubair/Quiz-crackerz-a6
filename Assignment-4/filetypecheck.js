//Check whether the given file is a javascript file or not
function ifJavaScriptFile(fileType){
      if(typeof fileName !== 'string'){
            return 'Input type must be string ';
      }
      else{
            let jsFileChecking = fileName.indexOf('.js');
            let jsCondition = jsFileChecking !== -1;
            return jsCondition;
      }
      
}
let fileName = "is that a javaScriptfile.js";
const fileNamesOutput= ifJavaScriptFile(fileName)
console.log(fileNamesOutput);