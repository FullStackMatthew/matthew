import { gql } from 'apollo-boost';

const machineFleet = gql`
{
  machine_fleet {
    id
    name
  }
}
`
const insertMachineFleet = gql`
    mutation($input: MachineFleetInputGraphType!) {
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
const updateMachineFleet = gql`
    mutation($input: MachineFleetInputGraphType!) {
      update_machine_fleet (input: $input) {
        id
        name
      }
    }
`
const deleteMachineFleet = gql`
    mutation($id: ID!) {
      delete_machine_fleet (id: $id) 
    }
`

export { machineFleet, insertMachineFleet, updateMachineFleet, deleteMachineFleet };