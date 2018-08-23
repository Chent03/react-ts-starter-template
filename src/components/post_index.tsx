import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { fetchPosts } from '../actions'
import * as _ from 'lodash';

interface Props {
    fetchPosts: any,
    posts: {}
}


class PostsIndex extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="float-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Posts
                    </Link>
                </div>

                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);