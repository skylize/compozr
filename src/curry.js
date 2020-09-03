export const curry = arity => (f, ...xs) =>
  xs.length >= arity
    ? f(...xs)
    : (...ys) => curry(arity)(f, ...xs, ...ys)

export default curry
