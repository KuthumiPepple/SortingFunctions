/* JavaScript implementation of the recursive Quick Sort algorithm that uses the last element as pivot*/
// start -> starting index; end -> ending index
function quickSort(arr, start = 0, end = arr.length - 1) {
	// start -> starting index; end -> ending index
	// the condition (start < end) evaluating to false provides the base case.
	if(start < end){
		// set pi to the correct position of pivot
		let pi = partition(arr, start, end)// pi -> partitioning index
		
		quickSort(arr, start, pi - 1);
		quickSort(arr, pi + 1, end);
		// return sorted array
		return arr;
	}
}

/* This function selects the last element in the array as pivot and sorts all elements preceding
the pivot to the left or the right of pivot if the elements are less than or greater than the pivot respectively*/
function partition(arr, start, end){
	let pivot = arr[end];
	let j = start, i = start - 1;
	while(j < end){
		if(arr[j] > pivot)
			j++;
		else{
			i++;
			swap(arr, i, j);
			j++;
		}
	}
	swap(arr, i + 1, end);
	return i + 1;
}

/* Swaps array elements in indexes i and j */
function swap(arr, i, j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}