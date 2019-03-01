/* A JavaScript implementation of the merge sort algorithm */
const mergeSort = (list) => {
	if(list.length <= 1)
		return list;
	let mid = list.length / 2;
	let left = list.slice(0, mid);
	let right = list.slice(mid, list.length);
	return merge(mergeSort(left), mergeSort(right));
}
/* helper function that merges two sub arrays into one sorted array */
const merge = (left, right) => {
	let result = [];
	// a while-loop that sorts and adds elements of sub arrays into the result array
	while(left.length || right.length){
		if(left.length && right.length){
			if(left[0] < right[0])
				result.push(left.shift());
			else
				result.push(right.shift());
		}
		else
			if(left.length)
				result.push(left.shift());
			else
				result.push(right.shift());
	}
	// return sorted array to calling function
	return result;
}