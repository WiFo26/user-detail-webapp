import axios, { AxiosResponse } from "axios"

interface UserProps {
    id?: number
    name?: string
    age?: number
}

type Callback = () => void

export class User {

    private events: { [key: string]: Callback[] }

    constructor(private data: UserProps) {
        this.events = {}
    }

    get(propName: string): string | number {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data,update)
    }

    on(eventName: string, callback: Callback): void{
        const handler = this.events[eventName] || []
        handler.push(callback)
        this.events[eventName] = handler
    }

    trigger(eventName: string): void {
        const handler = this.events[eventName]
        if (!handler || handler.length === 0 ) return

        handler.forEach(callback => callback())
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse) => {
            this.set(response.data)
        })
    }

    save(): void {
        const id = this.get('id')
        if(id){
            axios.put(`http://localhost:3000/users/${id}`,this.data)
            return
        }
        axios.post('http://localhost:3000/users',this.data)
    }
}