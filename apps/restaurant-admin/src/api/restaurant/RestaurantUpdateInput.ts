import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { Decimal } from "decimal.js";

export type RestaurantUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
  phone?: Decimal | null;
};
