module.exports = function (api) {

  api.cache(true);

  return {

    presets: ["babel-preset-expo"],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@routes': './src/routes'
          }
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development'
        },

      ],
      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin",

    ],

  };

}
