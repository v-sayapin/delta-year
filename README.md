<h1 align="center">
	Δ Y E A R
</h1>

<p align="center">
	The function returns the difference of <i>two dates</i> in the form of a <i>decimal year</i>
</p>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-ffcd28.svg)](LICENSE)

</div>

## Installation

Using [npm](https://github.com/npm/cli):
```bash
$ npm install delta-year
```

Using [yarn](https://github.com/yarnpkg/berry):
```bash
$ yarn add delta-year
```

Using [pnpm](https://github.com/pnpm/pnpm):
```bash
$ pnpm add delta-year
```

## Usage
Once the package is installed, you can import the library using `import` approach:
```js
import getDeltaYear from 'delta-year';
```

You can also import `type DateTime` in `TypeScript` modules:
```ts
import getDeltaYear, { type DataTime } from 'delta-year';
```

Use the `getDeltaYear` function to compare two dates:
```ts
getDeltaYear('2020.01.01', new Date('2022.07.01'));
// output: 2.4952120383036935
```

⚠️ _WARNING_:
The dt passed to the first argument must be less than or equal to the dt passed to the second argument:
```ts
getDeltaYear('2022.01.01', '2020.01.01');
// output: Uncaught Error: The dtStart must be less than or equal to the dtEnd: 2022.01.01 > 2020.01.01
```

## License

[MIT](LICENSE).
