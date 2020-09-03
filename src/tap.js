import curry from './curry'

export const tap = curry(2)( (f, x) => (f(x), x) )