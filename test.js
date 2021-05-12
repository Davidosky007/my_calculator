function maskify(cc) {
 let ccStr = cc.split('');
 let ccStr1 = ccStr.splice(-4);
//  console.log(ccStr1);
  let ca = ccStr.map(item =>{
    return "#";
  });
  console.log(ca);
  let result = ca.join('') + ccStr1.join('');
  console.log(result);
}

//  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

//   let removed = myFish.splice(2);


// console.log(removed);
// console.log(myFish);

maskify("4556364607935616");
//  == "############5616"
maskify(     "64607935616");
//  ==      "#######5616"
maskify(               "1");
//  ==                "1"
maskify(                "") ;