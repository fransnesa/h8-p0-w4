function cariMedian(arr) {
  // you can only write your code here!
var panjangData = arr.length
var jawaban=0;
/*for(var i=0; i < arr.length;i++){
    for(var j=i+1; j < arr.length;j++){
        if(arr[i] > arr[j]){
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    
}*/
//console.log(arr)
if(panjangData%2!==0){
    jawaban = arr[Math.round(panjangData/2)-1]
}
else{
    jawaban = (arr[panjangData/2-1] + arr[panjangData/2+1-1])/2
}
return jawaban
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5