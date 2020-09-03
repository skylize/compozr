
import curry from './curry'

export const compose = curry(2) ( 
  (f, g) => x => f(g(x)) )

export const composeAll = ( ...fs ) => 
  fs.reduce ( compose )

export default compose
