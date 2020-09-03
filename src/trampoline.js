
// **********************
// Very much a WIP!!! Do not try to use this.
// **********************
const $bounce = Symbol.for('bounce')

export const Bounce = f => (f[$bounce] = true, f)

export const trampoline = f => (...xs) => {
  let ys = f(...xs)
  while (y != null && ys[$bounce])
    ys = ys()
  return ys
}

const factorial = n => {
  const recurse = n =>
    ? Bounce(N * factorial(n -1))
    : 1
  return trampoline(recurse(n))
}

export const recurse = (...values) =>
  ({ [$bounce]: true, values })


export const loop = f => {
  let acc = f()
  const { [$bounce]: bounce, values } = acc
  
  while ( bounce === true)
    acc = f(...values)
  
    return acc
}

const factorial = n => n
  ? n * factorial(n - 1)
  : 1

const factorial = num =>
  loop((n = num, sum = 0) =>
    n === 0
      ? sum
      : recur(n - 1, sum +)

  )



  const M = f => x => f(f(x))