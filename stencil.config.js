exports.config = {
  outputTargets: [
    {
      type: 'www' ,
      dir: 'docs'
    }
  ]
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
};
