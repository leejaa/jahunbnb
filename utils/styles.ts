import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

// 스크린 사이즈
export const SCREEN_WIDTH = typeof window !== 'undefined' ? window.outerWidth : 1920;
export const SCREEN_HEIGHT = typeof window !== 'undefined' ? window.outerHeight : 1080;

export const AIRBNB_PINK = '#F83E82';
export const AIRBNB_GRAY = '#4D4D4D';

export const Container : any = styled.div`
    width: ${({ w } : any) => w ?? `${SCREEN_WIDTH}px`};
    height: ${({ h } : any) => h ?? `${SCREEN_HEIGHT}px`};
    border: ${({ border = 0, boc } : any) => `${border ?? 0}px solid ${boc ?? 'black'}`};
    border-top-width: ${({ border = 0, btw } : any) => btw ?? border}px;
    border-bottom-width: ${({ border = 0, bbw } : any) => bbw ?? border}px;
    border-left-width: ${({ border = 0, blw } : any) => blw ?? border}px;
    border-right-width: ${({ border = 0, brw } : any) => brw ?? border}px;
    border-color: ${({ boc } : any) => boc ?? 'black'};
    display: ${({ dp } : any) => dp ?? 'flex'};
    justify-content: ${({ jc } : any) => jc ?? 'null'};
    align-items: ${({ ai } : any) => ai ?? 'null'};
    border-radius: ${({ br } : any) => br ?? '0px'};
    border-top-left-radius: ${({ br, btlr } : any) => br ?? (btlr ?? 0)}px;
    border-top-right-radius: ${({ br, btrr } : any) => br ?? (btrr ?? 0)}px;
    border-bottom-left-radius: ${({ br, bblr } : any) => br ?? (bblr ?? 0)}px;
    border-bottom-right-radius: ${({ br, bbrr } : any) => br ?? (bbrr ?? 0)}px;
    padding: ${({ pd } : any) => pd ?? '0px'};
    padding-right: ${({ pr, pd } : any) => pr ?? (pd ?? '0px')};
    padding-left: ${({ pl, pd } : any) => pl ?? (pd ?? '0px')};
    padding-top: ${({ pt, pd } : any) => pt ?? (pd ?? '0px')};
    padding-bottom: ${({ pb, pd } : any) => pb ?? (pd ?? '0px')};
    flex-direction: ${({ fd } : any) => fd ?? 'column'};
    flex-wrap: ${({ fw } : any) => fw ?? 'nowrap'};
    background-color: ${({ bc } : any) => bc ?? 'null'};
    opacity: ${({ opacity } : any) => opacity ?? 1};
    position: ${({ position } : any) => position ?? 'null'};
    transform: ${({ transform } : any) => transform ?? 'null'};
    z-index: ${({ z } : any) => z ?? 0};
    margin-top: ${({ mt } : any) => mt ?? '0px'};
    margin-left: ${({ ml } : any) => ml ?? '0px'};
    margin-right: ${({ mr } : any) => mr ?? '0px'};
    margin-bottom: ${({ mb } : any) => mb ?? '0px'};
    top: ${({ top } : any) => top ?? 'null'};
    left: ${({ left } : any) => left ?? 'null'};
    right: ${({ right } : any) => right ?? 'null'};
    bottom: ${({ bottom } : any) => bottom ?? 'null'};
    cursor: ${({ cursor } : any) => cursor ?? 'null'};
    animation: ${({ animation } : any) => animation ?? 'null'};
    :hover {
        background-color: ${({ hoverBc } : any) => hoverBc ?? 'null'};
    }
`;
export const SpanContainer : any = styled.span`
    font-size: ${({ fs }: any) => fs ?? '10px'};
    color: ${({ color }: any) => color ?? 'black'};
    font-weight: ${({ fw }: any) => fw ?? 'normal'};
    font-family: ${({ ff }: any) => ff ?? 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'};
    margin-top: ${({ mt } : any) => mt ?? '0px'};
    margin-left: ${({ ml } : any) => ml ?? '0px'};
    margin-right: ${({ mr } : any) => mr ?? '0px'};
    margin-bottom: ${({ mb } : any) => mb ?? '0px'};
`;
export const InputContainer : any = styled.input`
    width: ${({ w } : any) => w ?? `${SCREEN_WIDTH}px`};
    height: ${({ h } : any) => h ?? `${SCREEN_HEIGHT}px`};
    display: ${({ dp } : any) => dp ?? 'inline-block'};
    border-width: ${({ bw } : any) => bw ?? 0}px;
    border-color: ${({ boc } : any) => boc ?? 'null'};
    font-size: ${({ fs }: any) => fs ?? '10px'};
    color: ${({ color }: any) => color ?? 'black'};
    background-color: ${({ bc } : any) => bc ?? 'null'};
    text-align: ${({ ta } : any) => ta ?? 'left'};
    z-index: ${({ z } : any) => z ?? 0};
    :focus {
        outline-color: ${({ oc }: any) => oc ?? 'null'};
        background-color: ${({ focusBc } : any) => `${focusBc} !important` ?? 'null'};
        outline: none;
        opacity: ${({ hoverOpacity } : any) => hoverOpacity ?? 1};
    }
    :hover {
        background-color: ${({ hbc }: any) => hbc ?? 'black'};
    }
    ::placeholder {
        color: ${({ placeholderColor }: any) => placeholderColor ?? 'null'};
    }
`;
export const ArrowRightIcon = styled(IoIosArrowForward)`
    font-size: 2rem;
`;

export const indexStyles = {
  Container: {
    overscrollBehavior: 'none',
    overflowY: 'hidden',
  },
} as {
    Container: React.CSSProperties,
};
