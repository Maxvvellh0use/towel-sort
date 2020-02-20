
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!arguments.length || !matrix.length) {
        return []
    }
    const mapMatrix = matrix.map( function(elem, i) {
       return i % 2 !== 0 ? elem.sort((a,b) => b - a) : elem
    });
    console.log(mapMatrix);
    const concatMatrix = mapMatrix.concat(...matrix);
    const result = concatMatrix.filter(elem => Array.isArray(elem) === false);;
    return result;
};

// console.log(towelSort());
