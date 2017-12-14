import React from 'react';
import Modal from 'react-modal';

class ItemList extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {};
    }


    render() {
        return (
            <div>
                <label value="Item 1"/>
                <button>BUY</button>
                <button>CANCEL</button>
                <label value="Item 2"/>
                <button>BUY</button>
                <button>CANCEL</button>
            </div>
        );
    }
}

export default ItemList;