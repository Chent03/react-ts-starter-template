import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

interface CreatePostProps extends InjectedFormProps{
    createPost?: any
}

class PostNew extends React.Component<CreatePostProps & RouteComponentProps<CreatePostProps>, {}> {
    renderField(field) {
        const { touched, error } = field.meta;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="text-danger">
                    {touched ? error : ''}
                </div>
            </div>  
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    let errors = {};
    
    if (!values.title || values.title.length < 3) {
        errors['title'] = "Enter a title that is at least 3 characters";
    }

    if (!values.categories) {
        errors['categories'] = "Enter some category";
    }

    if (!values.content) {
        errors['content'] = "Enter some content please";
    }
    // if errors is empty, the form is fine to submite
    // if Erros has properties redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
);