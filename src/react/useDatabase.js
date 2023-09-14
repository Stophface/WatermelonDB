// @flow
import React from 'react'
import { DatabaseContext } from '../DatabaseProvider'
import invariant from '../utils/common/invariant'

import type Database from '../Database'

export function useDatabase({database}): Database {
  const databases = React.useContext(DatabaseContext);

  invariant(
    databases,
    'Could not find database context, please make sure the component is wrapped in the <DatabaseProvider>',
  );

  const databaseInstance = databases[database];

  invariant(
    database,
    `Could not find database instance with the key '${database}'`,
  );

  return databaseInstance;
}