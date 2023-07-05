import React, { createContext, useEffect } from "react";
import IUser from "../types/IUser";
import { ContextOutProps, IAppSetting, IProps, IState } from "./contextTypes";
import str from "../helper/localizations";
export const Context = createContext<ContextOutProps>({} as ContextOutProps);

const MainContext = (props: IProps) => {
  const { children } = props;
  const [state, setState] = React.useState<IState>({
    user: {} as IUser,
    settings: {
      theme: "light",
      language: "en",
      installPostponed: false,
    } as IAppSetting,
    installPrompt: null,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    let data = { ...state };
    if (user) {
      data = { ...data, user: JSON.parse(user) };
    }
    const settings = localStorage.getItem("settings");
    if (settings) {
      data = { ...data, settings: JSON.parse(settings) };
    }
    str.setLanguage(data.settings.language);
    setState(data);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setState({ ...state, installPrompt: e });
    });
    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, [state]);

  const dispatch = (key: string, value: any, store = false) => {
    let data = { ...state };
    data = { ...state, [key]: value };
    setState(data);
    if (store) {
      localStorage.setItem("settings", JSON.stringify(data.settings));
    }
  };

  const isAuthenticated = (): boolean => {
    return !!state.user?.name;
  };

  return (
    <Context.Provider
      value={{
        ...state,
        isAuthenticated,
        dispatch,
      }}
    >
      {state.installPrompt && !state.settings.installPostponed && (
        <div
          style={{
            backgroundColor: "gray",
            padding: 10,
            position: "fixed",
            width: "fit-content",
            maxWidth: "200px",
            display: "flex",
            flexDirection: "column",
            right: 10,
            top: 10,
          }}
        >
          <button
            onClick={() => {
              dispatch(
                "settings",
                { ...state.settings, installPostponed: true },
                true
              );
            }}
          >
            x
          </button>
          <span>
            You are not installed the PWA for installation just press button
          </span>
          <button onClick={() => state.installPrompt.prompt()}>install</button>
        </div>
      )}
      {children}
    </Context.Provider>
  );
};

export default MainContext;
