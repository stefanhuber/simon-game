import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/simon-game',
      dir: 'docs',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}',
          'https://fonts.googleapis.com/css?family=Orbitron'
        ]
      }
    }
  ]
};
