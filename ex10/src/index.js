
function myFunction() {

    var myMusic = {
  
    001:  {
  
     artist: "Billy Joel",
     title: "Piano Man",
     release_year: 1973,
     formats:  {
     1: "CD",
     2: "BT",
     3: "LP"
   },
  
    gold: true
  
  },
  
    002:  {
  
  
     artist: "Konvoj",
     title: "Bez razlike",
     release_year: 2000,
     formats:  {
     1: "DVD",
     2: "BLUE RAY",
     3: "LIVE CD"
    
      },
  
  
  },
  
  
  };
  return myMusic;

}

myFunction();
console.log(myFunction()[2]);
module.exports = myFunction;
  
  

  