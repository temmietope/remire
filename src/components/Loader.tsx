import { ReactComponent as LoaderIcon } from '../assets/icons/loading.svg';
import { Loading } from '../theme/styles';
import React from 'react';

export const Loader = () => (
  <Loading>
    <LoaderIcon />
  </Loading>
);
