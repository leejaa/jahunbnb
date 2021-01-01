/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { BREAKING_POINTS_TYPES } from '../utils/types';

let currentPageY: number;
let newTop: number;
let isDragging: boolean = false;
export const useSlideDiv = ({ ref, breakingPoints }
     : { ref: React.MutableRefObject<HTMLDivElement | undefined>, breakingPoints: BREAKING_POINTS_TYPES }) => {
  const onMouseDown = useCallback((e: any) => {
    isDragging = true;
    currentPageY = e.pageY;
    if (ref?.current) {
      ref.current.style.top = `${_.find(breakingPoints, ['initial', true])?.top}px`;
    }
  }, [breakingPoints, ref]);
  const onMouseMove = useCallback((e: any) => {
    if (isDragging) {
      if (ref?.current) {
        newTop = parseFloat(_.replace(ref?.current?.style.top ?? '', 'px', '')) + (e.pageY - currentPageY);
        ref.current.style.top = `${newTop}px`;
        currentPageY = e.pageY;
      }
    }
  }, [ref]);
  const onMouseUp = useCallback(() => {
    isDragging = false;
  }, []);
  useEffect(() => {
    ref.current?.addEventListener('touchstart', onMouseDown);
    ref.current?.addEventListener('touchmove', onMouseMove);
    ref.current?.addEventListener('touchend', onMouseUp);
    return (() => {
      ref.current?.removeEventListener('mousedown', onMouseDown);
      ref.current?.removeEventListener('mousemove', onMouseMove);
      ref.current?.removeEventListener('mouseup', onMouseUp);
    });
  }, []);
};
