//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//Наприклад:

//const array = [1, 3, 4, 6, 2, 5, 7];


function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  console.log(removeElement([2,5,9,1,5,8,5], 5))
  