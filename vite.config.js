import dotenv from 'dotenv';

export default {
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@style': '/src/style',
      '@scripts': '/src/scripts',
      '@constant': '/src/constant.js',
      '@data': '/src/data',
      '@assets': '/public/assets',
      '@utils': '/src/utils.js',
      '@apis': '/src/apis',
    },
  },
};

dotenv.config();
