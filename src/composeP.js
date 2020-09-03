
export const composeP = ( ...fs ) => x =>
  fs.reduceRight ( ( f, g ) => f.then ( g ), Promise.resolve ( x ) )

export default composeP
