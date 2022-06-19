import { User } from "./models/User"

const user = new User({name:'Carlos', age: 48})

user.events.on('change', () => console.log('user data changed'))
user.events.trigger('change')