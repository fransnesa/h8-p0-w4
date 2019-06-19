function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  //PAKE ARRAY **********************************************
  /*var simpen = []
  var panjang = 999
  for(var i=0; i <= angka;i++){
    var kata = ""
    if(angka%i===0){
        kata = i + "*" + angka/i
        simpen.push(kata)
    }
  }
  for(var j=0; j < simpen.length; j++){
    if(simpen[j].length-1 < panjang){
        panjang = simpen[j].length-1
    }
  }
  return panjang*/
// PAKE OBJECT **************************************************
var simpen ={}
var min = 999;
for(var i =0; i <= angka; i++){
    var kata =""
    if(angka%i===0){
        kata = i + "*" + angka/i
        simpen[kata] = kata.length-1
    }
}
for(var key in simpen){
    if(min > simpen[key]){
        min = simpen[key]
    }
}
return min
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2