function angkaPrima(angka) {
  // you can only write your code here!
  var jawaban= true
  if(angka <= 1){
    jawaban = false
  }
  for(var i=2; i<angka; i++){
      if(angka%i===0){
        jawaban= false
      }
  }
  return jawaban
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false