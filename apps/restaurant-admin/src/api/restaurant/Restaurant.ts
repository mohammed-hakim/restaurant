import { Address } from "../address/Address";
import { Decimal } from "decimal.js";

export type Restaurant = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phone: Decimal | null;
  updatedAt: Date;
};
