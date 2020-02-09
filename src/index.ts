
/* JSON CLONE DEEP */

function cloneDeep<T> ( x: T ): T {

  return JSON.parse ( JSON.stringify ( x ) );

}

/* EXPORT */

export default cloneDeep;
