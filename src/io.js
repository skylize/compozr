export const IO = ( f ) => ({
  map: g => IO ( () => g ( f () ) ),
  chain: g => IO ( g ( f () ) .run ),
  run: f ()
})
