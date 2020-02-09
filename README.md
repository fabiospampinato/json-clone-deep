# JSON Clone Deep

Deep cloning based on JSON.

It can only deep-clone JSON-serializable values.

## Install

```sh
npm install --save json-clone-deep
```

## Usage

```ts
import cloneDeep from 'json-clone-deep';

cloneDeep ({ foo: 123, bar: [1, 2, '3'] }); // => { foo: 123, bar: [1, 2, '3'] }
```

## License

MIT © Fabio Spampinato
