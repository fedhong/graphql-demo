// graphql/schema.js
import {  
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import {info, infos} from './info'
import {student} from './student'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      student
    }
  })
})
