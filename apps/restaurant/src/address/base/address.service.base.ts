/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Address, // @ts-ignore
  Customer, // @ts-ignore
  Restaurant,
} from "@prisma/client";

export class AddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AddressCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCountArgs>
  ): Promise<number> {
    return this.prisma.address.count(args);
  }

  async addresses<T extends Prisma.AddressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindManyArgs>
  ): Promise<Address[]> {
    return this.prisma.address.findMany(args);
  }
  async address<T extends Prisma.AddressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindUniqueArgs>
  ): Promise<Address | null> {
    return this.prisma.address.findUnique(args);
  }
  async createAddress<T extends Prisma.AddressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCreateArgs>
  ): Promise<Address> {
    return this.prisma.address.create<T>(args);
  }
  async updateAddress<T extends Prisma.AddressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressUpdateArgs>
  ): Promise<Address> {
    return this.prisma.address.update<T>(args);
  }
  async deleteAddress<T extends Prisma.AddressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressDeleteArgs>
  ): Promise<Address> {
    return this.prisma.address.delete(args);
  }

  async findCustomers(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customers(args);
  }

  async findRestaurants(
    parentId: string,
    args: Prisma.RestaurantFindManyArgs
  ): Promise<Restaurant[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .restaurants(args);
  }
}
