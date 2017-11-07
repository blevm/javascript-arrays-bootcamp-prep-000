var chocolateBars = ['snickers','hundred grand','kit kat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(element, array) {
  return array.push(element)
}
