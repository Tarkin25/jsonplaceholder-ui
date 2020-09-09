import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionType } from "../store/types";
import { RootState } from "../store/rootReducer";

const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, void, ActionType>>();

export default useThunkDispatch;