import { style } from '@vanilla-extract/css';

export const DimLayerStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--color-black-tr40)',
  zIndex: 1,
  display: 'none',
});
