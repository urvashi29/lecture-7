import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetPosts } from './action';


class ApiData extends Component {

    componentDidMount = () => {
        this.props.getPosts();
        console.log('data')
    }

    render() {
        return (
            <React.Fragment>
                {this.props.post.map(info => {
                    return (
                        <p>{info.title}</p>
                    )
                })}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(onGetPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiData);
