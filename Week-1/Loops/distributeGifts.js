// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  for (let i = 1; i <= totalGifts; i++) {
    if (totalGifts >= friends) {
      return friends;
    } else {
      return totalGifts;
    }
  }
}
console.log(distributeGifts(10, 5));
console.log(distributeGifts(2, 4));
