
import test from 'tape'
import reduce from '../reduce'

console.error ( `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!No tests written for \`reduce\` !
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!` )

test.skip ( 'reduce', t => {} )


// some test ideas

const sum = ( a, b ) => a + b

const a = [ 1, 2, 3 ]
reduce ( sum, 0 ) ( a )

const b = { a: 'a', b: 'b', c: 'c' }
reduce ( sum, '', b )

const c = { reduce: ( f, z ) => [ f.toString (), z ] }
reduce ( sum, ' yay', c )

const d = {
  *[Symbol.iterator] () {
    yield 1
    yield 2
    yield 3
  }
}
reduce ( sum, 0, d )
