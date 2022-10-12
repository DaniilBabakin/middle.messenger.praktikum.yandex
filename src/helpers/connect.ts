import { Block } from "core"
import GlobalStorage, { StoreEvents } from "service/GlobalStorage"

export function connect(Component: typeof Block) {
  // используем class expression
  return class extends Component {
    constructor(...args: any) {
      // не забываем передать все аргументы конструктора
      super(...args)

      // подписываемся на событие
      GlobalStorage.on(StoreEvents.SetUser, () => {
        // вызываем обновление компонента, передав данные из хранилища
        this.setProps({ values: { ...GlobalStorage.getState() } })
      })
    }
  }
}
