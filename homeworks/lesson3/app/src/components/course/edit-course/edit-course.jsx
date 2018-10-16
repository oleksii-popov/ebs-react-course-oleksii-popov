import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import './edit-course.css';

class EditCourse extends Component {
    constructor(props, context) {
        super(props, context);
        // TODO: refactor to grab data somewhere
        this.course = {
            'title': 'Course 1',
            'desc': 'Intro'
        };
    }

    render() {
        return (
            <div className="edit-course">
                <h1>Add/Edit Course</h1>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            {this.course.title}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.course.desc}
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default EditCourse;
