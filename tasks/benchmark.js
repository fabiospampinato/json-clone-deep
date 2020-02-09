
/* IMPORT */

const {default: cloneDeep} = require ( '../dist' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'json-clone-deep',
  fn: () => {
    cloneDeep ({ foo: 123, bar: [1, 2, '3'] });
  }
});
