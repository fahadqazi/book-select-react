import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return React.createElement('div', null, 'Select a Book to get started');
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.length}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);