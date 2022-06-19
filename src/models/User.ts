interface UserProps {
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
}