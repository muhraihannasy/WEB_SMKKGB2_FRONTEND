import { createContext, useEffect, useReducer } from "react";

// Service
import getFromLocalStorage from "../service/getFromLocalStorage";

export const UserContext = createContext();

// Type Action Reducer
const TypeReducerAction = {
  SET_MENU_PERMISSON: "SET_MENU_PERMISSON",
  SET_USER_SETTING_FROM_LOGIN: "SET_USER_SETTING_FROM_LOGIN",
  SET_LOGOUT: "SET_LOGOUT",
};

// Default Value
const defaultValue = {
  isLogin: false,
  name: "",
  menu_permission: [],
};

//  Reducer
function reducer(state, action) {
  let data = null;
  let menuPermission = [];

  switch (action.type) {
    case TypeReducerAction.SET_MENU_PERMISSON:
      data = action.payload;
      menuPermission = data?.menu_permission
        ? data?.menu_permission.split("|")
        : [];

      return {
        isLogin: true,
        name: data?.fullname,
        menu_permission: menuPermission,
        token: data?.acctkn
      };
    case TypeReducerAction.SET_USER_SETTING_FROM_LOGIN:
      data = action.payload;
      menuPermission = data.menu_permission.split("|");

      return {
        isLogin: true,
        name: data.fullname,
        menu_permission: menuPermission,
        token: data?.acctkn
      };
    case TypeReducerAction.SET_LOGOUT:
      localStorage.setItem("logged", false);
      localStorage.removeItem("usr");
      localStorage.removeItem("menu_permission");

      window.location.href = "/";
      return { defaultValue };
    default:
      return defaultValue;
  }
}

// Provider
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const dataLocalStorage = getFromLocalStorage("usr");

  const logout = () => {
    dispatch({
      type: TypeReducerAction.SET_LOGOUT,
    });
  };

  const setSetting = (data) => {
    dispatch({
      type: TypeReducerAction.SET_USER_SETTING_FROM_LOGIN,
      payload: data,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: TypeReducerAction.SET_MENU_PERMISSON,
        payload: dataLocalStorage,
      });
    }, 1500);
  }, []);

  const valueProvider = {
    isLogin: state.isLogin,
    name: state.name,
    menu_permission: state.menu_permission,
    token: state.token,
    logout: logout,
    setSetting: setSetting,
  };

  return (
    <UserContext.Provider value={{ ...valueProvider }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
