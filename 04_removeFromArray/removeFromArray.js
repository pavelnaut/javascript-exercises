const removeFromArray = function(array, ...elementsToRemove) {
    for (let elementToRemove of elementsToRemove) {
        array = array.filter(element => element !== elementToRemove);
      }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
