import React, { Component } from 'react';

class Course extends Component {
    render () {
        const courseTitle = this.props.match.params.title;
        console.log(this.props.match.params);
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.location.state.courseId}</p>
            </div>
        );
    }
}

export default Course;