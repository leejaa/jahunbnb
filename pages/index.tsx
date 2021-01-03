import { gql, useQuery, useReactiveVar } from '@apollo/client';
import _ from 'lodash';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { CarouselMulti, mockData } from '../components/Carousel/CarouselMulti';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { useDetechInitialRender } from '../hooks/useDetectInitialRender';
import { useFetch } from '../hooks/useFetch';
import { useGetLocation } from '../hooks/useGetLocation';
import { useSlideDiv } from '../hooks/useSlide';
import { SCREEN_SIZE, SELECT_CAFES } from '../lib/apolloClient';
import {
  ArrowRightIcon,
  Container, indexStyles, SCREEN_HEIGHT, SCREEN_WIDTH, SpanContainer,
} from '../utils/styles';
import { BREAKING_POINTS_TYPES } from '../utils/types';

const ADJUST_RATE = 1;

const IndexPage = ({ isServer } : { isServer: boolean }) => {
  const contentRef: React.MutableRefObject<HTMLDivElement | undefined> = useRef();
  const headerBoxRef: React.MutableRefObject<HTMLDivElement | undefined> = useRef();
  const selectCafes = useReactiveVar(SELECT_CAFES);
  const screenSize = useReactiveVar(SCREEN_SIZE);
  const breakingPoints: BREAKING_POINTS_TYPES = useMemo(() => [
    { top: 0, initial: false },
    { top: (screenSize.height ?? 0) * 0.48, initial: true },
    { top: (screenSize.height ?? 0) * 0.8, initial: false },
  ], [screenSize.height]);
  const { location } = useGetLocation();
  const triggerEvent = useCallback(({ top } : { top: number }) => {
    let newValue = ((_.find(breakingPoints, ['initial', true])?.top ?? 0) - top) / (_.find(breakingPoints, ['initial', true])?.top ?? 0);
    newValue = _.lt(newValue, 0) ? 0 : newValue;
    newValue = _.gt(newValue, 0.8) ? 1 : newValue;
    if (headerBoxRef?.current) {
      headerBoxRef.current.style.backgroundColor = `rgba(255,255,255,${newValue})`;
    }
  }, [breakingPoints]);
  useSlideDiv({ ref: contentRef as any, breakingPoints, triggerEvent });
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
      position="absolute"
      z={100}
      left="0px"
      top={`${_.find(breakingPoints, ['initial', true])?.top}px`}
      br="1.2rem"
      btrr="1.2rem"
      bc="white"
      pl="1rem"
    >
      <Container
        w="100%"
        h="5rem"
        dp="flex"
        fd="row"
        ai="center"
        jc="space-between"
      >
        <SpanContainer fs="1.5rem" fw="bold">대구</SpanContainer>
        <ArrowRightIcon style={{ marginRight: '1rem' }} />
      </Container>
      <Container w="100%" h="15rem">
        <CarouselMulti
          cardSize={16}
          contentArray={mockData}
          height={15}
        />
      </Container>
    </Container>
  ), [breakingPoints]);
  const fnDrawSearchBox = useCallback(() => (
    <Container
      w="100%"
      h="7%"
      dp="flex"
      fd="row"
      jc="center"
      ai="center"
      bc="rgba(255,255,255,0)"
      ref={headerBoxRef}
      z={200}
    >
      <Container w="90%" h="80%">
        <Header />
      </Container>
    </Container>
  ), []);
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
      {fnDrawSearchBox()}
      {fnDrawContents()}
      <Footer />
    </Container>
  );
};

IndexPage.getInitialProps = async ({ req }: { req: any }) => ({ isServer: !!req });

export default IndexPage;
