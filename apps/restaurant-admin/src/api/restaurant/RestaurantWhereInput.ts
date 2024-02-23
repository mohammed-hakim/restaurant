import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type RestaurantWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: DecimalNullableFilter;
};
