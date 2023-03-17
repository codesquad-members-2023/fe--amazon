import { style } from '@vanilla-extract/css';

export const NavBarMainComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '3.5rem',
  padding: '.5rem 1rem',
  backgroundColor: 'var(--color-black)',
});
