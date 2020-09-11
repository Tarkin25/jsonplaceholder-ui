import User from "../../../models/User";
import { Selector, SelectorCreator } from "../../util";

export const selectUserIds: Selector<string[]> = state => state.entities.users.allIds

export const selectUserById: SelectorCreator<User, {id: string}> = ({id}) => state => state.entities.users.byId[id]