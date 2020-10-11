import React from 'react';
import { Amplify } from "@aws-amplify/core";
import { Admin, Resource } from "react-admin";
import { AmplifyAdmin, buildAuthProvider, buildDataProvider } from "react-admin-amplify";
import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { PatientList, PatientCreate } from "./components/Patient";
import './App.css';

Amplify.configure(awsExports); // Configure Amplify the usual way


function App() {
  return (
    <Admin
      //authProvider={buildAuthProvider({ authGroups: ["admin"] })}
      dataProvider={buildDataProvider({ queries, mutations })}
    > 
        <Resource name="patients" icon={PeopleAltIcon} list={PatientList} create={PatientCreate}/>
    </Admin>
  );
}

export default App;
