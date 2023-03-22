import { style } from '@vanilla-extract/css';

export const LoginPopSubComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '18rem',
  height: '17.5rem',
  borderRadius: '.25rem',
  position: 'absolute',
  backgroundColor: 'var(--color-white)',
  top: '8rem',
  left: '-10rem',
  transition: 'opacity 1s ease-in 1s',
  zIndex: 3,
});
