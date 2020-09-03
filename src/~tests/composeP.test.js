
import test from 'tape'
import composeP from '../composeP'

test ( 'composeP', async t => {
  // Start with some helpers to allow the actual assertions
  // to be clean and pretty

  // Extract actual result from inside it's promise and
  // pass it to an assertion.
  //
  const asserterP = asserter => ( promisedActual, expected, message ) =>
    promisedActual //
      .then ( actual => asserter ( actual, expected, message ) )

  // promise versions
  //
  const isP = asserterP ( t.is )
  const deepEqP = asserterP ( t.deepEqual )

  // collect all promised tests into array to pass to Promise.all
  //
  const testPromises = []

  // reduce noise even further by auto-pushing promises
  // assertion promises into the tests array
  //
  const pushIsP = ( ...args ) => testPromises.push ( isP ( ...args ) )
  const pushDeepEqP = ( ...args ) => testPromises.push ( deepEqP ( ...args ) )

  // ****************************************** //

  const greet = name => `Hello ${name}.`
  const exclaim = message => message.toUpperCase ()

  pushIsP (
    composeP ( exclaim, greet ) ( 'Bob' ),
    'HELLO BOB.',
    'composes 2 functions and returns promise'
  )

  const add1 = x => x + 1
  const identityP = x => Promise.resolve ( x )

  pushIsP (
    composeP ( identityP, add1, add1 ) ( 35 ),
    37,
    'composes 3 functions with first returning promise'
  )

  pushIsP (
    composeP ( add1, add1, add1, add1, identityP ) ( 10 ),
    14,
    'composes 5 functions with last returning promise'
  )

  const toArray = ( ...args ) => args

  pushDeepEqP (
    composeP ( toArray, identityP ) ( 1 ),
    [ 1 ],
    'handles functions with rest parameter in signature'
  )

  const ignoreAllButFirstArg = ( a, _b, _c, _d, _e ) => a

  pushIsP (
    composeP ( identityP, ignoreAllButFirstArg ) ( 1 ),
    1,
    'handles functions with multiple arguments in signature' )

  await Promise.all ( testPromises )
  return t.end ()
} )
