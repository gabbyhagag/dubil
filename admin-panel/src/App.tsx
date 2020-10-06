// @ts-ignore
import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';

import logo from './logo.svg';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name='users' list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
