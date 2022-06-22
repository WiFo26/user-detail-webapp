import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User,UserProps>{

  constructor(parent: Element, model: User){
    super(parent,model)
    this.bindModel()
  }

  eventsMap(): {[key:string]: () => void} {
    return {
      'click:.set-random-age': this.onSetRandomAgeClick,
      'click:.update-name': this.onUpdateNameClick,
      'click:.save-user': this.onSaveUserClick
    }
  }

  onUpdateNameClick = (): void => {
    const input = this.parent.querySelector('input')
    if (input) {
      const name = input.value
      this.model.set({name})
    }
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSaveUserClick = (): void => {
    this.model.save()
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="update-name">Update Name</button>
        <button class="set-random-age">Set Random Age</button>
        <button class="save-user">Save User</button>
      </div>
      `
  }
}
