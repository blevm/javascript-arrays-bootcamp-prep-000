var chocolateBars = ['snickers','hundred grand','kit kat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(element, array) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  array[index];
  return array;
}