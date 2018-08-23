import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

class PostNew extends React.Component<InjectedFormProps, {}> {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>  
        )
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostNew);