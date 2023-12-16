import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, StoreDispatch } from "./Store";

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<StoreDispatch>()