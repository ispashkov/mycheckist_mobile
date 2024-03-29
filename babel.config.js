module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.tsx',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
