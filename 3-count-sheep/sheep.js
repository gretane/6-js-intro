/*Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/


function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        num += 1;
      }
    }
    return num;
  }

/*function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter((x) => x === true).length; 
}
*/

/*const countSheeps = (arrayOfSheep) =>
    arrayOfSheep((x) => x).length;

*/

/*const countSheeps = (arrayOfSheep) =>
    arrayOfSheep(Boolean).length;

*/

/*function countSheeps(arrayOfSheep) {
    
}
*/