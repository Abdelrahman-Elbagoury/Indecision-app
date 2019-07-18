import React from 'react'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options ,
    selectedOption: undefined
  };
  
    componentDidMount = () => {
        let options = localStorage.getItem('options')
        let saved = JSON.parse(options)
        if(options){
            this.setState((prevState) => {
                return {saved}
            })
        }
       
    }
    componentDidUpdate = (prevState, prevProps) => {
        try {
            if( this.state.options.length !== prevState.options.length ) {
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)            
               }
        } catch(e) {

        }        
        }
    handleRemoveRandom = () => {
      this.setState((prevState) => {
        return {
          selectedOption: undefined
        }
      })
    }

    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        })
    }
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState((prevState) => {
        return {
          selectedOption: option
        }
      }) 
    }
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className= 'container'>
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className = 'widget'>
              <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
              />
            </div>
          </div>
          
          <OptionModal handleRemoveRandom = {this.handleRemoveRandom} selectedOption={this.state.selectedOption} />
        </div>
      );
    }
  }

  IndecisionApp.defaultProps = {
    options: JSON.parse(localStorage.getItem('options'))
  };
  
  
  export default IndecisionApp