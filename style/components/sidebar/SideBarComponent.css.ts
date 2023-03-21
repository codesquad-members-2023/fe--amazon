import { style } from '@vanilla-extract/css';

export const SideBarComponentStyle = style({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '20rem',
  height: '100%',
  backgroundColor: 'var(--color-white)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
  overflow: 'auto',
});
