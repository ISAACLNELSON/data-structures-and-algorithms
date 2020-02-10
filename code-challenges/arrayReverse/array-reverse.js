
let inputArr = [2 ,1];
//take the last element in an array and push it into a new array.
function reverseArray(arr) {
    // make a new array
    let result = [];
    //iterate over input arr backwards
    //start i at length - 1 because we want to access the last index in the array, and since index's start at 0 we subtract 1.
    //stop the loop when i >= 0 so that we may still access the index at 0.
    for(let i = arr.length - 1; i >= 0; i--){
        //push the current element into the new array
        result.push(arr[i]);
    }
    //return the resulting array
    return result;
}
reverseArray(inputArr);