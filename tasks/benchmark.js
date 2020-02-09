
/* IMPORT */

const {default: deepClone} = require ( '../dist' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'json-deep-clone',
  fn: () => {
    deepClone ({ foo: 123, bar: [1, 2, '3'] });
  }
});
