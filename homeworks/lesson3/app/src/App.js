import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Jumbotron} from 'react-bootstrap';
import { store } from './helpers/helper';
import {default as AppRoutes} from './routes/route.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <div className="App">
                <Jumbotron>
                    <h2>Application for React course.</h2>
                    <p>
                        Oleksii Popov
                    </p>
                </Jumbotron>

                <AppRoutes />
            </div>
          </Provider>
        );
    }
}

export default App;
