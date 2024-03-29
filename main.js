// ///////////////////////////////////////////////////////////////////////////////
// 1- misol /////////////////////////////////////////////////////////////////////////
// let obj = { name: `Alisher `, age: 19, adress: `Andijon` };
// const getKeys_and_Values = (both) => {
//   let values = [];
//   let keys = [];
//   for (let key in both) {
//     keys.push(key);
//   }
//   for (let value in both) {
//     values.push(both[value]);
//   }
//   console.log(keys);
//   console.log(values);
// };
// getKeys_and_Values(obj);
////////////////////////////////////////////////////////////////////////////////////////////////
// 2- misol //////////////////////////////////////////////////////////////////////////////////
let num = 4;
const check_number = (num) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  if (arr.includes(num)) {
    console.log(`arrayda berilgan sonlar ichida ${num} mavjud`);
  } else {
    console.log(` arrayda berilgan sonlar ichida ${num}
    mavjud emas `);
  }
};
check_number(num);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 - misol///////////////////////////////////////////////////////////////////////////////////////
// const check_words=(string)=>{
//     let arr = ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]
//     let str = `xalq`
//     if(arr.includes(str)){
//       console.log(`arrayda berilgan sozlar ichida ${str} sozi mavjud`)
//     }else{
//       console.log(`bu soz arrayda berilgan sozlar ichida mavjud emas `)
//     }
//   }
//   check_words()
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4- misol /////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];
// function find_index(arr, element) {
//   let index = arr.indexOf(element);
//   return index !== -1 ? index : "Topilmadi";
// }

// console.log(find_index(arr, 3));
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5-misol /////////////////////////////////////////////////////////////////////////////////////////
// const key1 = "a";
// const key2 = "b";
// const key3 = "c";
// const obj1 = {};
// obj1[key1] = `Mening`;
// const obj2 = {};
// obj2[key2] = `ismim`;
// const obj3 = {};
// obj3[key3] = `Alisher`;
// const combine = Object.assign({}, obj1, obj2, obj3);
// console.log(combine);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6 - misol //////////////////////////////////////////////////////////////////////////////////////////////////
// let obj1 = {a:1, b:2}
// let obj2 = {c:3, d:4}
// let combinedObjects = Object.assign( obj1, obj2)
// console.log(combinedObjects)
// let obj_keys = Object.keys(combinedObjects)
// console.log(obj_keys)
// let obj_values = Object.values(combinedObjects)
// console.log(obj_values)
// let total_of_values = 0
// for( let property in combinedObjects){
//   total_of_values += combinedObjects[property]
// }
// console.log(total_of_values)
