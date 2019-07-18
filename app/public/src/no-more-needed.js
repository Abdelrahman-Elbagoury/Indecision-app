
// var template = React.createElement("h1", null, "Hello every body !!");

// let templateTwo = (
//     <div>
//         <h1>Abdelrahman</h1>
//         <p>Age: 25 </p>
//         <p>location: Egypt</p>
//     </div> );

//     let zero = 0
//     let plusOne = () => {
//         zero ++
//         renderCountApp()
//     }

//     let minusOne = () =>{
//         zero --
//         renderCountApp()
//     }
//     let reset = () => {
//         zero = 0
//         renderCountApp()
//     }

// let renderCountApp = () => {
//     let templateThree = (
//         <div>
//             <h1>Count: {zero}</h1>
//             <button onClick = {plusOne}>+1</button><span> </span>
//             <button onClick = {minusOne}>-1</button><span> </span>
//             <button onClick = {reset}>reset</button>
//         </div>
//     )
//     const con  = document.querySelector('.con')
//     ReactDOM.render(templateThree, con)
// }

// renderCountApp()

// template.location != null ? console.log('true') : console.log('false')


// let square = (x) => x*x
// console.log(square(3))



// let getFirstName = (fullName) => {
//     let firstName = fullName.split(' ')[0]
//     return firstName
// }
// console.log(getFirstName('Mike Smith'))

// let back = functio(){
//     btn.addEventListener('click', function(e){
//     let value = inp.value
//     console.log(value)
// })
// }



// class Person {
//     constructor(name = 'Ananoyms', age = 0){
//         this.name = name
//         this.age = age
//     }
//     getDescription(){
//         return `${this.name} is ${this.age} years.`
//     }
//     getGreeting(){
//         return ` Hi. I'am ${this.name}.`
//     }
// }

// let me = new Person('abdelrahman', 25)
// console.log(me.getDescription())

// class traveler extends Person {
//     constructor(name, age, homeTown){
//         super(name, age)
//         this.homeTown = homeTown
//     }
//     hasHomeTown(){
//         return !!this.homeTown
//     }
//     getGreeting(){
//         let greeting = super.getGreeting()
//         if(this.homeTown){
//             greeting += `I'am visiting from ${this.homeTown}`
//         }
//         return greeting
//     }
// }
// let you = new traveler('abdo', 25, 'Egypt')
// console.log(you.getGreeting())

class CounterExample extends React.Component {
    constructor(props) {
        super(props)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        let num = localStorage.getItem('num')
        let final = parseInt(num, 10)
        this.setState((prevState) => {
            return {
                count: final
            }
        })
    }
    componentDidUpdate(prevState, prevProps) {
        let num = this.state.count
        let save = localStorage.setItem('num', num)
    }

    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render(){
        let count = 0
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick = {this.handlePlusOne}>+1</button>
            <button onClick = {this.handleMinusOne}>-1</button>
            <button onClick = {this.handleRemoveAll}>Remove all</button>
        </div>
        )
    }
}



let con = document.querySelector('.con')
ReactDOM.render(<CounterExample />, con)