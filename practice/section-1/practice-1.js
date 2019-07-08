'use strict';

function collectSameElements(collectionA, collectionB) {
  // let arr = [];
  // let hash = [];
  // for(let i = 0;i < collectionA.length;i++){
  //   for(let j = 0;j < collectionB.length;j++){
  //     if(collectionA[i] === collectionB[j]){
  //       arr.push(collectionA[i]);
  //     }
  //   }
  // }
  // for(let i = 0;i < arr.length;i++){
  //  if(hash.lastIndexOf(arr[i]) == -1){
  //    hash.push(arr[i]);
  //  }
  // }
  // return hash;

  // es6 version
  return collectionA.filter(item => collectionB.indexOf(item) !== -1)
}
