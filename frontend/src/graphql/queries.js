/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      name
      gender
      birthDate
      address
      maritalStatus
      generalPractitioner
      managingOrganization
      createdAt
      updatedAt
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gender
        birthDate
        address
        maritalStatus
        generalPractitioner
        managingOrganization
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
