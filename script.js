const countries = [
  "Bermuda","Angola","Eritrea","Åland Islands","Central African Republic","Japan","French Guiana","Republic of China","Saint Kitts and Nevis", "Moldova (Republic of)"]
  
const hiking_gear = ["flask", "mattress", "cooler", "lighter", "repel", "hammock"]

const time = ["10", "20", "30", "40", "50", "60", "70"]

const random_string = (array) => {
  return array[Math.floor(Math.random()*(array.length))]
}

console.log(`You are leaving in ${random_string(time)} days to go to ${random_string(countries)}  with a ${random_string(hiking_gear)}`)

