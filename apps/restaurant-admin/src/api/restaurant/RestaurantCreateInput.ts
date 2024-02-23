import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { Decimal } from "decimal.js";

export type RestaurantCreateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
  phone?: Decimal | null;
};
