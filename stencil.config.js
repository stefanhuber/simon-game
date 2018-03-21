exports.config = {
  outputTargets: [
    {
      type: 'www' ,
      dir: 'docs' ,
      baseUrl : '/simon-game'
    }
  ]
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
};
