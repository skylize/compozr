
import curry from './curry'

const id = x => x

// Empty functions only purpose is to create

/* eslint-disable no-empty-function */
export function Maybe (){}

export function Just (){}
Just.prototype = Object.create(Maybe.prototype, {})
Just.prototype.constructor = Just

export function Nothing (){}
Nothing.prototype = Object.create(Maybe.prototype, {})
Nothing.prototype.constructor = Nothing
/* eslint-enable */

export const just = x => Object.create(Just.prototype, {
  value: { enumerable: true, value: x },
  map: { value: transform => just(transform(x)) },
  chain: { value: transform => transform(x) },
  fold: { value: (_, transformJust) => transformJust(x) },
  ap: { value: m => m.map(f => f(x)) }
})

export const nothing = Object.create(Nothing.prototype, {
  map: { value: _ => nothing },
  chain: { value: _ => nothing },
  fold: { value: (transformNothing, _) => transformNothing(nothing)},
  ap: { value: _ => nothing },
  toString: { value: 'Nothing()' }
})

// maybe :: b -> (a -> b) -> Maybe a -> b
export const maybe = curry(3)(
  (defaultVal, f, m) =>
    m instanceof Nothing ? defaultVal : m.chain(f)
)

export const getOrElse = m =>
  m instanceof Nothing === true
    ? nothing
    : m.chain(id)

export const catMaybes = ms =>
  ms.map(m => m.chain(id))

export const mapMaybe = curry(2)(
  (f, ms) => ms.reduce((xs, m) => {
    if (m instanceof Just)
      xs.push(Just.value)
    return xs
  }, [])
)

export const isJust = m => m instanceof Just
export const isNothing = m => m instanceof Nothing
