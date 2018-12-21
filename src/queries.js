import { gql } from 'apollo-boost'

export const GET_NAMES = gql`
  query {
    allNameses {
      id
      name
    }
  }
`

window.GET_NAMES = GET_NAMES

export const ADD_NAME = gql`
  mutation createNames($name: String!) {
    createNames(name: $name) {
      name
      id
    }
  }
`

export const UPDATE_NAME = gql`
  mutation updateNames($id: ID!, $name: String!) {
    updateNames(id: $id, name: $name) {
      name
      id
    }
  }
`

export const DELETE_NAME = gql`
  mutation deleteNames($id: ID!) {
    deleteNames(id: $id) {
      name
      id
    }
  }
`
