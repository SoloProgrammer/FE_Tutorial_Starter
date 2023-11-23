// Named exports cannot be used mnultiple times in a single file and the exports named cannot be changed at the time of importing
import { PI, seconds } from "./constants.js"; // named export

// default exports can be import multiple times with different names
import exampleTest from './constants.js'
import exampleTest1 from './constants.js'

exampleTest()
exampleTest1()