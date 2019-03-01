/* A JavaScript implementation of the Selection Sort algorithm */
const selectionSort = (arr) => {
	const len = arr.length;
	let j = 0, min_index;
	while(j < len){
		min_index = j;
		i = j + 1;
		while(i < len){
			if(arr[i] < arr[min_index])
				min_index = i;
			i++;
		}
		if(j !== min_index) swap(arr, j, min_index);
		j++;
	}
	return arr;
}

// a function thats swaps element positions in an array
const swap = (arr, firstIndex, secondIndex) => {
	let temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}