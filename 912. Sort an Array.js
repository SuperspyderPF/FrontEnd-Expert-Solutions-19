/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    function merge(arr1, arr2) {
      let results = [];
      let i = 0;
      let j = 0;
  
      while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
          results.push(arr1[i]);
          i++;
        } else {
          results.push(arr2[j]);
          j++;
        }
      }
  
      while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
      }
  
      while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
      }
  
      return results;
    }
    function mergeSort(nums) {
      if (nums.length <= 1) return nums;
      let mid = Math.floor(nums.length / 2);
      let left = mergeSort(nums.slice(0, mid));
      let right = mergeSort(nums.slice(mid));
      return merge(left, right);
    }
    return mergeSort(nums);
  };