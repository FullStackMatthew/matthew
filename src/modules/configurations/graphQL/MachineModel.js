import { gql } from 'apollo-boost';

const machineModel = gql`
{
  machine_model {
        id
        name
        record_status
      }
}
`
const insertMachineModel = gql`
    mutation($input: MachineModelInputGraphType!) {
      insert_machine_model (input: $input) {
        id
        name
      }
    }
`
const updateMachineModel = gql`
    mutation($input: MachineModelInputGraphType!) {
      update_machine_model (input: $input) {
        id
        name
      }
    }
`
const deleteMachineModel = gql`
    mutation($id: ID!) {
      delete_machine_model (id: $id) 
    }
`

export { machineModel, insertMachineModel, updateMachineModel, deleteMachineModel };