import { gql } from 'apollo-boost';

const measureUnit = gql`
{
  measure_unit {
    id
    name
    category {
      id
      name
    }
  }
}
`
const insertMeasureUnit = gql`
    mutation($input: MachineTypeInputGraphType!) {
      insert_measure_unit (input: $input) {
        id
        name
        category {
            id
            name
        }
      }
    }
`
const updateMeasureUnit = gql`
    mutation($input: MachineTypeInputGraphType!) {
      update_measure_unit (input: $input) {
        id
        name
      }
    }
`
const deleteMeasureUnit = gql`
    mutation($id: ID!) {
      delete_measure_unit (id: $id) 
    }
`

export { measureUnit, insertMeasureUnit, updateMeasureUnit, deleteMeasureUnit };