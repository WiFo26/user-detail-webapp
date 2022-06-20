import { User } from "./models/User"

const user = new User({id: 1})

const getUser =async () => {
    return await user.sync.fetch(user.get('id') as number)
}

getUser().then(res => console.log(res.data))