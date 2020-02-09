
/* JSON DEEP CLONE */

function deepClone<T> ( x: T ): T {

  return JSON.parse ( JSON.stringify ( x ) );

}

/* EXPORT */

export default deepClone;
