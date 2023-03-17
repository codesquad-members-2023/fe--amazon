import { style } from '@vanilla-extract/css';

export const SearchBarComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const SearchBarInputComponentStyle = style({
  width: '45rem',
  height: '2rem',
  padding: '0 0 0 .75rem',
  border: '0',
  borderRadius: '.5rem 0 0 .5rem',
  backgroundColor: 'var(--color-white)',
  fontWeight: 'var(--weight-regular)',
  fontSize: 'var(--font-md)',
  color: 'var(--color-gray-600)',
  ':focus': {
    outline: 'none',
  },
});

export const SearchBarButtonComponentStyle = style({
  textAlign: 'center',
  width: '2rem',
  height: '2rem',
  borderRadius: '0 .5rem .5rem 0',
  backgroundColor: 'var(--color-orange-100)',
  cursor: 'pointer',
});
