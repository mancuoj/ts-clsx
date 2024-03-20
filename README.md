# ts-clsx

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![coverage][codecov-src]][codecov-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

Rewrite [clsx](https://github.com/lukeed/clsx) in TypeScript, but no default export.

## Install

```shell
ni ts-clsx
```

## Usage

```ts
import { clsx } from 'ts-clsx'

clsx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya')
// => 'foo bar hello world cya'
```

```ts
// Lite version, accepts only string arguments
import { clsx } from 'ts-clsx/lite'

clsx('hello', true && 'foo', false && 'bar', { foo: true }, ['hello', ['world']])
// => "hello foo"
```

## Tailwind Support

1. VS Code + Tailwind Intellisense Extension
2. Add the following to your `settings.json`

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## License

[MIT](https://github.com/mancuoj/ts-clsx/blob/main/LICENSE) License © 2024-PRESENT [Mancuoj](https://github.com/mancuoj)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/ts-clsx?style=flat&colorA=18181b&colorB=1f6feb
[npm-version-href]: https://npmjs.com/package/ts-clsx
[npm-downloads-src]: https://img.shields.io/npm/dm/ts-clsx?style=flat&colorA=18181b&colorB=1f6feb
[npm-downloads-href]: https://npmjs.com/package/ts-clsx
[codecov-src]: https://img.shields.io/codecov/c/gh/mancuoj/ts-clsx/main?style=flat&colorA=18181b&colorB=1f6feb
[codecov-href]: https://codecov.io/gh/mancuoj/ts-clsx
[bundle-src]: https://img.shields.io/bundlephobia/minzip/ts-clsx?style=flat&colorA=18181b&colorB=1f6feb&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=ts-clsx
[license-src]: https://img.shields.io/github/license/mancuoj/ts-clsx.svg?style=flat&colorA=18181b&colorB=1f6feb
[license-href]: https://github.com/mancuoj/ts-clsx/blob/main/LICENSE
