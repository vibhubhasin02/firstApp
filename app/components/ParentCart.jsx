import React from 'react';


class ParentCart extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {itemBought: 0, itemCancelled: 0};
    }

    // componentWillMount(){
    //
    // }
    //
    // componentWillUnmount(){
    //
    // }


    render() {
        return (
            <div>
            <label>hello</label>
                <p>sdadasdasdsad</p>
            </div>
        );
    }
}

export default ParentCart;