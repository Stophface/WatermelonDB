// @flow
import React from 'react'
import Database from '../Database'
import { Provider } from './DatabaseContext'

export type Props = {
  databases: {[key: string]: Database}
  children: ReactNode
}

/**
 * Database provider to create the database context
 * to allow child components to consume the database without prop drilling
 */
function DatabaseProvider({ children, databases }: Props): React$Element<typeof Provider> {
  Object.keys(databases).forEach(key => {
    const database = databases[key]
    if (!(database instanceof Database)) {
      throw new Error('You must supply a valid database prop to the DatabaseProvider')
    }

  })
  return <Provider value={databases}>{children}</Provider>
}

export default DatabaseProvider
