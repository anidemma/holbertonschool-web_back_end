/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
    const new_arr = array;
    for (const value of array) {
      const idx = array.indexOf(value);
      new_arr[idx] = appendString + value;
    }
  
    return new_arr;
  }