
/* IMPORT */

import {describe} from 'fava';
import cloneDeep from '../dist/index.js';

/* MAIN */

describe ( 'JSON Clone Deep', it => {

  it ( 'works', t => {

    t.deepEqual ( cloneDeep ({ foo: 123, bar: [1, 2, '3'] }), { foo: 123, bar: [1, 2, '3'] } );

  });

});
