import { gql, useQuery, useReactiveVar } from '@apollo/client';
import _ from 'lodash';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useFetch } from '../hooks/useFetch';
import { useGetLocation } from '../hooks/useGetLocation';
import { SELECT_CAFES } from '../lib/apolloClient';

const IndexPage = () => {
  const selectCafes = useReactiveVar(SELECT_CAFES);
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
    initialAction();
  }, [initialAction]);
  return (
    <div><pre>{JSON.stringify(selectCafes, null, 2)}</pre></div>
  );
};

export default IndexPage;
