import { User } from "./models/User"

const user = new User({name: 'Luis', age:20})

user.on('click',() => console.log('Clicking on'))
user.trigger('click')