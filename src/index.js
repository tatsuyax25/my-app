import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className='square' onClick={function() { console.log('click'); }}>
                {this.props.value}
            </button>
        );
    }
}