function ubahHuruf(kata) {
  // you can only, write your code here!
  var kataBaru=""
  for(var i=0; i < kata.length; i++){
      if(kata[i]==="z"){
        kataBaru +="a"
      }
      else{
        kataBaru += String.fromCharCode(kata[i].charCodeAt()+1)
      }
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wowz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu