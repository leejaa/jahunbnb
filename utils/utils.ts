import _ from 'lodash';

export const fnFindClosestNumber = ({ num, arr } : { num: number, arr: number[] }) => {
  let curr = arr[0];
  let diff = Math.abs(num - curr);
  // eslint-disable-next-line no-plusplus
  for (let val = 0; val < arr.length; val++) {
    const newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = arr[val];
    }
  }
  return curr;
};
export const fnFindClosestIndex = ({ array, targetNumber } : { array: number[], targetNumber: number }) => {
  let index = 0;
  // eslint-disable-next-line no-plusplus
  for (let val = 0; val < array.length; val++) {
    if (_.lt(targetNumber, array[val])) {
      break;
    }
    index += 1;
  }
  return index;
};
