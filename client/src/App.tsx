import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import Homepage from './pages/homepage/homepage.component'
import BlogPage from './pages/blog/blog-page.component'
import Footer from './layout-components/footer/footer.component'
import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme as any}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
