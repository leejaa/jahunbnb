/* eslint-disable no-param-reassign */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import _ from 'lodash';
import { BREAKING_POINTS_TYPES } from '../utils/types';
import { fnFindClosestNumber } from '../utils/utils';

let currentScreenY: number;
let newTop: number;
let isDragging: boolean = false;
export const useSlideDiv = ({ ref, breakingPoints, triggerEvent }
     : { ref: React.MutableRefObject<HTMLDivElement | undefined>, breakingPoints: BREAKING_POINTS_TYPES, triggerEvent?: Function }) => {
  const topRate = useMemo(() => {
    let result = ((_.find(breakingPoints, ['initial', true])?.top ?? 0) - newTop) / (_.find(breakingPoints, ['initial', true])?.top ?? 0);
    result = _.lt(result, 0) ? 0 : result;
    return result;
  }, [breakingPoints]);
  const onTouchStart = useCallback((e: TouchEvent) => {
    isDragging = true;
    currentScreenY = e.targetTouches?.[0]?.screenY;
    if (ref?.current && _.isEmpty(ref.current.style.top)) {
      ref.current.style.top = `${_.find(breakingPoints, ['initial', true])?.top}px`;
    }
  }, [breakingPoints, ref]);
  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      if (ref?.current) {
        newTop = parseFloat(_.replace(ref?.current?.style.top ?? '', 'px', '')) + (e.targetTouches?.[0]?.screenY - currentScreenY);
        if (!_.isUndefined(triggerEvent)) {
          triggerEvent({ top: newTop });
        }
        ref.current.style.top = `${newTop}px`;
        currentScreenY = e.targetTouches?.[0]?.screenY;
      }
    }
  }, [ref, triggerEvent]);
  const onTouchEnd = useCallback((e: TouchEvent) => {
    if (ref?.current) {
      newTop = fnFindClosestNumber({ num: newTop, arr: _.map(breakingPoints, (item) => item.top) });
      if (!_.isUndefined(triggerEvent)) {
        triggerEvent({ top: newTop });
      }
      ref.current.style.top = `${newTop}px`;
    }
    isDragging = false;
  }, [breakingPoints, ref, triggerEvent]);
  useEffect(() => {
    ref.current?.addEventListener('touchstart', onTouchStart);
    ref.current?.addEventListener('touchmove', onTouchMove);
    ref.current?.addEventListener('touchend', onTouchEnd);
    return (() => {
      ref.current?.removeEventListener('touchstart', onTouchStart);
      ref.current?.removeEventListener('touchmove', onTouchMove);
      ref.current?.removeEventListener('touchend', onTouchEnd);
    });
  }, [onTouchEnd, onTouchMove, onTouchStart, ref]);
  return {
    topRate,
  };
};
