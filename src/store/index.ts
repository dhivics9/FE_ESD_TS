import { AnyAction, ThunkAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ui from "./ui";
import user from "./user";


export const stroe = configureStore({
  reducer: {
    ui,
    user
  }
});


export type RootState = ReturnType<typeof stroe.getState>;
export type TypedDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;