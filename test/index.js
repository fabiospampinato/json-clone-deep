
/* IMPORT */

import {describe} from 'ava-spec';
import {default as deepClone} from '../dist';

/* JSON DEEP CLONE */

describe ( 'JSON Deep Clone', it => {

  it ( 'works', t => {

    t.deepEqual ( deepClone ({ foo: 123, bar: [1, 2, '3'] }), { foo: 123, bar: [1, 2, '3'] } );

  });

});
