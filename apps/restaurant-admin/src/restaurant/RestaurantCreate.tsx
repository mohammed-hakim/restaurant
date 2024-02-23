import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
