import axios, { AxiosPromise } from "axios"

export interface hasId {
    id?: number
}

export class Sync<T extends hasId> {

    constructor(private url: string){}

    save(data: T): AxiosPromise<T> {
        const {id} = data
        if(id){
            return axios.put(`${this.url}/${id}`,data)
        }
        return axios.post(`${this.url}`,data)
    }
    
    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.url}/${id}`);
    }
}