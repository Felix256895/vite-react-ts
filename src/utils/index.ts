function isString(type: string): boolean {
  return typeof type === 'string'
}

interface KeyValue<T, U> {
  key: T;
  value: U;
}

const person: KeyValue<string, number> = {
  key: 'John',
  value: 36,
}

type Cart<T> = { list: T[] } | T[];

let c1: Cart<string> = { list: ['John'] }
let c2: Cart<number> = [1, 2]