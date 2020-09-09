import { useState } from "react";

export type Loader<T> = {
    values: T[],
    loaded: boolean,
    load: () => Promise<void>
}

type State<T> = {
    values: T[],
    loaded: boolean
}

type ValuesSupplier<T> = () => Promise<T[]>;

const initialState = {
    values: [],
    loaded: false
}

function useLoader<T>(valuesSupplier: ValuesSupplier<T>): Loader<T> {
    const [state, setState] = useState<State<T>>(initialState)

    const load = () => valuesSupplier().then(values => {
        setState({values, loaded: true});
    })

    return {
        ...state,
        load
    }
}

export default useLoader;