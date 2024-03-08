# ts-clsx

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Rewrite [clsx](https://github.com/lukeed/clsx) in TypeScript.

## Usage

```sh
ni -D ts-clsx
```

```ts
import { clsx } from 'clsx'

clsx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya')
// => 'foo bar hello world cya'
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/ts-clsx?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/ts-clsx
[npm-downloads-src]: https://img.shields.io/npm/dm/ts-clsx?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/ts-clsx
[bundle-src]: https://img.shields.io/bundlephobia/minzip/ts-clsx?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=ts-clsx
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/ts-clsx
[license-src]: https://img.shields.io/github/license/mancuoj/ts-clsx.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/mancuoj/ts-clsx/blob/main/LICENSE
