import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { RouteComponentProps } from 'react-router-dom';


interface Props{
    fetchPost?: any,
    post: any
}

class PostsShow extends React.Component<Props & RouteComponentProps<any>>{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        const { post } = this.props;

        if (!post) {
            return <div> Loading... </div>
        }
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    // this.props === ownProps
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);