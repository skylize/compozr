
import curry from '../curry'
import test from 'tape'

const add = (a, b) => a + b

test('curry', t => {
  t.is(
    curry(2)(add, 5, 1),
    6,
    'provide all arguments immediately')

  t.is(
    curry(2)(add)(1)(2),
    3,
    'provide one argument at a time')

  t.is(
    curry(2)(add, 3)(4),
    7,
    'provide some arguments immediately')


  t.is(
    curry(2)(add)(2, 7),
    9,
    'only provide arguments later')

  t.is(
    curry(2)(add, 1, 2, 3),
    3,
    'quietly drops extraneous arguments')

  t.end()
})
