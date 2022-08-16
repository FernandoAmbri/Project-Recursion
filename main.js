/**
 * FIBONACCI
 */

function fibs(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibsRec(num) {
  if (num <= 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

/*
 * MERGE SORT
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right, finalArr = []) {
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      finalArr.push(left[i]);
      i++;
    } else {
      finalArr.push(right[j]);
      j++;
    }
  }
  if (i === left.length) {
    finalArr.push(...right.slice(j));
  } else {
    finalArr.push(...left.slice(i));
  }

  return finalArr;
}

console.log(mergeSort([80, 2, -6, -20, 3, 18, 10, 30, 1, 9]));
