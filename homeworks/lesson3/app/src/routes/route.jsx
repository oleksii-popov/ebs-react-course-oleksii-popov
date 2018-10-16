import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Login, CourseList, EditCourse, Page404} from '../components/index';

class AppRoutes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/new">New course</Link>
                        </li>
                    </ul>

                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/new" component={EditCourse}/>
                        <Route path="/courses/1" component={EditCourse}/>
                        <Route path="/courses/2" component={EditCourse}/>
                        <Route path="/courses/3" component={EditCourse}/>
                        <Route path="/courses" component={CourseList}/>
                        <Route component={Page404}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default AppRoutes;
