import { style } from '@vanilla-extract/css';

export const AddressPopComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '20rem',
  height: '8rem',
  borderRadius: '.25rem',
  position: 'absolute',
  backgroundColor: 'var(--color-white)',
  top: '2.5rem',
  left: '0rem',
  gap: '1rem',
  zIndex: 3,
});
