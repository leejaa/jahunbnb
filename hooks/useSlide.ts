/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { BREAKING_POINTS_TYPES } from '../utils/types';
import { fnFindClosestNumber } from '../utils/utils';

let currentScreenY: number;
let newTop: number;
let isDragging: boolean = false;
export const useSlideDiv = ({ ref, breakingPoints }
     : { ref: React.MutableRefObject<HTMLDivElement | undefined>, breakingPoints: BREAKING_POINTS_TYPES }) => {
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
        ref.current.style.top = `${newTop}px`;
        currentScreenY = e.targetTouches?.[0]?.screenY;
      }
    }
  }, [ref]);
  const onTouchEnd = useCallback((e: TouchEvent) => {
    newTop = fnFindClosestNumber({ num: newTop, arr: _.map(breakingPoints, (item) => item.top) });
    if (ref?.current) {
      ref.current.style.top = `${newTop}px`;
    }
    isDragging = false;
  }, [breakingPoints, ref]);
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
};
