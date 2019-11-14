## How about it
Is very common we want to create a list of schedule to allow user choose beyond the date the hours too.
So, this package help you to write it easly

## Getting start
Install package:
```sh
yarn add @pedro.oliveira/schedule-js
``` 

Import the package in your project
```js
import { generateHours } from '@pedro.oliveira/schedule-js'
``` 

## Usage examples
```js
const listOfSchedule = generateHours()
console.log(listOfSchedule) // ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"]
``` 

```js
const listOfSchedule = generateHours(13, 17)
console.log(listOfSchedule) // ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"]
``` 

## Contributing
I know this project is in beginning yet so, i hope you collaborate to improve this package. Please feel free to open issues to say what you wish to get with this project. Open a Pull Request and wait for approve. See you!

## Contact
If you want to talk with me, send me an email `pedrodepaivasoaresll@gmail.com`
