import _ from 'lodash';
import { useEffect, useState } from 'react';

let interval: any;
export const useRepeatAction = ({ action, time = 1000 } : { action: any, time?: number }) => {
  useEffect(() => {
    if (_.isUndefined(interval)) {
      interval = setInterval(action, time);
    }
  }, [action, time]);
};
