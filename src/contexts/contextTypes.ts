import IUser from "../types/IUser";

export interface IProps {
    children: React.ReactNode
}   

export interface IState {
    user : IUser,
    settings : IAppSetting,
    installPrompt : any,
}

export interface ContextOutProps {
    user : IUser,
    settings : IAppSetting,
    installPrompt : any,
    isAuthenticated : () => boolean,
    dispatch : (key:string  , value : any , store ?: boolean) => void
}
export interface IAppSetting {
    theme : string,
    language : string,
    installPostponed : boolean
}