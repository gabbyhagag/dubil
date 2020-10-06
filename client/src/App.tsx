import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import BlogPage from './pages/blog/blog-page.component';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/blog' component={BlogPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
