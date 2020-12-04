import React from 'react'
import Header from '../header/header.component'
import './page.styles.scss'

export default function Page({ children, pageHeaderComponent }) {
  return (
    <>
      <Header>{pageHeaderComponent}</Header>
      <main className="main-container container">{children}</main>
    </>
  )
}
