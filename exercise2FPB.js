function fpb(angka1, angka2) {
  // you can only write your code here!
  var jawaban=0;
  var pembagi=0;
  if(angka1%angka2===0){
      jawaban === angka2
  }
  else{
      if(angka1 > angka2){
        pembagi = angka2
      }
      else{
        pembagi = angka1
      }
      while (jawaban===0){
        if(angka1%pembagi===0 && angka2%pembagi===0){
            jawaban = pembagi;
        }
        pembagi--
      }
  }
  return jawaban;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1