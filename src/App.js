import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';

// pages
import HomePage from './components/pages/homePage';
import ProductsPage from './components/pages/productsPage';

// global stylesheets
import './assets/css/app.min.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/products" component={ProductsPage}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;