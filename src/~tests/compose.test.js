
import test from 'tape'
import compose, { composeAll } from '../compose'

const greet = name => `Hello ${name}.`
const exclaim = message => message.toUpperCase ()
const increment = x => x + 1
const double = x => x * 2
const id = a => a
const toArray = ( ...args ) => args
const ignoreArbitraryParams = ( a, _b, _c, _d, _e ) => a

test ( 'compose', t => {

  t.is (
    compose ( exclaim, greet ) ( 'Bob' ),
    'HELLO BOB.',
    'composes 2 functions' )

  t.deepEqual (
    compose ( toArray, id ) ( 1 ),
    [ 1 ],
    'handles functions with rest parameter in signature' )

  t.is (
    compose ( id, ignoreArbitraryParams ) ( 1 ),
    1,
    'does not choke on multiple arguments in signature' )

  t.end ()
} )

test ( 'composeAll', t => {
  const incrementers = new Array ( 5 ) .fill ( increment )

  t.is (
    composeAll ( ...incrementers ) ( 10 ),
    15,
    `composes numerous (${ incrementers.length }) functions` )

  t.is (
    composeAll (  increment, double ) ( 3 ),
    7,
    'composes from right to left'
  )

  t.deepEqual (
    composeAll ( toArray, id ) ( 1 ),
    [ 1 ],
    'handles functions with rest parameter in signature' )

  t.is (
    composeAll ( id, ignoreArbitraryParams ) ( 1 ),
    1,
    'does not choke on multiple arguments in signature' )

  t.end ()
} )
