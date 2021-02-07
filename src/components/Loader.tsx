import React from "react";
import { Loading } from "../theme/styles";
import {ReactComponent as LoaderIcon} from '../assets/icons/loading.svg'
export const Loader = () => {
  return <Loading>
      <LoaderIcon/>
  </Loading>;
};
