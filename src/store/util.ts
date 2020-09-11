import DomainEntity from "../models/DomainEntity"

export type StringMap<V> = {
    [key: string]: V
}

export type DataState<T> = {
    byId: StringMap<T>
    allIds: string[]
}

export const normalizeArray = <E extends DomainEntity>(entities: E[]) => {
    let map: StringMap<E> = {}

    entities.forEach(entity => map[entity.id] = entity)

    return {
        byId: map,
        allIds: entities.map(entity => entity.id.toString())
    } as DataState<E>
}