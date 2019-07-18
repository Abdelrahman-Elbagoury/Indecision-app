
// const app = {
//     title: 'Indecesion app',
//     subtitle: 'put your life between computer hands.',
//     options: []
//  }

// // let numbers = [22, 55, 100]


// let makeDesicion = () => {
//     let randomNum =Math.floor (Math.random() * app.options.length)
//     console.log(randomNum)
//     let option = app.options[randomNum]
//     alert(option)
// }


// let renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle!== undefined && <p>{app.subtitle}</p>}
//             <h2>{app.options.length > 0 ? 'Here your options :' : 'no options !!'}</h2>
//             <p>{app.options.length}</p>
//             <button onClick={makeDesicion}>What I should do</button><span> </span>
//             <button onClick={reset}>remove all</button>
            
//             <ol>
//                 {
//                     app.options.map((option) => <li key={option}>{option}</li>)
//                 }
//             </ol>
//             <form onSubmit={onSubmit}>
//                 <input type='text' name='option'></input>
//                 <button>Add Note</button>
//             </form>
//         </div> );
//         ReactDOM.render(template, con)
// }

// const con = document.querySelector('.con')
   
// let onSubmit = (e) => {
//     e.preventDefault()
//     let option = e.target.elements.option.value

//     if(option) {
//         app.options.push(option)
//         console.log(app.options)
//         e.target.elements.option.value = ''
//         renderApp()
//     }
// }

// let reset = () => {
//     app.options = [] 
//     renderApp()
// }

// renderApp()








// import validator from 'validator'
// import {square, add} from './utils.js'
// import React from 'react'
// import ReactDOM from 'react-dom'

// let paragraph = <p> It's some jsx text !!</p>
// let con = document.querySelector('.con')
// ReactDOM.render(paragraph, con)

// console.log(validator.isEmail('abdelrahman.elbagoury@gmail.com'))
// console.log(square(6))
// console.log(add(4, 5))
// console.log('hi')

import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/indecisionApp'
import './components/styles/styles.scss'

ReactDOM.render( <IndecisionApp />, document.querySelector('.con'))
  

