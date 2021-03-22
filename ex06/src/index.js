
var lion = {

    name: "Simba",
    legs: "4",
    tail: "1"
    
    };
    
    function myFunction(propName, propValue) {
       
        lion[propName] = propValue;
        return lion;
     
      }
      
     
      console.log(myFunction("roar", "roar-roar"));
      module.exports = myFunction;
