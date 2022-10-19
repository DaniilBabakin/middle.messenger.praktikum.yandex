import Block from "core/Block"
import { userAPI } from "api/userAPI"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "./changeAvatar.scss"
import { chatsAPI } from "api/chatAPI"
import { changeChatAvatar } from "service/chat"
interface ChangeAvatarProps {
  src: string
  type: "USER" | "CHAT"
  currentChatId?: number
}

export class ChangeAvatar extends Block {
  static componentName = "ChangeAvatar"
  constructor(props: ChangeAvatarProps) {
    super({
      ...props,
      events: {
        mouseover: () => {
          document.querySelector(".change-avatar")?.classList.add("isHovered")
          document.querySelector(".change-avatar__image")?.classList.add("isHovered")
        },
        mouseleave: () => {
          document.querySelector(".change-avatar")?.classList.remove("isHovered")
          document.querySelector(".change-avatar__image")?.classList.remove("isHovered")
        },
        change: (e: FocusEvent) => {
          const inputEl = e.target as HTMLInputElement
          if (inputEl.files) {
            document.querySelector('[data-label="avatar"]').src = window.URL.createObjectURL(inputEl!.files[0])
            let photo = inputEl.files[0]
            let formData = new FormData()

            formData.append("avatar", photo)
            if (props.type === "USER") {
              userAPI.changeAvatar(formData)
            } else {
              formData.append("chatId", JSON.stringify(props.currentChatId))
              window.store.dispatch(changeChatAvatar, formData)
            }
          }
        },
      },
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="change-avatar">
            <img src=https://ya-praktikum.tech/api/v2/resources{{src}} onerror="this.onerror=null;this.src='${avatar}';" class="change-avatar__image" data-label="avatar" alt="Моя фотография"/>
            <input type="file" class="change-avatar__input"/>
        </div>
    `
  }
}
