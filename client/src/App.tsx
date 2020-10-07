import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import BlogPage from './pages/blog/blog-page.component';
import Footer from './components/footer/footer.component';



function App() {
    return (
        <>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.min.js" integrity="sha384-5h4UG+6GOuV9qXh6HqOLwZMY4mnLPraeTrjT5v07o347pj6IkfuoASuGBhfDsp3d"></script>
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
