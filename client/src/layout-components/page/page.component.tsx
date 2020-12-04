import React, { Children } from 'react'
import PageHeader from '../../shares-components/page-header-image/page-header-image.component'
import Header from '../header/header.component'
import './page.styles.scss'

export default function Page({children, title, pageHeaderComponent}) {
    return (
        <>
            <Header>
                {pageHeaderComponent}
            </Header>
            <main className="main-container container">
                {children}
            </main>
        </>
    )
}
