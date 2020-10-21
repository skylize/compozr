import curry from './curry'

export const callProp = curry(2)(
  (arity, property) => curry(arity + 1)(
    (...xs) => 
      xs[arity][property](...xs.slice(0, arity))))