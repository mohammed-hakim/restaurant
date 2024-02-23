/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Address } from "./Address";
import { AddressCountArgs } from "./AddressCountArgs";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressFindUniqueArgs } from "./AddressFindUniqueArgs";
import { CreateAddressArgs } from "./CreateAddressArgs";
import { UpdateAddressArgs } from "./UpdateAddressArgs";
import { DeleteAddressArgs } from "./DeleteAddressArgs";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { RestaurantFindManyArgs } from "../../restaurant/base/RestaurantFindManyArgs";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { AddressService } from "../address.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Address)
export class AddressResolverBase {
  constructor(
    protected readonly service: AddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async _addressesMeta(
    @graphql.Args() args: AddressCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Address])
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async addresses(
    @graphql.Args() args: AddressFindManyArgs
  ): Promise<Address[]> {
    return this.service.addresses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Address, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "own",
  })
  async address(
    @graphql.Args() args: AddressFindUniqueArgs
  ): Promise<Address | null> {
    const result = await this.service.address(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "create",
    possession: "any",
  })
  async createAddress(
    @graphql.Args() args: CreateAddressArgs
  ): Promise<Address> {
    return await this.service.createAddress({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "update",
    possession: "any",
  })
  async updateAddress(
    @graphql.Args() args: UpdateAddressArgs
  ): Promise<Address | null> {
    try {
      return await this.service.updateAddress({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Address)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "delete",
    possession: "any",
  })
  async deleteAddress(
    @graphql.Args() args: DeleteAddressArgs
  ): Promise<Address | null> {
    try {
      return await this.service.deleteAddress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Customer], { name: "customers" })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async findCustomers(
    @graphql.Parent() parent: Address,
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Restaurant], { name: "restaurants" })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async findRestaurants(
    @graphql.Parent() parent: Address,
    @graphql.Args() args: RestaurantFindManyArgs
  ): Promise<Restaurant[]> {
    const results = await this.service.findRestaurants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
