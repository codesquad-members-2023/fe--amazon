import { style } from '@vanilla-extract/css';

export const SideBarMainComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--color-white)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
});
