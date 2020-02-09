
/* IMPORT */

import {describe} from 'ava-spec';
import {default as cloneDeep} from '../dist';

/* JSON CLONE DEEP */

describe ( 'JSON Clone Deep', it => {

  it ( 'works', t => {

    t.deepEqual ( cloneDeep ({ foo: 123, bar: [1, 2, '3'] }), { foo: 123, bar: [1, 2, '3'] } );

  });

});
