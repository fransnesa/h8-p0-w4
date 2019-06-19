function cariModus(arr) {
  // you can only write your code here!
  var hasil=[]
  var mode=-1
  var max = -1
  for(var i = 0; i < arr.length; i++) {
    var angka = arr[i]
    var data = []
    var count = 0
    if(arr[i] !== -1) {
      for(var j = i; j < arr.length; j++) {
        if(angka === arr[j]) {
          count++
          arr[j] = -1
        }
      }
      data.push(angka)
      data.push(count)
      hasil.push(data)
    }
  }
  if(hasil.length > 1) {
    /*for(var i=0; i < hasil.length; i++){
       for (var j=0; j < i; j++){
        if (hasil[i][1] > hasil[j][1]) {
            mode = hasil[i]
          }
       }
    }*/
    for(var i=0; i < hasil.length; i++){
      if(hasil[i][1] > max){
        max = hasil[i][1]
        if(max!==1){
    mode = hasil [i][0]
    }
      }
    }
  }
	  return mode;
	}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4,])); // 4
console.log("")
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log("")
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log("")
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log("")
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log("")
