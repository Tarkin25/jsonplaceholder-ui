import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState, ActionType } from "../store/rootReducer";

const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, void, ActionType>>();

export default useThunkDispatch;