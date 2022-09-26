export enum ValidateType {
  Login = 'login',
  Password = 'password',
}

type ValidateRule = {
  type: ValidateType
  value: string
}

export function validateForm(rules: ValidateRule[]) {
  let errorMessage = {text:'',inputName:''}
  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i]

    if (type === ValidateType.Login) {
      errorMessage.inputName = 'loginInputRef'
      if (value.length === 0) {
        errorMessage.text = 'Логин не может быть пустым'
        break
      } else if(value.length < 3){
        errorMessage.text = 'Логин должен содержать от 3 символов'
        break
      } else if(value.length > 20){
        errorMessage.text = 'Логин должен содержать до 20 символов'
        break
      } else if(!value.match(/[a-zA-Zа-я]+/g)){
        errorMessage.text = 'Логин не может содержать только цифры'
        break
      } else if(value.match(/\s/g)){
        errorMessage.text = 'Логин не может содержать пробелы'
        break
      } else if(value.match(/[а-я]/g)){
        errorMessage.text = 'Логин должен содержать только латинские символы'
        break
      } else if(!value.match(/^[a-zA-Z0-9-_]{3,20}$/g)){
        errorMessage.text = 'Логин не должен содержать специальные символы'
        break
      }
    }
    if (type === ValidateType.Password) {
        errorMessage.inputName = 'passwordInputRef'
        if (value.length === 0) {
          errorMessage.text = 'Пароль не может быть пустым'
          break
        } else if(value.length < 7){
          errorMessage.text = 'Пароль должен содержать от 8 символов'
          break
        } else if(value.length > 40){
          errorMessage.text = 'Пароль должен содержать до 40 символов'
          break
        } else if(!value.match(/\d+/g)){
          errorMessage.text = 'Пароль должен содержать хотя бы одну цифру'
          break
        } else if(!value.match(/[A-ZА-Я]+/g)){
          errorMessage.text = 'Пароль должен содержать хотя бы заглавную букву'
          break
        }
      }
  }

  return errorMessage
}
