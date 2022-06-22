import { AxiosResponse } from 'axios'
import { Attributes } from './Attributes'
import { Collection } from './Collection'
import { Callback, Eventing } from './Eventing'
import { Model } from './Model'
import { Sync } from './Sync'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const url = 'http://localhost:3000/users'
export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new Sync<UserProps>(url)
        )
    }

    static buildUserCollection(): Collection<User,UserProps> {
        return new Collection<User,UserProps>(url,(json: UserProps) => User.buildUser(json))
    }

    setRandomAge(): void {
        this.set({age: Math.round(Math.random()* 100)})
    }
}
