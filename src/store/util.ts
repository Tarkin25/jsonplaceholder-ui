import DomainEntity from "../models/DomainEntity"
import { RootState } from "./rootReducer"

export type Selector<R> = (state: RootState) => R

export type SelectorCreator<R, P extends {}> = (props: P) => Selector<R>

export type StringMap<V> = {
    [key: string]: V
}

export type DataState<T extends DomainEntity> = {
    byId: StringMap<T>
    allIds: string[]
}

export const normalizeArray = <E extends DomainEntity>(entities: E[]) => {
    let map: StringMap<E> = {}

    entities.forEach(entity => map[entity.id.toString()] = entity)

    return {
        byId: map,
        allIds: entities.map(entity => entity.id.toString())
    } as DataState<E>
}