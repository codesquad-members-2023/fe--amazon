import { style } from '@vanilla-extract/css';

export const LoginPopComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '18rem',
  height: '5.5rem',
  borderRadius: '.25rem',
  position: 'absolute',
  backgroundColor: 'var(--color-white)',
  top: '2.5rem',
  left: '-10rem',
  opacity: '0',
  transition: 'opacity 1s ease-in 1s',
});
