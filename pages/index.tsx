import { gql, useQuery, useReactiveVar } from '@apollo/client';
import _ from 'lodash';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { useFetch } from '../hooks/useFetch';
import { useGetLocation } from '../hooks/useGetLocation';
import { useSlideDiv } from '../hooks/useSlide';
import { SCREEN_SIZE, SELECT_CAFES } from '../lib/apolloClient';
import {
  Container, indexStyles, SCREEN_HEIGHT, SCREEN_WIDTH,
} from '../utils/styles';
import { BREAKING_POINTS_TYPES } from '../utils/types';

const ADJUST_RATE = 1;
// const BREAKING_POINTS: BREAKING_POINTS_TYPES = [
//   { top: SCREEN_HEIGHT * 0.48, initial: true },
//   { top: SCREEN_HEIGHT * 0.8, initial: false },
// ];

const IndexPage = () => {
  const contentRef = useRef<React.MutableRefObject<HTMLDivElement | undefined>>();
  const selectCafes = useReactiveVar(SELECT_CAFES);
  const screenSize = useReactiveVar(SCREEN_SIZE);
  const BREAKING_POINTS: BREAKING_POINTS_TYPES = useMemo(() => [
    { top: 0, initial: false },
    { top: (screenSize.height ?? 0) * 0.48, initial: true },
    { top: (screenSize.height ?? 0) * 0.8, initial: false },
  ], [screenSize.height]);
  const { location } = useGetLocation();
  useSlideDiv({ ref: contentRef as any, breakingPoints: BREAKING_POINTS });
  const initialAction = useCallback(async () => {
    if (_.isEmpty(selectCafes) && !_.isUndefined(location)) {
      const data = await useFetch({
        url: `https://dapi.kakao.com/v2/local/search/category.json?category\_group\_code=FD6&radius=20000&x=${location?.longitude}&y=${location?.latitude}`,
        method: 'GET',
      });
      SELECT_CAFES(data);
    }
  }, [location, selectCafes]);
  const fnDrawContents = useCallback(() => (
    <Container
      ref={contentRef}
      w="100%"
      h="2000px"
      border={1}
      position="absolute"
      z={100}
      left="0px"
      top={`${_.find(BREAKING_POINTS, ['initial', true])?.top}px`}
      br="1.2rem"
      btrr="1.2rem"
      bc="white"
    />
  ), [BREAKING_POINTS]);
  // useEffect(() => {
  //   initialAction();
  // }, [initialAction]);
  return (
    <Container
      w={`${screenSize.width * ADJUST_RATE}px`}
      h={`${screenSize.height * ADJUST_RATE}px`}
      border={1}
      position="relative"
      style={indexStyles.Container}
      bc="black"
    >
      <Container w="100%" h="7%" dp="flex" fd="row" jc="center" ai="center">
        <Container w="90%" h="80%">
          <Header />
        </Container>
      </Container>
      {fnDrawContents()}
      <Footer />
    </Container>
  );
};

export default IndexPage;
