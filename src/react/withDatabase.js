// @flow
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import type Database from '../Database'
import { DatabaseConsumer } from './DatabaseContext'

interface DatabasesProps {
  {[key: string]: Database}
}

type WithDatabaseProps<T: {}> = {
  ...T,
  databases: DatabasesProps,
  database: string
}
// HoC to inject the database into the props of consumers
export default function withDatabase<T: {}>(
  Component: React$ComponentType<WithDatabaseProps<T>>,
): React$ComponentType<T> {
  function DatabaseComponent(props: any): React$Element<any> {
    return (
      <DatabaseConsumer>
        {(databases: DatabasesProps, database: string) => <Component {...props} database={databases[database]} />}
      </DatabaseConsumer>
    )
  }

  return hoistNonReactStatics(DatabaseComponent, Component)
}
