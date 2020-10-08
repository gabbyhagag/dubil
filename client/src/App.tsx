import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import 'bootstrap/dist/js/bootstrap.bundle';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import BlogPage from './pages/blog/blog-page.component';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <>
            <Header />

            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/blog' component={BlogPage} />
            </Switch>

            <Footer />
        </>
    );
}

export default App;
