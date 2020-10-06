import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Create,
    Filter,
    SimpleList,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostTitle = ({ record }: any) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = (props: any) => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record: any) => record.title}
                    secondaryText={(record: any) => `${record.views} views`}
                    tertiaryText={(record: any) => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid rowClick='edit'>
                    <TextField source='id' />
                    <ReferenceField source='userId' reference='users'>
                        <TextField source='name' />
                    </ReferenceField>
                    <TextField source='title' />
                    <TextField source='body' />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};

export const PostEdit = (props: any) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <ReferenceInput source='userId' reference='users'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source='userId' reference='users'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Create>
);

const PostFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
        <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
            <SelectInput optionText='name' />
        </ReferenceInput>
    </Filter>
);
