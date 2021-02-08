import { Loading } from '../theme/styles'
import React from 'react'

export const Loader = () => (
  <Loading>
    <img
      src={require('../assets/icons/loading.svg').default}
      alt="Page loader icon"
    />
  </Loading>
)
