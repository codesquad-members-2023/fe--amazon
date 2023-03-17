import { style } from '@vanilla-extract/css';

export const NavBarSubComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '2rem',
  padding: '0 1rem',
  backgroundColor: 'var(--color-gray-900)',
  gap: '1rem',
});
