import React from 'react';
import { Lookup } from 'react-rainbow-components'

class searchBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option: ""
        }
    }    

    render(){            
        return (            
            <Lookup
                id="lookup-1"
                placeholder="Search by procedure"
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
        )
    }
}
export default searchBox;