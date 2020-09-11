import { AxiosResponse } from "axios";
import api from "../config/api";
import DomainEntity from "../models/DomainEntity";

export interface Service<T extends DomainEntity> {
    findAll: () => Promise<AxiosResponse<T[]>>
}

export class ServiceImpl<T extends DomainEntity> implements Service<T> {

    private readonly path: string;

    constructor (path: string) {
        this.path = path;
    }

    findAll = () => api.get<T[]>(this.path)

}