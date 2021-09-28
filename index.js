//1
function countToFifty(){
  for (var i = 1; i <= 50; i++) {
      console.log(i)
  }
 
}

//2
function countFromOne(num){
  for (var i = 1; i <= num; i++) {
      console.log(i)
  }
}

//3
function threeAndFiveInFifty(){
    for (var i = 1; i <= 50; i++) {
        if ((i % 3 == 0) ||  (i % 5 === 0)){
    console.log(i);
         }
    }
}

//4
function threeAndFive(num){
    for (var i = 1; i <= num; i++) {
        if ((i % 3 == 0) ||  (i % 5 === 0)){
            console.log(i);
         }
    }
}


function triple (num){
    let aRR = [];
    for (var i = 1; i <= aRR.length ; i++) {
        let trip = aRR[i] * 3;
        aRR.push(trip);
    }
    
}