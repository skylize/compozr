import curry from './curry'

export const forEach = curry ( ( f, xs ) => {
  if ( !Array.isArray ( xs ) && typeof xs.forEach === 'function' )
    xs.forEach ( f )
  else if ( typeof xs[Symbol.iterator] === 'function' )
    for ( x of xs ) f ( x )
  else for ( const x in xs ) f ( xs[x] )
  return xs
} )

export default forEach