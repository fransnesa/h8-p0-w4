function checkAB(num) {
  // you can only write your code here!
  var cek=false;
  var nilai="";
  for(var i=0; i < num.length; i++){
        if(num[i] ==="a" || num[i] ==="b"){
            nilai = num[i]
            if(num[i+4]==="a" || num[i+4]==="b" && num[i+4]!== nilai){
                cek = true
            }
    }
  }
  return cek
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false