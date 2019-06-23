function shoppingTime(memberId, money) {
  // you can only write your code here!
  var sisaUang=money
  var barang = {
      sepatuStacattu : 1500000,
      bajuZoro : 500000,
      bajuBrandHN : 250000,
      sweaterUniklooh : 175000,
      casingHandphone : 50000
  }
  var member ={
    ID : memberId,
    uang : money    
}
var daftarBarang =[]
  for(var key in barang){
      if(sisaUang >= barang[key]){
          daftarBarang.push(key)
          sisaUang -= barang[key]
      }
  }
  member.listPurchased = daftarBarang
  member.changeMoney = sisaUang
  if(memberId === ""){
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  else if(money<barang.casingHandphone){
      return "Mohon maaf, uang tidak cukup"
  }
  else if(member.memberId === undefined && money === undefined){
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  else{
      return member
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja