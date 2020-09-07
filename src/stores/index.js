import React, {createContext, useContext} from "react";
import AuthStore from './auth';
import UserStore from './user'


const Context = createContext({
  AuthStore,
  UserStore
})

window.stores = {
  AuthStore,
  UserStore
}

export const useStores = ()=>useContext(Context);