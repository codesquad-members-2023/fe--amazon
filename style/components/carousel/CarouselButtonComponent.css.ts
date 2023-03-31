import { style } from '@vanilla-extract/css';

export const CarouselButtonComponentStyle = style({
  position: 'fixed',
  display: 'block',
  fontWeight: 'var(--weight-regular)',
  width: '5rem',
  height: '15.5rem',
  top: '5.5rem',
  zIndex: '10',
  ':hover': {
    border: '2px solid blue',
    filter: 'drop-shadow(2px 2px 0px white)',
  },
});
