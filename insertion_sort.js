/* A javascript implementation of the insertion sort algorithm */
function insertionSort(arr){
	let len = arr.length;
	let key, i, j = 1;// refer to freecodecamp.org for more explanation on this implementation
	while(j < len){
		key = arr[j];
		i = j - 1;
		while(i >= 0 && arr[i] > key){
			arr[i + 1] = arr[i];
			i--;
		}
		arr[i + 1] = key;
		j++;
	}
	return arr
}