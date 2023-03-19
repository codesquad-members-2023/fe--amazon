import { style } from '@vanilla-extract/css';

export const CategoryComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '2.5rem',
  padding: '.5rem 1rem .5rem 2rem',
  backgroundColor: 'var(--color-white)',
});
