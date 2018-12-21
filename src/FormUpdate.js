import React from 'react'
import { Mutation } from 'react-apollo'
import { withState, compose } from 'recompose'
import { GET_NAMES, UPDATE_NAME } from './queries.js'

const updateCache = (cache, { data }) => {
  // const { allNameses } = cache.readQuery({ query: GET_NAMES })
  console.log(updateCache, data)
  // cache.writeQuery({
  //   query: GET_NAMES,
  //   data: {
  //     allNameses: allNameses.concat(createNames)
  //   }
  // })
}

const enhance = compose(
  withState('name', 'setName', ''),
  withState('id', 'setId', '')
)
export default enhance(({ name, setName, id, setId }) => (
  <Mutation mutation={UPDATE_NAME} update={updateCache} variables={{ name }}>
    {updateNames => (
      <form
        className="pa4 black-80"
        onSubmit={async e => {
          e.preventDefault()
          await updateNames({ variables: { id, name } })
          setName('')
          setId('')
        }}
      >
        <div className="measure">
          <label htmlFor="id" className="avenir f6 b db mb2">
            Id
          </label>
          <input
            id="id"
            required
            value={id}
            className="avenir input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            onChange={e => setId(e.target.value)}
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="avenir f6 b db mb2">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            className="avenir input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button htmlType="submit">Update</button>
      </form>
    )}
  </Mutation>
))
