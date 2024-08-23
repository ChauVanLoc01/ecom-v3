
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderFlow
 * 
 */
export type OrderFlow = $Result.DefaultSelection<Prisma.$OrderFlowPayload>
/**
 * Model OrderRefund
 * 
 */
export type OrderRefund = $Result.DefaultSelection<Prisma.$OrderRefundPayload>
/**
 * Model OrderShipping
 * 
 */
export type OrderShipping = $Result.DefaultSelection<Prisma.$OrderShippingPayload>
/**
 * Model OrderVoucher
 * 
 */
export type OrderVoucher = $Result.DefaultSelection<Prisma.$OrderVoucherPayload>
/**
 * Model ProductOrder
 * 
 */
export type ProductOrder = $Result.DefaultSelection<Prisma.$ProductOrderPayload>
/**
 * Model ProductOrderRefund
 * 
 */
export type ProductOrderRefund = $Result.DefaultSelection<Prisma.$ProductOrderRefundPayload>
/**
 * Model RefundMaterial
 * 
 */
export type RefundMaterial = $Result.DefaultSelection<Prisma.$RefundMaterialPayload>
/**
 * Model RequestComplain
 * 
 */
export type RequestComplain = $Result.DefaultSelection<Prisma.$RequestComplainPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderFlow`: Exposes CRUD operations for the **OrderFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderFlows
    * const orderFlows = await prisma.orderFlow.findMany()
    * ```
    */
  get orderFlow(): Prisma.OrderFlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderRefund`: Exposes CRUD operations for the **OrderRefund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderRefunds
    * const orderRefunds = await prisma.orderRefund.findMany()
    * ```
    */
  get orderRefund(): Prisma.OrderRefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderShipping`: Exposes CRUD operations for the **OrderShipping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderShippings
    * const orderShippings = await prisma.orderShipping.findMany()
    * ```
    */
  get orderShipping(): Prisma.OrderShippingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderVoucher`: Exposes CRUD operations for the **OrderVoucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderVouchers
    * const orderVouchers = await prisma.orderVoucher.findMany()
    * ```
    */
  get orderVoucher(): Prisma.OrderVoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productOrder`: Exposes CRUD operations for the **ProductOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOrders
    * const productOrders = await prisma.productOrder.findMany()
    * ```
    */
  get productOrder(): Prisma.ProductOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productOrderRefund`: Exposes CRUD operations for the **ProductOrderRefund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOrderRefunds
    * const productOrderRefunds = await prisma.productOrderRefund.findMany()
    * ```
    */
  get productOrderRefund(): Prisma.ProductOrderRefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refundMaterial`: Exposes CRUD operations for the **RefundMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefundMaterials
    * const refundMaterials = await prisma.refundMaterial.findMany()
    * ```
    */
  get refundMaterial(): Prisma.RefundMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestComplain`: Exposes CRUD operations for the **RequestComplain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestComplains
    * const requestComplains = await prisma.requestComplain.findMany()
    * ```
    */
  get requestComplain(): Prisma.RequestComplainDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    OrderFlow: 'OrderFlow',
    OrderRefund: 'OrderRefund',
    OrderShipping: 'OrderShipping',
    OrderVoucher: 'OrderVoucher',
    ProductOrder: 'ProductOrder',
    ProductOrderRefund: 'ProductOrderRefund',
    RefundMaterial: 'RefundMaterial',
    RequestComplain: 'RequestComplain'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "order" | "orderFlow" | "orderRefund" | "orderShipping" | "orderVoucher" | "productOrder" | "productOrderRefund" | "refundMaterial" | "requestComplain"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderFlow: {
        payload: Prisma.$OrderFlowPayload<ExtArgs>
        fields: Prisma.OrderFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          findFirst: {
            args: Prisma.OrderFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          findMany: {
            args: Prisma.OrderFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>[]
          }
          create: {
            args: Prisma.OrderFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          createMany: {
            args: Prisma.OrderFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          update: {
            args: Prisma.OrderFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          deleteMany: {
            args: Prisma.OrderFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFlowPayload>
          }
          aggregate: {
            args: Prisma.OrderFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderFlow>
          }
          groupBy: {
            args: Prisma.OrderFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderFlowCountArgs<ExtArgs>
            result: $Utils.Optional<OrderFlowCountAggregateOutputType> | number
          }
        }
      }
      OrderRefund: {
        payload: Prisma.$OrderRefundPayload<ExtArgs>
        fields: Prisma.OrderRefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderRefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderRefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          findFirst: {
            args: Prisma.OrderRefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderRefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          findMany: {
            args: Prisma.OrderRefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>[]
          }
          create: {
            args: Prisma.OrderRefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          createMany: {
            args: Prisma.OrderRefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderRefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          update: {
            args: Prisma.OrderRefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          deleteMany: {
            args: Prisma.OrderRefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderRefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderRefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRefundPayload>
          }
          aggregate: {
            args: Prisma.OrderRefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderRefund>
          }
          groupBy: {
            args: Prisma.OrderRefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderRefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderRefundCountArgs<ExtArgs>
            result: $Utils.Optional<OrderRefundCountAggregateOutputType> | number
          }
        }
      }
      OrderShipping: {
        payload: Prisma.$OrderShippingPayload<ExtArgs>
        fields: Prisma.OrderShippingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderShippingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderShippingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          findFirst: {
            args: Prisma.OrderShippingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderShippingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          findMany: {
            args: Prisma.OrderShippingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>[]
          }
          create: {
            args: Prisma.OrderShippingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          createMany: {
            args: Prisma.OrderShippingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderShippingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          update: {
            args: Prisma.OrderShippingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          deleteMany: {
            args: Prisma.OrderShippingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderShippingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderShippingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderShippingPayload>
          }
          aggregate: {
            args: Prisma.OrderShippingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderShipping>
          }
          groupBy: {
            args: Prisma.OrderShippingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderShippingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderShippingCountArgs<ExtArgs>
            result: $Utils.Optional<OrderShippingCountAggregateOutputType> | number
          }
        }
      }
      OrderVoucher: {
        payload: Prisma.$OrderVoucherPayload<ExtArgs>
        fields: Prisma.OrderVoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderVoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderVoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          findFirst: {
            args: Prisma.OrderVoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderVoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          findMany: {
            args: Prisma.OrderVoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>[]
          }
          create: {
            args: Prisma.OrderVoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          createMany: {
            args: Prisma.OrderVoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderVoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          update: {
            args: Prisma.OrderVoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          deleteMany: {
            args: Prisma.OrderVoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderVoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderVoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderVoucherPayload>
          }
          aggregate: {
            args: Prisma.OrderVoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderVoucher>
          }
          groupBy: {
            args: Prisma.OrderVoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderVoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderVoucherCountArgs<ExtArgs>
            result: $Utils.Optional<OrderVoucherCountAggregateOutputType> | number
          }
        }
      }
      ProductOrder: {
        payload: Prisma.$ProductOrderPayload<ExtArgs>
        fields: Prisma.ProductOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          findMany: {
            args: Prisma.ProductOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>[]
          }
          create: {
            args: Prisma.ProductOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          createMany: {
            args: Prisma.ProductOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          update: {
            args: Prisma.ProductOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductOrder>
          }
          groupBy: {
            args: Prisma.ProductOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductOrderCountAggregateOutputType> | number
          }
        }
      }
      ProductOrderRefund: {
        payload: Prisma.$ProductOrderRefundPayload<ExtArgs>
        fields: Prisma.ProductOrderRefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOrderRefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOrderRefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          findFirst: {
            args: Prisma.ProductOrderRefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOrderRefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          findMany: {
            args: Prisma.ProductOrderRefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>[]
          }
          create: {
            args: Prisma.ProductOrderRefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          createMany: {
            args: Prisma.ProductOrderRefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductOrderRefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          update: {
            args: Prisma.ProductOrderRefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          deleteMany: {
            args: Prisma.ProductOrderRefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOrderRefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductOrderRefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOrderRefundPayload>
          }
          aggregate: {
            args: Prisma.ProductOrderRefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductOrderRefund>
          }
          groupBy: {
            args: Prisma.ProductOrderRefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductOrderRefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOrderRefundCountArgs<ExtArgs>
            result: $Utils.Optional<ProductOrderRefundCountAggregateOutputType> | number
          }
        }
      }
      RefundMaterial: {
        payload: Prisma.$RefundMaterialPayload<ExtArgs>
        fields: Prisma.RefundMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          findFirst: {
            args: Prisma.RefundMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          findMany: {
            args: Prisma.RefundMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>[]
          }
          create: {
            args: Prisma.RefundMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          createMany: {
            args: Prisma.RefundMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefundMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          update: {
            args: Prisma.RefundMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          deleteMany: {
            args: Prisma.RefundMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefundMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundMaterialPayload>
          }
          aggregate: {
            args: Prisma.RefundMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefundMaterial>
          }
          groupBy: {
            args: Prisma.RefundMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<RefundMaterialCountAggregateOutputType> | number
          }
        }
      }
      RequestComplain: {
        payload: Prisma.$RequestComplainPayload<ExtArgs>
        fields: Prisma.RequestComplainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestComplainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestComplainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          findFirst: {
            args: Prisma.RequestComplainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestComplainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          findMany: {
            args: Prisma.RequestComplainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>[]
          }
          create: {
            args: Prisma.RequestComplainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          createMany: {
            args: Prisma.RequestComplainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequestComplainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          update: {
            args: Prisma.RequestComplainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          deleteMany: {
            args: Prisma.RequestComplainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestComplainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequestComplainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestComplainPayload>
          }
          aggregate: {
            args: Prisma.RequestComplainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestComplain>
          }
          groupBy: {
            args: Prisma.RequestComplainGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestComplainGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestComplainCountArgs<ExtArgs>
            result: $Utils.Optional<RequestComplainCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    orderFlow?: OrderFlowOmit
    orderRefund?: OrderRefundOmit
    orderShipping?: OrderShippingOmit
    orderVoucher?: OrderVoucherOmit
    productOrder?: ProductOrderOmit
    productOrderRefund?: ProductOrderRefundOmit
    refundMaterial?: RefundMaterialOmit
    requestComplain?: RequestComplainOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderFlow: number
    OrderRefund: number
    OrderShipping: number
    OrderVoucher: number
    ProductOrder: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderFlow?: boolean | OrderCountOutputTypeCountOrderFlowArgs
    OrderRefund?: boolean | OrderCountOutputTypeCountOrderRefundArgs
    OrderShipping?: boolean | OrderCountOutputTypeCountOrderShippingArgs
    OrderVoucher?: boolean | OrderCountOutputTypeCountOrderVoucherArgs
    ProductOrder?: boolean | OrderCountOutputTypeCountProductOrderArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderFlowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFlowWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderRefundWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderShippingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderShippingWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVoucherWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderWhereInput
  }


  /**
   * Count Type OrderRefundCountOutputType
   */

  export type OrderRefundCountOutputType = {
    ProductOrderRefund: number
    RefundMaterial: number
  }

  export type OrderRefundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductOrderRefund?: boolean | OrderRefundCountOutputTypeCountProductOrderRefundArgs
    RefundMaterial?: boolean | OrderRefundCountOutputTypeCountRefundMaterialArgs
  }

  // Custom InputTypes
  /**
   * OrderRefundCountOutputType without action
   */
  export type OrderRefundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefundCountOutputType
     */
    select?: OrderRefundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderRefundCountOutputType without action
   */
  export type OrderRefundCountOutputTypeCountProductOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderRefundWhereInput
  }

  /**
   * OrderRefundCountOutputType without action
   */
  export type OrderRefundCountOutputTypeCountRefundMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundMaterialWhereInput
  }


  /**
   * Count Type ProductOrderCountOutputType
   */

  export type ProductOrderCountOutputType = {
    ProductOrderRefund: number
  }

  export type ProductOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductOrderRefund?: boolean | ProductOrderCountOutputTypeCountProductOrderRefundArgs
  }

  // Custom InputTypes
  /**
   * ProductOrderCountOutputType without action
   */
  export type ProductOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderCountOutputType
     */
    select?: ProductOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductOrderCountOutputType without action
   */
  export type ProductOrderCountOutputTypeCountProductOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderRefundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
    discount: number | null
    pay: number | null
    numberOfRefund: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
    discount: number | null
    pay: number | null
    numberOfRefund: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: string | null
    total: number | null
    discount: number | null
    pay: number | null
    note: string | null
    isRated: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    numberOfRefund: number | null
    isDraf: boolean | null
    complainId: string | null
    payment: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: string | null
    total: number | null
    discount: number | null
    pay: number | null
    note: string | null
    isRated: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    numberOfRefund: number | null
    isDraf: boolean | null
    complainId: string | null
    payment: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    storeId: number
    total: number
    discount: number
    pay: number
    note: number
    isRated: number
    status: number
    createdAt: number
    updatedAt: number
    numberOfRefund: number
    isDraf: number
    complainId: number
    payment: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
    discount?: true
    pay?: true
    numberOfRefund?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
    discount?: true
    pay?: true
    numberOfRefund?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    total?: true
    discount?: true
    pay?: true
    note?: true
    isRated?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    numberOfRefund?: true
    isDraf?: true
    complainId?: true
    payment?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    total?: true
    discount?: true
    pay?: true
    note?: true
    isRated?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    numberOfRefund?: true
    isDraf?: true
    complainId?: true
    payment?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    total?: true
    discount?: true
    pay?: true
    note?: true
    isRated?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    numberOfRefund?: true
    isDraf?: true
    complainId?: true
    payment?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    storeId: string
    total: number
    discount: number | null
    pay: number
    note: string | null
    isRated: boolean | null
    status: string
    createdAt: Date
    updatedAt: Date | null
    numberOfRefund: number | null
    isDraf: boolean | null
    complainId: string | null
    payment: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    total?: boolean
    discount?: boolean
    pay?: boolean
    note?: boolean
    isRated?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    numberOfRefund?: boolean
    isDraf?: boolean
    complainId?: boolean
    payment?: boolean
    OrderFlow?: boolean | Order$OrderFlowArgs<ExtArgs>
    OrderRefund?: boolean | Order$OrderRefundArgs<ExtArgs>
    OrderShipping?: boolean | Order$OrderShippingArgs<ExtArgs>
    OrderVoucher?: boolean | Order$OrderVoucherArgs<ExtArgs>
    ProductOrder?: boolean | Order$ProductOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>


  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    storeId?: boolean
    total?: boolean
    discount?: boolean
    pay?: boolean
    note?: boolean
    isRated?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    numberOfRefund?: boolean
    isDraf?: boolean
    complainId?: boolean
    payment?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storeId" | "total" | "discount" | "pay" | "note" | "isRated" | "status" | "createdAt" | "updatedAt" | "numberOfRefund" | "isDraf" | "complainId" | "payment", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderFlow?: boolean | Order$OrderFlowArgs<ExtArgs>
    OrderRefund?: boolean | Order$OrderRefundArgs<ExtArgs>
    OrderShipping?: boolean | Order$OrderShippingArgs<ExtArgs>
    OrderVoucher?: boolean | Order$OrderVoucherArgs<ExtArgs>
    ProductOrder?: boolean | Order$ProductOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      OrderFlow: Prisma.$OrderFlowPayload<ExtArgs>[]
      OrderRefund: Prisma.$OrderRefundPayload<ExtArgs>[]
      OrderShipping: Prisma.$OrderShippingPayload<ExtArgs>[]
      OrderVoucher: Prisma.$OrderVoucherPayload<ExtArgs>[]
      ProductOrder: Prisma.$ProductOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storeId: string
      total: number
      discount: number | null
      pay: number
      note: string | null
      isRated: boolean | null
      status: string
      createdAt: Date
      updatedAt: Date | null
      numberOfRefund: number | null
      isDraf: boolean | null
      complainId: string | null
      payment: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderFlow<T extends Order$OrderFlowArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderFlowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    OrderRefund<T extends Order$OrderRefundArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    OrderShipping<T extends Order$OrderShippingArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderShippingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    OrderVoucher<T extends Order$OrderVoucherArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderVoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ProductOrder<T extends Order$ProductOrderArgs<ExtArgs> = {}>(args?: Subset<T, Order$ProductOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly storeId: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly pay: FieldRef<"Order", 'Float'>
    readonly note: FieldRef<"Order", 'String'>
    readonly isRated: FieldRef<"Order", 'Boolean'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly numberOfRefund: FieldRef<"Order", 'Int'>
    readonly isDraf: FieldRef<"Order", 'Boolean'>
    readonly complainId: FieldRef<"Order", 'String'>
    readonly payment: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.OrderFlow
   */
  export type Order$OrderFlowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    where?: OrderFlowWhereInput
    orderBy?: OrderFlowOrderByWithRelationInput | OrderFlowOrderByWithRelationInput[]
    cursor?: OrderFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFlowScalarFieldEnum | OrderFlowScalarFieldEnum[]
  }

  /**
   * Order.OrderRefund
   */
  export type Order$OrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    where?: OrderRefundWhereInput
    orderBy?: OrderRefundOrderByWithRelationInput | OrderRefundOrderByWithRelationInput[]
    cursor?: OrderRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderRefundScalarFieldEnum | OrderRefundScalarFieldEnum[]
  }

  /**
   * Order.OrderShipping
   */
  export type Order$OrderShippingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    where?: OrderShippingWhereInput
    orderBy?: OrderShippingOrderByWithRelationInput | OrderShippingOrderByWithRelationInput[]
    cursor?: OrderShippingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderShippingScalarFieldEnum | OrderShippingScalarFieldEnum[]
  }

  /**
   * Order.OrderVoucher
   */
  export type Order$OrderVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    where?: OrderVoucherWhereInput
    orderBy?: OrderVoucherOrderByWithRelationInput | OrderVoucherOrderByWithRelationInput[]
    cursor?: OrderVoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderVoucherScalarFieldEnum | OrderVoucherScalarFieldEnum[]
  }

  /**
   * Order.ProductOrder
   */
  export type Order$ProductOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    where?: ProductOrderWhereInput
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    cursor?: ProductOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderFlow
   */

  export type AggregateOrderFlow = {
    _count: OrderFlowCountAggregateOutputType | null
    _min: OrderFlowMinAggregateOutputType | null
    _max: OrderFlowMaxAggregateOutputType | null
  }

  export type OrderFlowMinAggregateOutputType = {
    id: string | null
    status: string | null
    note: string | null
    createdBy: string | null
    createdAt: Date | null
    orderId: string | null
    orderRefundId: string | null
  }

  export type OrderFlowMaxAggregateOutputType = {
    id: string | null
    status: string | null
    note: string | null
    createdBy: string | null
    createdAt: Date | null
    orderId: string | null
    orderRefundId: string | null
  }

  export type OrderFlowCountAggregateOutputType = {
    id: number
    status: number
    note: number
    createdBy: number
    createdAt: number
    orderId: number
    orderRefundId: number
    _all: number
  }


  export type OrderFlowMinAggregateInputType = {
    id?: true
    status?: true
    note?: true
    createdBy?: true
    createdAt?: true
    orderId?: true
    orderRefundId?: true
  }

  export type OrderFlowMaxAggregateInputType = {
    id?: true
    status?: true
    note?: true
    createdBy?: true
    createdAt?: true
    orderId?: true
    orderRefundId?: true
  }

  export type OrderFlowCountAggregateInputType = {
    id?: true
    status?: true
    note?: true
    createdBy?: true
    createdAt?: true
    orderId?: true
    orderRefundId?: true
    _all?: true
  }

  export type OrderFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFlow to aggregate.
     */
    where?: OrderFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFlows to fetch.
     */
    orderBy?: OrderFlowOrderByWithRelationInput | OrderFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderFlows
    **/
    _count?: true | OrderFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderFlowMaxAggregateInputType
  }

  export type GetOrderFlowAggregateType<T extends OrderFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderFlow[P]>
      : GetScalarType<T[P], AggregateOrderFlow[P]>
  }




  export type OrderFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFlowWhereInput
    orderBy?: OrderFlowOrderByWithAggregationInput | OrderFlowOrderByWithAggregationInput[]
    by: OrderFlowScalarFieldEnum[] | OrderFlowScalarFieldEnum
    having?: OrderFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderFlowCountAggregateInputType | true
    _min?: OrderFlowMinAggregateInputType
    _max?: OrderFlowMaxAggregateInputType
  }

  export type OrderFlowGroupByOutputType = {
    id: string
    status: string
    note: string | null
    createdBy: string
    createdAt: Date | null
    orderId: string
    orderRefundId: string | null
    _count: OrderFlowCountAggregateOutputType | null
    _min: OrderFlowMinAggregateOutputType | null
    _max: OrderFlowMaxAggregateOutputType | null
  }

  type GetOrderFlowGroupByPayload<T extends OrderFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderFlowGroupByOutputType[P]>
            : GetScalarType<T[P], OrderFlowGroupByOutputType[P]>
        }
      >
    >


  export type OrderFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    orderId?: boolean
    orderRefundId?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFlow"]>


  export type OrderFlowSelectScalar = {
    id?: boolean
    status?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    orderId?: boolean
    orderRefundId?: boolean
  }

  export type OrderFlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "note" | "createdBy" | "createdAt" | "orderId" | "orderRefundId", ExtArgs["result"]["orderFlow"]>
  export type OrderFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderFlow"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      note: string | null
      createdBy: string
      createdAt: Date | null
      orderId: string
      orderRefundId: string | null
    }, ExtArgs["result"]["orderFlow"]>
    composites: {}
  }

  type OrderFlowGetPayload<S extends boolean | null | undefined | OrderFlowDefaultArgs> = $Result.GetResult<Prisma.$OrderFlowPayload, S>

  type OrderFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderFlowCountAggregateInputType | true
    }

  export interface OrderFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderFlow'], meta: { name: 'OrderFlow' } }
    /**
     * Find zero or one OrderFlow that matches the filter.
     * @param {OrderFlowFindUniqueArgs} args - Arguments to find a OrderFlow
     * @example
     * // Get one OrderFlow
     * const orderFlow = await prisma.orderFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFlowFindUniqueArgs>(args: SelectSubset<T, OrderFlowFindUniqueArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderFlow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFlowFindUniqueOrThrowArgs} args - Arguments to find a OrderFlow
     * @example
     * // Get one OrderFlow
     * const orderFlow = await prisma.orderFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowFindFirstArgs} args - Arguments to find a OrderFlow
     * @example
     * // Get one OrderFlow
     * const orderFlow = await prisma.orderFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFlowFindFirstArgs>(args?: SelectSubset<T, OrderFlowFindFirstArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowFindFirstOrThrowArgs} args - Arguments to find a OrderFlow
     * @example
     * // Get one OrderFlow
     * const orderFlow = await prisma.orderFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderFlows
     * const orderFlows = await prisma.orderFlow.findMany()
     * 
     * // Get first 10 OrderFlows
     * const orderFlows = await prisma.orderFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderFlowWithIdOnly = await prisma.orderFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFlowFindManyArgs>(args?: SelectSubset<T, OrderFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderFlow.
     * @param {OrderFlowCreateArgs} args - Arguments to create a OrderFlow.
     * @example
     * // Create one OrderFlow
     * const OrderFlow = await prisma.orderFlow.create({
     *   data: {
     *     // ... data to create a OrderFlow
     *   }
     * })
     * 
     */
    create<T extends OrderFlowCreateArgs>(args: SelectSubset<T, OrderFlowCreateArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderFlows.
     * @param {OrderFlowCreateManyArgs} args - Arguments to create many OrderFlows.
     * @example
     * // Create many OrderFlows
     * const orderFlow = await prisma.orderFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderFlowCreateManyArgs>(args?: SelectSubset<T, OrderFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderFlow.
     * @param {OrderFlowDeleteArgs} args - Arguments to delete one OrderFlow.
     * @example
     * // Delete one OrderFlow
     * const OrderFlow = await prisma.orderFlow.delete({
     *   where: {
     *     // ... filter to delete one OrderFlow
     *   }
     * })
     * 
     */
    delete<T extends OrderFlowDeleteArgs>(args: SelectSubset<T, OrderFlowDeleteArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderFlow.
     * @param {OrderFlowUpdateArgs} args - Arguments to update one OrderFlow.
     * @example
     * // Update one OrderFlow
     * const orderFlow = await prisma.orderFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderFlowUpdateArgs>(args: SelectSubset<T, OrderFlowUpdateArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderFlows.
     * @param {OrderFlowDeleteManyArgs} args - Arguments to filter OrderFlows to delete.
     * @example
     * // Delete a few OrderFlows
     * const { count } = await prisma.orderFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderFlowDeleteManyArgs>(args?: SelectSubset<T, OrderFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderFlows
     * const orderFlow = await prisma.orderFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderFlowUpdateManyArgs>(args: SelectSubset<T, OrderFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderFlow.
     * @param {OrderFlowUpsertArgs} args - Arguments to update or create a OrderFlow.
     * @example
     * // Update or create a OrderFlow
     * const orderFlow = await prisma.orderFlow.upsert({
     *   create: {
     *     // ... data to create a OrderFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderFlow we want to update
     *   }
     * })
     */
    upsert<T extends OrderFlowUpsertArgs>(args: SelectSubset<T, OrderFlowUpsertArgs<ExtArgs>>): Prisma__OrderFlowClient<$Result.GetResult<Prisma.$OrderFlowPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowCountArgs} args - Arguments to filter OrderFlows to count.
     * @example
     * // Count the number of OrderFlows
     * const count = await prisma.orderFlow.count({
     *   where: {
     *     // ... the filter for the OrderFlows we want to count
     *   }
     * })
    **/
    count<T extends OrderFlowCountArgs>(
      args?: Subset<T, OrderFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderFlowAggregateArgs>(args: Subset<T, OrderFlowAggregateArgs>): Prisma.PrismaPromise<GetOrderFlowAggregateType<T>>

    /**
     * Group by OrderFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderFlowGroupByArgs['orderBy'] }
        : { orderBy?: OrderFlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderFlow model
   */
  readonly fields: OrderFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderFlow model
   */ 
  interface OrderFlowFieldRefs {
    readonly id: FieldRef<"OrderFlow", 'String'>
    readonly status: FieldRef<"OrderFlow", 'String'>
    readonly note: FieldRef<"OrderFlow", 'String'>
    readonly createdBy: FieldRef<"OrderFlow", 'String'>
    readonly createdAt: FieldRef<"OrderFlow", 'DateTime'>
    readonly orderId: FieldRef<"OrderFlow", 'String'>
    readonly orderRefundId: FieldRef<"OrderFlow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderFlow findUnique
   */
  export type OrderFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter, which OrderFlow to fetch.
     */
    where: OrderFlowWhereUniqueInput
  }

  /**
   * OrderFlow findUniqueOrThrow
   */
  export type OrderFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter, which OrderFlow to fetch.
     */
    where: OrderFlowWhereUniqueInput
  }

  /**
   * OrderFlow findFirst
   */
  export type OrderFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter, which OrderFlow to fetch.
     */
    where?: OrderFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFlows to fetch.
     */
    orderBy?: OrderFlowOrderByWithRelationInput | OrderFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFlows.
     */
    cursor?: OrderFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFlows.
     */
    distinct?: OrderFlowScalarFieldEnum | OrderFlowScalarFieldEnum[]
  }

  /**
   * OrderFlow findFirstOrThrow
   */
  export type OrderFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter, which OrderFlow to fetch.
     */
    where?: OrderFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFlows to fetch.
     */
    orderBy?: OrderFlowOrderByWithRelationInput | OrderFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFlows.
     */
    cursor?: OrderFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFlows.
     */
    distinct?: OrderFlowScalarFieldEnum | OrderFlowScalarFieldEnum[]
  }

  /**
   * OrderFlow findMany
   */
  export type OrderFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter, which OrderFlows to fetch.
     */
    where?: OrderFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFlows to fetch.
     */
    orderBy?: OrderFlowOrderByWithRelationInput | OrderFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderFlows.
     */
    cursor?: OrderFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFlows.
     */
    skip?: number
    distinct?: OrderFlowScalarFieldEnum | OrderFlowScalarFieldEnum[]
  }

  /**
   * OrderFlow create
   */
  export type OrderFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderFlow.
     */
    data: XOR<OrderFlowCreateInput, OrderFlowUncheckedCreateInput>
  }

  /**
   * OrderFlow createMany
   */
  export type OrderFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderFlows.
     */
    data: OrderFlowCreateManyInput | OrderFlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderFlow update
   */
  export type OrderFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderFlow.
     */
    data: XOR<OrderFlowUpdateInput, OrderFlowUncheckedUpdateInput>
    /**
     * Choose, which OrderFlow to update.
     */
    where: OrderFlowWhereUniqueInput
  }

  /**
   * OrderFlow updateMany
   */
  export type OrderFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderFlows.
     */
    data: XOR<OrderFlowUpdateManyMutationInput, OrderFlowUncheckedUpdateManyInput>
    /**
     * Filter which OrderFlows to update
     */
    where?: OrderFlowWhereInput
  }

  /**
   * OrderFlow upsert
   */
  export type OrderFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderFlow to update in case it exists.
     */
    where: OrderFlowWhereUniqueInput
    /**
     * In case the OrderFlow found by the `where` argument doesn't exist, create a new OrderFlow with this data.
     */
    create: XOR<OrderFlowCreateInput, OrderFlowUncheckedCreateInput>
    /**
     * In case the OrderFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderFlowUpdateInput, OrderFlowUncheckedUpdateInput>
  }

  /**
   * OrderFlow delete
   */
  export type OrderFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
    /**
     * Filter which OrderFlow to delete.
     */
    where: OrderFlowWhereUniqueInput
  }

  /**
   * OrderFlow deleteMany
   */
  export type OrderFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFlows to delete
     */
    where?: OrderFlowWhereInput
  }

  /**
   * OrderFlow without action
   */
  export type OrderFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFlow
     */
    select?: OrderFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFlow
     */
    omit?: OrderFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFlowInclude<ExtArgs> | null
  }


  /**
   * Model OrderRefund
   */

  export type AggregateOrderRefund = {
    _count: OrderRefundCountAggregateOutputType | null
    _min: OrderRefundMinAggregateOutputType | null
    _max: OrderRefundMaxAggregateOutputType | null
  }

  export type OrderRefundMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type OrderRefundMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type OrderRefundCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    title: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type OrderRefundMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    title?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type OrderRefundMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    title?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type OrderRefundCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    title?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type OrderRefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRefund to aggregate.
     */
    where?: OrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRefunds to fetch.
     */
    orderBy?: OrderRefundOrderByWithRelationInput | OrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderRefunds
    **/
    _count?: true | OrderRefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderRefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderRefundMaxAggregateInputType
  }

  export type GetOrderRefundAggregateType<T extends OrderRefundAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderRefund[P]>
      : GetScalarType<T[P], AggregateOrderRefund[P]>
  }




  export type OrderRefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderRefundWhereInput
    orderBy?: OrderRefundOrderByWithAggregationInput | OrderRefundOrderByWithAggregationInput[]
    by: OrderRefundScalarFieldEnum[] | OrderRefundScalarFieldEnum
    having?: OrderRefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderRefundCountAggregateInputType | true
    _min?: OrderRefundMinAggregateInputType
    _max?: OrderRefundMaxAggregateInputType
  }

  export type OrderRefundGroupByOutputType = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt: Date | null
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: OrderRefundCountAggregateOutputType | null
    _min: OrderRefundMinAggregateOutputType | null
    _max: OrderRefundMaxAggregateOutputType | null
  }

  type GetOrderRefundGroupByPayload<T extends OrderRefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderRefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderRefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderRefundGroupByOutputType[P]>
            : GetScalarType<T[P], OrderRefundGroupByOutputType[P]>
        }
      >
    >


  export type OrderRefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    ProductOrderRefund?: boolean | OrderRefund$ProductOrderRefundArgs<ExtArgs>
    RefundMaterial?: boolean | OrderRefund$RefundMaterialArgs<ExtArgs>
    _count?: boolean | OrderRefundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderRefund"]>


  export type OrderRefundSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type OrderRefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "title" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["orderRefund"]>
  export type OrderRefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    ProductOrderRefund?: boolean | OrderRefund$ProductOrderRefundArgs<ExtArgs>
    RefundMaterial?: boolean | OrderRefund$RefundMaterialArgs<ExtArgs>
    _count?: boolean | OrderRefundCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderRefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderRefund"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      ProductOrderRefund: Prisma.$ProductOrderRefundPayload<ExtArgs>[]
      RefundMaterial: Prisma.$RefundMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: string
      title: string
      description: string
      createdAt: Date | null
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["orderRefund"]>
    composites: {}
  }

  type OrderRefundGetPayload<S extends boolean | null | undefined | OrderRefundDefaultArgs> = $Result.GetResult<Prisma.$OrderRefundPayload, S>

  type OrderRefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderRefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderRefundCountAggregateInputType | true
    }

  export interface OrderRefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderRefund'], meta: { name: 'OrderRefund' } }
    /**
     * Find zero or one OrderRefund that matches the filter.
     * @param {OrderRefundFindUniqueArgs} args - Arguments to find a OrderRefund
     * @example
     * // Get one OrderRefund
     * const orderRefund = await prisma.orderRefund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderRefundFindUniqueArgs>(args: SelectSubset<T, OrderRefundFindUniqueArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderRefund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderRefundFindUniqueOrThrowArgs} args - Arguments to find a OrderRefund
     * @example
     * // Get one OrderRefund
     * const orderRefund = await prisma.orderRefund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderRefundFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderRefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderRefund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundFindFirstArgs} args - Arguments to find a OrderRefund
     * @example
     * // Get one OrderRefund
     * const orderRefund = await prisma.orderRefund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderRefundFindFirstArgs>(args?: SelectSubset<T, OrderRefundFindFirstArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderRefund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundFindFirstOrThrowArgs} args - Arguments to find a OrderRefund
     * @example
     * // Get one OrderRefund
     * const orderRefund = await prisma.orderRefund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderRefundFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderRefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderRefunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderRefunds
     * const orderRefunds = await prisma.orderRefund.findMany()
     * 
     * // Get first 10 OrderRefunds
     * const orderRefunds = await prisma.orderRefund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderRefundWithIdOnly = await prisma.orderRefund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderRefundFindManyArgs>(args?: SelectSubset<T, OrderRefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderRefund.
     * @param {OrderRefundCreateArgs} args - Arguments to create a OrderRefund.
     * @example
     * // Create one OrderRefund
     * const OrderRefund = await prisma.orderRefund.create({
     *   data: {
     *     // ... data to create a OrderRefund
     *   }
     * })
     * 
     */
    create<T extends OrderRefundCreateArgs>(args: SelectSubset<T, OrderRefundCreateArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderRefunds.
     * @param {OrderRefundCreateManyArgs} args - Arguments to create many OrderRefunds.
     * @example
     * // Create many OrderRefunds
     * const orderRefund = await prisma.orderRefund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderRefundCreateManyArgs>(args?: SelectSubset<T, OrderRefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderRefund.
     * @param {OrderRefundDeleteArgs} args - Arguments to delete one OrderRefund.
     * @example
     * // Delete one OrderRefund
     * const OrderRefund = await prisma.orderRefund.delete({
     *   where: {
     *     // ... filter to delete one OrderRefund
     *   }
     * })
     * 
     */
    delete<T extends OrderRefundDeleteArgs>(args: SelectSubset<T, OrderRefundDeleteArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderRefund.
     * @param {OrderRefundUpdateArgs} args - Arguments to update one OrderRefund.
     * @example
     * // Update one OrderRefund
     * const orderRefund = await prisma.orderRefund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderRefundUpdateArgs>(args: SelectSubset<T, OrderRefundUpdateArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderRefunds.
     * @param {OrderRefundDeleteManyArgs} args - Arguments to filter OrderRefunds to delete.
     * @example
     * // Delete a few OrderRefunds
     * const { count } = await prisma.orderRefund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderRefundDeleteManyArgs>(args?: SelectSubset<T, OrderRefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderRefunds
     * const orderRefund = await prisma.orderRefund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderRefundUpdateManyArgs>(args: SelectSubset<T, OrderRefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderRefund.
     * @param {OrderRefundUpsertArgs} args - Arguments to update or create a OrderRefund.
     * @example
     * // Update or create a OrderRefund
     * const orderRefund = await prisma.orderRefund.upsert({
     *   create: {
     *     // ... data to create a OrderRefund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderRefund we want to update
     *   }
     * })
     */
    upsert<T extends OrderRefundUpsertArgs>(args: SelectSubset<T, OrderRefundUpsertArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundCountArgs} args - Arguments to filter OrderRefunds to count.
     * @example
     * // Count the number of OrderRefunds
     * const count = await prisma.orderRefund.count({
     *   where: {
     *     // ... the filter for the OrderRefunds we want to count
     *   }
     * })
    **/
    count<T extends OrderRefundCountArgs>(
      args?: Subset<T, OrderRefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderRefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderRefundAggregateArgs>(args: Subset<T, OrderRefundAggregateArgs>): Prisma.PrismaPromise<GetOrderRefundAggregateType<T>>

    /**
     * Group by OrderRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderRefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderRefundGroupByArgs['orderBy'] }
        : { orderBy?: OrderRefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderRefund model
   */
  readonly fields: OrderRefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderRefund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderRefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ProductOrderRefund<T extends OrderRefund$ProductOrderRefundArgs<ExtArgs> = {}>(args?: Subset<T, OrderRefund$ProductOrderRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    RefundMaterial<T extends OrderRefund$RefundMaterialArgs<ExtArgs> = {}>(args?: Subset<T, OrderRefund$RefundMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderRefund model
   */ 
  interface OrderRefundFieldRefs {
    readonly id: FieldRef<"OrderRefund", 'String'>
    readonly orderId: FieldRef<"OrderRefund", 'String'>
    readonly status: FieldRef<"OrderRefund", 'String'>
    readonly title: FieldRef<"OrderRefund", 'String'>
    readonly description: FieldRef<"OrderRefund", 'String'>
    readonly createdAt: FieldRef<"OrderRefund", 'DateTime'>
    readonly createdBy: FieldRef<"OrderRefund", 'String'>
    readonly updatedAt: FieldRef<"OrderRefund", 'DateTime'>
    readonly updatedBy: FieldRef<"OrderRefund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderRefund findUnique
   */
  export type OrderRefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which OrderRefund to fetch.
     */
    where: OrderRefundWhereUniqueInput
  }

  /**
   * OrderRefund findUniqueOrThrow
   */
  export type OrderRefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which OrderRefund to fetch.
     */
    where: OrderRefundWhereUniqueInput
  }

  /**
   * OrderRefund findFirst
   */
  export type OrderRefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which OrderRefund to fetch.
     */
    where?: OrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRefunds to fetch.
     */
    orderBy?: OrderRefundOrderByWithRelationInput | OrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRefunds.
     */
    cursor?: OrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRefunds.
     */
    distinct?: OrderRefundScalarFieldEnum | OrderRefundScalarFieldEnum[]
  }

  /**
   * OrderRefund findFirstOrThrow
   */
  export type OrderRefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which OrderRefund to fetch.
     */
    where?: OrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRefunds to fetch.
     */
    orderBy?: OrderRefundOrderByWithRelationInput | OrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRefunds.
     */
    cursor?: OrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRefunds.
     */
    distinct?: OrderRefundScalarFieldEnum | OrderRefundScalarFieldEnum[]
  }

  /**
   * OrderRefund findMany
   */
  export type OrderRefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which OrderRefunds to fetch.
     */
    where?: OrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRefunds to fetch.
     */
    orderBy?: OrderRefundOrderByWithRelationInput | OrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderRefunds.
     */
    cursor?: OrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRefunds.
     */
    skip?: number
    distinct?: OrderRefundScalarFieldEnum | OrderRefundScalarFieldEnum[]
  }

  /**
   * OrderRefund create
   */
  export type OrderRefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderRefund.
     */
    data: XOR<OrderRefundCreateInput, OrderRefundUncheckedCreateInput>
  }

  /**
   * OrderRefund createMany
   */
  export type OrderRefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderRefunds.
     */
    data: OrderRefundCreateManyInput | OrderRefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderRefund update
   */
  export type OrderRefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderRefund.
     */
    data: XOR<OrderRefundUpdateInput, OrderRefundUncheckedUpdateInput>
    /**
     * Choose, which OrderRefund to update.
     */
    where: OrderRefundWhereUniqueInput
  }

  /**
   * OrderRefund updateMany
   */
  export type OrderRefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderRefunds.
     */
    data: XOR<OrderRefundUpdateManyMutationInput, OrderRefundUncheckedUpdateManyInput>
    /**
     * Filter which OrderRefunds to update
     */
    where?: OrderRefundWhereInput
  }

  /**
   * OrderRefund upsert
   */
  export type OrderRefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderRefund to update in case it exists.
     */
    where: OrderRefundWhereUniqueInput
    /**
     * In case the OrderRefund found by the `where` argument doesn't exist, create a new OrderRefund with this data.
     */
    create: XOR<OrderRefundCreateInput, OrderRefundUncheckedCreateInput>
    /**
     * In case the OrderRefund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderRefundUpdateInput, OrderRefundUncheckedUpdateInput>
  }

  /**
   * OrderRefund delete
   */
  export type OrderRefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
    /**
     * Filter which OrderRefund to delete.
     */
    where: OrderRefundWhereUniqueInput
  }

  /**
   * OrderRefund deleteMany
   */
  export type OrderRefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRefunds to delete
     */
    where?: OrderRefundWhereInput
  }

  /**
   * OrderRefund.ProductOrderRefund
   */
  export type OrderRefund$ProductOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    where?: ProductOrderRefundWhereInput
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    cursor?: ProductOrderRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOrderRefundScalarFieldEnum | ProductOrderRefundScalarFieldEnum[]
  }

  /**
   * OrderRefund.RefundMaterial
   */
  export type OrderRefund$RefundMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    where?: RefundMaterialWhereInput
    orderBy?: RefundMaterialOrderByWithRelationInput | RefundMaterialOrderByWithRelationInput[]
    cursor?: RefundMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundMaterialScalarFieldEnum | RefundMaterialScalarFieldEnum[]
  }

  /**
   * OrderRefund without action
   */
  export type OrderRefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRefund
     */
    select?: OrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRefund
     */
    omit?: OrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRefundInclude<ExtArgs> | null
  }


  /**
   * Model OrderShipping
   */

  export type AggregateOrderShipping = {
    _count: OrderShippingCountAggregateOutputType | null
    _min: OrderShippingMinAggregateOutputType | null
    _max: OrderShippingMaxAggregateOutputType | null
  }

  export type OrderShippingMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    name: string | null
    address: string | null
    type: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
  }

  export type OrderShippingMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    name: string | null
    address: string | null
    type: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
  }

  export type OrderShippingCountAggregateOutputType = {
    id: number
    orderId: number
    name: number
    address: number
    type: number
    createdAt: number
    createdBy: number
    updatedAt: number
    _all: number
  }


  export type OrderShippingMinAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
  }

  export type OrderShippingMaxAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
  }

  export type OrderShippingCountAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderShippingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderShipping to aggregate.
     */
    where?: OrderShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderShippings to fetch.
     */
    orderBy?: OrderShippingOrderByWithRelationInput | OrderShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderShippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderShippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderShippings
    **/
    _count?: true | OrderShippingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderShippingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderShippingMaxAggregateInputType
  }

  export type GetOrderShippingAggregateType<T extends OrderShippingAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderShipping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderShipping[P]>
      : GetScalarType<T[P], AggregateOrderShipping[P]>
  }




  export type OrderShippingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderShippingWhereInput
    orderBy?: OrderShippingOrderByWithAggregationInput | OrderShippingOrderByWithAggregationInput[]
    by: OrderShippingScalarFieldEnum[] | OrderShippingScalarFieldEnum
    having?: OrderShippingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderShippingCountAggregateInputType | true
    _min?: OrderShippingMinAggregateInputType
    _max?: OrderShippingMaxAggregateInputType
  }

  export type OrderShippingGroupByOutputType = {
    id: string
    orderId: string
    name: string
    address: string
    type: string
    createdAt: Date | null
    createdBy: string
    updatedAt: Date | null
    _count: OrderShippingCountAggregateOutputType | null
    _min: OrderShippingMinAggregateOutputType | null
    _max: OrderShippingMaxAggregateOutputType | null
  }

  type GetOrderShippingGroupByPayload<T extends OrderShippingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderShippingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderShippingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderShippingGroupByOutputType[P]>
            : GetScalarType<T[P], OrderShippingGroupByOutputType[P]>
        }
      >
    >


  export type OrderShippingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderShipping"]>


  export type OrderShippingSelectScalar = {
    id?: boolean
    orderId?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
  }

  export type OrderShippingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "name" | "address" | "type" | "createdAt" | "createdBy" | "updatedAt", ExtArgs["result"]["orderShipping"]>
  export type OrderShippingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderShippingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderShipping"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      name: string
      address: string
      type: string
      createdAt: Date | null
      createdBy: string
      updatedAt: Date | null
    }, ExtArgs["result"]["orderShipping"]>
    composites: {}
  }

  type OrderShippingGetPayload<S extends boolean | null | undefined | OrderShippingDefaultArgs> = $Result.GetResult<Prisma.$OrderShippingPayload, S>

  type OrderShippingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderShippingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderShippingCountAggregateInputType | true
    }

  export interface OrderShippingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderShipping'], meta: { name: 'OrderShipping' } }
    /**
     * Find zero or one OrderShipping that matches the filter.
     * @param {OrderShippingFindUniqueArgs} args - Arguments to find a OrderShipping
     * @example
     * // Get one OrderShipping
     * const orderShipping = await prisma.orderShipping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderShippingFindUniqueArgs>(args: SelectSubset<T, OrderShippingFindUniqueArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderShipping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderShippingFindUniqueOrThrowArgs} args - Arguments to find a OrderShipping
     * @example
     * // Get one OrderShipping
     * const orderShipping = await prisma.orderShipping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderShippingFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderShippingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderShipping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingFindFirstArgs} args - Arguments to find a OrderShipping
     * @example
     * // Get one OrderShipping
     * const orderShipping = await prisma.orderShipping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderShippingFindFirstArgs>(args?: SelectSubset<T, OrderShippingFindFirstArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderShipping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingFindFirstOrThrowArgs} args - Arguments to find a OrderShipping
     * @example
     * // Get one OrderShipping
     * const orderShipping = await prisma.orderShipping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderShippingFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderShippingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderShippings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderShippings
     * const orderShippings = await prisma.orderShipping.findMany()
     * 
     * // Get first 10 OrderShippings
     * const orderShippings = await prisma.orderShipping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderShippingWithIdOnly = await prisma.orderShipping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderShippingFindManyArgs>(args?: SelectSubset<T, OrderShippingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderShipping.
     * @param {OrderShippingCreateArgs} args - Arguments to create a OrderShipping.
     * @example
     * // Create one OrderShipping
     * const OrderShipping = await prisma.orderShipping.create({
     *   data: {
     *     // ... data to create a OrderShipping
     *   }
     * })
     * 
     */
    create<T extends OrderShippingCreateArgs>(args: SelectSubset<T, OrderShippingCreateArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderShippings.
     * @param {OrderShippingCreateManyArgs} args - Arguments to create many OrderShippings.
     * @example
     * // Create many OrderShippings
     * const orderShipping = await prisma.orderShipping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderShippingCreateManyArgs>(args?: SelectSubset<T, OrderShippingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderShipping.
     * @param {OrderShippingDeleteArgs} args - Arguments to delete one OrderShipping.
     * @example
     * // Delete one OrderShipping
     * const OrderShipping = await prisma.orderShipping.delete({
     *   where: {
     *     // ... filter to delete one OrderShipping
     *   }
     * })
     * 
     */
    delete<T extends OrderShippingDeleteArgs>(args: SelectSubset<T, OrderShippingDeleteArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderShipping.
     * @param {OrderShippingUpdateArgs} args - Arguments to update one OrderShipping.
     * @example
     * // Update one OrderShipping
     * const orderShipping = await prisma.orderShipping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderShippingUpdateArgs>(args: SelectSubset<T, OrderShippingUpdateArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderShippings.
     * @param {OrderShippingDeleteManyArgs} args - Arguments to filter OrderShippings to delete.
     * @example
     * // Delete a few OrderShippings
     * const { count } = await prisma.orderShipping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderShippingDeleteManyArgs>(args?: SelectSubset<T, OrderShippingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderShippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderShippings
     * const orderShipping = await prisma.orderShipping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderShippingUpdateManyArgs>(args: SelectSubset<T, OrderShippingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderShipping.
     * @param {OrderShippingUpsertArgs} args - Arguments to update or create a OrderShipping.
     * @example
     * // Update or create a OrderShipping
     * const orderShipping = await prisma.orderShipping.upsert({
     *   create: {
     *     // ... data to create a OrderShipping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderShipping we want to update
     *   }
     * })
     */
    upsert<T extends OrderShippingUpsertArgs>(args: SelectSubset<T, OrderShippingUpsertArgs<ExtArgs>>): Prisma__OrderShippingClient<$Result.GetResult<Prisma.$OrderShippingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderShippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingCountArgs} args - Arguments to filter OrderShippings to count.
     * @example
     * // Count the number of OrderShippings
     * const count = await prisma.orderShipping.count({
     *   where: {
     *     // ... the filter for the OrderShippings we want to count
     *   }
     * })
    **/
    count<T extends OrderShippingCountArgs>(
      args?: Subset<T, OrderShippingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderShippingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderShipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderShippingAggregateArgs>(args: Subset<T, OrderShippingAggregateArgs>): Prisma.PrismaPromise<GetOrderShippingAggregateType<T>>

    /**
     * Group by OrderShipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderShippingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderShippingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderShippingGroupByArgs['orderBy'] }
        : { orderBy?: OrderShippingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderShippingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderShippingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderShipping model
   */
  readonly fields: OrderShippingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderShipping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderShippingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderShipping model
   */ 
  interface OrderShippingFieldRefs {
    readonly id: FieldRef<"OrderShipping", 'String'>
    readonly orderId: FieldRef<"OrderShipping", 'String'>
    readonly name: FieldRef<"OrderShipping", 'String'>
    readonly address: FieldRef<"OrderShipping", 'String'>
    readonly type: FieldRef<"OrderShipping", 'String'>
    readonly createdAt: FieldRef<"OrderShipping", 'DateTime'>
    readonly createdBy: FieldRef<"OrderShipping", 'String'>
    readonly updatedAt: FieldRef<"OrderShipping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderShipping findUnique
   */
  export type OrderShippingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter, which OrderShipping to fetch.
     */
    where: OrderShippingWhereUniqueInput
  }

  /**
   * OrderShipping findUniqueOrThrow
   */
  export type OrderShippingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter, which OrderShipping to fetch.
     */
    where: OrderShippingWhereUniqueInput
  }

  /**
   * OrderShipping findFirst
   */
  export type OrderShippingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter, which OrderShipping to fetch.
     */
    where?: OrderShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderShippings to fetch.
     */
    orderBy?: OrderShippingOrderByWithRelationInput | OrderShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderShippings.
     */
    cursor?: OrderShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderShippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderShippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderShippings.
     */
    distinct?: OrderShippingScalarFieldEnum | OrderShippingScalarFieldEnum[]
  }

  /**
   * OrderShipping findFirstOrThrow
   */
  export type OrderShippingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter, which OrderShipping to fetch.
     */
    where?: OrderShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderShippings to fetch.
     */
    orderBy?: OrderShippingOrderByWithRelationInput | OrderShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderShippings.
     */
    cursor?: OrderShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderShippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderShippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderShippings.
     */
    distinct?: OrderShippingScalarFieldEnum | OrderShippingScalarFieldEnum[]
  }

  /**
   * OrderShipping findMany
   */
  export type OrderShippingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter, which OrderShippings to fetch.
     */
    where?: OrderShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderShippings to fetch.
     */
    orderBy?: OrderShippingOrderByWithRelationInput | OrderShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderShippings.
     */
    cursor?: OrderShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderShippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderShippings.
     */
    skip?: number
    distinct?: OrderShippingScalarFieldEnum | OrderShippingScalarFieldEnum[]
  }

  /**
   * OrderShipping create
   */
  export type OrderShippingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderShipping.
     */
    data: XOR<OrderShippingCreateInput, OrderShippingUncheckedCreateInput>
  }

  /**
   * OrderShipping createMany
   */
  export type OrderShippingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderShippings.
     */
    data: OrderShippingCreateManyInput | OrderShippingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderShipping update
   */
  export type OrderShippingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderShipping.
     */
    data: XOR<OrderShippingUpdateInput, OrderShippingUncheckedUpdateInput>
    /**
     * Choose, which OrderShipping to update.
     */
    where: OrderShippingWhereUniqueInput
  }

  /**
   * OrderShipping updateMany
   */
  export type OrderShippingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderShippings.
     */
    data: XOR<OrderShippingUpdateManyMutationInput, OrderShippingUncheckedUpdateManyInput>
    /**
     * Filter which OrderShippings to update
     */
    where?: OrderShippingWhereInput
  }

  /**
   * OrderShipping upsert
   */
  export type OrderShippingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderShipping to update in case it exists.
     */
    where: OrderShippingWhereUniqueInput
    /**
     * In case the OrderShipping found by the `where` argument doesn't exist, create a new OrderShipping with this data.
     */
    create: XOR<OrderShippingCreateInput, OrderShippingUncheckedCreateInput>
    /**
     * In case the OrderShipping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderShippingUpdateInput, OrderShippingUncheckedUpdateInput>
  }

  /**
   * OrderShipping delete
   */
  export type OrderShippingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
    /**
     * Filter which OrderShipping to delete.
     */
    where: OrderShippingWhereUniqueInput
  }

  /**
   * OrderShipping deleteMany
   */
  export type OrderShippingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderShippings to delete
     */
    where?: OrderShippingWhereInput
  }

  /**
   * OrderShipping without action
   */
  export type OrderShippingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderShipping
     */
    select?: OrderShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderShipping
     */
    omit?: OrderShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderShippingInclude<ExtArgs> | null
  }


  /**
   * Model OrderVoucher
   */

  export type AggregateOrderVoucher = {
    _count: OrderVoucherCountAggregateOutputType | null
    _min: OrderVoucherMinAggregateOutputType | null
    _max: OrderVoucherMaxAggregateOutputType | null
  }

  export type OrderVoucherMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    voucherId: string | null
    createdAt: Date | null
  }

  export type OrderVoucherMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    voucherId: string | null
    createdAt: Date | null
  }

  export type OrderVoucherCountAggregateOutputType = {
    id: number
    orderId: number
    voucherId: number
    createdAt: number
    _all: number
  }


  export type OrderVoucherMinAggregateInputType = {
    id?: true
    orderId?: true
    voucherId?: true
    createdAt?: true
  }

  export type OrderVoucherMaxAggregateInputType = {
    id?: true
    orderId?: true
    voucherId?: true
    createdAt?: true
  }

  export type OrderVoucherCountAggregateInputType = {
    id?: true
    orderId?: true
    voucherId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderVoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVoucher to aggregate.
     */
    where?: OrderVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVouchers to fetch.
     */
    orderBy?: OrderVoucherOrderByWithRelationInput | OrderVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderVouchers
    **/
    _count?: true | OrderVoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderVoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderVoucherMaxAggregateInputType
  }

  export type GetOrderVoucherAggregateType<T extends OrderVoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderVoucher[P]>
      : GetScalarType<T[P], AggregateOrderVoucher[P]>
  }




  export type OrderVoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVoucherWhereInput
    orderBy?: OrderVoucherOrderByWithAggregationInput | OrderVoucherOrderByWithAggregationInput[]
    by: OrderVoucherScalarFieldEnum[] | OrderVoucherScalarFieldEnum
    having?: OrderVoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderVoucherCountAggregateInputType | true
    _min?: OrderVoucherMinAggregateInputType
    _max?: OrderVoucherMaxAggregateInputType
  }

  export type OrderVoucherGroupByOutputType = {
    id: string
    orderId: string
    voucherId: string
    createdAt: Date
    _count: OrderVoucherCountAggregateOutputType | null
    _min: OrderVoucherMinAggregateOutputType | null
    _max: OrderVoucherMaxAggregateOutputType | null
  }

  type GetOrderVoucherGroupByPayload<T extends OrderVoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderVoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderVoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderVoucherGroupByOutputType[P]>
            : GetScalarType<T[P], OrderVoucherGroupByOutputType[P]>
        }
      >
    >


  export type OrderVoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    voucherId?: boolean
    createdAt?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderVoucher"]>


  export type OrderVoucherSelectScalar = {
    id?: boolean
    orderId?: boolean
    voucherId?: boolean
    createdAt?: boolean
  }

  export type OrderVoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "voucherId" | "createdAt", ExtArgs["result"]["orderVoucher"]>
  export type OrderVoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderVoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderVoucher"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      voucherId: string
      createdAt: Date
    }, ExtArgs["result"]["orderVoucher"]>
    composites: {}
  }

  type OrderVoucherGetPayload<S extends boolean | null | undefined | OrderVoucherDefaultArgs> = $Result.GetResult<Prisma.$OrderVoucherPayload, S>

  type OrderVoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderVoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderVoucherCountAggregateInputType | true
    }

  export interface OrderVoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderVoucher'], meta: { name: 'OrderVoucher' } }
    /**
     * Find zero or one OrderVoucher that matches the filter.
     * @param {OrderVoucherFindUniqueArgs} args - Arguments to find a OrderVoucher
     * @example
     * // Get one OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderVoucherFindUniqueArgs>(args: SelectSubset<T, OrderVoucherFindUniqueArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderVoucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderVoucherFindUniqueOrThrowArgs} args - Arguments to find a OrderVoucher
     * @example
     * // Get one OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderVoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderVoucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherFindFirstArgs} args - Arguments to find a OrderVoucher
     * @example
     * // Get one OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderVoucherFindFirstArgs>(args?: SelectSubset<T, OrderVoucherFindFirstArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderVoucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherFindFirstOrThrowArgs} args - Arguments to find a OrderVoucher
     * @example
     * // Get one OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderVoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderVouchers
     * const orderVouchers = await prisma.orderVoucher.findMany()
     * 
     * // Get first 10 OrderVouchers
     * const orderVouchers = await prisma.orderVoucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderVoucherWithIdOnly = await prisma.orderVoucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderVoucherFindManyArgs>(args?: SelectSubset<T, OrderVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderVoucher.
     * @param {OrderVoucherCreateArgs} args - Arguments to create a OrderVoucher.
     * @example
     * // Create one OrderVoucher
     * const OrderVoucher = await prisma.orderVoucher.create({
     *   data: {
     *     // ... data to create a OrderVoucher
     *   }
     * })
     * 
     */
    create<T extends OrderVoucherCreateArgs>(args: SelectSubset<T, OrderVoucherCreateArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderVouchers.
     * @param {OrderVoucherCreateManyArgs} args - Arguments to create many OrderVouchers.
     * @example
     * // Create many OrderVouchers
     * const orderVoucher = await prisma.orderVoucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderVoucherCreateManyArgs>(args?: SelectSubset<T, OrderVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderVoucher.
     * @param {OrderVoucherDeleteArgs} args - Arguments to delete one OrderVoucher.
     * @example
     * // Delete one OrderVoucher
     * const OrderVoucher = await prisma.orderVoucher.delete({
     *   where: {
     *     // ... filter to delete one OrderVoucher
     *   }
     * })
     * 
     */
    delete<T extends OrderVoucherDeleteArgs>(args: SelectSubset<T, OrderVoucherDeleteArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderVoucher.
     * @param {OrderVoucherUpdateArgs} args - Arguments to update one OrderVoucher.
     * @example
     * // Update one OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderVoucherUpdateArgs>(args: SelectSubset<T, OrderVoucherUpdateArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderVouchers.
     * @param {OrderVoucherDeleteManyArgs} args - Arguments to filter OrderVouchers to delete.
     * @example
     * // Delete a few OrderVouchers
     * const { count } = await prisma.orderVoucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderVoucherDeleteManyArgs>(args?: SelectSubset<T, OrderVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderVouchers
     * const orderVoucher = await prisma.orderVoucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderVoucherUpdateManyArgs>(args: SelectSubset<T, OrderVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderVoucher.
     * @param {OrderVoucherUpsertArgs} args - Arguments to update or create a OrderVoucher.
     * @example
     * // Update or create a OrderVoucher
     * const orderVoucher = await prisma.orderVoucher.upsert({
     *   create: {
     *     // ... data to create a OrderVoucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderVoucher we want to update
     *   }
     * })
     */
    upsert<T extends OrderVoucherUpsertArgs>(args: SelectSubset<T, OrderVoucherUpsertArgs<ExtArgs>>): Prisma__OrderVoucherClient<$Result.GetResult<Prisma.$OrderVoucherPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherCountArgs} args - Arguments to filter OrderVouchers to count.
     * @example
     * // Count the number of OrderVouchers
     * const count = await prisma.orderVoucher.count({
     *   where: {
     *     // ... the filter for the OrderVouchers we want to count
     *   }
     * })
    **/
    count<T extends OrderVoucherCountArgs>(
      args?: Subset<T, OrderVoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderVoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderVoucherAggregateArgs>(args: Subset<T, OrderVoucherAggregateArgs>): Prisma.PrismaPromise<GetOrderVoucherAggregateType<T>>

    /**
     * Group by OrderVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderVoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderVoucherGroupByArgs['orderBy'] }
        : { orderBy?: OrderVoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderVoucher model
   */
  readonly fields: OrderVoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderVoucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderVoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderVoucher model
   */ 
  interface OrderVoucherFieldRefs {
    readonly id: FieldRef<"OrderVoucher", 'String'>
    readonly orderId: FieldRef<"OrderVoucher", 'String'>
    readonly voucherId: FieldRef<"OrderVoucher", 'String'>
    readonly createdAt: FieldRef<"OrderVoucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderVoucher findUnique
   */
  export type OrderVoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter, which OrderVoucher to fetch.
     */
    where: OrderVoucherWhereUniqueInput
  }

  /**
   * OrderVoucher findUniqueOrThrow
   */
  export type OrderVoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter, which OrderVoucher to fetch.
     */
    where: OrderVoucherWhereUniqueInput
  }

  /**
   * OrderVoucher findFirst
   */
  export type OrderVoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter, which OrderVoucher to fetch.
     */
    where?: OrderVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVouchers to fetch.
     */
    orderBy?: OrderVoucherOrderByWithRelationInput | OrderVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVouchers.
     */
    cursor?: OrderVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVouchers.
     */
    distinct?: OrderVoucherScalarFieldEnum | OrderVoucherScalarFieldEnum[]
  }

  /**
   * OrderVoucher findFirstOrThrow
   */
  export type OrderVoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter, which OrderVoucher to fetch.
     */
    where?: OrderVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVouchers to fetch.
     */
    orderBy?: OrderVoucherOrderByWithRelationInput | OrderVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVouchers.
     */
    cursor?: OrderVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVouchers.
     */
    distinct?: OrderVoucherScalarFieldEnum | OrderVoucherScalarFieldEnum[]
  }

  /**
   * OrderVoucher findMany
   */
  export type OrderVoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter, which OrderVouchers to fetch.
     */
    where?: OrderVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVouchers to fetch.
     */
    orderBy?: OrderVoucherOrderByWithRelationInput | OrderVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderVouchers.
     */
    cursor?: OrderVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVouchers.
     */
    skip?: number
    distinct?: OrderVoucherScalarFieldEnum | OrderVoucherScalarFieldEnum[]
  }

  /**
   * OrderVoucher create
   */
  export type OrderVoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderVoucher.
     */
    data: XOR<OrderVoucherCreateInput, OrderVoucherUncheckedCreateInput>
  }

  /**
   * OrderVoucher createMany
   */
  export type OrderVoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderVouchers.
     */
    data: OrderVoucherCreateManyInput | OrderVoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderVoucher update
   */
  export type OrderVoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderVoucher.
     */
    data: XOR<OrderVoucherUpdateInput, OrderVoucherUncheckedUpdateInput>
    /**
     * Choose, which OrderVoucher to update.
     */
    where: OrderVoucherWhereUniqueInput
  }

  /**
   * OrderVoucher updateMany
   */
  export type OrderVoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderVouchers.
     */
    data: XOR<OrderVoucherUpdateManyMutationInput, OrderVoucherUncheckedUpdateManyInput>
    /**
     * Filter which OrderVouchers to update
     */
    where?: OrderVoucherWhereInput
  }

  /**
   * OrderVoucher upsert
   */
  export type OrderVoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderVoucher to update in case it exists.
     */
    where: OrderVoucherWhereUniqueInput
    /**
     * In case the OrderVoucher found by the `where` argument doesn't exist, create a new OrderVoucher with this data.
     */
    create: XOR<OrderVoucherCreateInput, OrderVoucherUncheckedCreateInput>
    /**
     * In case the OrderVoucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderVoucherUpdateInput, OrderVoucherUncheckedUpdateInput>
  }

  /**
   * OrderVoucher delete
   */
  export type OrderVoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
    /**
     * Filter which OrderVoucher to delete.
     */
    where: OrderVoucherWhereUniqueInput
  }

  /**
   * OrderVoucher deleteMany
   */
  export type OrderVoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVouchers to delete
     */
    where?: OrderVoucherWhereInput
  }

  /**
   * OrderVoucher without action
   */
  export type OrderVoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVoucher
     */
    select?: OrderVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderVoucher
     */
    omit?: OrderVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderVoucherInclude<ExtArgs> | null
  }


  /**
   * Model ProductOrder
   */

  export type AggregateProductOrder = {
    _count: ProductOrderCountAggregateOutputType | null
    _avg: ProductOrderAvgAggregateOutputType | null
    _sum: ProductOrderSumAggregateOutputType | null
    _min: ProductOrderMinAggregateOutputType | null
    _max: ProductOrderMaxAggregateOutputType | null
  }

  export type ProductOrderAvgAggregateOutputType = {
    quantity: number | null
    priceBefore: number | null
    priceAfter: number | null
  }

  export type ProductOrderSumAggregateOutputType = {
    quantity: number | null
    priceBefore: number | null
    priceAfter: number | null
  }

  export type ProductOrderMinAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: number | null
    priceBefore: number | null
    priceAfter: number | null
    orderId: string | null
  }

  export type ProductOrderMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: number | null
    priceBefore: number | null
    priceAfter: number | null
    orderId: string | null
  }

  export type ProductOrderCountAggregateOutputType = {
    id: number
    productId: number
    quantity: number
    priceBefore: number
    priceAfter: number
    orderId: number
    _all: number
  }


  export type ProductOrderAvgAggregateInputType = {
    quantity?: true
    priceBefore?: true
    priceAfter?: true
  }

  export type ProductOrderSumAggregateInputType = {
    quantity?: true
    priceBefore?: true
    priceAfter?: true
  }

  export type ProductOrderMinAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    priceBefore?: true
    priceAfter?: true
    orderId?: true
  }

  export type ProductOrderMaxAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    priceBefore?: true
    priceAfter?: true
    orderId?: true
  }

  export type ProductOrderCountAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    priceBefore?: true
    priceAfter?: true
    orderId?: true
    _all?: true
  }

  export type ProductOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrder to aggregate.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOrders
    **/
    _count?: true | ProductOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOrderMaxAggregateInputType
  }

  export type GetProductOrderAggregateType<T extends ProductOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOrder[P]>
      : GetScalarType<T[P], AggregateProductOrder[P]>
  }




  export type ProductOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderWhereInput
    orderBy?: ProductOrderOrderByWithAggregationInput | ProductOrderOrderByWithAggregationInput[]
    by: ProductOrderScalarFieldEnum[] | ProductOrderScalarFieldEnum
    having?: ProductOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOrderCountAggregateInputType | true
    _avg?: ProductOrderAvgAggregateInputType
    _sum?: ProductOrderSumAggregateInputType
    _min?: ProductOrderMinAggregateInputType
    _max?: ProductOrderMaxAggregateInputType
  }

  export type ProductOrderGroupByOutputType = {
    id: string
    productId: string
    quantity: number
    priceBefore: number | null
    priceAfter: number
    orderId: string
    _count: ProductOrderCountAggregateOutputType | null
    _avg: ProductOrderAvgAggregateOutputType | null
    _sum: ProductOrderSumAggregateOutputType | null
    _min: ProductOrderMinAggregateOutputType | null
    _max: ProductOrderMaxAggregateOutputType | null
  }

  type GetProductOrderGroupByPayload<T extends ProductOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    priceBefore?: boolean
    priceAfter?: boolean
    orderId?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    ProductOrderRefund?: boolean | ProductOrder$ProductOrderRefundArgs<ExtArgs>
    _count?: boolean | ProductOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOrder"]>


  export type ProductOrderSelectScalar = {
    id?: boolean
    productId?: boolean
    quantity?: boolean
    priceBefore?: boolean
    priceAfter?: boolean
    orderId?: boolean
  }

  export type ProductOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "quantity" | "priceBefore" | "priceAfter" | "orderId", ExtArgs["result"]["productOrder"]>
  export type ProductOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    ProductOrderRefund?: boolean | ProductOrder$ProductOrderRefundArgs<ExtArgs>
    _count?: boolean | ProductOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOrder"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      ProductOrderRefund: Prisma.$ProductOrderRefundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      quantity: number
      priceBefore: number | null
      priceAfter: number
      orderId: string
    }, ExtArgs["result"]["productOrder"]>
    composites: {}
  }

  type ProductOrderGetPayload<S extends boolean | null | undefined | ProductOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductOrderPayload, S>

  type ProductOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductOrderCountAggregateInputType | true
    }

  export interface ProductOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOrder'], meta: { name: 'ProductOrder' } }
    /**
     * Find zero or one ProductOrder that matches the filter.
     * @param {ProductOrderFindUniqueArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductOrderFindUniqueArgs>(args: SelectSubset<T, ProductOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindFirstArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductOrderFindFirstArgs>(args?: SelectSubset<T, ProductOrderFindFirstArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindFirstOrThrowArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOrders
     * const productOrders = await prisma.productOrder.findMany()
     * 
     * // Get first 10 ProductOrders
     * const productOrders = await prisma.productOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOrderWithIdOnly = await prisma.productOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductOrderFindManyArgs>(args?: SelectSubset<T, ProductOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductOrder.
     * @param {ProductOrderCreateArgs} args - Arguments to create a ProductOrder.
     * @example
     * // Create one ProductOrder
     * const ProductOrder = await prisma.productOrder.create({
     *   data: {
     *     // ... data to create a ProductOrder
     *   }
     * })
     * 
     */
    create<T extends ProductOrderCreateArgs>(args: SelectSubset<T, ProductOrderCreateArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductOrders.
     * @param {ProductOrderCreateManyArgs} args - Arguments to create many ProductOrders.
     * @example
     * // Create many ProductOrders
     * const productOrder = await prisma.productOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductOrderCreateManyArgs>(args?: SelectSubset<T, ProductOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOrder.
     * @param {ProductOrderDeleteArgs} args - Arguments to delete one ProductOrder.
     * @example
     * // Delete one ProductOrder
     * const ProductOrder = await prisma.productOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductOrderDeleteArgs>(args: SelectSubset<T, ProductOrderDeleteArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductOrder.
     * @param {ProductOrderUpdateArgs} args - Arguments to update one ProductOrder.
     * @example
     * // Update one ProductOrder
     * const productOrder = await prisma.productOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductOrderUpdateArgs>(args: SelectSubset<T, ProductOrderUpdateArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductOrders.
     * @param {ProductOrderDeleteManyArgs} args - Arguments to filter ProductOrders to delete.
     * @example
     * // Delete a few ProductOrders
     * const { count } = await prisma.productOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductOrderDeleteManyArgs>(args?: SelectSubset<T, ProductOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOrders
     * const productOrder = await prisma.productOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductOrderUpdateManyArgs>(args: SelectSubset<T, ProductOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOrder.
     * @param {ProductOrderUpsertArgs} args - Arguments to update or create a ProductOrder.
     * @example
     * // Update or create a ProductOrder
     * const productOrder = await prisma.productOrder.upsert({
     *   create: {
     *     // ... data to create a ProductOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductOrderUpsertArgs>(args: SelectSubset<T, ProductOrderUpsertArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderCountArgs} args - Arguments to filter ProductOrders to count.
     * @example
     * // Count the number of ProductOrders
     * const count = await prisma.productOrder.count({
     *   where: {
     *     // ... the filter for the ProductOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductOrderCountArgs>(
      args?: Subset<T, ProductOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductOrderAggregateArgs>(args: Subset<T, ProductOrderAggregateArgs>): Prisma.PrismaPromise<GetProductOrderAggregateType<T>>

    /**
     * Group by ProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOrder model
   */
  readonly fields: ProductOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ProductOrderRefund<T extends ProductOrder$ProductOrderRefundArgs<ExtArgs> = {}>(args?: Subset<T, ProductOrder$ProductOrderRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductOrder model
   */ 
  interface ProductOrderFieldRefs {
    readonly id: FieldRef<"ProductOrder", 'String'>
    readonly productId: FieldRef<"ProductOrder", 'String'>
    readonly quantity: FieldRef<"ProductOrder", 'Int'>
    readonly priceBefore: FieldRef<"ProductOrder", 'Float'>
    readonly priceAfter: FieldRef<"ProductOrder", 'Float'>
    readonly orderId: FieldRef<"ProductOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductOrder findUnique
   */
  export type ProductOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where: ProductOrderWhereUniqueInput
  }

  /**
   * ProductOrder findUniqueOrThrow
   */
  export type ProductOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where: ProductOrderWhereUniqueInput
  }

  /**
   * ProductOrder findFirst
   */
  export type ProductOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrders.
     */
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }

  /**
   * ProductOrder findFirstOrThrow
   */
  export type ProductOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrders.
     */
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }

  /**
   * ProductOrder findMany
   */
  export type ProductOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrders to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }

  /**
   * ProductOrder create
   */
  export type ProductOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOrder.
     */
    data: XOR<ProductOrderCreateInput, ProductOrderUncheckedCreateInput>
  }

  /**
   * ProductOrder createMany
   */
  export type ProductOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOrders.
     */
    data: ProductOrderCreateManyInput | ProductOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductOrder update
   */
  export type ProductOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOrder.
     */
    data: XOR<ProductOrderUpdateInput, ProductOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductOrder to update.
     */
    where: ProductOrderWhereUniqueInput
  }

  /**
   * ProductOrder updateMany
   */
  export type ProductOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOrders.
     */
    data: XOR<ProductOrderUpdateManyMutationInput, ProductOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductOrders to update
     */
    where?: ProductOrderWhereInput
  }

  /**
   * ProductOrder upsert
   */
  export type ProductOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOrder to update in case it exists.
     */
    where: ProductOrderWhereUniqueInput
    /**
     * In case the ProductOrder found by the `where` argument doesn't exist, create a new ProductOrder with this data.
     */
    create: XOR<ProductOrderCreateInput, ProductOrderUncheckedCreateInput>
    /**
     * In case the ProductOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOrderUpdateInput, ProductOrderUncheckedUpdateInput>
  }

  /**
   * ProductOrder delete
   */
  export type ProductOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductOrder to delete.
     */
    where: ProductOrderWhereUniqueInput
  }

  /**
   * ProductOrder deleteMany
   */
  export type ProductOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrders to delete
     */
    where?: ProductOrderWhereInput
  }

  /**
   * ProductOrder.ProductOrderRefund
   */
  export type ProductOrder$ProductOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    where?: ProductOrderRefundWhereInput
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    cursor?: ProductOrderRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOrderRefundScalarFieldEnum | ProductOrderRefundScalarFieldEnum[]
  }

  /**
   * ProductOrder without action
   */
  export type ProductOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrder
     */
    omit?: ProductOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderInclude<ExtArgs> | null
  }


  /**
   * Model ProductOrderRefund
   */

  export type AggregateProductOrderRefund = {
    _count: ProductOrderRefundCountAggregateOutputType | null
    _avg: ProductOrderRefundAvgAggregateOutputType | null
    _sum: ProductOrderRefundSumAggregateOutputType | null
    _min: ProductOrderRefundMinAggregateOutputType | null
    _max: ProductOrderRefundMaxAggregateOutputType | null
  }

  export type ProductOrderRefundAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductOrderRefundSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductOrderRefundMinAggregateOutputType = {
    id: string | null
    orderRefundId: string | null
    productOrderId: string | null
    quantity: number | null
    description: string | null
  }

  export type ProductOrderRefundMaxAggregateOutputType = {
    id: string | null
    orderRefundId: string | null
    productOrderId: string | null
    quantity: number | null
    description: string | null
  }

  export type ProductOrderRefundCountAggregateOutputType = {
    id: number
    orderRefundId: number
    productOrderId: number
    quantity: number
    description: number
    _all: number
  }


  export type ProductOrderRefundAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductOrderRefundSumAggregateInputType = {
    quantity?: true
  }

  export type ProductOrderRefundMinAggregateInputType = {
    id?: true
    orderRefundId?: true
    productOrderId?: true
    quantity?: true
    description?: true
  }

  export type ProductOrderRefundMaxAggregateInputType = {
    id?: true
    orderRefundId?: true
    productOrderId?: true
    quantity?: true
    description?: true
  }

  export type ProductOrderRefundCountAggregateInputType = {
    id?: true
    orderRefundId?: true
    productOrderId?: true
    quantity?: true
    description?: true
    _all?: true
  }

  export type ProductOrderRefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrderRefund to aggregate.
     */
    where?: ProductOrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrderRefunds to fetch.
     */
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOrderRefunds
    **/
    _count?: true | ProductOrderRefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOrderRefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOrderRefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOrderRefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOrderRefundMaxAggregateInputType
  }

  export type GetProductOrderRefundAggregateType<T extends ProductOrderRefundAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOrderRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOrderRefund[P]>
      : GetScalarType<T[P], AggregateProductOrderRefund[P]>
  }




  export type ProductOrderRefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderRefundWhereInput
    orderBy?: ProductOrderRefundOrderByWithAggregationInput | ProductOrderRefundOrderByWithAggregationInput[]
    by: ProductOrderRefundScalarFieldEnum[] | ProductOrderRefundScalarFieldEnum
    having?: ProductOrderRefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOrderRefundCountAggregateInputType | true
    _avg?: ProductOrderRefundAvgAggregateInputType
    _sum?: ProductOrderRefundSumAggregateInputType
    _min?: ProductOrderRefundMinAggregateInputType
    _max?: ProductOrderRefundMaxAggregateInputType
  }

  export type ProductOrderRefundGroupByOutputType = {
    id: string
    orderRefundId: string
    productOrderId: string
    quantity: number
    description: string | null
    _count: ProductOrderRefundCountAggregateOutputType | null
    _avg: ProductOrderRefundAvgAggregateOutputType | null
    _sum: ProductOrderRefundSumAggregateOutputType | null
    _min: ProductOrderRefundMinAggregateOutputType | null
    _max: ProductOrderRefundMaxAggregateOutputType | null
  }

  type GetProductOrderRefundGroupByPayload<T extends ProductOrderRefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOrderRefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOrderRefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOrderRefundGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOrderRefundGroupByOutputType[P]>
        }
      >
    >


  export type ProductOrderRefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRefundId?: boolean
    productOrderId?: boolean
    quantity?: boolean
    description?: boolean
    OrderRefund?: boolean | OrderRefundDefaultArgs<ExtArgs>
    ProductOrder?: boolean | ProductOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOrderRefund"]>


  export type ProductOrderRefundSelectScalar = {
    id?: boolean
    orderRefundId?: boolean
    productOrderId?: boolean
    quantity?: boolean
    description?: boolean
  }

  export type ProductOrderRefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderRefundId" | "productOrderId" | "quantity" | "description", ExtArgs["result"]["productOrderRefund"]>
  export type ProductOrderRefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderRefund?: boolean | OrderRefundDefaultArgs<ExtArgs>
    ProductOrder?: boolean | ProductOrderDefaultArgs<ExtArgs>
  }

  export type $ProductOrderRefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOrderRefund"
    objects: {
      OrderRefund: Prisma.$OrderRefundPayload<ExtArgs>
      ProductOrder: Prisma.$ProductOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderRefundId: string
      productOrderId: string
      quantity: number
      description: string | null
    }, ExtArgs["result"]["productOrderRefund"]>
    composites: {}
  }

  type ProductOrderRefundGetPayload<S extends boolean | null | undefined | ProductOrderRefundDefaultArgs> = $Result.GetResult<Prisma.$ProductOrderRefundPayload, S>

  type ProductOrderRefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductOrderRefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductOrderRefundCountAggregateInputType | true
    }

  export interface ProductOrderRefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOrderRefund'], meta: { name: 'ProductOrderRefund' } }
    /**
     * Find zero or one ProductOrderRefund that matches the filter.
     * @param {ProductOrderRefundFindUniqueArgs} args - Arguments to find a ProductOrderRefund
     * @example
     * // Get one ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductOrderRefundFindUniqueArgs>(args: SelectSubset<T, ProductOrderRefundFindUniqueArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductOrderRefund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductOrderRefundFindUniqueOrThrowArgs} args - Arguments to find a ProductOrderRefund
     * @example
     * // Get one ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductOrderRefundFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductOrderRefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductOrderRefund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundFindFirstArgs} args - Arguments to find a ProductOrderRefund
     * @example
     * // Get one ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductOrderRefundFindFirstArgs>(args?: SelectSubset<T, ProductOrderRefundFindFirstArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductOrderRefund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundFindFirstOrThrowArgs} args - Arguments to find a ProductOrderRefund
     * @example
     * // Get one ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductOrderRefundFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductOrderRefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductOrderRefunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOrderRefunds
     * const productOrderRefunds = await prisma.productOrderRefund.findMany()
     * 
     * // Get first 10 ProductOrderRefunds
     * const productOrderRefunds = await prisma.productOrderRefund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOrderRefundWithIdOnly = await prisma.productOrderRefund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductOrderRefundFindManyArgs>(args?: SelectSubset<T, ProductOrderRefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductOrderRefund.
     * @param {ProductOrderRefundCreateArgs} args - Arguments to create a ProductOrderRefund.
     * @example
     * // Create one ProductOrderRefund
     * const ProductOrderRefund = await prisma.productOrderRefund.create({
     *   data: {
     *     // ... data to create a ProductOrderRefund
     *   }
     * })
     * 
     */
    create<T extends ProductOrderRefundCreateArgs>(args: SelectSubset<T, ProductOrderRefundCreateArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductOrderRefunds.
     * @param {ProductOrderRefundCreateManyArgs} args - Arguments to create many ProductOrderRefunds.
     * @example
     * // Create many ProductOrderRefunds
     * const productOrderRefund = await prisma.productOrderRefund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductOrderRefundCreateManyArgs>(args?: SelectSubset<T, ProductOrderRefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOrderRefund.
     * @param {ProductOrderRefundDeleteArgs} args - Arguments to delete one ProductOrderRefund.
     * @example
     * // Delete one ProductOrderRefund
     * const ProductOrderRefund = await prisma.productOrderRefund.delete({
     *   where: {
     *     // ... filter to delete one ProductOrderRefund
     *   }
     * })
     * 
     */
    delete<T extends ProductOrderRefundDeleteArgs>(args: SelectSubset<T, ProductOrderRefundDeleteArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductOrderRefund.
     * @param {ProductOrderRefundUpdateArgs} args - Arguments to update one ProductOrderRefund.
     * @example
     * // Update one ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductOrderRefundUpdateArgs>(args: SelectSubset<T, ProductOrderRefundUpdateArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductOrderRefunds.
     * @param {ProductOrderRefundDeleteManyArgs} args - Arguments to filter ProductOrderRefunds to delete.
     * @example
     * // Delete a few ProductOrderRefunds
     * const { count } = await prisma.productOrderRefund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductOrderRefundDeleteManyArgs>(args?: SelectSubset<T, ProductOrderRefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOrderRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOrderRefunds
     * const productOrderRefund = await prisma.productOrderRefund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductOrderRefundUpdateManyArgs>(args: SelectSubset<T, ProductOrderRefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOrderRefund.
     * @param {ProductOrderRefundUpsertArgs} args - Arguments to update or create a ProductOrderRefund.
     * @example
     * // Update or create a ProductOrderRefund
     * const productOrderRefund = await prisma.productOrderRefund.upsert({
     *   create: {
     *     // ... data to create a ProductOrderRefund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOrderRefund we want to update
     *   }
     * })
     */
    upsert<T extends ProductOrderRefundUpsertArgs>(args: SelectSubset<T, ProductOrderRefundUpsertArgs<ExtArgs>>): Prisma__ProductOrderRefundClient<$Result.GetResult<Prisma.$ProductOrderRefundPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductOrderRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundCountArgs} args - Arguments to filter ProductOrderRefunds to count.
     * @example
     * // Count the number of ProductOrderRefunds
     * const count = await prisma.productOrderRefund.count({
     *   where: {
     *     // ... the filter for the ProductOrderRefunds we want to count
     *   }
     * })
    **/
    count<T extends ProductOrderRefundCountArgs>(
      args?: Subset<T, ProductOrderRefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOrderRefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOrderRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductOrderRefundAggregateArgs>(args: Subset<T, ProductOrderRefundAggregateArgs>): Prisma.PrismaPromise<GetProductOrderRefundAggregateType<T>>

    /**
     * Group by ProductOrderRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderRefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductOrderRefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOrderRefundGroupByArgs['orderBy'] }
        : { orderBy?: ProductOrderRefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductOrderRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOrderRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOrderRefund model
   */
  readonly fields: ProductOrderRefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOrderRefund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOrderRefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderRefund<T extends OrderRefundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderRefundDefaultArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ProductOrder<T extends ProductOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductOrderDefaultArgs<ExtArgs>>): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductOrderRefund model
   */ 
  interface ProductOrderRefundFieldRefs {
    readonly id: FieldRef<"ProductOrderRefund", 'String'>
    readonly orderRefundId: FieldRef<"ProductOrderRefund", 'String'>
    readonly productOrderId: FieldRef<"ProductOrderRefund", 'String'>
    readonly quantity: FieldRef<"ProductOrderRefund", 'Int'>
    readonly description: FieldRef<"ProductOrderRefund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductOrderRefund findUnique
   */
  export type ProductOrderRefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrderRefund to fetch.
     */
    where: ProductOrderRefundWhereUniqueInput
  }

  /**
   * ProductOrderRefund findUniqueOrThrow
   */
  export type ProductOrderRefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrderRefund to fetch.
     */
    where: ProductOrderRefundWhereUniqueInput
  }

  /**
   * ProductOrderRefund findFirst
   */
  export type ProductOrderRefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrderRefund to fetch.
     */
    where?: ProductOrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrderRefunds to fetch.
     */
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrderRefunds.
     */
    cursor?: ProductOrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrderRefunds.
     */
    distinct?: ProductOrderRefundScalarFieldEnum | ProductOrderRefundScalarFieldEnum[]
  }

  /**
   * ProductOrderRefund findFirstOrThrow
   */
  export type ProductOrderRefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrderRefund to fetch.
     */
    where?: ProductOrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrderRefunds to fetch.
     */
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrderRefunds.
     */
    cursor?: ProductOrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrderRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrderRefunds.
     */
    distinct?: ProductOrderRefundScalarFieldEnum | ProductOrderRefundScalarFieldEnum[]
  }

  /**
   * ProductOrderRefund findMany
   */
  export type ProductOrderRefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrderRefunds to fetch.
     */
    where?: ProductOrderRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrderRefunds to fetch.
     */
    orderBy?: ProductOrderRefundOrderByWithRelationInput | ProductOrderRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOrderRefunds.
     */
    cursor?: ProductOrderRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrderRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrderRefunds.
     */
    skip?: number
    distinct?: ProductOrderRefundScalarFieldEnum | ProductOrderRefundScalarFieldEnum[]
  }

  /**
   * ProductOrderRefund create
   */
  export type ProductOrderRefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOrderRefund.
     */
    data: XOR<ProductOrderRefundCreateInput, ProductOrderRefundUncheckedCreateInput>
  }

  /**
   * ProductOrderRefund createMany
   */
  export type ProductOrderRefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOrderRefunds.
     */
    data: ProductOrderRefundCreateManyInput | ProductOrderRefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductOrderRefund update
   */
  export type ProductOrderRefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOrderRefund.
     */
    data: XOR<ProductOrderRefundUpdateInput, ProductOrderRefundUncheckedUpdateInput>
    /**
     * Choose, which ProductOrderRefund to update.
     */
    where: ProductOrderRefundWhereUniqueInput
  }

  /**
   * ProductOrderRefund updateMany
   */
  export type ProductOrderRefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOrderRefunds.
     */
    data: XOR<ProductOrderRefundUpdateManyMutationInput, ProductOrderRefundUncheckedUpdateManyInput>
    /**
     * Filter which ProductOrderRefunds to update
     */
    where?: ProductOrderRefundWhereInput
  }

  /**
   * ProductOrderRefund upsert
   */
  export type ProductOrderRefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOrderRefund to update in case it exists.
     */
    where: ProductOrderRefundWhereUniqueInput
    /**
     * In case the ProductOrderRefund found by the `where` argument doesn't exist, create a new ProductOrderRefund with this data.
     */
    create: XOR<ProductOrderRefundCreateInput, ProductOrderRefundUncheckedCreateInput>
    /**
     * In case the ProductOrderRefund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOrderRefundUpdateInput, ProductOrderRefundUncheckedUpdateInput>
  }

  /**
   * ProductOrderRefund delete
   */
  export type ProductOrderRefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
    /**
     * Filter which ProductOrderRefund to delete.
     */
    where: ProductOrderRefundWhereUniqueInput
  }

  /**
   * ProductOrderRefund deleteMany
   */
  export type ProductOrderRefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrderRefunds to delete
     */
    where?: ProductOrderRefundWhereInput
  }

  /**
   * ProductOrderRefund without action
   */
  export type ProductOrderRefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrderRefund
     */
    select?: ProductOrderRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOrderRefund
     */
    omit?: ProductOrderRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOrderRefundInclude<ExtArgs> | null
  }


  /**
   * Model RefundMaterial
   */

  export type AggregateRefundMaterial = {
    _count: RefundMaterialCountAggregateOutputType | null
    _min: RefundMaterialMinAggregateOutputType | null
    _max: RefundMaterialMaxAggregateOutputType | null
  }

  export type RefundMaterialMinAggregateOutputType = {
    id: string | null
    orderRefundId: string | null
    url: string | null
    type: string | null
    description: string | null
  }

  export type RefundMaterialMaxAggregateOutputType = {
    id: string | null
    orderRefundId: string | null
    url: string | null
    type: string | null
    description: string | null
  }

  export type RefundMaterialCountAggregateOutputType = {
    id: number
    orderRefundId: number
    url: number
    type: number
    description: number
    _all: number
  }


  export type RefundMaterialMinAggregateInputType = {
    id?: true
    orderRefundId?: true
    url?: true
    type?: true
    description?: true
  }

  export type RefundMaterialMaxAggregateInputType = {
    id?: true
    orderRefundId?: true
    url?: true
    type?: true
    description?: true
  }

  export type RefundMaterialCountAggregateInputType = {
    id?: true
    orderRefundId?: true
    url?: true
    type?: true
    description?: true
    _all?: true
  }

  export type RefundMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundMaterial to aggregate.
     */
    where?: RefundMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundMaterials to fetch.
     */
    orderBy?: RefundMaterialOrderByWithRelationInput | RefundMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefundMaterials
    **/
    _count?: true | RefundMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaterialMaxAggregateInputType
  }

  export type GetRefundMaterialAggregateType<T extends RefundMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateRefundMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefundMaterial[P]>
      : GetScalarType<T[P], AggregateRefundMaterial[P]>
  }




  export type RefundMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundMaterialWhereInput
    orderBy?: RefundMaterialOrderByWithAggregationInput | RefundMaterialOrderByWithAggregationInput[]
    by: RefundMaterialScalarFieldEnum[] | RefundMaterialScalarFieldEnum
    having?: RefundMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundMaterialCountAggregateInputType | true
    _min?: RefundMaterialMinAggregateInputType
    _max?: RefundMaterialMaxAggregateInputType
  }

  export type RefundMaterialGroupByOutputType = {
    id: string
    orderRefundId: string
    url: string
    type: string
    description: string | null
    _count: RefundMaterialCountAggregateOutputType | null
    _min: RefundMaterialMinAggregateOutputType | null
    _max: RefundMaterialMaxAggregateOutputType | null
  }

  type GetRefundMaterialGroupByPayload<T extends RefundMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], RefundMaterialGroupByOutputType[P]>
        }
      >
    >


  export type RefundMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRefundId?: boolean
    url?: boolean
    type?: boolean
    description?: boolean
    OrderRefund?: boolean | OrderRefundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refundMaterial"]>


  export type RefundMaterialSelectScalar = {
    id?: boolean
    orderRefundId?: boolean
    url?: boolean
    type?: boolean
    description?: boolean
  }

  export type RefundMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderRefundId" | "url" | "type" | "description", ExtArgs["result"]["refundMaterial"]>
  export type RefundMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderRefund?: boolean | OrderRefundDefaultArgs<ExtArgs>
  }

  export type $RefundMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefundMaterial"
    objects: {
      OrderRefund: Prisma.$OrderRefundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderRefundId: string
      url: string
      type: string
      description: string | null
    }, ExtArgs["result"]["refundMaterial"]>
    composites: {}
  }

  type RefundMaterialGetPayload<S extends boolean | null | undefined | RefundMaterialDefaultArgs> = $Result.GetResult<Prisma.$RefundMaterialPayload, S>

  type RefundMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefundMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundMaterialCountAggregateInputType | true
    }

  export interface RefundMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefundMaterial'], meta: { name: 'RefundMaterial' } }
    /**
     * Find zero or one RefundMaterial that matches the filter.
     * @param {RefundMaterialFindUniqueArgs} args - Arguments to find a RefundMaterial
     * @example
     * // Get one RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundMaterialFindUniqueArgs>(args: SelectSubset<T, RefundMaterialFindUniqueArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RefundMaterial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefundMaterialFindUniqueOrThrowArgs} args - Arguments to find a RefundMaterial
     * @example
     * // Get one RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RefundMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialFindFirstArgs} args - Arguments to find a RefundMaterial
     * @example
     * // Get one RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundMaterialFindFirstArgs>(args?: SelectSubset<T, RefundMaterialFindFirstArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RefundMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialFindFirstOrThrowArgs} args - Arguments to find a RefundMaterial
     * @example
     * // Get one RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RefundMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefundMaterials
     * const refundMaterials = await prisma.refundMaterial.findMany()
     * 
     * // Get first 10 RefundMaterials
     * const refundMaterials = await prisma.refundMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundMaterialWithIdOnly = await prisma.refundMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundMaterialFindManyArgs>(args?: SelectSubset<T, RefundMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RefundMaterial.
     * @param {RefundMaterialCreateArgs} args - Arguments to create a RefundMaterial.
     * @example
     * // Create one RefundMaterial
     * const RefundMaterial = await prisma.refundMaterial.create({
     *   data: {
     *     // ... data to create a RefundMaterial
     *   }
     * })
     * 
     */
    create<T extends RefundMaterialCreateArgs>(args: SelectSubset<T, RefundMaterialCreateArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RefundMaterials.
     * @param {RefundMaterialCreateManyArgs} args - Arguments to create many RefundMaterials.
     * @example
     * // Create many RefundMaterials
     * const refundMaterial = await prisma.refundMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundMaterialCreateManyArgs>(args?: SelectSubset<T, RefundMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefundMaterial.
     * @param {RefundMaterialDeleteArgs} args - Arguments to delete one RefundMaterial.
     * @example
     * // Delete one RefundMaterial
     * const RefundMaterial = await prisma.refundMaterial.delete({
     *   where: {
     *     // ... filter to delete one RefundMaterial
     *   }
     * })
     * 
     */
    delete<T extends RefundMaterialDeleteArgs>(args: SelectSubset<T, RefundMaterialDeleteArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RefundMaterial.
     * @param {RefundMaterialUpdateArgs} args - Arguments to update one RefundMaterial.
     * @example
     * // Update one RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundMaterialUpdateArgs>(args: SelectSubset<T, RefundMaterialUpdateArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RefundMaterials.
     * @param {RefundMaterialDeleteManyArgs} args - Arguments to filter RefundMaterials to delete.
     * @example
     * // Delete a few RefundMaterials
     * const { count } = await prisma.refundMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundMaterialDeleteManyArgs>(args?: SelectSubset<T, RefundMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefundMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefundMaterials
     * const refundMaterial = await prisma.refundMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundMaterialUpdateManyArgs>(args: SelectSubset<T, RefundMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefundMaterial.
     * @param {RefundMaterialUpsertArgs} args - Arguments to update or create a RefundMaterial.
     * @example
     * // Update or create a RefundMaterial
     * const refundMaterial = await prisma.refundMaterial.upsert({
     *   create: {
     *     // ... data to create a RefundMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefundMaterial we want to update
     *   }
     * })
     */
    upsert<T extends RefundMaterialUpsertArgs>(args: SelectSubset<T, RefundMaterialUpsertArgs<ExtArgs>>): Prisma__RefundMaterialClient<$Result.GetResult<Prisma.$RefundMaterialPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RefundMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialCountArgs} args - Arguments to filter RefundMaterials to count.
     * @example
     * // Count the number of RefundMaterials
     * const count = await prisma.refundMaterial.count({
     *   where: {
     *     // ... the filter for the RefundMaterials we want to count
     *   }
     * })
    **/
    count<T extends RefundMaterialCountArgs>(
      args?: Subset<T, RefundMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefundMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundMaterialAggregateArgs>(args: Subset<T, RefundMaterialAggregateArgs>): Prisma.PrismaPromise<GetRefundMaterialAggregateType<T>>

    /**
     * Group by RefundMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundMaterialGroupByArgs['orderBy'] }
        : { orderBy?: RefundMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefundMaterial model
   */
  readonly fields: RefundMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefundMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderRefund<T extends OrderRefundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderRefundDefaultArgs<ExtArgs>>): Prisma__OrderRefundClient<$Result.GetResult<Prisma.$OrderRefundPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefundMaterial model
   */ 
  interface RefundMaterialFieldRefs {
    readonly id: FieldRef<"RefundMaterial", 'String'>
    readonly orderRefundId: FieldRef<"RefundMaterial", 'String'>
    readonly url: FieldRef<"RefundMaterial", 'String'>
    readonly type: FieldRef<"RefundMaterial", 'String'>
    readonly description: FieldRef<"RefundMaterial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefundMaterial findUnique
   */
  export type RefundMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RefundMaterial to fetch.
     */
    where: RefundMaterialWhereUniqueInput
  }

  /**
   * RefundMaterial findUniqueOrThrow
   */
  export type RefundMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RefundMaterial to fetch.
     */
    where: RefundMaterialWhereUniqueInput
  }

  /**
   * RefundMaterial findFirst
   */
  export type RefundMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RefundMaterial to fetch.
     */
    where?: RefundMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundMaterials to fetch.
     */
    orderBy?: RefundMaterialOrderByWithRelationInput | RefundMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundMaterials.
     */
    cursor?: RefundMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundMaterials.
     */
    distinct?: RefundMaterialScalarFieldEnum | RefundMaterialScalarFieldEnum[]
  }

  /**
   * RefundMaterial findFirstOrThrow
   */
  export type RefundMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RefundMaterial to fetch.
     */
    where?: RefundMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundMaterials to fetch.
     */
    orderBy?: RefundMaterialOrderByWithRelationInput | RefundMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundMaterials.
     */
    cursor?: RefundMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundMaterials.
     */
    distinct?: RefundMaterialScalarFieldEnum | RefundMaterialScalarFieldEnum[]
  }

  /**
   * RefundMaterial findMany
   */
  export type RefundMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RefundMaterials to fetch.
     */
    where?: RefundMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundMaterials to fetch.
     */
    orderBy?: RefundMaterialOrderByWithRelationInput | RefundMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefundMaterials.
     */
    cursor?: RefundMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundMaterials.
     */
    skip?: number
    distinct?: RefundMaterialScalarFieldEnum | RefundMaterialScalarFieldEnum[]
  }

  /**
   * RefundMaterial create
   */
  export type RefundMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a RefundMaterial.
     */
    data: XOR<RefundMaterialCreateInput, RefundMaterialUncheckedCreateInput>
  }

  /**
   * RefundMaterial createMany
   */
  export type RefundMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefundMaterials.
     */
    data: RefundMaterialCreateManyInput | RefundMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefundMaterial update
   */
  export type RefundMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a RefundMaterial.
     */
    data: XOR<RefundMaterialUpdateInput, RefundMaterialUncheckedUpdateInput>
    /**
     * Choose, which RefundMaterial to update.
     */
    where: RefundMaterialWhereUniqueInput
  }

  /**
   * RefundMaterial updateMany
   */
  export type RefundMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefundMaterials.
     */
    data: XOR<RefundMaterialUpdateManyMutationInput, RefundMaterialUncheckedUpdateManyInput>
    /**
     * Filter which RefundMaterials to update
     */
    where?: RefundMaterialWhereInput
  }

  /**
   * RefundMaterial upsert
   */
  export type RefundMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the RefundMaterial to update in case it exists.
     */
    where: RefundMaterialWhereUniqueInput
    /**
     * In case the RefundMaterial found by the `where` argument doesn't exist, create a new RefundMaterial with this data.
     */
    create: XOR<RefundMaterialCreateInput, RefundMaterialUncheckedCreateInput>
    /**
     * In case the RefundMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundMaterialUpdateInput, RefundMaterialUncheckedUpdateInput>
  }

  /**
   * RefundMaterial delete
   */
  export type RefundMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
    /**
     * Filter which RefundMaterial to delete.
     */
    where: RefundMaterialWhereUniqueInput
  }

  /**
   * RefundMaterial deleteMany
   */
  export type RefundMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundMaterials to delete
     */
    where?: RefundMaterialWhereInput
  }

  /**
   * RefundMaterial without action
   */
  export type RefundMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundMaterial
     */
    select?: RefundMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundMaterial
     */
    omit?: RefundMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundMaterialInclude<ExtArgs> | null
  }


  /**
   * Model RequestComplain
   */

  export type AggregateRequestComplain = {
    _count: RequestComplainCountAggregateOutputType | null
    _min: RequestComplainMinAggregateOutputType | null
    _max: RequestComplainMaxAggregateOutputType | null
  }

  export type RequestComplainMinAggregateOutputType = {
    id: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RequestComplainMaxAggregateOutputType = {
    id: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RequestComplainCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    _all: number
  }


  export type RequestComplainMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
  }

  export type RequestComplainMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
  }

  export type RequestComplainCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type RequestComplainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestComplain to aggregate.
     */
    where?: RequestComplainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComplains to fetch.
     */
    orderBy?: RequestComplainOrderByWithRelationInput | RequestComplainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestComplainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComplains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComplains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestComplains
    **/
    _count?: true | RequestComplainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestComplainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestComplainMaxAggregateInputType
  }

  export type GetRequestComplainAggregateType<T extends RequestComplainAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestComplain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestComplain[P]>
      : GetScalarType<T[P], AggregateRequestComplain[P]>
  }




  export type RequestComplainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestComplainWhereInput
    orderBy?: RequestComplainOrderByWithAggregationInput | RequestComplainOrderByWithAggregationInput[]
    by: RequestComplainScalarFieldEnum[] | RequestComplainScalarFieldEnum
    having?: RequestComplainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestComplainCountAggregateInputType | true
    _min?: RequestComplainMinAggregateInputType
    _max?: RequestComplainMaxAggregateInputType
  }

  export type RequestComplainGroupByOutputType = {
    id: string
    description: string
    createdAt: Date
    _count: RequestComplainCountAggregateOutputType | null
    _min: RequestComplainMinAggregateOutputType | null
    _max: RequestComplainMaxAggregateOutputType | null
  }

  type GetRequestComplainGroupByPayload<T extends RequestComplainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestComplainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestComplainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestComplainGroupByOutputType[P]>
            : GetScalarType<T[P], RequestComplainGroupByOutputType[P]>
        }
      >
    >


  export type RequestComplainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["requestComplain"]>


  export type RequestComplainSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type RequestComplainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt", ExtArgs["result"]["requestComplain"]>

  export type $RequestComplainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestComplain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["requestComplain"]>
    composites: {}
  }

  type RequestComplainGetPayload<S extends boolean | null | undefined | RequestComplainDefaultArgs> = $Result.GetResult<Prisma.$RequestComplainPayload, S>

  type RequestComplainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestComplainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestComplainCountAggregateInputType | true
    }

  export interface RequestComplainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestComplain'], meta: { name: 'RequestComplain' } }
    /**
     * Find zero or one RequestComplain that matches the filter.
     * @param {RequestComplainFindUniqueArgs} args - Arguments to find a RequestComplain
     * @example
     * // Get one RequestComplain
     * const requestComplain = await prisma.requestComplain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestComplainFindUniqueArgs>(args: SelectSubset<T, RequestComplainFindUniqueArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RequestComplain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequestComplainFindUniqueOrThrowArgs} args - Arguments to find a RequestComplain
     * @example
     * // Get one RequestComplain
     * const requestComplain = await prisma.requestComplain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestComplainFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestComplainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RequestComplain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainFindFirstArgs} args - Arguments to find a RequestComplain
     * @example
     * // Get one RequestComplain
     * const requestComplain = await prisma.requestComplain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestComplainFindFirstArgs>(args?: SelectSubset<T, RequestComplainFindFirstArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RequestComplain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainFindFirstOrThrowArgs} args - Arguments to find a RequestComplain
     * @example
     * // Get one RequestComplain
     * const requestComplain = await prisma.requestComplain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestComplainFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestComplainFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RequestComplains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestComplains
     * const requestComplains = await prisma.requestComplain.findMany()
     * 
     * // Get first 10 RequestComplains
     * const requestComplains = await prisma.requestComplain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestComplainWithIdOnly = await prisma.requestComplain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestComplainFindManyArgs>(args?: SelectSubset<T, RequestComplainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RequestComplain.
     * @param {RequestComplainCreateArgs} args - Arguments to create a RequestComplain.
     * @example
     * // Create one RequestComplain
     * const RequestComplain = await prisma.requestComplain.create({
     *   data: {
     *     // ... data to create a RequestComplain
     *   }
     * })
     * 
     */
    create<T extends RequestComplainCreateArgs>(args: SelectSubset<T, RequestComplainCreateArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RequestComplains.
     * @param {RequestComplainCreateManyArgs} args - Arguments to create many RequestComplains.
     * @example
     * // Create many RequestComplains
     * const requestComplain = await prisma.requestComplain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestComplainCreateManyArgs>(args?: SelectSubset<T, RequestComplainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequestComplain.
     * @param {RequestComplainDeleteArgs} args - Arguments to delete one RequestComplain.
     * @example
     * // Delete one RequestComplain
     * const RequestComplain = await prisma.requestComplain.delete({
     *   where: {
     *     // ... filter to delete one RequestComplain
     *   }
     * })
     * 
     */
    delete<T extends RequestComplainDeleteArgs>(args: SelectSubset<T, RequestComplainDeleteArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RequestComplain.
     * @param {RequestComplainUpdateArgs} args - Arguments to update one RequestComplain.
     * @example
     * // Update one RequestComplain
     * const requestComplain = await prisma.requestComplain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestComplainUpdateArgs>(args: SelectSubset<T, RequestComplainUpdateArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RequestComplains.
     * @param {RequestComplainDeleteManyArgs} args - Arguments to filter RequestComplains to delete.
     * @example
     * // Delete a few RequestComplains
     * const { count } = await prisma.requestComplain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestComplainDeleteManyArgs>(args?: SelectSubset<T, RequestComplainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestComplains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestComplains
     * const requestComplain = await prisma.requestComplain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestComplainUpdateManyArgs>(args: SelectSubset<T, RequestComplainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestComplain.
     * @param {RequestComplainUpsertArgs} args - Arguments to update or create a RequestComplain.
     * @example
     * // Update or create a RequestComplain
     * const requestComplain = await prisma.requestComplain.upsert({
     *   create: {
     *     // ... data to create a RequestComplain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestComplain we want to update
     *   }
     * })
     */
    upsert<T extends RequestComplainUpsertArgs>(args: SelectSubset<T, RequestComplainUpsertArgs<ExtArgs>>): Prisma__RequestComplainClient<$Result.GetResult<Prisma.$RequestComplainPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RequestComplains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainCountArgs} args - Arguments to filter RequestComplains to count.
     * @example
     * // Count the number of RequestComplains
     * const count = await prisma.requestComplain.count({
     *   where: {
     *     // ... the filter for the RequestComplains we want to count
     *   }
     * })
    **/
    count<T extends RequestComplainCountArgs>(
      args?: Subset<T, RequestComplainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestComplainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestComplain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestComplainAggregateArgs>(args: Subset<T, RequestComplainAggregateArgs>): Prisma.PrismaPromise<GetRequestComplainAggregateType<T>>

    /**
     * Group by RequestComplain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestComplainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestComplainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestComplainGroupByArgs['orderBy'] }
        : { orderBy?: RequestComplainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestComplainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestComplainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestComplain model
   */
  readonly fields: RequestComplainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestComplain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestComplainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestComplain model
   */ 
  interface RequestComplainFieldRefs {
    readonly id: FieldRef<"RequestComplain", 'String'>
    readonly description: FieldRef<"RequestComplain", 'String'>
    readonly createdAt: FieldRef<"RequestComplain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestComplain findUnique
   */
  export type RequestComplainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter, which RequestComplain to fetch.
     */
    where: RequestComplainWhereUniqueInput
  }

  /**
   * RequestComplain findUniqueOrThrow
   */
  export type RequestComplainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter, which RequestComplain to fetch.
     */
    where: RequestComplainWhereUniqueInput
  }

  /**
   * RequestComplain findFirst
   */
  export type RequestComplainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter, which RequestComplain to fetch.
     */
    where?: RequestComplainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComplains to fetch.
     */
    orderBy?: RequestComplainOrderByWithRelationInput | RequestComplainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestComplains.
     */
    cursor?: RequestComplainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComplains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComplains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestComplains.
     */
    distinct?: RequestComplainScalarFieldEnum | RequestComplainScalarFieldEnum[]
  }

  /**
   * RequestComplain findFirstOrThrow
   */
  export type RequestComplainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter, which RequestComplain to fetch.
     */
    where?: RequestComplainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComplains to fetch.
     */
    orderBy?: RequestComplainOrderByWithRelationInput | RequestComplainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestComplains.
     */
    cursor?: RequestComplainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComplains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComplains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestComplains.
     */
    distinct?: RequestComplainScalarFieldEnum | RequestComplainScalarFieldEnum[]
  }

  /**
   * RequestComplain findMany
   */
  export type RequestComplainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter, which RequestComplains to fetch.
     */
    where?: RequestComplainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComplains to fetch.
     */
    orderBy?: RequestComplainOrderByWithRelationInput | RequestComplainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestComplains.
     */
    cursor?: RequestComplainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComplains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComplains.
     */
    skip?: number
    distinct?: RequestComplainScalarFieldEnum | RequestComplainScalarFieldEnum[]
  }

  /**
   * RequestComplain create
   */
  export type RequestComplainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * The data needed to create a RequestComplain.
     */
    data: XOR<RequestComplainCreateInput, RequestComplainUncheckedCreateInput>
  }

  /**
   * RequestComplain createMany
   */
  export type RequestComplainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestComplains.
     */
    data: RequestComplainCreateManyInput | RequestComplainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestComplain update
   */
  export type RequestComplainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * The data needed to update a RequestComplain.
     */
    data: XOR<RequestComplainUpdateInput, RequestComplainUncheckedUpdateInput>
    /**
     * Choose, which RequestComplain to update.
     */
    where: RequestComplainWhereUniqueInput
  }

  /**
   * RequestComplain updateMany
   */
  export type RequestComplainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestComplains.
     */
    data: XOR<RequestComplainUpdateManyMutationInput, RequestComplainUncheckedUpdateManyInput>
    /**
     * Filter which RequestComplains to update
     */
    where?: RequestComplainWhereInput
  }

  /**
   * RequestComplain upsert
   */
  export type RequestComplainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * The filter to search for the RequestComplain to update in case it exists.
     */
    where: RequestComplainWhereUniqueInput
    /**
     * In case the RequestComplain found by the `where` argument doesn't exist, create a new RequestComplain with this data.
     */
    create: XOR<RequestComplainCreateInput, RequestComplainUncheckedCreateInput>
    /**
     * In case the RequestComplain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestComplainUpdateInput, RequestComplainUncheckedUpdateInput>
  }

  /**
   * RequestComplain delete
   */
  export type RequestComplainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
    /**
     * Filter which RequestComplain to delete.
     */
    where: RequestComplainWhereUniqueInput
  }

  /**
   * RequestComplain deleteMany
   */
  export type RequestComplainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestComplains to delete
     */
    where?: RequestComplainWhereInput
  }

  /**
   * RequestComplain without action
   */
  export type RequestComplainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComplain
     */
    select?: RequestComplainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComplain
     */
    omit?: RequestComplainOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storeId: 'storeId',
    total: 'total',
    discount: 'discount',
    pay: 'pay',
    note: 'note',
    isRated: 'isRated',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    numberOfRefund: 'numberOfRefund',
    isDraf: 'isDraf',
    complainId: 'complainId',
    payment: 'payment'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderFlowScalarFieldEnum: {
    id: 'id',
    status: 'status',
    note: 'note',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    orderId: 'orderId',
    orderRefundId: 'orderRefundId'
  };

  export type OrderFlowScalarFieldEnum = (typeof OrderFlowScalarFieldEnum)[keyof typeof OrderFlowScalarFieldEnum]


  export const OrderRefundScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type OrderRefundScalarFieldEnum = (typeof OrderRefundScalarFieldEnum)[keyof typeof OrderRefundScalarFieldEnum]


  export const OrderShippingScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    name: 'name',
    address: 'address',
    type: 'type',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt'
  };

  export type OrderShippingScalarFieldEnum = (typeof OrderShippingScalarFieldEnum)[keyof typeof OrderShippingScalarFieldEnum]


  export const OrderVoucherScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    voucherId: 'voucherId',
    createdAt: 'createdAt'
  };

  export type OrderVoucherScalarFieldEnum = (typeof OrderVoucherScalarFieldEnum)[keyof typeof OrderVoucherScalarFieldEnum]


  export const ProductOrderScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    priceBefore: 'priceBefore',
    priceAfter: 'priceAfter',
    orderId: 'orderId'
  };

  export type ProductOrderScalarFieldEnum = (typeof ProductOrderScalarFieldEnum)[keyof typeof ProductOrderScalarFieldEnum]


  export const ProductOrderRefundScalarFieldEnum: {
    id: 'id',
    orderRefundId: 'orderRefundId',
    productOrderId: 'productOrderId',
    quantity: 'quantity',
    description: 'description'
  };

  export type ProductOrderRefundScalarFieldEnum = (typeof ProductOrderRefundScalarFieldEnum)[keyof typeof ProductOrderRefundScalarFieldEnum]


  export const RefundMaterialScalarFieldEnum: {
    id: 'id',
    orderRefundId: 'orderRefundId',
    url: 'url',
    type: 'type',
    description: 'description'
  };

  export type RefundMaterialScalarFieldEnum = (typeof RefundMaterialScalarFieldEnum)[keyof typeof RefundMaterialScalarFieldEnum]


  export const RequestComplainScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type RequestComplainScalarFieldEnum = (typeof RequestComplainScalarFieldEnum)[keyof typeof RequestComplainScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    storeId?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    discount?: FloatNullableFilter<"Order"> | number | null
    pay?: FloatFilter<"Order"> | number
    note?: StringNullableFilter<"Order"> | string | null
    isRated?: BoolNullableFilter<"Order"> | boolean | null
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    numberOfRefund?: IntNullableFilter<"Order"> | number | null
    isDraf?: BoolNullableFilter<"Order"> | boolean | null
    complainId?: StringNullableFilter<"Order"> | string | null
    payment?: StringNullableFilter<"Order"> | string | null
    OrderFlow?: OrderFlowListRelationFilter
    OrderRefund?: OrderRefundListRelationFilter
    OrderShipping?: OrderShippingListRelationFilter
    OrderVoucher?: OrderVoucherListRelationFilter
    ProductOrder?: ProductOrderListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    total?: SortOrder
    discount?: SortOrderInput | SortOrder
    pay?: SortOrder
    note?: SortOrderInput | SortOrder
    isRated?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    numberOfRefund?: SortOrderInput | SortOrder
    isDraf?: SortOrderInput | SortOrder
    complainId?: SortOrderInput | SortOrder
    payment?: SortOrderInput | SortOrder
    OrderFlow?: OrderFlowOrderByRelationAggregateInput
    OrderRefund?: OrderRefundOrderByRelationAggregateInput
    OrderShipping?: OrderShippingOrderByRelationAggregateInput
    OrderVoucher?: OrderVoucherOrderByRelationAggregateInput
    ProductOrder?: ProductOrderOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    storeId?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    discount?: FloatNullableFilter<"Order"> | number | null
    pay?: FloatFilter<"Order"> | number
    note?: StringNullableFilter<"Order"> | string | null
    isRated?: BoolNullableFilter<"Order"> | boolean | null
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    numberOfRefund?: IntNullableFilter<"Order"> | number | null
    isDraf?: BoolNullableFilter<"Order"> | boolean | null
    complainId?: StringNullableFilter<"Order"> | string | null
    payment?: StringNullableFilter<"Order"> | string | null
    OrderFlow?: OrderFlowListRelationFilter
    OrderRefund?: OrderRefundListRelationFilter
    OrderShipping?: OrderShippingListRelationFilter
    OrderVoucher?: OrderVoucherListRelationFilter
    ProductOrder?: ProductOrderListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    total?: SortOrder
    discount?: SortOrderInput | SortOrder
    pay?: SortOrder
    note?: SortOrderInput | SortOrder
    isRated?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    numberOfRefund?: SortOrderInput | SortOrder
    isDraf?: SortOrderInput | SortOrder
    complainId?: SortOrderInput | SortOrder
    payment?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    storeId?: StringWithAggregatesFilter<"Order"> | string
    total?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    pay?: FloatWithAggregatesFilter<"Order"> | number
    note?: StringNullableWithAggregatesFilter<"Order"> | string | null
    isRated?: BoolNullableWithAggregatesFilter<"Order"> | boolean | null
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    numberOfRefund?: IntNullableWithAggregatesFilter<"Order"> | number | null
    isDraf?: BoolNullableWithAggregatesFilter<"Order"> | boolean | null
    complainId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    payment?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderFlowWhereInput = {
    AND?: OrderFlowWhereInput | OrderFlowWhereInput[]
    OR?: OrderFlowWhereInput[]
    NOT?: OrderFlowWhereInput | OrderFlowWhereInput[]
    id?: StringFilter<"OrderFlow"> | string
    status?: StringFilter<"OrderFlow"> | string
    note?: StringNullableFilter<"OrderFlow"> | string | null
    createdBy?: StringFilter<"OrderFlow"> | string
    createdAt?: DateTimeNullableFilter<"OrderFlow"> | Date | string | null
    orderId?: StringFilter<"OrderFlow"> | string
    orderRefundId?: StringNullableFilter<"OrderFlow"> | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type OrderFlowOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    orderId?: SortOrder
    orderRefundId?: SortOrderInput | SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type OrderFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderFlowWhereInput | OrderFlowWhereInput[]
    OR?: OrderFlowWhereInput[]
    NOT?: OrderFlowWhereInput | OrderFlowWhereInput[]
    status?: StringFilter<"OrderFlow"> | string
    note?: StringNullableFilter<"OrderFlow"> | string | null
    createdBy?: StringFilter<"OrderFlow"> | string
    createdAt?: DateTimeNullableFilter<"OrderFlow"> | Date | string | null
    orderId?: StringFilter<"OrderFlow"> | string
    orderRefundId?: StringNullableFilter<"OrderFlow"> | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderFlowOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    orderId?: SortOrder
    orderRefundId?: SortOrderInput | SortOrder
    _count?: OrderFlowCountOrderByAggregateInput
    _max?: OrderFlowMaxOrderByAggregateInput
    _min?: OrderFlowMinOrderByAggregateInput
  }

  export type OrderFlowScalarWhereWithAggregatesInput = {
    AND?: OrderFlowScalarWhereWithAggregatesInput | OrderFlowScalarWhereWithAggregatesInput[]
    OR?: OrderFlowScalarWhereWithAggregatesInput[]
    NOT?: OrderFlowScalarWhereWithAggregatesInput | OrderFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderFlow"> | string
    status?: StringWithAggregatesFilter<"OrderFlow"> | string
    note?: StringNullableWithAggregatesFilter<"OrderFlow"> | string | null
    createdBy?: StringWithAggregatesFilter<"OrderFlow"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"OrderFlow"> | Date | string | null
    orderId?: StringWithAggregatesFilter<"OrderFlow"> | string
    orderRefundId?: StringNullableWithAggregatesFilter<"OrderFlow"> | string | null
  }

  export type OrderRefundWhereInput = {
    AND?: OrderRefundWhereInput | OrderRefundWhereInput[]
    OR?: OrderRefundWhereInput[]
    NOT?: OrderRefundWhereInput | OrderRefundWhereInput[]
    id?: StringFilter<"OrderRefund"> | string
    orderId?: StringFilter<"OrderRefund"> | string
    status?: StringFilter<"OrderRefund"> | string
    title?: StringFilter<"OrderRefund"> | string
    description?: StringFilter<"OrderRefund"> | string
    createdAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    createdBy?: StringFilter<"OrderRefund"> | string
    updatedAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    updatedBy?: StringNullableFilter<"OrderRefund"> | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    ProductOrderRefund?: ProductOrderRefundListRelationFilter
    RefundMaterial?: RefundMaterialListRelationFilter
  }

  export type OrderRefundOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    Order?: OrderOrderByWithRelationInput
    ProductOrderRefund?: ProductOrderRefundOrderByRelationAggregateInput
    RefundMaterial?: RefundMaterialOrderByRelationAggregateInput
  }

  export type OrderRefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderRefundWhereInput | OrderRefundWhereInput[]
    OR?: OrderRefundWhereInput[]
    NOT?: OrderRefundWhereInput | OrderRefundWhereInput[]
    orderId?: StringFilter<"OrderRefund"> | string
    status?: StringFilter<"OrderRefund"> | string
    title?: StringFilter<"OrderRefund"> | string
    description?: StringFilter<"OrderRefund"> | string
    createdAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    createdBy?: StringFilter<"OrderRefund"> | string
    updatedAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    updatedBy?: StringNullableFilter<"OrderRefund"> | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    ProductOrderRefund?: ProductOrderRefundListRelationFilter
    RefundMaterial?: RefundMaterialListRelationFilter
  }, "id">

  export type OrderRefundOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: OrderRefundCountOrderByAggregateInput
    _max?: OrderRefundMaxOrderByAggregateInput
    _min?: OrderRefundMinOrderByAggregateInput
  }

  export type OrderRefundScalarWhereWithAggregatesInput = {
    AND?: OrderRefundScalarWhereWithAggregatesInput | OrderRefundScalarWhereWithAggregatesInput[]
    OR?: OrderRefundScalarWhereWithAggregatesInput[]
    NOT?: OrderRefundScalarWhereWithAggregatesInput | OrderRefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderRefund"> | string
    orderId?: StringWithAggregatesFilter<"OrderRefund"> | string
    status?: StringWithAggregatesFilter<"OrderRefund"> | string
    title?: StringWithAggregatesFilter<"OrderRefund"> | string
    description?: StringWithAggregatesFilter<"OrderRefund"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"OrderRefund"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"OrderRefund"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OrderRefund"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"OrderRefund"> | string | null
  }

  export type OrderShippingWhereInput = {
    AND?: OrderShippingWhereInput | OrderShippingWhereInput[]
    OR?: OrderShippingWhereInput[]
    NOT?: OrderShippingWhereInput | OrderShippingWhereInput[]
    id?: StringFilter<"OrderShipping"> | string
    orderId?: StringFilter<"OrderShipping"> | string
    name?: StringFilter<"OrderShipping"> | string
    address?: StringFilter<"OrderShipping"> | string
    type?: StringFilter<"OrderShipping"> | string
    createdAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
    createdBy?: StringFilter<"OrderShipping"> | string
    updatedAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type OrderShippingOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type OrderShippingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderShippingWhereInput | OrderShippingWhereInput[]
    OR?: OrderShippingWhereInput[]
    NOT?: OrderShippingWhereInput | OrderShippingWhereInput[]
    orderId?: StringFilter<"OrderShipping"> | string
    name?: StringFilter<"OrderShipping"> | string
    address?: StringFilter<"OrderShipping"> | string
    type?: StringFilter<"OrderShipping"> | string
    createdAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
    createdBy?: StringFilter<"OrderShipping"> | string
    updatedAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderShippingOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: OrderShippingCountOrderByAggregateInput
    _max?: OrderShippingMaxOrderByAggregateInput
    _min?: OrderShippingMinOrderByAggregateInput
  }

  export type OrderShippingScalarWhereWithAggregatesInput = {
    AND?: OrderShippingScalarWhereWithAggregatesInput | OrderShippingScalarWhereWithAggregatesInput[]
    OR?: OrderShippingScalarWhereWithAggregatesInput[]
    NOT?: OrderShippingScalarWhereWithAggregatesInput | OrderShippingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderShipping"> | string
    orderId?: StringWithAggregatesFilter<"OrderShipping"> | string
    name?: StringWithAggregatesFilter<"OrderShipping"> | string
    address?: StringWithAggregatesFilter<"OrderShipping"> | string
    type?: StringWithAggregatesFilter<"OrderShipping"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"OrderShipping"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"OrderShipping"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OrderShipping"> | Date | string | null
  }

  export type OrderVoucherWhereInput = {
    AND?: OrderVoucherWhereInput | OrderVoucherWhereInput[]
    OR?: OrderVoucherWhereInput[]
    NOT?: OrderVoucherWhereInput | OrderVoucherWhereInput[]
    id?: StringFilter<"OrderVoucher"> | string
    orderId?: StringFilter<"OrderVoucher"> | string
    voucherId?: StringFilter<"OrderVoucher"> | string
    createdAt?: DateTimeFilter<"OrderVoucher"> | Date | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type OrderVoucherOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type OrderVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderVoucherWhereInput | OrderVoucherWhereInput[]
    OR?: OrderVoucherWhereInput[]
    NOT?: OrderVoucherWhereInput | OrderVoucherWhereInput[]
    orderId?: StringFilter<"OrderVoucher"> | string
    voucherId?: StringFilter<"OrderVoucher"> | string
    createdAt?: DateTimeFilter<"OrderVoucher"> | Date | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderVoucherOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
    _count?: OrderVoucherCountOrderByAggregateInput
    _max?: OrderVoucherMaxOrderByAggregateInput
    _min?: OrderVoucherMinOrderByAggregateInput
  }

  export type OrderVoucherScalarWhereWithAggregatesInput = {
    AND?: OrderVoucherScalarWhereWithAggregatesInput | OrderVoucherScalarWhereWithAggregatesInput[]
    OR?: OrderVoucherScalarWhereWithAggregatesInput[]
    NOT?: OrderVoucherScalarWhereWithAggregatesInput | OrderVoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderVoucher"> | string
    orderId?: StringWithAggregatesFilter<"OrderVoucher"> | string
    voucherId?: StringWithAggregatesFilter<"OrderVoucher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderVoucher"> | Date | string
  }

  export type ProductOrderWhereInput = {
    AND?: ProductOrderWhereInput | ProductOrderWhereInput[]
    OR?: ProductOrderWhereInput[]
    NOT?: ProductOrderWhereInput | ProductOrderWhereInput[]
    id?: StringFilter<"ProductOrder"> | string
    productId?: StringFilter<"ProductOrder"> | string
    quantity?: IntFilter<"ProductOrder"> | number
    priceBefore?: FloatNullableFilter<"ProductOrder"> | number | null
    priceAfter?: FloatFilter<"ProductOrder"> | number
    orderId?: StringFilter<"ProductOrder"> | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    ProductOrderRefund?: ProductOrderRefundListRelationFilter
  }

  export type ProductOrderOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    priceBefore?: SortOrderInput | SortOrder
    priceAfter?: SortOrder
    orderId?: SortOrder
    Order?: OrderOrderByWithRelationInput
    ProductOrderRefund?: ProductOrderRefundOrderByRelationAggregateInput
  }

  export type ProductOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductOrderWhereInput | ProductOrderWhereInput[]
    OR?: ProductOrderWhereInput[]
    NOT?: ProductOrderWhereInput | ProductOrderWhereInput[]
    productId?: StringFilter<"ProductOrder"> | string
    quantity?: IntFilter<"ProductOrder"> | number
    priceBefore?: FloatNullableFilter<"ProductOrder"> | number | null
    priceAfter?: FloatFilter<"ProductOrder"> | number
    orderId?: StringFilter<"ProductOrder"> | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    ProductOrderRefund?: ProductOrderRefundListRelationFilter
  }, "id">

  export type ProductOrderOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    priceBefore?: SortOrderInput | SortOrder
    priceAfter?: SortOrder
    orderId?: SortOrder
    _count?: ProductOrderCountOrderByAggregateInput
    _avg?: ProductOrderAvgOrderByAggregateInput
    _max?: ProductOrderMaxOrderByAggregateInput
    _min?: ProductOrderMinOrderByAggregateInput
    _sum?: ProductOrderSumOrderByAggregateInput
  }

  export type ProductOrderScalarWhereWithAggregatesInput = {
    AND?: ProductOrderScalarWhereWithAggregatesInput | ProductOrderScalarWhereWithAggregatesInput[]
    OR?: ProductOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductOrderScalarWhereWithAggregatesInput | ProductOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductOrder"> | string
    productId?: StringWithAggregatesFilter<"ProductOrder"> | string
    quantity?: IntWithAggregatesFilter<"ProductOrder"> | number
    priceBefore?: FloatNullableWithAggregatesFilter<"ProductOrder"> | number | null
    priceAfter?: FloatWithAggregatesFilter<"ProductOrder"> | number
    orderId?: StringWithAggregatesFilter<"ProductOrder"> | string
  }

  export type ProductOrderRefundWhereInput = {
    AND?: ProductOrderRefundWhereInput | ProductOrderRefundWhereInput[]
    OR?: ProductOrderRefundWhereInput[]
    NOT?: ProductOrderRefundWhereInput | ProductOrderRefundWhereInput[]
    id?: StringFilter<"ProductOrderRefund"> | string
    orderRefundId?: StringFilter<"ProductOrderRefund"> | string
    productOrderId?: StringFilter<"ProductOrderRefund"> | string
    quantity?: IntFilter<"ProductOrderRefund"> | number
    description?: StringNullableFilter<"ProductOrderRefund"> | string | null
    OrderRefund?: XOR<OrderRefundRelationFilter, OrderRefundWhereInput>
    ProductOrder?: XOR<ProductOrderRelationFilter, ProductOrderWhereInput>
  }

  export type ProductOrderRefundOrderByWithRelationInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    productOrderId?: SortOrder
    quantity?: SortOrder
    description?: SortOrderInput | SortOrder
    OrderRefund?: OrderRefundOrderByWithRelationInput
    ProductOrder?: ProductOrderOrderByWithRelationInput
  }

  export type ProductOrderRefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductOrderRefundWhereInput | ProductOrderRefundWhereInput[]
    OR?: ProductOrderRefundWhereInput[]
    NOT?: ProductOrderRefundWhereInput | ProductOrderRefundWhereInput[]
    orderRefundId?: StringFilter<"ProductOrderRefund"> | string
    productOrderId?: StringFilter<"ProductOrderRefund"> | string
    quantity?: IntFilter<"ProductOrderRefund"> | number
    description?: StringNullableFilter<"ProductOrderRefund"> | string | null
    OrderRefund?: XOR<OrderRefundRelationFilter, OrderRefundWhereInput>
    ProductOrder?: XOR<ProductOrderRelationFilter, ProductOrderWhereInput>
  }, "id">

  export type ProductOrderRefundOrderByWithAggregationInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    productOrderId?: SortOrder
    quantity?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ProductOrderRefundCountOrderByAggregateInput
    _avg?: ProductOrderRefundAvgOrderByAggregateInput
    _max?: ProductOrderRefundMaxOrderByAggregateInput
    _min?: ProductOrderRefundMinOrderByAggregateInput
    _sum?: ProductOrderRefundSumOrderByAggregateInput
  }

  export type ProductOrderRefundScalarWhereWithAggregatesInput = {
    AND?: ProductOrderRefundScalarWhereWithAggregatesInput | ProductOrderRefundScalarWhereWithAggregatesInput[]
    OR?: ProductOrderRefundScalarWhereWithAggregatesInput[]
    NOT?: ProductOrderRefundScalarWhereWithAggregatesInput | ProductOrderRefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductOrderRefund"> | string
    orderRefundId?: StringWithAggregatesFilter<"ProductOrderRefund"> | string
    productOrderId?: StringWithAggregatesFilter<"ProductOrderRefund"> | string
    quantity?: IntWithAggregatesFilter<"ProductOrderRefund"> | number
    description?: StringNullableWithAggregatesFilter<"ProductOrderRefund"> | string | null
  }

  export type RefundMaterialWhereInput = {
    AND?: RefundMaterialWhereInput | RefundMaterialWhereInput[]
    OR?: RefundMaterialWhereInput[]
    NOT?: RefundMaterialWhereInput | RefundMaterialWhereInput[]
    id?: StringFilter<"RefundMaterial"> | string
    orderRefundId?: StringFilter<"RefundMaterial"> | string
    url?: StringFilter<"RefundMaterial"> | string
    type?: StringFilter<"RefundMaterial"> | string
    description?: StringNullableFilter<"RefundMaterial"> | string | null
    OrderRefund?: XOR<OrderRefundRelationFilter, OrderRefundWhereInput>
  }

  export type RefundMaterialOrderByWithRelationInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    OrderRefund?: OrderRefundOrderByWithRelationInput
  }

  export type RefundMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundMaterialWhereInput | RefundMaterialWhereInput[]
    OR?: RefundMaterialWhereInput[]
    NOT?: RefundMaterialWhereInput | RefundMaterialWhereInput[]
    orderRefundId?: StringFilter<"RefundMaterial"> | string
    url?: StringFilter<"RefundMaterial"> | string
    type?: StringFilter<"RefundMaterial"> | string
    description?: StringNullableFilter<"RefundMaterial"> | string | null
    OrderRefund?: XOR<OrderRefundRelationFilter, OrderRefundWhereInput>
  }, "id">

  export type RefundMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RefundMaterialCountOrderByAggregateInput
    _max?: RefundMaterialMaxOrderByAggregateInput
    _min?: RefundMaterialMinOrderByAggregateInput
  }

  export type RefundMaterialScalarWhereWithAggregatesInput = {
    AND?: RefundMaterialScalarWhereWithAggregatesInput | RefundMaterialScalarWhereWithAggregatesInput[]
    OR?: RefundMaterialScalarWhereWithAggregatesInput[]
    NOT?: RefundMaterialScalarWhereWithAggregatesInput | RefundMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefundMaterial"> | string
    orderRefundId?: StringWithAggregatesFilter<"RefundMaterial"> | string
    url?: StringWithAggregatesFilter<"RefundMaterial"> | string
    type?: StringWithAggregatesFilter<"RefundMaterial"> | string
    description?: StringNullableWithAggregatesFilter<"RefundMaterial"> | string | null
  }

  export type RequestComplainWhereInput = {
    AND?: RequestComplainWhereInput | RequestComplainWhereInput[]
    OR?: RequestComplainWhereInput[]
    NOT?: RequestComplainWhereInput | RequestComplainWhereInput[]
    id?: StringFilter<"RequestComplain"> | string
    description?: StringFilter<"RequestComplain"> | string
    createdAt?: DateTimeFilter<"RequestComplain"> | Date | string
  }

  export type RequestComplainOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestComplainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestComplainWhereInput | RequestComplainWhereInput[]
    OR?: RequestComplainWhereInput[]
    NOT?: RequestComplainWhereInput | RequestComplainWhereInput[]
    description?: StringFilter<"RequestComplain"> | string
    createdAt?: DateTimeFilter<"RequestComplain"> | Date | string
  }, "id">

  export type RequestComplainOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: RequestComplainCountOrderByAggregateInput
    _max?: RequestComplainMaxOrderByAggregateInput
    _min?: RequestComplainMinOrderByAggregateInput
  }

  export type RequestComplainScalarWhereWithAggregatesInput = {
    AND?: RequestComplainScalarWhereWithAggregatesInput | RequestComplainScalarWhereWithAggregatesInput[]
    OR?: RequestComplainScalarWhereWithAggregatesInput[]
    NOT?: RequestComplainScalarWhereWithAggregatesInput | RequestComplainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestComplain"> | string
    description?: StringWithAggregatesFilter<"RequestComplain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequestComplain"> | Date | string
  }

  export type OrderCreateInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowUncheckedCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundUncheckedCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingUncheckedCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherUncheckedCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUncheckedUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUncheckedUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUncheckedUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderFlowCreateInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderRefundId?: string | null
    Order: OrderCreateNestedOneWithoutOrderFlowInput
  }

  export type OrderFlowUncheckedCreateInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderId: string
    orderRefundId?: string | null
  }

  export type OrderFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    Order?: OrderUpdateOneRequiredWithoutOrderFlowNestedInput
  }

  export type OrderFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderId?: StringFieldUpdateOperationsInput | string
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderFlowCreateManyInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderId: string
    orderRefundId?: string | null
  }

  export type OrderFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderId?: StringFieldUpdateOperationsInput | string
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRefundCreateInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Order: OrderCreateNestedOneWithoutOrderRefundInput
    ProductOrderRefund?: ProductOrderRefundCreateNestedManyWithoutOrderRefundInput
    RefundMaterial?: RefundMaterialCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundUncheckedCreateInput = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedCreateNestedManyWithoutOrderRefundInput
    RefundMaterial?: RefundMaterialUncheckedCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Order?: OrderUpdateOneRequiredWithoutOrderRefundNestedInput
    ProductOrderRefund?: ProductOrderRefundUpdateManyWithoutOrderRefundNestedInput
    RefundMaterial?: RefundMaterialUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundNestedInput
    RefundMaterial?: RefundMaterialUncheckedUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundCreateManyInput = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type OrderRefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderShippingCreateInput = {
    id: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    Order: OrderCreateNestedOneWithoutOrderShippingInput
  }

  export type OrderShippingUncheckedCreateInput = {
    id: string
    orderId: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
  }

  export type OrderShippingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateOneRequiredWithoutOrderShippingNestedInput
  }

  export type OrderShippingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderShippingCreateManyInput = {
    id: string
    orderId: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
  }

  export type OrderShippingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderShippingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderVoucherCreateInput = {
    id: string
    voucherId: string
    createdAt: Date | string
    Order: OrderCreateNestedOneWithoutOrderVoucherInput
  }

  export type OrderVoucherUncheckedCreateInput = {
    id: string
    orderId: string
    voucherId: string
    createdAt: Date | string
  }

  export type OrderVoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutOrderVoucherNestedInput
  }

  export type OrderVoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderVoucherCreateManyInput = {
    id: string
    orderId: string
    voucherId: string
    createdAt: Date | string
  }

  export type OrderVoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderVoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOrderCreateInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    Order: OrderCreateNestedOneWithoutProductOrderInput
    ProductOrderRefund?: ProductOrderRefundCreateNestedManyWithoutProductOrderInput
  }

  export type ProductOrderUncheckedCreateInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    orderId: string
    ProductOrderRefund?: ProductOrderRefundUncheckedCreateNestedManyWithoutProductOrderInput
  }

  export type ProductOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutProductOrderNestedInput
    ProductOrderRefund?: ProductOrderRefundUpdateManyWithoutProductOrderNestedInput
  }

  export type ProductOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    ProductOrderRefund?: ProductOrderRefundUncheckedUpdateManyWithoutProductOrderNestedInput
  }

  export type ProductOrderCreateManyInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    orderId: string
  }

  export type ProductOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOrderRefundCreateInput = {
    id: string
    quantity: number
    description?: string | null
    OrderRefund: OrderRefundCreateNestedOneWithoutProductOrderRefundInput
    ProductOrder: ProductOrderCreateNestedOneWithoutProductOrderRefundInput
  }

  export type ProductOrderRefundUncheckedCreateInput = {
    id: string
    orderRefundId: string
    productOrderId: string
    quantity: number
    description?: string | null
  }

  export type ProductOrderRefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    OrderRefund?: OrderRefundUpdateOneRequiredWithoutProductOrderRefundNestedInput
    ProductOrder?: ProductOrderUpdateOneRequiredWithoutProductOrderRefundNestedInput
  }

  export type ProductOrderRefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    productOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOrderRefundCreateManyInput = {
    id: string
    orderRefundId: string
    productOrderId: string
    quantity: number
    description?: string | null
  }

  export type ProductOrderRefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOrderRefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    productOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialCreateInput = {
    id: string
    url: string
    type: string
    description?: string | null
    OrderRefund: OrderRefundCreateNestedOneWithoutRefundMaterialInput
  }

  export type RefundMaterialUncheckedCreateInput = {
    id: string
    orderRefundId: string
    url: string
    type: string
    description?: string | null
  }

  export type RefundMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    OrderRefund?: OrderRefundUpdateOneRequiredWithoutRefundMaterialNestedInput
  }

  export type RefundMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialCreateManyInput = {
    id: string
    orderRefundId: string
    url: string
    type: string
    description?: string | null
  }

  export type RefundMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestComplainCreateInput = {
    id: string
    description: string
    createdAt: Date | string
  }

  export type RequestComplainUncheckedCreateInput = {
    id: string
    description: string
    createdAt: Date | string
  }

  export type RequestComplainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestComplainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestComplainCreateManyInput = {
    id: string
    description: string
    createdAt: Date | string
  }

  export type RequestComplainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestComplainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderFlowListRelationFilter = {
    every?: OrderFlowWhereInput
    some?: OrderFlowWhereInput
    none?: OrderFlowWhereInput
  }

  export type OrderRefundListRelationFilter = {
    every?: OrderRefundWhereInput
    some?: OrderRefundWhereInput
    none?: OrderRefundWhereInput
  }

  export type OrderShippingListRelationFilter = {
    every?: OrderShippingWhereInput
    some?: OrderShippingWhereInput
    none?: OrderShippingWhereInput
  }

  export type OrderVoucherListRelationFilter = {
    every?: OrderVoucherWhereInput
    some?: OrderVoucherWhereInput
    none?: OrderVoucherWhereInput
  }

  export type ProductOrderListRelationFilter = {
    every?: ProductOrderWhereInput
    some?: ProductOrderWhereInput
    none?: ProductOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderFlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderRefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderShippingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderVoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    pay?: SortOrder
    note?: SortOrder
    isRated?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    numberOfRefund?: SortOrder
    isDraf?: SortOrder
    complainId?: SortOrder
    payment?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
    discount?: SortOrder
    pay?: SortOrder
    numberOfRefund?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    pay?: SortOrder
    note?: SortOrder
    isRated?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    numberOfRefund?: SortOrder
    isDraf?: SortOrder
    complainId?: SortOrder
    payment?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    total?: SortOrder
    discount?: SortOrder
    pay?: SortOrder
    note?: SortOrder
    isRated?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    numberOfRefund?: SortOrder
    isDraf?: SortOrder
    complainId?: SortOrder
    payment?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
    discount?: SortOrder
    pay?: SortOrder
    numberOfRefund?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderFlowCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    orderRefundId?: SortOrder
  }

  export type OrderFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    orderRefundId?: SortOrder
  }

  export type OrderFlowMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    orderRefundId?: SortOrder
  }

  export type ProductOrderRefundListRelationFilter = {
    every?: ProductOrderRefundWhereInput
    some?: ProductOrderRefundWhereInput
    none?: ProductOrderRefundWhereInput
  }

  export type RefundMaterialListRelationFilter = {
    every?: RefundMaterialWhereInput
    some?: RefundMaterialWhereInput
    none?: RefundMaterialWhereInput
  }

  export type ProductOrderRefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefundMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderRefundCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type OrderRefundMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type OrderRefundMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type OrderShippingCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderShippingMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderShippingMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderVoucherCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderVoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderVoucherMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductOrderCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    orderId?: SortOrder
  }

  export type ProductOrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
  }

  export type ProductOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    orderId?: SortOrder
  }

  export type ProductOrderMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    orderId?: SortOrder
  }

  export type ProductOrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrderRefundRelationFilter = {
    is?: OrderRefundWhereInput
    isNot?: OrderRefundWhereInput
  }

  export type ProductOrderRelationFilter = {
    is?: ProductOrderWhereInput
    isNot?: ProductOrderWhereInput
  }

  export type ProductOrderRefundCountOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    productOrderId?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
  }

  export type ProductOrderRefundAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductOrderRefundMaxOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    productOrderId?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
  }

  export type ProductOrderRefundMinOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    productOrderId?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
  }

  export type ProductOrderRefundSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RefundMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type RefundMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type RefundMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    orderRefundId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type RequestComplainCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestComplainMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestComplainMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderFlowCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput> | OrderFlowCreateWithoutOrderInput[] | OrderFlowUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderFlowCreateOrConnectWithoutOrderInput | OrderFlowCreateOrConnectWithoutOrderInput[]
    createMany?: OrderFlowCreateManyOrderInputEnvelope
    connect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
  }

  export type OrderRefundCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput> | OrderRefundCreateWithoutOrderInput[] | OrderRefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderRefundCreateOrConnectWithoutOrderInput | OrderRefundCreateOrConnectWithoutOrderInput[]
    createMany?: OrderRefundCreateManyOrderInputEnvelope
    connect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
  }

  export type OrderShippingCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput> | OrderShippingCreateWithoutOrderInput[] | OrderShippingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderShippingCreateOrConnectWithoutOrderInput | OrderShippingCreateOrConnectWithoutOrderInput[]
    createMany?: OrderShippingCreateManyOrderInputEnvelope
    connect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
  }

  export type OrderVoucherCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput> | OrderVoucherCreateWithoutOrderInput[] | OrderVoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVoucherCreateOrConnectWithoutOrderInput | OrderVoucherCreateOrConnectWithoutOrderInput[]
    createMany?: OrderVoucherCreateManyOrderInputEnvelope
    connect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
  }

  export type ProductOrderCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type OrderFlowUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput> | OrderFlowCreateWithoutOrderInput[] | OrderFlowUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderFlowCreateOrConnectWithoutOrderInput | OrderFlowCreateOrConnectWithoutOrderInput[]
    createMany?: OrderFlowCreateManyOrderInputEnvelope
    connect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
  }

  export type OrderRefundUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput> | OrderRefundCreateWithoutOrderInput[] | OrderRefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderRefundCreateOrConnectWithoutOrderInput | OrderRefundCreateOrConnectWithoutOrderInput[]
    createMany?: OrderRefundCreateManyOrderInputEnvelope
    connect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
  }

  export type OrderShippingUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput> | OrderShippingCreateWithoutOrderInput[] | OrderShippingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderShippingCreateOrConnectWithoutOrderInput | OrderShippingCreateOrConnectWithoutOrderInput[]
    createMany?: OrderShippingCreateManyOrderInputEnvelope
    connect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
  }

  export type OrderVoucherUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput> | OrderVoucherCreateWithoutOrderInput[] | OrderVoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVoucherCreateOrConnectWithoutOrderInput | OrderVoucherCreateOrConnectWithoutOrderInput[]
    createMany?: OrderVoucherCreateManyOrderInputEnvelope
    connect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
  }

  export type ProductOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderFlowUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput> | OrderFlowCreateWithoutOrderInput[] | OrderFlowUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderFlowCreateOrConnectWithoutOrderInput | OrderFlowCreateOrConnectWithoutOrderInput[]
    upsert?: OrderFlowUpsertWithWhereUniqueWithoutOrderInput | OrderFlowUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderFlowCreateManyOrderInputEnvelope
    set?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    disconnect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    delete?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    connect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    update?: OrderFlowUpdateWithWhereUniqueWithoutOrderInput | OrderFlowUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderFlowUpdateManyWithWhereWithoutOrderInput | OrderFlowUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderFlowScalarWhereInput | OrderFlowScalarWhereInput[]
  }

  export type OrderRefundUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput> | OrderRefundCreateWithoutOrderInput[] | OrderRefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderRefundCreateOrConnectWithoutOrderInput | OrderRefundCreateOrConnectWithoutOrderInput[]
    upsert?: OrderRefundUpsertWithWhereUniqueWithoutOrderInput | OrderRefundUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderRefundCreateManyOrderInputEnvelope
    set?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    disconnect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    delete?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    connect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    update?: OrderRefundUpdateWithWhereUniqueWithoutOrderInput | OrderRefundUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderRefundUpdateManyWithWhereWithoutOrderInput | OrderRefundUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderRefundScalarWhereInput | OrderRefundScalarWhereInput[]
  }

  export type OrderShippingUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput> | OrderShippingCreateWithoutOrderInput[] | OrderShippingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderShippingCreateOrConnectWithoutOrderInput | OrderShippingCreateOrConnectWithoutOrderInput[]
    upsert?: OrderShippingUpsertWithWhereUniqueWithoutOrderInput | OrderShippingUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderShippingCreateManyOrderInputEnvelope
    set?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    disconnect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    delete?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    connect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    update?: OrderShippingUpdateWithWhereUniqueWithoutOrderInput | OrderShippingUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderShippingUpdateManyWithWhereWithoutOrderInput | OrderShippingUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderShippingScalarWhereInput | OrderShippingScalarWhereInput[]
  }

  export type OrderVoucherUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput> | OrderVoucherCreateWithoutOrderInput[] | OrderVoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVoucherCreateOrConnectWithoutOrderInput | OrderVoucherCreateOrConnectWithoutOrderInput[]
    upsert?: OrderVoucherUpsertWithWhereUniqueWithoutOrderInput | OrderVoucherUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderVoucherCreateManyOrderInputEnvelope
    set?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    disconnect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    delete?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    connect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    update?: OrderVoucherUpdateWithWhereUniqueWithoutOrderInput | OrderVoucherUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderVoucherUpdateManyWithWhereWithoutOrderInput | OrderVoucherUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderVoucherScalarWhereInput | OrderVoucherScalarWhereInput[]
  }

  export type ProductOrderUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutOrderInput | ProductOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type OrderFlowUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput> | OrderFlowCreateWithoutOrderInput[] | OrderFlowUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderFlowCreateOrConnectWithoutOrderInput | OrderFlowCreateOrConnectWithoutOrderInput[]
    upsert?: OrderFlowUpsertWithWhereUniqueWithoutOrderInput | OrderFlowUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderFlowCreateManyOrderInputEnvelope
    set?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    disconnect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    delete?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    connect?: OrderFlowWhereUniqueInput | OrderFlowWhereUniqueInput[]
    update?: OrderFlowUpdateWithWhereUniqueWithoutOrderInput | OrderFlowUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderFlowUpdateManyWithWhereWithoutOrderInput | OrderFlowUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderFlowScalarWhereInput | OrderFlowScalarWhereInput[]
  }

  export type OrderRefundUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput> | OrderRefundCreateWithoutOrderInput[] | OrderRefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderRefundCreateOrConnectWithoutOrderInput | OrderRefundCreateOrConnectWithoutOrderInput[]
    upsert?: OrderRefundUpsertWithWhereUniqueWithoutOrderInput | OrderRefundUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderRefundCreateManyOrderInputEnvelope
    set?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    disconnect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    delete?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    connect?: OrderRefundWhereUniqueInput | OrderRefundWhereUniqueInput[]
    update?: OrderRefundUpdateWithWhereUniqueWithoutOrderInput | OrderRefundUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderRefundUpdateManyWithWhereWithoutOrderInput | OrderRefundUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderRefundScalarWhereInput | OrderRefundScalarWhereInput[]
  }

  export type OrderShippingUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput> | OrderShippingCreateWithoutOrderInput[] | OrderShippingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderShippingCreateOrConnectWithoutOrderInput | OrderShippingCreateOrConnectWithoutOrderInput[]
    upsert?: OrderShippingUpsertWithWhereUniqueWithoutOrderInput | OrderShippingUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderShippingCreateManyOrderInputEnvelope
    set?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    disconnect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    delete?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    connect?: OrderShippingWhereUniqueInput | OrderShippingWhereUniqueInput[]
    update?: OrderShippingUpdateWithWhereUniqueWithoutOrderInput | OrderShippingUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderShippingUpdateManyWithWhereWithoutOrderInput | OrderShippingUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderShippingScalarWhereInput | OrderShippingScalarWhereInput[]
  }

  export type OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput> | OrderVoucherCreateWithoutOrderInput[] | OrderVoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVoucherCreateOrConnectWithoutOrderInput | OrderVoucherCreateOrConnectWithoutOrderInput[]
    upsert?: OrderVoucherUpsertWithWhereUniqueWithoutOrderInput | OrderVoucherUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderVoucherCreateManyOrderInputEnvelope
    set?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    disconnect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    delete?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    connect?: OrderVoucherWhereUniqueInput | OrderVoucherWhereUniqueInput[]
    update?: OrderVoucherUpdateWithWhereUniqueWithoutOrderInput | OrderVoucherUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderVoucherUpdateManyWithWhereWithoutOrderInput | OrderVoucherUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderVoucherScalarWhereInput | OrderVoucherScalarWhereInput[]
  }

  export type ProductOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutOrderInput | ProductOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderFlowInput = {
    create?: XOR<OrderCreateWithoutOrderFlowInput, OrderUncheckedCreateWithoutOrderFlowInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderFlowInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderFlowNestedInput = {
    create?: XOR<OrderCreateWithoutOrderFlowInput, OrderUncheckedCreateWithoutOrderFlowInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderFlowInput
    upsert?: OrderUpsertWithoutOrderFlowInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderFlowInput, OrderUpdateWithoutOrderFlowInput>, OrderUncheckedUpdateWithoutOrderFlowInput>
  }

  export type OrderCreateNestedOneWithoutOrderRefundInput = {
    create?: XOR<OrderCreateWithoutOrderRefundInput, OrderUncheckedCreateWithoutOrderRefundInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderRefundInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductOrderRefundCreateNestedManyWithoutOrderRefundInput = {
    create?: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput> | ProductOrderRefundCreateWithoutOrderRefundInput[] | ProductOrderRefundUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutOrderRefundInput | ProductOrderRefundCreateOrConnectWithoutOrderRefundInput[]
    createMany?: ProductOrderRefundCreateManyOrderRefundInputEnvelope
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
  }

  export type RefundMaterialCreateNestedManyWithoutOrderRefundInput = {
    create?: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput> | RefundMaterialCreateWithoutOrderRefundInput[] | RefundMaterialUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: RefundMaterialCreateOrConnectWithoutOrderRefundInput | RefundMaterialCreateOrConnectWithoutOrderRefundInput[]
    createMany?: RefundMaterialCreateManyOrderRefundInputEnvelope
    connect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
  }

  export type ProductOrderRefundUncheckedCreateNestedManyWithoutOrderRefundInput = {
    create?: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput> | ProductOrderRefundCreateWithoutOrderRefundInput[] | ProductOrderRefundUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutOrderRefundInput | ProductOrderRefundCreateOrConnectWithoutOrderRefundInput[]
    createMany?: ProductOrderRefundCreateManyOrderRefundInputEnvelope
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
  }

  export type RefundMaterialUncheckedCreateNestedManyWithoutOrderRefundInput = {
    create?: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput> | RefundMaterialCreateWithoutOrderRefundInput[] | RefundMaterialUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: RefundMaterialCreateOrConnectWithoutOrderRefundInput | RefundMaterialCreateOrConnectWithoutOrderRefundInput[]
    createMany?: RefundMaterialCreateManyOrderRefundInputEnvelope
    connect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutOrderRefundNestedInput = {
    create?: XOR<OrderCreateWithoutOrderRefundInput, OrderUncheckedCreateWithoutOrderRefundInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderRefundInput
    upsert?: OrderUpsertWithoutOrderRefundInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderRefundInput, OrderUpdateWithoutOrderRefundInput>, OrderUncheckedUpdateWithoutOrderRefundInput>
  }

  export type ProductOrderRefundUpdateManyWithoutOrderRefundNestedInput = {
    create?: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput> | ProductOrderRefundCreateWithoutOrderRefundInput[] | ProductOrderRefundUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutOrderRefundInput | ProductOrderRefundCreateOrConnectWithoutOrderRefundInput[]
    upsert?: ProductOrderRefundUpsertWithWhereUniqueWithoutOrderRefundInput | ProductOrderRefundUpsertWithWhereUniqueWithoutOrderRefundInput[]
    createMany?: ProductOrderRefundCreateManyOrderRefundInputEnvelope
    set?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    disconnect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    delete?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    update?: ProductOrderRefundUpdateWithWhereUniqueWithoutOrderRefundInput | ProductOrderRefundUpdateWithWhereUniqueWithoutOrderRefundInput[]
    updateMany?: ProductOrderRefundUpdateManyWithWhereWithoutOrderRefundInput | ProductOrderRefundUpdateManyWithWhereWithoutOrderRefundInput[]
    deleteMany?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
  }

  export type RefundMaterialUpdateManyWithoutOrderRefundNestedInput = {
    create?: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput> | RefundMaterialCreateWithoutOrderRefundInput[] | RefundMaterialUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: RefundMaterialCreateOrConnectWithoutOrderRefundInput | RefundMaterialCreateOrConnectWithoutOrderRefundInput[]
    upsert?: RefundMaterialUpsertWithWhereUniqueWithoutOrderRefundInput | RefundMaterialUpsertWithWhereUniqueWithoutOrderRefundInput[]
    createMany?: RefundMaterialCreateManyOrderRefundInputEnvelope
    set?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    disconnect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    delete?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    connect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    update?: RefundMaterialUpdateWithWhereUniqueWithoutOrderRefundInput | RefundMaterialUpdateWithWhereUniqueWithoutOrderRefundInput[]
    updateMany?: RefundMaterialUpdateManyWithWhereWithoutOrderRefundInput | RefundMaterialUpdateManyWithWhereWithoutOrderRefundInput[]
    deleteMany?: RefundMaterialScalarWhereInput | RefundMaterialScalarWhereInput[]
  }

  export type ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundNestedInput = {
    create?: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput> | ProductOrderRefundCreateWithoutOrderRefundInput[] | ProductOrderRefundUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutOrderRefundInput | ProductOrderRefundCreateOrConnectWithoutOrderRefundInput[]
    upsert?: ProductOrderRefundUpsertWithWhereUniqueWithoutOrderRefundInput | ProductOrderRefundUpsertWithWhereUniqueWithoutOrderRefundInput[]
    createMany?: ProductOrderRefundCreateManyOrderRefundInputEnvelope
    set?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    disconnect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    delete?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    update?: ProductOrderRefundUpdateWithWhereUniqueWithoutOrderRefundInput | ProductOrderRefundUpdateWithWhereUniqueWithoutOrderRefundInput[]
    updateMany?: ProductOrderRefundUpdateManyWithWhereWithoutOrderRefundInput | ProductOrderRefundUpdateManyWithWhereWithoutOrderRefundInput[]
    deleteMany?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
  }

  export type RefundMaterialUncheckedUpdateManyWithoutOrderRefundNestedInput = {
    create?: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput> | RefundMaterialCreateWithoutOrderRefundInput[] | RefundMaterialUncheckedCreateWithoutOrderRefundInput[]
    connectOrCreate?: RefundMaterialCreateOrConnectWithoutOrderRefundInput | RefundMaterialCreateOrConnectWithoutOrderRefundInput[]
    upsert?: RefundMaterialUpsertWithWhereUniqueWithoutOrderRefundInput | RefundMaterialUpsertWithWhereUniqueWithoutOrderRefundInput[]
    createMany?: RefundMaterialCreateManyOrderRefundInputEnvelope
    set?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    disconnect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    delete?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    connect?: RefundMaterialWhereUniqueInput | RefundMaterialWhereUniqueInput[]
    update?: RefundMaterialUpdateWithWhereUniqueWithoutOrderRefundInput | RefundMaterialUpdateWithWhereUniqueWithoutOrderRefundInput[]
    updateMany?: RefundMaterialUpdateManyWithWhereWithoutOrderRefundInput | RefundMaterialUpdateManyWithWhereWithoutOrderRefundInput[]
    deleteMany?: RefundMaterialScalarWhereInput | RefundMaterialScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderShippingInput = {
    create?: XOR<OrderCreateWithoutOrderShippingInput, OrderUncheckedCreateWithoutOrderShippingInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderShippingInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderShippingNestedInput = {
    create?: XOR<OrderCreateWithoutOrderShippingInput, OrderUncheckedCreateWithoutOrderShippingInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderShippingInput
    upsert?: OrderUpsertWithoutOrderShippingInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderShippingInput, OrderUpdateWithoutOrderShippingInput>, OrderUncheckedUpdateWithoutOrderShippingInput>
  }

  export type OrderCreateNestedOneWithoutOrderVoucherInput = {
    create?: XOR<OrderCreateWithoutOrderVoucherInput, OrderUncheckedCreateWithoutOrderVoucherInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderVoucherInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderVoucherNestedInput = {
    create?: XOR<OrderCreateWithoutOrderVoucherInput, OrderUncheckedCreateWithoutOrderVoucherInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderVoucherInput
    upsert?: OrderUpsertWithoutOrderVoucherInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderVoucherInput, OrderUpdateWithoutOrderVoucherInput>, OrderUncheckedUpdateWithoutOrderVoucherInput>
  }

  export type OrderCreateNestedOneWithoutProductOrderInput = {
    create?: XOR<OrderCreateWithoutProductOrderInput, OrderUncheckedCreateWithoutProductOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductOrderInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductOrderRefundCreateNestedManyWithoutProductOrderInput = {
    create?: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput> | ProductOrderRefundCreateWithoutProductOrderInput[] | ProductOrderRefundUncheckedCreateWithoutProductOrderInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutProductOrderInput | ProductOrderRefundCreateOrConnectWithoutProductOrderInput[]
    createMany?: ProductOrderRefundCreateManyProductOrderInputEnvelope
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
  }

  export type ProductOrderRefundUncheckedCreateNestedManyWithoutProductOrderInput = {
    create?: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput> | ProductOrderRefundCreateWithoutProductOrderInput[] | ProductOrderRefundUncheckedCreateWithoutProductOrderInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutProductOrderInput | ProductOrderRefundCreateOrConnectWithoutProductOrderInput[]
    createMany?: ProductOrderRefundCreateManyProductOrderInputEnvelope
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutProductOrderNestedInput = {
    create?: XOR<OrderCreateWithoutProductOrderInput, OrderUncheckedCreateWithoutProductOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductOrderInput
    upsert?: OrderUpsertWithoutProductOrderInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductOrderInput, OrderUpdateWithoutProductOrderInput>, OrderUncheckedUpdateWithoutProductOrderInput>
  }

  export type ProductOrderRefundUpdateManyWithoutProductOrderNestedInput = {
    create?: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput> | ProductOrderRefundCreateWithoutProductOrderInput[] | ProductOrderRefundUncheckedCreateWithoutProductOrderInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutProductOrderInput | ProductOrderRefundCreateOrConnectWithoutProductOrderInput[]
    upsert?: ProductOrderRefundUpsertWithWhereUniqueWithoutProductOrderInput | ProductOrderRefundUpsertWithWhereUniqueWithoutProductOrderInput[]
    createMany?: ProductOrderRefundCreateManyProductOrderInputEnvelope
    set?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    disconnect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    delete?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    update?: ProductOrderRefundUpdateWithWhereUniqueWithoutProductOrderInput | ProductOrderRefundUpdateWithWhereUniqueWithoutProductOrderInput[]
    updateMany?: ProductOrderRefundUpdateManyWithWhereWithoutProductOrderInput | ProductOrderRefundUpdateManyWithWhereWithoutProductOrderInput[]
    deleteMany?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
  }

  export type ProductOrderRefundUncheckedUpdateManyWithoutProductOrderNestedInput = {
    create?: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput> | ProductOrderRefundCreateWithoutProductOrderInput[] | ProductOrderRefundUncheckedCreateWithoutProductOrderInput[]
    connectOrCreate?: ProductOrderRefundCreateOrConnectWithoutProductOrderInput | ProductOrderRefundCreateOrConnectWithoutProductOrderInput[]
    upsert?: ProductOrderRefundUpsertWithWhereUniqueWithoutProductOrderInput | ProductOrderRefundUpsertWithWhereUniqueWithoutProductOrderInput[]
    createMany?: ProductOrderRefundCreateManyProductOrderInputEnvelope
    set?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    disconnect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    delete?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    connect?: ProductOrderRefundWhereUniqueInput | ProductOrderRefundWhereUniqueInput[]
    update?: ProductOrderRefundUpdateWithWhereUniqueWithoutProductOrderInput | ProductOrderRefundUpdateWithWhereUniqueWithoutProductOrderInput[]
    updateMany?: ProductOrderRefundUpdateManyWithWhereWithoutProductOrderInput | ProductOrderRefundUpdateManyWithWhereWithoutProductOrderInput[]
    deleteMany?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
  }

  export type OrderRefundCreateNestedOneWithoutProductOrderRefundInput = {
    create?: XOR<OrderRefundCreateWithoutProductOrderRefundInput, OrderRefundUncheckedCreateWithoutProductOrderRefundInput>
    connectOrCreate?: OrderRefundCreateOrConnectWithoutProductOrderRefundInput
    connect?: OrderRefundWhereUniqueInput
  }

  export type ProductOrderCreateNestedOneWithoutProductOrderRefundInput = {
    create?: XOR<ProductOrderCreateWithoutProductOrderRefundInput, ProductOrderUncheckedCreateWithoutProductOrderRefundInput>
    connectOrCreate?: ProductOrderCreateOrConnectWithoutProductOrderRefundInput
    connect?: ProductOrderWhereUniqueInput
  }

  export type OrderRefundUpdateOneRequiredWithoutProductOrderRefundNestedInput = {
    create?: XOR<OrderRefundCreateWithoutProductOrderRefundInput, OrderRefundUncheckedCreateWithoutProductOrderRefundInput>
    connectOrCreate?: OrderRefundCreateOrConnectWithoutProductOrderRefundInput
    upsert?: OrderRefundUpsertWithoutProductOrderRefundInput
    connect?: OrderRefundWhereUniqueInput
    update?: XOR<XOR<OrderRefundUpdateToOneWithWhereWithoutProductOrderRefundInput, OrderRefundUpdateWithoutProductOrderRefundInput>, OrderRefundUncheckedUpdateWithoutProductOrderRefundInput>
  }

  export type ProductOrderUpdateOneRequiredWithoutProductOrderRefundNestedInput = {
    create?: XOR<ProductOrderCreateWithoutProductOrderRefundInput, ProductOrderUncheckedCreateWithoutProductOrderRefundInput>
    connectOrCreate?: ProductOrderCreateOrConnectWithoutProductOrderRefundInput
    upsert?: ProductOrderUpsertWithoutProductOrderRefundInput
    connect?: ProductOrderWhereUniqueInput
    update?: XOR<XOR<ProductOrderUpdateToOneWithWhereWithoutProductOrderRefundInput, ProductOrderUpdateWithoutProductOrderRefundInput>, ProductOrderUncheckedUpdateWithoutProductOrderRefundInput>
  }

  export type OrderRefundCreateNestedOneWithoutRefundMaterialInput = {
    create?: XOR<OrderRefundCreateWithoutRefundMaterialInput, OrderRefundUncheckedCreateWithoutRefundMaterialInput>
    connectOrCreate?: OrderRefundCreateOrConnectWithoutRefundMaterialInput
    connect?: OrderRefundWhereUniqueInput
  }

  export type OrderRefundUpdateOneRequiredWithoutRefundMaterialNestedInput = {
    create?: XOR<OrderRefundCreateWithoutRefundMaterialInput, OrderRefundUncheckedCreateWithoutRefundMaterialInput>
    connectOrCreate?: OrderRefundCreateOrConnectWithoutRefundMaterialInput
    upsert?: OrderRefundUpsertWithoutRefundMaterialInput
    connect?: OrderRefundWhereUniqueInput
    update?: XOR<XOR<OrderRefundUpdateToOneWithWhereWithoutRefundMaterialInput, OrderRefundUpdateWithoutRefundMaterialInput>, OrderRefundUncheckedUpdateWithoutRefundMaterialInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrderFlowCreateWithoutOrderInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderRefundId?: string | null
  }

  export type OrderFlowUncheckedCreateWithoutOrderInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderRefundId?: string | null
  }

  export type OrderFlowCreateOrConnectWithoutOrderInput = {
    where: OrderFlowWhereUniqueInput
    create: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput>
  }

  export type OrderFlowCreateManyOrderInputEnvelope = {
    data: OrderFlowCreateManyOrderInput | OrderFlowCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderRefundCreateWithoutOrderInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductOrderRefund?: ProductOrderRefundCreateNestedManyWithoutOrderRefundInput
    RefundMaterial?: RefundMaterialCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundUncheckedCreateWithoutOrderInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedCreateNestedManyWithoutOrderRefundInput
    RefundMaterial?: RefundMaterialUncheckedCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundCreateOrConnectWithoutOrderInput = {
    where: OrderRefundWhereUniqueInput
    create: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput>
  }

  export type OrderRefundCreateManyOrderInputEnvelope = {
    data: OrderRefundCreateManyOrderInput | OrderRefundCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderShippingCreateWithoutOrderInput = {
    id: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
  }

  export type OrderShippingUncheckedCreateWithoutOrderInput = {
    id: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
  }

  export type OrderShippingCreateOrConnectWithoutOrderInput = {
    where: OrderShippingWhereUniqueInput
    create: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput>
  }

  export type OrderShippingCreateManyOrderInputEnvelope = {
    data: OrderShippingCreateManyOrderInput | OrderShippingCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderVoucherCreateWithoutOrderInput = {
    id: string
    voucherId: string
    createdAt: Date | string
  }

  export type OrderVoucherUncheckedCreateWithoutOrderInput = {
    id: string
    voucherId: string
    createdAt: Date | string
  }

  export type OrderVoucherCreateOrConnectWithoutOrderInput = {
    where: OrderVoucherWhereUniqueInput
    create: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput>
  }

  export type OrderVoucherCreateManyOrderInputEnvelope = {
    data: OrderVoucherCreateManyOrderInput | OrderVoucherCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProductOrderCreateWithoutOrderInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    ProductOrderRefund?: ProductOrderRefundCreateNestedManyWithoutProductOrderInput
  }

  export type ProductOrderUncheckedCreateWithoutOrderInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    ProductOrderRefund?: ProductOrderRefundUncheckedCreateNestedManyWithoutProductOrderInput
  }

  export type ProductOrderCreateOrConnectWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    create: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOrderCreateManyOrderInputEnvelope = {
    data: ProductOrderCreateManyOrderInput | ProductOrderCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderFlowUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderFlowWhereUniqueInput
    update: XOR<OrderFlowUpdateWithoutOrderInput, OrderFlowUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderFlowCreateWithoutOrderInput, OrderFlowUncheckedCreateWithoutOrderInput>
  }

  export type OrderFlowUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderFlowWhereUniqueInput
    data: XOR<OrderFlowUpdateWithoutOrderInput, OrderFlowUncheckedUpdateWithoutOrderInput>
  }

  export type OrderFlowUpdateManyWithWhereWithoutOrderInput = {
    where: OrderFlowScalarWhereInput
    data: XOR<OrderFlowUpdateManyMutationInput, OrderFlowUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderFlowScalarWhereInput = {
    AND?: OrderFlowScalarWhereInput | OrderFlowScalarWhereInput[]
    OR?: OrderFlowScalarWhereInput[]
    NOT?: OrderFlowScalarWhereInput | OrderFlowScalarWhereInput[]
    id?: StringFilter<"OrderFlow"> | string
    status?: StringFilter<"OrderFlow"> | string
    note?: StringNullableFilter<"OrderFlow"> | string | null
    createdBy?: StringFilter<"OrderFlow"> | string
    createdAt?: DateTimeNullableFilter<"OrderFlow"> | Date | string | null
    orderId?: StringFilter<"OrderFlow"> | string
    orderRefundId?: StringNullableFilter<"OrderFlow"> | string | null
  }

  export type OrderRefundUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderRefundWhereUniqueInput
    update: XOR<OrderRefundUpdateWithoutOrderInput, OrderRefundUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderRefundCreateWithoutOrderInput, OrderRefundUncheckedCreateWithoutOrderInput>
  }

  export type OrderRefundUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderRefundWhereUniqueInput
    data: XOR<OrderRefundUpdateWithoutOrderInput, OrderRefundUncheckedUpdateWithoutOrderInput>
  }

  export type OrderRefundUpdateManyWithWhereWithoutOrderInput = {
    where: OrderRefundScalarWhereInput
    data: XOR<OrderRefundUpdateManyMutationInput, OrderRefundUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderRefundScalarWhereInput = {
    AND?: OrderRefundScalarWhereInput | OrderRefundScalarWhereInput[]
    OR?: OrderRefundScalarWhereInput[]
    NOT?: OrderRefundScalarWhereInput | OrderRefundScalarWhereInput[]
    id?: StringFilter<"OrderRefund"> | string
    orderId?: StringFilter<"OrderRefund"> | string
    status?: StringFilter<"OrderRefund"> | string
    title?: StringFilter<"OrderRefund"> | string
    description?: StringFilter<"OrderRefund"> | string
    createdAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    createdBy?: StringFilter<"OrderRefund"> | string
    updatedAt?: DateTimeNullableFilter<"OrderRefund"> | Date | string | null
    updatedBy?: StringNullableFilter<"OrderRefund"> | string | null
  }

  export type OrderShippingUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderShippingWhereUniqueInput
    update: XOR<OrderShippingUpdateWithoutOrderInput, OrderShippingUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderShippingCreateWithoutOrderInput, OrderShippingUncheckedCreateWithoutOrderInput>
  }

  export type OrderShippingUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderShippingWhereUniqueInput
    data: XOR<OrderShippingUpdateWithoutOrderInput, OrderShippingUncheckedUpdateWithoutOrderInput>
  }

  export type OrderShippingUpdateManyWithWhereWithoutOrderInput = {
    where: OrderShippingScalarWhereInput
    data: XOR<OrderShippingUpdateManyMutationInput, OrderShippingUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderShippingScalarWhereInput = {
    AND?: OrderShippingScalarWhereInput | OrderShippingScalarWhereInput[]
    OR?: OrderShippingScalarWhereInput[]
    NOT?: OrderShippingScalarWhereInput | OrderShippingScalarWhereInput[]
    id?: StringFilter<"OrderShipping"> | string
    orderId?: StringFilter<"OrderShipping"> | string
    name?: StringFilter<"OrderShipping"> | string
    address?: StringFilter<"OrderShipping"> | string
    type?: StringFilter<"OrderShipping"> | string
    createdAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
    createdBy?: StringFilter<"OrderShipping"> | string
    updatedAt?: DateTimeNullableFilter<"OrderShipping"> | Date | string | null
  }

  export type OrderVoucherUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderVoucherWhereUniqueInput
    update: XOR<OrderVoucherUpdateWithoutOrderInput, OrderVoucherUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderVoucherCreateWithoutOrderInput, OrderVoucherUncheckedCreateWithoutOrderInput>
  }

  export type OrderVoucherUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderVoucherWhereUniqueInput
    data: XOR<OrderVoucherUpdateWithoutOrderInput, OrderVoucherUncheckedUpdateWithoutOrderInput>
  }

  export type OrderVoucherUpdateManyWithWhereWithoutOrderInput = {
    where: OrderVoucherScalarWhereInput
    data: XOR<OrderVoucherUpdateManyMutationInput, OrderVoucherUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderVoucherScalarWhereInput = {
    AND?: OrderVoucherScalarWhereInput | OrderVoucherScalarWhereInput[]
    OR?: OrderVoucherScalarWhereInput[]
    NOT?: OrderVoucherScalarWhereInput | OrderVoucherScalarWhereInput[]
    id?: StringFilter<"OrderVoucher"> | string
    orderId?: StringFilter<"OrderVoucher"> | string
    voucherId?: StringFilter<"OrderVoucher"> | string
    createdAt?: DateTimeFilter<"OrderVoucher"> | Date | string
  }

  export type ProductOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    update: XOR<ProductOrderUpdateWithoutOrderInput, ProductOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    data: XOR<ProductOrderUpdateWithoutOrderInput, ProductOrderUncheckedUpdateWithoutOrderInput>
  }

  export type ProductOrderUpdateManyWithWhereWithoutOrderInput = {
    where: ProductOrderScalarWhereInput
    data: XOR<ProductOrderUpdateManyMutationInput, ProductOrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProductOrderScalarWhereInput = {
    AND?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
    OR?: ProductOrderScalarWhereInput[]
    NOT?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
    id?: StringFilter<"ProductOrder"> | string
    productId?: StringFilter<"ProductOrder"> | string
    quantity?: IntFilter<"ProductOrder"> | number
    priceBefore?: FloatNullableFilter<"ProductOrder"> | number | null
    priceAfter?: FloatFilter<"ProductOrder"> | number
    orderId?: StringFilter<"ProductOrder"> | string
  }

  export type OrderCreateWithoutOrderFlowInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderRefund?: OrderRefundCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderFlowInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderRefund?: OrderRefundUncheckedCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingUncheckedCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherUncheckedCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderFlowInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderFlowInput, OrderUncheckedCreateWithoutOrderFlowInput>
  }

  export type OrderUpsertWithoutOrderFlowInput = {
    update: XOR<OrderUpdateWithoutOrderFlowInput, OrderUncheckedUpdateWithoutOrderFlowInput>
    create: XOR<OrderCreateWithoutOrderFlowInput, OrderUncheckedCreateWithoutOrderFlowInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderFlowInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderFlowInput, OrderUncheckedUpdateWithoutOrderFlowInput>
  }

  export type OrderUpdateWithoutOrderFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderRefund?: OrderRefundUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderRefund?: OrderRefundUncheckedUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUncheckedUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutOrderRefundInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderRefundInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowUncheckedCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingUncheckedCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherUncheckedCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderRefundInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderRefundInput, OrderUncheckedCreateWithoutOrderRefundInput>
  }

  export type ProductOrderRefundCreateWithoutOrderRefundInput = {
    id: string
    quantity: number
    description?: string | null
    ProductOrder: ProductOrderCreateNestedOneWithoutProductOrderRefundInput
  }

  export type ProductOrderRefundUncheckedCreateWithoutOrderRefundInput = {
    id: string
    productOrderId: string
    quantity: number
    description?: string | null
  }

  export type ProductOrderRefundCreateOrConnectWithoutOrderRefundInput = {
    where: ProductOrderRefundWhereUniqueInput
    create: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput>
  }

  export type ProductOrderRefundCreateManyOrderRefundInputEnvelope = {
    data: ProductOrderRefundCreateManyOrderRefundInput | ProductOrderRefundCreateManyOrderRefundInput[]
    skipDuplicates?: boolean
  }

  export type RefundMaterialCreateWithoutOrderRefundInput = {
    id: string
    url: string
    type: string
    description?: string | null
  }

  export type RefundMaterialUncheckedCreateWithoutOrderRefundInput = {
    id: string
    url: string
    type: string
    description?: string | null
  }

  export type RefundMaterialCreateOrConnectWithoutOrderRefundInput = {
    where: RefundMaterialWhereUniqueInput
    create: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput>
  }

  export type RefundMaterialCreateManyOrderRefundInputEnvelope = {
    data: RefundMaterialCreateManyOrderRefundInput | RefundMaterialCreateManyOrderRefundInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderRefundInput = {
    update: XOR<OrderUpdateWithoutOrderRefundInput, OrderUncheckedUpdateWithoutOrderRefundInput>
    create: XOR<OrderCreateWithoutOrderRefundInput, OrderUncheckedCreateWithoutOrderRefundInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderRefundInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderRefundInput, OrderUncheckedUpdateWithoutOrderRefundInput>
  }

  export type OrderUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUncheckedUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUncheckedUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductOrderRefundUpsertWithWhereUniqueWithoutOrderRefundInput = {
    where: ProductOrderRefundWhereUniqueInput
    update: XOR<ProductOrderRefundUpdateWithoutOrderRefundInput, ProductOrderRefundUncheckedUpdateWithoutOrderRefundInput>
    create: XOR<ProductOrderRefundCreateWithoutOrderRefundInput, ProductOrderRefundUncheckedCreateWithoutOrderRefundInput>
  }

  export type ProductOrderRefundUpdateWithWhereUniqueWithoutOrderRefundInput = {
    where: ProductOrderRefundWhereUniqueInput
    data: XOR<ProductOrderRefundUpdateWithoutOrderRefundInput, ProductOrderRefundUncheckedUpdateWithoutOrderRefundInput>
  }

  export type ProductOrderRefundUpdateManyWithWhereWithoutOrderRefundInput = {
    where: ProductOrderRefundScalarWhereInput
    data: XOR<ProductOrderRefundUpdateManyMutationInput, ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundInput>
  }

  export type ProductOrderRefundScalarWhereInput = {
    AND?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
    OR?: ProductOrderRefundScalarWhereInput[]
    NOT?: ProductOrderRefundScalarWhereInput | ProductOrderRefundScalarWhereInput[]
    id?: StringFilter<"ProductOrderRefund"> | string
    orderRefundId?: StringFilter<"ProductOrderRefund"> | string
    productOrderId?: StringFilter<"ProductOrderRefund"> | string
    quantity?: IntFilter<"ProductOrderRefund"> | number
    description?: StringNullableFilter<"ProductOrderRefund"> | string | null
  }

  export type RefundMaterialUpsertWithWhereUniqueWithoutOrderRefundInput = {
    where: RefundMaterialWhereUniqueInput
    update: XOR<RefundMaterialUpdateWithoutOrderRefundInput, RefundMaterialUncheckedUpdateWithoutOrderRefundInput>
    create: XOR<RefundMaterialCreateWithoutOrderRefundInput, RefundMaterialUncheckedCreateWithoutOrderRefundInput>
  }

  export type RefundMaterialUpdateWithWhereUniqueWithoutOrderRefundInput = {
    where: RefundMaterialWhereUniqueInput
    data: XOR<RefundMaterialUpdateWithoutOrderRefundInput, RefundMaterialUncheckedUpdateWithoutOrderRefundInput>
  }

  export type RefundMaterialUpdateManyWithWhereWithoutOrderRefundInput = {
    where: RefundMaterialScalarWhereInput
    data: XOR<RefundMaterialUpdateManyMutationInput, RefundMaterialUncheckedUpdateManyWithoutOrderRefundInput>
  }

  export type RefundMaterialScalarWhereInput = {
    AND?: RefundMaterialScalarWhereInput | RefundMaterialScalarWhereInput[]
    OR?: RefundMaterialScalarWhereInput[]
    NOT?: RefundMaterialScalarWhereInput | RefundMaterialScalarWhereInput[]
    id?: StringFilter<"RefundMaterial"> | string
    orderRefundId?: StringFilter<"RefundMaterial"> | string
    url?: StringFilter<"RefundMaterial"> | string
    type?: StringFilter<"RefundMaterial"> | string
    description?: StringNullableFilter<"RefundMaterial"> | string | null
  }

  export type OrderCreateWithoutOrderShippingInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderShippingInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowUncheckedCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundUncheckedCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherUncheckedCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderShippingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderShippingInput, OrderUncheckedCreateWithoutOrderShippingInput>
  }

  export type OrderUpsertWithoutOrderShippingInput = {
    update: XOR<OrderUpdateWithoutOrderShippingInput, OrderUncheckedUpdateWithoutOrderShippingInput>
    create: XOR<OrderCreateWithoutOrderShippingInput, OrderUncheckedCreateWithoutOrderShippingInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderShippingInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderShippingInput, OrderUncheckedUpdateWithoutOrderShippingInput>
  }

  export type OrderUpdateWithoutOrderShippingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderShippingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUncheckedUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUncheckedUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutOrderVoucherInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderVoucherInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowUncheckedCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundUncheckedCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingUncheckedCreateNestedManyWithoutOrderInput
    ProductOrder?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderVoucherInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderVoucherInput, OrderUncheckedCreateWithoutOrderVoucherInput>
  }

  export type OrderUpsertWithoutOrderVoucherInput = {
    update: XOR<OrderUpdateWithoutOrderVoucherInput, OrderUncheckedUpdateWithoutOrderVoucherInput>
    create: XOR<OrderCreateWithoutOrderVoucherInput, OrderUncheckedCreateWithoutOrderVoucherInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderVoucherInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderVoucherInput, OrderUncheckedUpdateWithoutOrderVoucherInput>
  }

  export type OrderUpdateWithoutOrderVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUncheckedUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUncheckedUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUncheckedUpdateManyWithoutOrderNestedInput
    ProductOrder?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutProductOrderInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductOrderInput = {
    id: string
    userId: string
    storeId: string
    total: number
    discount?: number | null
    pay: number
    note?: string | null
    isRated?: boolean | null
    status: string
    createdAt: Date | string
    updatedAt?: Date | string | null
    numberOfRefund?: number | null
    isDraf?: boolean | null
    complainId?: string | null
    payment?: string | null
    OrderFlow?: OrderFlowUncheckedCreateNestedManyWithoutOrderInput
    OrderRefund?: OrderRefundUncheckedCreateNestedManyWithoutOrderInput
    OrderShipping?: OrderShippingUncheckedCreateNestedManyWithoutOrderInput
    OrderVoucher?: OrderVoucherUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProductOrderInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductOrderInput, OrderUncheckedCreateWithoutProductOrderInput>
  }

  export type ProductOrderRefundCreateWithoutProductOrderInput = {
    id: string
    quantity: number
    description?: string | null
    OrderRefund: OrderRefundCreateNestedOneWithoutProductOrderRefundInput
  }

  export type ProductOrderRefundUncheckedCreateWithoutProductOrderInput = {
    id: string
    orderRefundId: string
    quantity: number
    description?: string | null
  }

  export type ProductOrderRefundCreateOrConnectWithoutProductOrderInput = {
    where: ProductOrderRefundWhereUniqueInput
    create: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput>
  }

  export type ProductOrderRefundCreateManyProductOrderInputEnvelope = {
    data: ProductOrderRefundCreateManyProductOrderInput | ProductOrderRefundCreateManyProductOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutProductOrderInput = {
    update: XOR<OrderUpdateWithoutProductOrderInput, OrderUncheckedUpdateWithoutProductOrderInput>
    create: XOR<OrderCreateWithoutProductOrderInput, OrderUncheckedCreateWithoutProductOrderInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductOrderInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductOrderInput, OrderUncheckedUpdateWithoutProductOrderInput>
  }

  export type OrderUpdateWithoutProductOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    pay?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isRated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfRefund?: NullableIntFieldUpdateOperationsInput | number | null
    isDraf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    complainId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    OrderFlow?: OrderFlowUncheckedUpdateManyWithoutOrderNestedInput
    OrderRefund?: OrderRefundUncheckedUpdateManyWithoutOrderNestedInput
    OrderShipping?: OrderShippingUncheckedUpdateManyWithoutOrderNestedInput
    OrderVoucher?: OrderVoucherUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductOrderRefundUpsertWithWhereUniqueWithoutProductOrderInput = {
    where: ProductOrderRefundWhereUniqueInput
    update: XOR<ProductOrderRefundUpdateWithoutProductOrderInput, ProductOrderRefundUncheckedUpdateWithoutProductOrderInput>
    create: XOR<ProductOrderRefundCreateWithoutProductOrderInput, ProductOrderRefundUncheckedCreateWithoutProductOrderInput>
  }

  export type ProductOrderRefundUpdateWithWhereUniqueWithoutProductOrderInput = {
    where: ProductOrderRefundWhereUniqueInput
    data: XOR<ProductOrderRefundUpdateWithoutProductOrderInput, ProductOrderRefundUncheckedUpdateWithoutProductOrderInput>
  }

  export type ProductOrderRefundUpdateManyWithWhereWithoutProductOrderInput = {
    where: ProductOrderRefundScalarWhereInput
    data: XOR<ProductOrderRefundUpdateManyMutationInput, ProductOrderRefundUncheckedUpdateManyWithoutProductOrderInput>
  }

  export type OrderRefundCreateWithoutProductOrderRefundInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Order: OrderCreateNestedOneWithoutOrderRefundInput
    RefundMaterial?: RefundMaterialCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundUncheckedCreateWithoutProductOrderRefundInput = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    RefundMaterial?: RefundMaterialUncheckedCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundCreateOrConnectWithoutProductOrderRefundInput = {
    where: OrderRefundWhereUniqueInput
    create: XOR<OrderRefundCreateWithoutProductOrderRefundInput, OrderRefundUncheckedCreateWithoutProductOrderRefundInput>
  }

  export type ProductOrderCreateWithoutProductOrderRefundInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    Order: OrderCreateNestedOneWithoutProductOrderInput
  }

  export type ProductOrderUncheckedCreateWithoutProductOrderRefundInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
    orderId: string
  }

  export type ProductOrderCreateOrConnectWithoutProductOrderRefundInput = {
    where: ProductOrderWhereUniqueInput
    create: XOR<ProductOrderCreateWithoutProductOrderRefundInput, ProductOrderUncheckedCreateWithoutProductOrderRefundInput>
  }

  export type OrderRefundUpsertWithoutProductOrderRefundInput = {
    update: XOR<OrderRefundUpdateWithoutProductOrderRefundInput, OrderRefundUncheckedUpdateWithoutProductOrderRefundInput>
    create: XOR<OrderRefundCreateWithoutProductOrderRefundInput, OrderRefundUncheckedCreateWithoutProductOrderRefundInput>
    where?: OrderRefundWhereInput
  }

  export type OrderRefundUpdateToOneWithWhereWithoutProductOrderRefundInput = {
    where?: OrderRefundWhereInput
    data: XOR<OrderRefundUpdateWithoutProductOrderRefundInput, OrderRefundUncheckedUpdateWithoutProductOrderRefundInput>
  }

  export type OrderRefundUpdateWithoutProductOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Order?: OrderUpdateOneRequiredWithoutOrderRefundNestedInput
    RefundMaterial?: RefundMaterialUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundUncheckedUpdateWithoutProductOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    RefundMaterial?: RefundMaterialUncheckedUpdateManyWithoutOrderRefundNestedInput
  }

  export type ProductOrderUpsertWithoutProductOrderRefundInput = {
    update: XOR<ProductOrderUpdateWithoutProductOrderRefundInput, ProductOrderUncheckedUpdateWithoutProductOrderRefundInput>
    create: XOR<ProductOrderCreateWithoutProductOrderRefundInput, ProductOrderUncheckedCreateWithoutProductOrderRefundInput>
    where?: ProductOrderWhereInput
  }

  export type ProductOrderUpdateToOneWithWhereWithoutProductOrderRefundInput = {
    where?: ProductOrderWhereInput
    data: XOR<ProductOrderUpdateWithoutProductOrderRefundInput, ProductOrderUncheckedUpdateWithoutProductOrderRefundInput>
  }

  export type ProductOrderUpdateWithoutProductOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutProductOrderNestedInput
  }

  export type ProductOrderUncheckedUpdateWithoutProductOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderRefundCreateWithoutRefundMaterialInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Order: OrderCreateNestedOneWithoutOrderRefundInput
    ProductOrderRefund?: ProductOrderRefundCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundUncheckedCreateWithoutRefundMaterialInput = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedCreateNestedManyWithoutOrderRefundInput
  }

  export type OrderRefundCreateOrConnectWithoutRefundMaterialInput = {
    where: OrderRefundWhereUniqueInput
    create: XOR<OrderRefundCreateWithoutRefundMaterialInput, OrderRefundUncheckedCreateWithoutRefundMaterialInput>
  }

  export type OrderRefundUpsertWithoutRefundMaterialInput = {
    update: XOR<OrderRefundUpdateWithoutRefundMaterialInput, OrderRefundUncheckedUpdateWithoutRefundMaterialInput>
    create: XOR<OrderRefundCreateWithoutRefundMaterialInput, OrderRefundUncheckedCreateWithoutRefundMaterialInput>
    where?: OrderRefundWhereInput
  }

  export type OrderRefundUpdateToOneWithWhereWithoutRefundMaterialInput = {
    where?: OrderRefundWhereInput
    data: XOR<OrderRefundUpdateWithoutRefundMaterialInput, OrderRefundUncheckedUpdateWithoutRefundMaterialInput>
  }

  export type OrderRefundUpdateWithoutRefundMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Order?: OrderUpdateOneRequiredWithoutOrderRefundNestedInput
    ProductOrderRefund?: ProductOrderRefundUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundUncheckedUpdateWithoutRefundMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderFlowCreateManyOrderInput = {
    id: string
    status: string
    note?: string | null
    createdBy: string
    createdAt?: Date | string | null
    orderRefundId?: string | null
  }

  export type OrderRefundCreateManyOrderInput = {
    id: string
    status: string
    title: string
    description: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type OrderShippingCreateManyOrderInput = {
    id: string
    name: string
    address: string
    type: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
  }

  export type OrderVoucherCreateManyOrderInput = {
    id: string
    voucherId: string
    createdAt: Date | string
  }

  export type ProductOrderCreateManyOrderInput = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number | null
    priceAfter: number
  }

  export type OrderFlowUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderFlowUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderFlowUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderRefundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRefundUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductOrderRefund?: ProductOrderRefundUpdateManyWithoutOrderRefundNestedInput
    RefundMaterial?: RefundMaterialUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductOrderRefund?: ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundNestedInput
    RefundMaterial?: RefundMaterialUncheckedUpdateManyWithoutOrderRefundNestedInput
  }

  export type OrderRefundUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderShippingUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderShippingUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderShippingUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderVoucherUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderVoucherUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderVoucherUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOrderUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    ProductOrderRefund?: ProductOrderRefundUpdateManyWithoutProductOrderNestedInput
  }

  export type ProductOrderUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    ProductOrderRefund?: ProductOrderRefundUncheckedUpdateManyWithoutProductOrderNestedInput
  }

  export type ProductOrderUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    priceBefore?: NullableFloatFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductOrderRefundCreateManyOrderRefundInput = {
    id: string
    productOrderId: string
    quantity: number
    description?: string | null
  }

  export type RefundMaterialCreateManyOrderRefundInput = {
    id: string
    url: string
    type: string
    description?: string | null
  }

  export type ProductOrderRefundUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ProductOrder?: ProductOrderUpdateOneRequiredWithoutProductOrderRefundNestedInput
  }

  export type ProductOrderRefundUncheckedUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    productOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOrderRefundUncheckedUpdateManyWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    productOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialUncheckedUpdateWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefundMaterialUncheckedUpdateManyWithoutOrderRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOrderRefundCreateManyProductOrderInput = {
    id: string
    orderRefundId: string
    quantity: number
    description?: string | null
  }

  export type ProductOrderRefundUpdateWithoutProductOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    OrderRefund?: OrderRefundUpdateOneRequiredWithoutProductOrderRefundNestedInput
  }

  export type ProductOrderRefundUncheckedUpdateWithoutProductOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductOrderRefundUncheckedUpdateManyWithoutProductOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRefundId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderRefundCountOutputTypeDefaultArgs instead
     */
    export type OrderRefundCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderRefundCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOrderCountOutputTypeDefaultArgs instead
     */
    export type ProductOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderFlowDefaultArgs instead
     */
    export type OrderFlowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderFlowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderRefundDefaultArgs instead
     */
    export type OrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderRefundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderShippingDefaultArgs instead
     */
    export type OrderShippingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderShippingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderVoucherDefaultArgs instead
     */
    export type OrderVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderVoucherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOrderDefaultArgs instead
     */
    export type ProductOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOrderRefundDefaultArgs instead
     */
    export type ProductOrderRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOrderRefundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefundMaterialDefaultArgs instead
     */
    export type RefundMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefundMaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestComplainDefaultArgs instead
     */
    export type RequestComplainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestComplainDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}