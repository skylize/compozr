import curry from './curry'

/* eslint-disable no-param-reassign */

export const reduce = curry(3) ( ( f, ys, xs ) => {
  if ( typeof xs.reduce === 'function' && !Array.isArray ( xs ) )
    return xs.reduce ( f, ys )
  if ( typeof xs[Symbol.iterator] === 'function' )
    for ( const x of xs )
      ys = f ( ys, x )
  else
    for ( const x in xs )
      ys = f ( ys, xs[x] )
  return ys
} )

export default reduce