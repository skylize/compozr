
/** ******************************************************************
 * Either: right or left branching monad.                           *
 * Left branch locks down a single value upon entering left branch. *
 * While right branch continues passing through returns..           *
 ******************************************************************* */

import curry from './curry'

// Either Right.
//
const Right = x => ({
  map: f => Right(f(x)), //  Maps to another Right.
  ap: F => F.map(x), //      Applies map of provided functor to own contents.
  chain: f => f(x), //       Chains to Either.
  fold: (_, g) => g(x), //   Folds to right-side callback.
})

// Either Left.
//
const Left = x => ({
  map: _ => Left(x), //      Maps to itself.
  ap: _ => Left(x), //       Applies to itself.
  chain: _ => Left(x), //    Chains to itself.
  fold: (f, _) => f(x), //   Folds to left-side callback.
})

// Curried function to make an Either from to 2 choices and a predicate.
// Left for false, right for true.
//
const toEither = curry((left, right, predicate) =>
  (predicate ? Right(right) : Left(left)))

module.exports = {
  Right,
  Left,
  toEither
}
