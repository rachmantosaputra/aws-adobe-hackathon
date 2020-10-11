
import React from "react";
import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  required,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { Pagination } from "./Pagination";


const validateName = [required()];

export const PatientList = (props) => {
    return (
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="name" sortable={false} />
        <TextField source="gender" sortable={false} />
        <TextField source="birthDate" sortable={false} />
        <TextField source="address" sortable={false} />
        <TextField source="maritalStatus" sortable={false} />
        <TextField source="generalPractitioner" sortable={false} />
        <TextField source="managingOrganization" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
    )
}

export const PatientCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={validateName} />
        <TextInput source="gender" />
        <TextInput source="birthDate" />
        <TextInput source="address" />
        <TextInput source="maritalStatus" />
        <TextInput source="generalPractitioner" />
        <TextInput source="managingOrganization" />
      </SimpleForm>
    </Create>
  );

