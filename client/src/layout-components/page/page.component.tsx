import React, { Children } from 'react'
import PageHeader from '../../shares-components/page-header/page-header.component'
import Header from '../header/header.component'
import './page.styles.scss'

export default function Page({children, title, img =''}) {
    return (
        <>
            <Header>
                <PageHeader title={title} img={img}></PageHeader>
            </Header>
            <main className="main-container container">
                {children}
            </main>
        </>
    )
}
