import _ from 'lodash';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  AIRBNB_GRAY,
  AIRBNB_PINK, Container, SCREEN_HEIGHT, SpanContainer,
} from '../../utils/styles';
import { CarouselMultiStyles, PictureImage, StarIcon } from './style';

type CarouselMultiPropsType = { imgUri: string, score: number, title: string, content: string }[];

export interface CarouselMultiProps {
    contentArray: CarouselMultiPropsType;
    cardSize: number;
    height: number
}

export const mockData: CarouselMultiPropsType = _.map(Array(10), (item) => ({
  imgUri: 'https://a0.muscache.com/im/pictures/miso/Hosting-26072666/original/ddedb203-f765-443d-a675-6f2490626036.jpeg?im_w=1440',
  score: 4.6,
  title: '아파트 전체 SinCheon 4(sa)',
  content: '동대구역1분 매일방역 [편안한]',
}));

const CarouselMultiComponent: React.FC<CarouselMultiProps> = ({
  contentArray = mockData,
  cardSize = 16,
  height = 12,
}) => {
  const wrapperRef: React.MutableRefObject<HTMLDivElement | undefined> = useRef();
  return (
    <Container
      ref={wrapperRef}
      w="100%"
      h={`${height}rem`}
      style={CarouselMultiStyles.Container}
    >
      <Container
        w={`${_.size(contentArray) * cardSize}rem`}
        h="100%"
        dp="flex"
        fd="row"
      >
        {
              _.map(contentArray, (item) => (
                <Container w={`${cardSize}rem`} h="100%">
                  <PictureImage src={item.imgUri} alt="숙소사진" />
                  <Container w="100%" h="30%">
                    <Container w="100%" h="30%" dp="flex" fd="row" ai="center">
                      <StarIcon />
                      <SpanContainer fs="0.8rem" fw="bold" ml="0.2rem">{item.score}</SpanContainer>
                    </Container>
                    <Container w="100%" h="40%">
                      <SpanContainer fs="0.9rem" fw="bold" ml="0.2rem">{item.title}</SpanContainer>
                    </Container>
                    <Container w="100%" h="30%">
                      <SpanContainer fs="0.8rem" fw="bold" ml="0.2rem" color={AIRBNB_GRAY}>{item.content}</SpanContainer>
                    </Container>
                  </Container>
                </Container>
              ))
          }
      </Container>
    </Container>
  );
};

export const CarouselMulti = React.memo(CarouselMultiComponent);
