import React from 'react';

import { Container, SpanContainer } from '../../utils/styles';
import {
  ArrowLeftIcon, FilterIcon, FONT_SIZE, GRAY, styles,
} from './style';

export interface HeaderProps {
    text1?: string,
    text2List?: string[]
}

export const Header: React.FC<HeaderProps> = ({
  text1 = '근처 추천 장소',
  text2List = ['날짜 입력', '게스트 추가'],
}) => {
  const mode = 'storybook-button--secondary';
  return (
    <Container w="100%" h="100%" dp="flex" fd="row" ai="center" jc="space-between" br="5rem" style={styles.ParentContainer}>
      <Container w="35%" h="100%" dp="flex" fd="row" ai="center" jc="space-around" pt="0.4rem" pb="0.4rem">
        <ArrowLeftIcon />
        <SpanContainer fs={FONT_SIZE} fw="bold">{text1}</SpanContainer>
      </Container>
      <Container w="30%" h="100%" dp="flex" fd="row" ai="center" jc="space-around">
        <SpanContainer fs={FONT_SIZE} fw="bold" color={GRAY}>{text2List[0]}</SpanContainer>
        <SpanContainer fs={FONT_SIZE} fw="bold">|</SpanContainer>
        <FilterIcon />
      </Container>
    </Container>
  );
};
