import { style } from '@vanilla-extract/css';

export const SideBarComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '20rem',
  height: '100%',
  backgroundColor: 'var(--color-white)',
  position: 'fixed',
  top: 0,
  left: '-20rem',
  zIndex: 3,
  overflow: 'auto',
  transition: 'left 1s ease-in',
});
