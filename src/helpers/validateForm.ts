export enum ValidateType {
  Login = "login",
  Password = "password",
  NewPassword = "newPassword",
  OldPassword = "oldPassword",
  CheckPassword = "check_password",
  FirstName = "first_name",
  SecondName = "second_name",
  Email = "email",
  Phone = "phone",
  DisplayName = "display_name",
  Message = "message",
}

type ValidateRule = {
  type: ValidateType | string
  value: string
}

export function validateForm(rules: ValidateRule[]) {
  let errorMessage = { text: "", inputName: "" }
  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i]
    //Ниже я сделал именно через "название типа" , потому что в том же onBlur можно просто указать type:inputEl.name, вместо поиска нужного типа через условия
    if (type === ValidateType.Login) {
      errorMessage.inputName = "loginInputRef"
      if (value.length === 0) {
        errorMessage.text = "Логин не может быть пустым"
        break
      } else if (value.length < 3) {
        errorMessage.text = "Логин должен содержать от 3 символов"
        break
      } else if (value.length > 20) {
        errorMessage.text = "Логин должен содержать до 20 символов"
        break
      } else if (!value.match(/[a-zA-Zа-я]+/g)) {
        errorMessage.text = "Логин не может содержать только цифры"
        break
      } else if (value.match(/\s/g)) {
        errorMessage.text = "Логин не может содержать пробелы"
        break
      } else if (value.match(/[а-я]/g)) {
        errorMessage.text = "Логин должен содержать только латинские символы"
        break
      } else if (!value.match(/^[a-zA-Z0-9-_]{3,20}$/g)) {
        errorMessage.text = "Логин не должен содержать специальные символы"
        break
      }
    }
    if (
      type === ValidateType.Password ||
      type === ValidateType.NewPassword ||
      type === ValidateType.OldPassword ||
      type === ValidateType.CheckPassword
    ) {
      errorMessage.inputName = `${type}InputRef`
      if (value.length === 0) {
        errorMessage.text = "Пароль не может быть пустым"
        break
      } else if (value.length < 7) {
        errorMessage.text = "Пароль должен содержать от 8 символов"
        break
      } else if (value.length > 40) {
        errorMessage.text = "Пароль должен содержать до 40 символов"
        break
      } else if (!value.match(/\d+/g)) {
        errorMessage.text = "Пароль должен содержать хотя бы одну цифру"
        break
      } else if (!value.match(/[A-ZА-Я]+/g)) {
        errorMessage.text = "Пароль должен содержать хотя бы заглавную букву"
        break
      }
    }
    if (type === ValidateType.FirstName || type === ValidateType.SecondName) {
      errorMessage.inputName = `${type}InputRef`
      const nameForText = type === ValidateType.FirstName ? "Имя" : "Фамилия"
      if (value.length === 0) {
        errorMessage.text = `${nameForText} не может быть ${nameForText === "Имя" ? "пустым" : "пустой"}`
        break
      } else if (!value.match(/^[A-ZА-Я]/g)) {
        errorMessage.text = "Первая буква должна быть заглавной"
        break
      } else if (value.match(/\d+/g)) {
        errorMessage.text = "Пожалуйста, уберите цифры"
        break
      } else if (value.match(/\s/g)) {
        errorMessage.text = `${nameForText} не может содержать пробелы`
        break
      } else if (!value.match(/^[a-zA-ZА-Яа-я0-9-]{0,}$/g)) {
        errorMessage.text = `${nameForText} не может содержать специальные символы`
        break
      }
    }
    if (type === ValidateType.Email) {
      errorMessage.inputName = "emailInputRef"
      if (value.length === 0) {
        errorMessage.text = "Почта не может быть пустой"
        break
      } else if (value.match(/\s/g)) {
        errorMessage.text = "Почта не может содержать пробелы"
        break
      } else if (value.match(/[а-я]/g)) {
        errorMessage.text = "Почта должен содержать только латинские символы"
        break
      } else if (!value.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
        errorMessage.text = "Почта не должна содержать специальные символы"
        break
      } else if (!value.match(/[@]/g)) {
        errorMessage.text = "В почте должен быть символ @"
        break
      } else if (!value.match(/[.]/g)) {
        errorMessage.text = "В почте должна быть точка"
        break
      } else if (value.match(/[.]/g) && !value.match(/\w+[.]\w+/g)) {
        errorMessage.text = "Перед точкой и после нее должны быть символы "
        break
      }
    }
    if (type === ValidateType.Phone) {
      errorMessage.inputName = "phoneInputRef"
      if (value.length === 0) {
        errorMessage.text = "Номер телефона не может быть пустым"
        break
      } else if (value.match(/\s/g)) {
        errorMessage.text = "Номер телефона не может содержать пробелы"
        break
      } else if (value.match(/[A-Za-zА-Яа-я]+/g)) {
        errorMessage.text = "Номер телефона не может содержать буквы"
        break
      } else if (!value.match(/^[+]7/)) {
        errorMessage.text = "Номер телефона должен начинаться с +7"
        break
      } else if (value.length < 10) {
        errorMessage.text = "Номер телефона должен содержать от 10 символов"
        break
      } else if (value.length > 15) {
        errorMessage.text = "Номер телефона должен содержать до 15 символов"
        break
      }
    }
    if (type === ValidateType.DisplayName) {
      errorMessage.inputName = "display_nameInputRef"
      if (value.length === 0) {
        errorMessage.text = "Имя в чате не может быть пустым"
        break
      }
    }
    if (type === ValidateType.Message) {
      errorMessage.inputName = "messageInputRef"
      if (value.length === 0) {
        errorMessage.text = "Сообщение не может быть пустым"
        break
      }
    }
  }

  return errorMessage
}
