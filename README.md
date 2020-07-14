# @segma/snippet

## 简介

常用的代码片段

## 仓库地址

```bash
https://github.com/RanSatious/segma-snippet
```

## 快速使用

```bash
npm config set registry http://npm.segma.tech/
npm i @segma/snippet
```

## utils 工具函数

### copyText

复制文本到剪贴板

**定义**

```typescript
function copyText(content: string): boolean;
```

**使用**

```typescript
import { copyText } from '@segma/snippet';

copyText('text to be copied');
```

### distinct

数组去重

**定义**

```typescript
function distinct<T>(arr: Array<T>, selector?: (d: T) => unknown): Array<T>;
```

**使用**

```typescript
import { distinct } from '@segma/snippet';

distinct([1, 2, 1]);
// [1,2]

distinct([{ a: 1 }, { a: 1 }, { a: 2 }], d => d.a);
// [{ a: 1 }, { a: 2 }];
```

### filterQuery

根据条件过滤对象

**定义**

```typescript
function filterQuery(query: any, filter: (value: any, key: string) => boolean = d => !!d): any;
```

**使用**

```typescript
import { filterQuery, isNil } from '@segma/snippet';

filterQuery({ a: 1, b: null, c: undefined, d: 0, e: '' });
filterQuery({ a: 1, b: null, c: undefined, d: 0, e: '' }, (value, key) => {
    return !isNil(value) && key !== 'e';
});

// { a: 1 }
// { a: 1, d: 0 }
```

### isNil

判断一个变量是否为 `null` 或 `undefined`

**定义**

```typescript
function isNil(value: any): boolean;
```

**使用**

```typescript
import { isNil } from '@segma/snippet';

isNil(null);
// true

isNil(undefined);
// true

isNil(0);
// false
```

### sleep

等待一段时间

**定义**

```typescript
function sleep(interval: number): Promise<void>;
```

**使用**

```typescript
import { sleep } from '@segma/snippet';

async function request() {
    await sleep(1000);
    // some action
}
```

### uid

简单的 id 生成器

**定义**

```typescript
function uid(len: number = 10): string;
```

**使用**

```typescript
import { uid } from '@segma/snippet';

uid();
// 'cXqJlJFGoW'

uid(6);
// 'kUViQ8'
```

## format 格式化函数

### formatSize

格式化尺寸大小

**定义**

```typescript
function formatSize(size: number, option?: ISizeOption): string;

interface ISizeOption {
    // 尺寸单位
    units?: Array<string>;
    // 传入非数字时返回的结果
    empty?: string;
    // 传入0时返回的结果
    zero?: string;
    // 需要保留的小数位数
    digit?: number;
}

// 默认配置
const defaultOption = {
    units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB'],
    empty: '--',
    zero: '0B',
    digit: 2,
};
```

**使用**

```typescript
import { formatSize } from '@segma/snippet';

formatSize(null);
formatSize(0);
formatSize(1024);
formatSize(Math.pow(1024, 3));

// '--'
// '0B'
// '1.00KB'
// '1.00GB'
```

### formatTimeSpan

格式化时间差

**定义**

```typescript
function formatTimeSpan(span: number): string;
```

**使用**

```typescript
import { formatTimeSpan } from '@segma/snippet';

formatTimeSpan(1028);
formatTimeSpan(1000 * 60 * 60 * 28 + 1000 * 60 * 12);

// '1s28ms'
// '1d4h12m'
```

## 文件函数

### downloadBlob

**定义**

```typescript
function downloadBlob(content: Blob, name: string): void;
function downloadBlob(array: ArrayBuffer, name: string, mime: string): void;
```

**使用**

```typescript
import { downloadBlob } from '@segma/snippet';

let array = await fetchRemoteData('http://remote.url');
downloadBlob(array, 'file.name');

// MIME 类型参考
// https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
downloadBlob(array, 'image.jpeg', 'image/jpeg');
downloadBlob(array, 'file.zip', 'application/zip');
```

## 数学函数

### sum

计算数组之和

**定义**

```typescript
function sum(values: number[]): number;
```

**使用**

```typescript
import { sum } from '@segma/snippet';

sum([1, 2, 3]);
// 6
```

### sumBy

计算数组指定元素之和

**定义**

```typescript
function sumBy<T>(values: T[], selector: (item: T) => number): number;
```

**使用**

```typescript
import { sumBy } from '@segma/snippet';

sumBy([1, 2, 3], d => d * 2);
// 12

sumBy([{ a: 1 }, { a: 2 }, { a: 3 }], d => d.a);
// 6
```
