function changeMe(arr) {
  // you can only write your code here!
var marvel ={}
for(var i=0; i < arr.length; i++){
    marvel.firsName = arr[i][0]
    marvel.lastName = arr[i][1]
    marvel.gender = arr[i][2]
    if(arr[i][3]== undefined){
        marvel.age = "Invalid Birth Year"
    }
    else{
      marvel.age = 2019 - arr[i][3]
    }
    console.log((i+1) + '. ' + marvel.firsName + ' ' + marvel.lastName +":")
    console.log(marvel)
}


//   var avengers = {}
//     for(var i = 0; i < arr.length; i++){
//         avengers.firstName = arr[i][0]
//         avengers.lastName = arr[i][1]
//         avengers.gender = arr[i][2]
//         if(arr[i][3] == undefined){
//             avengers.age = 'Invalid Birth Year'
//         }
//         else{
//             avengers.age = 2019 - arr[i][3]
//         }
//         console.log((i+1) + '. ' + avengers.firstName + ' ' + avengers.lastName +":")
//         console.log(avengers)
//     }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""