import { userSchema } from './userSchema'
import { transactionSchema } from './transactionSchema'

export const schemaTypes = [userSchema, transactionSchema]
// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([userSchema, transactionSchema]),
// })