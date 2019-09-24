
import { gql } from 'apollo-boost';

const machineType = gql`
{
  machine_type {
        id
        name
        record_status
      }
}
`
const insertMachineType = gql`
    mutation($input: MachineTypeInputGraphType!) {
      insert_machine_type (input: $input) {
        id
        name
      }
    }
`
const updateMachineType = gql`
    mutation($input: MachineTypeInputGraphType!) {
      update_machine_type (input: $input) {
        id
        name
      }
    }
`
const deleteMachineType = gql`
    mutation($id: ID!) {
      delete_machine_type (id: $id) 
    }
`

export { machineType, insertMachineType, updateMachineType, deleteMachineType };