
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!arguments.length || !matrix.length) {
        return []
    }
    const mapMatrix = matrix.map( function(elem, i) {
        if (i % 2 !== 0) {
            return elem.sort((a,b) => b - a)
        }
        else {
            return elem
        }
    });
    console.log(mapMatrix);
    const concatMatrix = mapMatrix.concat(...matrix);
    const result = concatMatrix.filter(elem => Array.isArray(elem) === false);
    console.log(result);
    return result;
};

// console.log(towelSort());
