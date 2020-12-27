import { gql, useQuery, useReactiveVar } from '@apollo/client';
import _ from 'lodash';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Header } from '../components/Header/Header';
import { useFetch } from '../hooks/useFetch';
import { useGetLocation } from '../hooks/useGetLocation';
import { SCREEN_SIZE, SELECT_CAFES } from '../lib/apolloClient';
import { Container, SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/styles';

const ADJUST_RATE = 1;

const IndexPage = () => {
  const selectCafes = useReactiveVar(SELECT_CAFES);
  const screenSize = useReactiveVar(SCREEN_SIZE);
  const { location } = useGetLocation();
  const initialAction = useCallback(async () => {
    if (_.isEmpty(selectCafes) && !_.isUndefined(location)) {
      const data = await useFetch({
        url: `https://dapi.kakao.com/v2/local/search/category.json?category\_group\_code=FD6&radius=20000&x=${location?.longitude}&y=${location?.latitude}`,
        method: 'GET',
      });
      SELECT_CAFES(data);
    }
  }, [location, selectCafes]);
  useEffect(() => {
    // initialAction();
  }, [initialAction]);
  return (
    <Container w={`${screenSize.width * ADJUST_RATE}px`} h={`${screenSize.height * ADJUST_RATE}px`}>
      <Container w="100%" h="7%" dp="flex" fd="row" jc="center" ai="center">
        <Container w="90%" h="80%">
          <Header />
        </Container>
      </Container>
    </Container>
  );
};

export default IndexPage;
