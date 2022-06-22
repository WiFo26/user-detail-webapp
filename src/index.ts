import { User } from './models/User'
import { UserEdit } from './views/UserEdit'

const root = document.getElementById('user-form')
if (root) {
  const userEdit = new UserEdit(root, User.buildUser({ name: 'Niky', age: 21 }))
  userEdit.render()
} else {
    throw new Error('Root element not found')
}


