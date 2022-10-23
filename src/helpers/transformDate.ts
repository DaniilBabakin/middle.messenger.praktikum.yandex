import { ChatMessageType } from "types/ChatMessage"

export function transformDate(message: ChatMessageType, array: ChatMessageType[], index: number) {
  const date = new Date(message.time)
  const currentDate = new Date(Date.now())
  let minutes = date.getMinutes()
  const months = new Array(
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  )
  let day = Number(date.toString().slice(8, 10))
  let prevDay = Number(new Date(array[index + 1]?.time).toString().slice(8, 10))
  if (!prevDay) {
    message.whenDate = `${Number(date.toString().slice(8, 10))} ${months[date.getMonth()]}`
  } else if (day > prevDay) {
    message.whenDate = `${Number(date.toString().slice(8, 10))} ${months[date.getMonth()]}`
  }
  if (message.whenDate === `${Number(currentDate.toString().slice(8, 10))} ${months[currentDate.getMonth()]}`) {
    message.whenDate = "Сегодня"
  }

  return {
    ...message,
    customTime: `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`,
  }
}
