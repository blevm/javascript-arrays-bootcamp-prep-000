var chocolateBars = ['snickers','hundred grand','kit kat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
