import _ from 'lodash';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useRepeatAction } from '../../hooks/useRepeatAction';

import { Container, SpanContainer } from '../../utils/styles';
import {
  ArrowLeftIcon, FilterIcon, FONT_SIZE, GRAY, MovingContainer, styles,
} from './style';

const MAX_TEXT2_INDEX = 1;

export interface HeaderProps {
    text1?: string,
    text2List?: string[]
}

let tempIndex: number = 0;
export const Header: React.FC<HeaderProps> = ({
  text1 = '근처 추천 장소',
  text2List = ['날짜입력', '게스트추가'],
}) => {
  const [text2Index, setText2Index] = useState(0);
  const fnPlayChangeText2 = useCallback(() => {
    tempIndex = _.gt(tempIndex + 1, MAX_TEXT2_INDEX) ? 0 : _.cloneDeep(tempIndex) + 1;
    setText2Index(tempIndex);
  }, []);
  useRepeatAction({ action: fnPlayChangeText2 });
  return (
    <Container w="100%" h="100%" dp="flex" fd="row" ai="center" jc="space-between" br="5rem" style={styles.ParentContainer}>
      <Container w="35%" h="100%" dp="flex" fd="row" ai="center" jc="space-around" pt="0.4rem" pb="0.4rem">
        <ArrowLeftIcon />
        <SpanContainer fs={FONT_SIZE} fw="bold">{text1}</SpanContainer>
      </Container>
      <Container w="30%" h="100%" dp="flex" fd="row" ai="center" jc="space-around">
        <Container w="60%" h="100%" position="relative">
          {
            _.isEqual(text2Index, 0) && (
            <MovingContainer direction="TOP">
              <SpanContainer fs={FONT_SIZE} fw="bold" color={GRAY}>{text2List[text2Index]}</SpanContainer>
            </MovingContainer>
            )
          }
          {
            _.isEqual(text2Index, 1) && (
            <MovingContainer direction="BOTTOM">
              <SpanContainer fs={FONT_SIZE} fw="bold" color={GRAY}>{text2List[text2Index]}</SpanContainer>
            </MovingContainer>
            )
          }
        </Container>
        <SpanContainer fs={FONT_SIZE} fw="bold">|</SpanContainer>
        <FilterIcon />
      </Container>
    </Container>
  );
};
