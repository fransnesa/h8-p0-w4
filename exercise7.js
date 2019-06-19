function urutkanAbjad(str) {
  // you can only write your code here!
  var temp = ""
  var arr =[]
  var jawaban = " "
  for(var i=0; i < str.length;i++){
      arr.push(str[i]);
  }
 for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  for(var i=0; i < arr.length; i++){
      jawaban+=arr[i]
  }
return jawaban
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'