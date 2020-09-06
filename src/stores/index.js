import React, {createContext, useContext} from "react";
import AuthStore from './auth';


const Context = createContext({
  AuthStore: new AuthStore()
})

export const useSores = ()=>useContext(Context);