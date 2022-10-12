import EventBus from "core/EventBus"
import { UserType } from "types/User"
import { authAPI } from "./api/authAPI"

export enum StoreEvents {
  SetUser = "storage:user-set",
}

class GlobalStorage extends EventBus {
  storage: { user?: UserType }
  eventBus: EventBus
  private static _instance: GlobalStorage

  constructor() {
    super()
    this.storage = { user: undefined }
    authAPI.getUser().then((res) => {
      this.setUser(res)
      this.eventBus.emit(StoreEvents.SetUser)
    })
    this.eventBus = new EventBus()
    this._registerEvents(this.eventBus)
  }

  public getState() {
    return this.storage
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new GlobalStorage()
    }
    return this._instance
  }

  private _registerEvents(eventBus: EventBus<any>) {
    eventBus.on(StoreEvents.SetUser, () => {
      console.log(`User updated`, this.storage.user)
    })
  }

  setUser(user: UserType) {
    this.storage.user = user

    this.eventBus.emit(StoreEvents.SetUser)
  }
}

export default new GlobalStorage()
