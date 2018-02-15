function sumItems(array) {
  sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      console.log('is array');
      
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

console.log(sumItems([1, 2, 3, 4, 5, [6, 7]] ));

module.exports = sumItems;