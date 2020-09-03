
import test from 'tape'
import forEach from '../for-each'

console.error ( `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!No tests written for \`forEach\`!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!` )

test.skip ( 'forEach', t => {} )

// Quick samples to think about building tests with
const a = [ 1, 2, 3 ]
const b = { a: 'a', b: 'b', c: 'c' }
const c = { forEach: f => f ( 'hello' ) }
const d = {
  *[Symbol.iterator] () {
    yield 1
    yield 2
    yield 3
  }
}