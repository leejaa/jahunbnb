import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { BiSearch, BiMessage } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import {
  AIRBNB_PINK, Container, SCREEN_HEIGHT, SpanContainer,
} from '../../utils/styles';
import { styles } from './style';

const FOOTER_HEIGHT = SCREEN_HEIGHT / 17;

export interface FooterProps {
    contentArray?: { name: string, select: boolean }[]
}

export const Footer: React.FC<FooterProps> = ({
  contentArray = [
    { name: '검색', select: true },
    { name: '저장 목록', select: false },
    { name: '여행', select: false },
    { name: '메시지함', select: false },
    { name: '프로필', select: false },
  ],
}) => {
  const fnDrawIcon = useCallback(({ name, select } : { name: string, select: boolean }) => {
    let result;
    const color = select ? AIRBNB_PINK : 'black';
    switch (name) {
      case '검색':
        result = (
          <BiSearch style={{ ...styles.Icon, color }} />
        );
        break;
      case '저장 목록':
        result = (
          <AiOutlineHeart style={{ ...styles.Icon, color }} />
        );
        break;
      case '여행':
        result = (
          <FaAirbnb style={{ ...styles.Icon, color }} />
        );
        break;
      case '메시지함':
        result = (
          <BiMessage style={{ ...styles.Icon, color }} />
        );
        break;
      case '프로필':
        result = (
          <CgProfile style={{ ...styles.Icon, color }} />
        );
        break;
      default:
        result = (
          <BiSearch />
        );
        break;
    }
    return result;
  }, []);
  return (
    <Container w="100%" h={`${FOOTER_HEIGHT}px`} position="fixed" left={0} bottom={0} dp="flex" fd="row" bc="white" z={200}>
      {
            _.map(contentArray, (item) => (
              <Container w={`${100 / _.size(contentArray)}%`} h="100%" dp="flex" fd="column">
                <Container w="100%" h="50%" dp="flex" ai="center" jc="center">
                  {fnDrawIcon({ name: item.name, select: item.select })}
                </Container>
                <Container w="100%" h="50%" dp="flex" ai="center" jc="center">
                  <SpanContainer fs="1rem" fw={item.select ? 'bold' : 'normal'}>{item.name}</SpanContainer>
                </Container>
              </Container>
            ))
        }
    </Container>
  );
};
