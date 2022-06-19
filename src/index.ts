import { User } from "./models/User"

const user = new User({name:'Carlos', age: 48})


setTimeout(()=>{
    console.log(user)
},4000)