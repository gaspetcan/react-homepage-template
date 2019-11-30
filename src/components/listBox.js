import React from 'react';
import { Select } from 'react-rainbow-components';

class listBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list: ""
        }
    }
    
    render(){
        const containerStyles = {
            width: 250,
        };
        
        const options = [
            { value: 'All destination', label: 'All destination' },
            { value: 'option 2', label: 'Option 2' },
            { value: 'option 3', label: 'Option 3' },
        ];
        return (
            <Select
            class="select-box"
            options={options}
            id="example-select-1"
            style={containerStyles}
            />  
          )
    }
}
export default listBox;
