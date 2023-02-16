
/* IMPORT */

import benchmark from 'benchloop';
import cloneDeep from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000
});

benchmark ({
  name: 'json-clone-deep',
  fn: () => {
    cloneDeep ({ foo: 123, bar: [1, 2, '3'] });
  }
});
