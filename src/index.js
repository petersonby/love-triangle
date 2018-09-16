
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let n = 0; n < preferences.length; n++) {
  	const first = preferences[n];
	const secondNum = first - 1;
  	const second = preferences[secondNum];
	const thirdNum = second - 1;
  	const third  = preferences[thirdNum];
  	const firstNum = third - 1;
  	
  	if ( firstNum === n && (first !== second || first !== third || second != third)) {
  		count++;
  	}
  }

  return count / 3;
};
