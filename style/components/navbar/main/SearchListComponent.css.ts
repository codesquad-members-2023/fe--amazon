import { style } from '@vanilla-extract/css';

export const SearchListComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  position: 'absolute',
  backgroundColor: 'tomato',
  height: '10rem',
  width: '100%',
  top: '2rem',
  overflowY: 'scroll',
});
