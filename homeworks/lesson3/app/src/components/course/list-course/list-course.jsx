import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './list-course.css';

class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            courses: [
                {
                    id: 1,
                    title: 'Course 1',
                    desc: 'Intro'
                },
                {
                    id: 2,
                    title: '2nd Course',
                    desc: 'basic knowledge'
                },
                {
                    id: 3,
                    title: 'The Last course',
                    desc: 'Jedi knowledge'
                }
            ]
        };
    }

    render() {
        const {
            courses
        } = this.state;

        return (
            <div className="courses">
                <h1>Courses</h1>
                <ListGroup>
                    {this.renderCourses(courses)}
                </ListGroup>
            </div>
        );
    }

    renderCourses(coursesList) {
        return coursesList.map(course => {
            return <ListGroupItem
                href={'/courses/' + course.id}
                header={course.title}
                key={course.id + '-key'}
            >
            <b>{course.desc}</b>
            </ListGroupItem>;
        });
    }
}

export default Courses;
