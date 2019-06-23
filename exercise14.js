function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F']
  //your code here
  var hasil = []
  for(let i=0; i < arrPenumpang.length; i++){
    var ongkos = 0
    var tumpangan = {}
    tumpangan.penumpang = arrPenumpang[i][0]
    tumpangan.naikDari = arrPenumpang[i][1]
    tumpangan.tujuan = arrPenumpang[i][2]
    for(let j=0; j < rute.length; j++){
        if(rute[j]===tumpangan.naikDari){
            for(k=j; k < rute.length; k++){
                if(rute[k] === tumpangan.tujuan){
                    break
                }
                ongkos++
            }
        }
    }
    tumpangan.bayar = ongkos*2000
    hasil.push(tumpangan)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]