
/* IMPORT */

import benchmark from 'benchloop';
import cloneDeep from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'json-clone-deep',
  fn: () => {
    cloneDeep ({ foo: 123, bar: [1, 2, '3'] });
  }
});
