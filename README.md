# JSON Deep Clone

Deep cloning based on JSON.

It can only deep-clone JSON-serializable values.

## Install

```sh
npm install --save json-deep-clone
```

## Usage

```ts
import deepClone from 'json-deep-clone';

deepClone ({ foo: 123, bar: [1, 2, '3'] }); // => { foo: 123, bar: [1, 2, '3'] }
```

## License

MIT © Fabio Spampinato
