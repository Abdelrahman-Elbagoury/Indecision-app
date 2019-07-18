
// let con = document.querySelector('.con')
// let visibilty = false
// let turnVisibility = () => {
//     visibilty = !visibilty
//     renderApp()
// }

// let renderApp = () => {
//     let tempelate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={turnVisibility}>{visibilty ? 'Hide all' : 'Show more'}</button>
//             {
//                 visibilty &&
//                 <p>this is the most important information about react.</p>
//             }
//         </div>
//     )
//     ReactDOM.render(tempelate, con)
// }


// renderApp()



class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.turnVisibility = this.turnVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    turnVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !this.state.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.turnVisibility}>{this.state.visibility ? 'Show less' :'Show more'}</button>
                {
                    this.state.visibility ? <p>this is the most important information about react.</p> : <p></p>
                }
            </div>
            
        )
    }
}

let con = document.querySelector('.con')
ReactDOM.render(<Visibility />, con)









