
import test from 'tape'
import { just, nothing, maybe, Just, Nothing, Maybe } from '../maybe.js'

// const justApplicator = value => value
// const maybeResolver = maybe(defaultValue, justApplicator)
const defaultValue = 'nothing to see'
const just2 = just(2)
const add1 = x => x + 1
const id = x => x

test('maybe tools', t => {
  maybe
  t.end()
})

test('just', t => {
  t.is( just2 instanceof Maybe, true, 'is a Maybe' )
  t.is( just2 instanceof Just, true, 'is a Just' )
  t.is( maybe( defaultValue, id, just2.map(add1) ), 3, 'maps a function' )
  t.end()
})

test('nothing', t => {
  t.is( nothing instanceof Maybe, true, 'is a Maybe' )
  t.is( nothing instanceof Nothing, true, 'is a Nothing' )
  t.is( maybe( defaultValue, id, nothing.map(add1) ),
    defaultValue, 'maps a nothing' )
  t.end()
})

// test('map', t => {
//   const just2 = just(2)
//   const add1 = number => number + 1
//
//   t.is(maybeResolver(just2.map(add1)), 3)
//   t.is(maybeResolver(nothing.map(add1)), 'nothing to see')
//   t.end()
// })
//
// test('chain', t => {
//   const justHello = just('hello')
//
//   const toUpperMaybe = string => just(string.toUpperCase())
//   const returnNothing = _ => nothing
//
//   t.is(maybeResolver(justHello.chain(toUpperMaybe)), 'HELLO')
//   t.is(maybeResolver(nothing.chain(returnNothing)), 'nothing to see')
//   t.end()
// })
