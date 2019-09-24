import { gql } from 'apollo-boost';

const measureUnitCategory = gql`
{
  measure_unit_category {
    id
    name
  }
}
`
const insertMeasureUnitCategory = gql`
    mutation($input: MachineTypeInputGraphType!) {
      insert_measure_unit_category (input: $input) {
        id
        name
      }
    }
`
const updateMeasureUnitCategory = gql`
    mutation($input: MachineTypeInputGraphType!) {
      update_measure_unit_category (input: $input) {
        id
        name
      }
    }
`
const deleteMeasureUnitCategory = gql`
    mutation($id: ID!) {
      delete_measure_unit_category (id: $id) 
    }
`

export { measureUnitCategory, insertMeasureUnitCategory, updateMeasureUnitCategory, deleteMeasureUnitCategory };