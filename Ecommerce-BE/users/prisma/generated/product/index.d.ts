
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model UserAddProductToCart
 * 
 */
export type UserAddProductToCart = $Result.DefaultSelection<Prisma.$UserAddProductToCartPayload>
/**
 * Model UserViewProduct
 * 
 */
export type UserViewProduct = $Result.DefaultSelection<Prisma.$UserViewProductPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAddProductToCart`: Exposes CRUD operations for the **UserAddProductToCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddProductToCarts
    * const userAddProductToCarts = await prisma.userAddProductToCart.findMany()
    * ```
    */
  get userAddProductToCart(): Prisma.UserAddProductToCartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userViewProduct`: Exposes CRUD operations for the **UserViewProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserViewProducts
    * const userViewProducts = await prisma.userViewProduct.findMany()
    * ```
    */
  get userViewProduct(): Prisma.UserViewProductDelegate<ExtArgs, ClientOptions>;
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
    Category: 'Category',
    Product: 'Product',
    ProductImage: 'ProductImage',
    UserAddProductToCart: 'UserAddProductToCart',
    UserViewProduct: 'UserViewProduct'
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
      modelProps: "category" | "product" | "productImage" | "userAddProductToCart" | "userViewProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      UserAddProductToCart: {
        payload: Prisma.$UserAddProductToCartPayload<ExtArgs>
        fields: Prisma.UserAddProductToCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddProductToCartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddProductToCartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          findFirst: {
            args: Prisma.UserAddProductToCartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddProductToCartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          findMany: {
            args: Prisma.UserAddProductToCartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>[]
          }
          create: {
            args: Prisma.UserAddProductToCartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          createMany: {
            args: Prisma.UserAddProductToCartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAddProductToCartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          update: {
            args: Prisma.UserAddProductToCartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          deleteMany: {
            args: Prisma.UserAddProductToCartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddProductToCartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAddProductToCartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddProductToCartPayload>
          }
          aggregate: {
            args: Prisma.UserAddProductToCartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddProductToCart>
          }
          groupBy: {
            args: Prisma.UserAddProductToCartGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddProductToCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddProductToCartCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddProductToCartCountAggregateOutputType> | number
          }
        }
      }
      UserViewProduct: {
        payload: Prisma.$UserViewProductPayload<ExtArgs>
        fields: Prisma.UserViewProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserViewProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserViewProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          findFirst: {
            args: Prisma.UserViewProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserViewProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          findMany: {
            args: Prisma.UserViewProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>[]
          }
          create: {
            args: Prisma.UserViewProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          createMany: {
            args: Prisma.UserViewProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserViewProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          update: {
            args: Prisma.UserViewProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          deleteMany: {
            args: Prisma.UserViewProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserViewProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserViewProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewProductPayload>
          }
          aggregate: {
            args: Prisma.UserViewProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserViewProduct>
          }
          groupBy: {
            args: Prisma.UserViewProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserViewProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserViewProductCountArgs<ExtArgs>
            result: $Utils.Optional<UserViewProductCountAggregateOutputType> | number
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
    category?: CategoryOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    userAddProductToCart?: UserAddProductToCartOmit
    userViewProduct?: UserViewProductOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductImage: number
    UserAddProductToCart: number
    UserViewProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductImage?: boolean | ProductCountOutputTypeCountProductImageArgs
    UserAddProductToCart?: boolean | ProductCountOutputTypeCountUserAddProductToCartArgs
    UserViewProduct?: boolean | ProductCountOutputTypeCountUserViewProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserAddProductToCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddProductToCartWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserViewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    shortname: string | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    shortname: string | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    shortname: number
    name: number
    description: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    shortname?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    shortname?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    shortname?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    shortname: string
    name: string
    description: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shortname?: boolean
    name?: boolean
    description?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>


  export type CategorySelectScalar = {
    shortname?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shortname" | "name" | "description", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      shortname: string
      name: string
      description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `shortname`
     * const categoryWithShortnameOnly = await prisma.category.findMany({ select: { shortname: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly shortname: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    priceBefore: number | null
    priceAfter: number | null
    initQuantity: number | null
    currentQuantity: number | null
    sold: number | null
    rate: number | null
  }

  export type ProductSumAggregateOutputType = {
    priceBefore: number | null
    priceAfter: number | null
    initQuantity: number | null
    currentQuantity: number | null
    sold: number | null
    rate: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    priceBefore: number | null
    priceAfter: number | null
    initQuantity: number | null
    currentQuantity: number | null
    sold: number | null
    description: string | null
    status: string | null
    category: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedBy: string | null
    deletedAt: Date | null
    storeId: string | null
    voucherId: string | null
    rate: number | null
    isDelete: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    priceBefore: number | null
    priceAfter: number | null
    initQuantity: number | null
    currentQuantity: number | null
    sold: number | null
    description: string | null
    status: string | null
    category: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedBy: string | null
    deletedAt: Date | null
    storeId: string | null
    voucherId: string | null
    rate: number | null
    isDelete: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    image: number
    priceBefore: number
    priceAfter: number
    initQuantity: number
    currentQuantity: number
    sold: number
    description: number
    status: number
    category: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedBy: number
    deletedAt: number
    storeId: number
    voucherId: number
    rate: number
    isDelete: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    priceBefore?: true
    priceAfter?: true
    initQuantity?: true
    currentQuantity?: true
    sold?: true
    rate?: true
  }

  export type ProductSumAggregateInputType = {
    priceBefore?: true
    priceAfter?: true
    initQuantity?: true
    currentQuantity?: true
    sold?: true
    rate?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    priceBefore?: true
    priceAfter?: true
    initQuantity?: true
    currentQuantity?: true
    sold?: true
    description?: true
    status?: true
    category?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    storeId?: true
    voucherId?: true
    rate?: true
    isDelete?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    priceBefore?: true
    priceAfter?: true
    initQuantity?: true
    currentQuantity?: true
    sold?: true
    description?: true
    status?: true
    category?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    storeId?: true
    voucherId?: true
    rate?: true
    isDelete?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    priceBefore?: true
    priceAfter?: true
    initQuantity?: true
    currentQuantity?: true
    sold?: true
    description?: true
    status?: true
    category?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    storeId?: true
    voucherId?: true
    rate?: true
    isDelete?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter: number | null
    initQuantity: number
    currentQuantity: number
    sold: number
    description: string | null
    status: string
    category: string | null
    createdBy: string
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedBy: string | null
    deletedAt: Date | null
    storeId: string
    voucherId: string | null
    rate: number
    isDelete: boolean | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    priceBefore?: boolean
    priceAfter?: boolean
    initQuantity?: boolean
    currentQuantity?: boolean
    sold?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    storeId?: boolean
    voucherId?: boolean
    rate?: boolean
    isDelete?: boolean
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    UserAddProductToCart?: boolean | Product$UserAddProductToCartArgs<ExtArgs>
    UserViewProduct?: boolean | Product$UserViewProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>


  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    priceBefore?: boolean
    priceAfter?: boolean
    initQuantity?: boolean
    currentQuantity?: boolean
    sold?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    storeId?: boolean
    voucherId?: boolean
    rate?: boolean
    isDelete?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "priceBefore" | "priceAfter" | "initQuantity" | "currentQuantity" | "sold" | "description" | "status" | "category" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedBy" | "deletedAt" | "storeId" | "voucherId" | "rate" | "isDelete", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    UserAddProductToCart?: boolean | Product$UserAddProductToCartArgs<ExtArgs>
    UserViewProduct?: boolean | Product$UserViewProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      ProductImage: Prisma.$ProductImagePayload<ExtArgs>[]
      UserAddProductToCart: Prisma.$UserAddProductToCartPayload<ExtArgs>[]
      UserViewProduct: Prisma.$UserViewProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      priceBefore: number
      priceAfter: number | null
      initQuantity: number
      currentQuantity: number
      sold: number
      description: string | null
      status: string
      category: string | null
      createdBy: string
      updatedBy: string | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedBy: string | null
      deletedAt: Date | null
      storeId: string
      voucherId: string | null
      rate: number
      isDelete: boolean | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends Product$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    ProductImage<T extends Product$ProductImageArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UserAddProductToCart<T extends Product$UserAddProductToCartArgs<ExtArgs> = {}>(args?: Subset<T, Product$UserAddProductToCartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UserViewProduct<T extends Product$UserViewProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$UserViewProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly priceBefore: FieldRef<"Product", 'Float'>
    readonly priceAfter: FieldRef<"Product", 'Float'>
    readonly initQuantity: FieldRef<"Product", 'Int'>
    readonly currentQuantity: FieldRef<"Product", 'Int'>
    readonly sold: FieldRef<"Product", 'Int'>
    readonly description: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly createdBy: FieldRef<"Product", 'String'>
    readonly updatedBy: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedBy: FieldRef<"Product", 'String'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
    readonly storeId: FieldRef<"Product", 'String'>
    readonly voucherId: FieldRef<"Product", 'String'>
    readonly rate: FieldRef<"Product", 'Float'>
    readonly isDelete: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.Category
   */
  export type Product$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.ProductImage
   */
  export type Product$ProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.UserAddProductToCart
   */
  export type Product$UserAddProductToCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    where?: UserAddProductToCartWhereInput
    orderBy?: UserAddProductToCartOrderByWithRelationInput | UserAddProductToCartOrderByWithRelationInput[]
    cursor?: UserAddProductToCartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAddProductToCartScalarFieldEnum | UserAddProductToCartScalarFieldEnum[]
  }

  /**
   * Product.UserViewProduct
   */
  export type Product$UserViewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    where?: UserViewProductWhereInput
    orderBy?: UserViewProductOrderByWithRelationInput | UserViewProductOrderByWithRelationInput[]
    cursor?: UserViewProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserViewProductScalarFieldEnum | UserViewProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdBy?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdBy?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    createdBy: string
    createdAt: Date | null
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>


  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "createdBy" | "createdAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      createdBy: string
      createdAt: Date | null
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the ProductImage model
   */ 
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly createdBy: FieldRef<"ProductImage", 'String'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model UserAddProductToCart
   */

  export type AggregateUserAddProductToCart = {
    _count: UserAddProductToCartCountAggregateOutputType | null
    _avg: UserAddProductToCartAvgAggregateOutputType | null
    _sum: UserAddProductToCartSumAggregateOutputType | null
    _min: UserAddProductToCartMinAggregateOutputType | null
    _max: UserAddProductToCartMaxAggregateOutputType | null
  }

  export type UserAddProductToCartAvgAggregateOutputType = {
    quantity: number | null
    isDelete: number | null
  }

  export type UserAddProductToCartSumAggregateOutputType = {
    quantity: number | null
    isDelete: number | null
  }

  export type UserAddProductToCartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDelete: number | null
  }

  export type UserAddProductToCartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDelete: number | null
  }

  export type UserAddProductToCartCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    quantity: number
    createdAt: number
    updatedAt: number
    isDelete: number
    _all: number
  }


  export type UserAddProductToCartAvgAggregateInputType = {
    quantity?: true
    isDelete?: true
  }

  export type UserAddProductToCartSumAggregateInputType = {
    quantity?: true
    isDelete?: true
  }

  export type UserAddProductToCartMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    isDelete?: true
  }

  export type UserAddProductToCartMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    isDelete?: true
  }

  export type UserAddProductToCartCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    isDelete?: true
    _all?: true
  }

  export type UserAddProductToCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddProductToCart to aggregate.
     */
    where?: UserAddProductToCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddProductToCarts to fetch.
     */
    orderBy?: UserAddProductToCartOrderByWithRelationInput | UserAddProductToCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddProductToCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddProductToCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddProductToCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddProductToCarts
    **/
    _count?: true | UserAddProductToCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAddProductToCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAddProductToCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddProductToCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddProductToCartMaxAggregateInputType
  }

  export type GetUserAddProductToCartAggregateType<T extends UserAddProductToCartAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddProductToCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddProductToCart[P]>
      : GetScalarType<T[P], AggregateUserAddProductToCart[P]>
  }




  export type UserAddProductToCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddProductToCartWhereInput
    orderBy?: UserAddProductToCartOrderByWithAggregationInput | UserAddProductToCartOrderByWithAggregationInput[]
    by: UserAddProductToCartScalarFieldEnum[] | UserAddProductToCartScalarFieldEnum
    having?: UserAddProductToCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddProductToCartCountAggregateInputType | true
    _avg?: UserAddProductToCartAvgAggregateInputType
    _sum?: UserAddProductToCartSumAggregateInputType
    _min?: UserAddProductToCartMinAggregateInputType
    _max?: UserAddProductToCartMaxAggregateInputType
  }

  export type UserAddProductToCartGroupByOutputType = {
    id: string
    userId: string | null
    productId: string
    quantity: number
    createdAt: Date
    updatedAt: Date | null
    isDelete: number | null
    _count: UserAddProductToCartCountAggregateOutputType | null
    _avg: UserAddProductToCartAvgAggregateOutputType | null
    _sum: UserAddProductToCartSumAggregateOutputType | null
    _min: UserAddProductToCartMinAggregateOutputType | null
    _max: UserAddProductToCartMaxAggregateOutputType | null
  }

  type GetUserAddProductToCartGroupByPayload<T extends UserAddProductToCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddProductToCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddProductToCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddProductToCartGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddProductToCartGroupByOutputType[P]>
        }
      >
    >


  export type UserAddProductToCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDelete?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddProductToCart"]>


  export type UserAddProductToCartSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDelete?: boolean
  }

  export type UserAddProductToCartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "quantity" | "createdAt" | "updatedAt" | "isDelete", ExtArgs["result"]["userAddProductToCart"]>
  export type UserAddProductToCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserAddProductToCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddProductToCart"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      productId: string
      quantity: number
      createdAt: Date
      updatedAt: Date | null
      isDelete: number | null
    }, ExtArgs["result"]["userAddProductToCart"]>
    composites: {}
  }

  type UserAddProductToCartGetPayload<S extends boolean | null | undefined | UserAddProductToCartDefaultArgs> = $Result.GetResult<Prisma.$UserAddProductToCartPayload, S>

  type UserAddProductToCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAddProductToCartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddProductToCartCountAggregateInputType | true
    }

  export interface UserAddProductToCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddProductToCart'], meta: { name: 'UserAddProductToCart' } }
    /**
     * Find zero or one UserAddProductToCart that matches the filter.
     * @param {UserAddProductToCartFindUniqueArgs} args - Arguments to find a UserAddProductToCart
     * @example
     * // Get one UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddProductToCartFindUniqueArgs>(args: SelectSubset<T, UserAddProductToCartFindUniqueArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserAddProductToCart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAddProductToCartFindUniqueOrThrowArgs} args - Arguments to find a UserAddProductToCart
     * @example
     * // Get one UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddProductToCartFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddProductToCartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserAddProductToCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartFindFirstArgs} args - Arguments to find a UserAddProductToCart
     * @example
     * // Get one UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddProductToCartFindFirstArgs>(args?: SelectSubset<T, UserAddProductToCartFindFirstArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserAddProductToCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartFindFirstOrThrowArgs} args - Arguments to find a UserAddProductToCart
     * @example
     * // Get one UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddProductToCartFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddProductToCartFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserAddProductToCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddProductToCarts
     * const userAddProductToCarts = await prisma.userAddProductToCart.findMany()
     * 
     * // Get first 10 UserAddProductToCarts
     * const userAddProductToCarts = await prisma.userAddProductToCart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddProductToCartWithIdOnly = await prisma.userAddProductToCart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddProductToCartFindManyArgs>(args?: SelectSubset<T, UserAddProductToCartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserAddProductToCart.
     * @param {UserAddProductToCartCreateArgs} args - Arguments to create a UserAddProductToCart.
     * @example
     * // Create one UserAddProductToCart
     * const UserAddProductToCart = await prisma.userAddProductToCart.create({
     *   data: {
     *     // ... data to create a UserAddProductToCart
     *   }
     * })
     * 
     */
    create<T extends UserAddProductToCartCreateArgs>(args: SelectSubset<T, UserAddProductToCartCreateArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserAddProductToCarts.
     * @param {UserAddProductToCartCreateManyArgs} args - Arguments to create many UserAddProductToCarts.
     * @example
     * // Create many UserAddProductToCarts
     * const userAddProductToCart = await prisma.userAddProductToCart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddProductToCartCreateManyArgs>(args?: SelectSubset<T, UserAddProductToCartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAddProductToCart.
     * @param {UserAddProductToCartDeleteArgs} args - Arguments to delete one UserAddProductToCart.
     * @example
     * // Delete one UserAddProductToCart
     * const UserAddProductToCart = await prisma.userAddProductToCart.delete({
     *   where: {
     *     // ... filter to delete one UserAddProductToCart
     *   }
     * })
     * 
     */
    delete<T extends UserAddProductToCartDeleteArgs>(args: SelectSubset<T, UserAddProductToCartDeleteArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserAddProductToCart.
     * @param {UserAddProductToCartUpdateArgs} args - Arguments to update one UserAddProductToCart.
     * @example
     * // Update one UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddProductToCartUpdateArgs>(args: SelectSubset<T, UserAddProductToCartUpdateArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserAddProductToCarts.
     * @param {UserAddProductToCartDeleteManyArgs} args - Arguments to filter UserAddProductToCarts to delete.
     * @example
     * // Delete a few UserAddProductToCarts
     * const { count } = await prisma.userAddProductToCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddProductToCartDeleteManyArgs>(args?: SelectSubset<T, UserAddProductToCartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddProductToCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddProductToCarts
     * const userAddProductToCart = await prisma.userAddProductToCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddProductToCartUpdateManyArgs>(args: SelectSubset<T, UserAddProductToCartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAddProductToCart.
     * @param {UserAddProductToCartUpsertArgs} args - Arguments to update or create a UserAddProductToCart.
     * @example
     * // Update or create a UserAddProductToCart
     * const userAddProductToCart = await prisma.userAddProductToCart.upsert({
     *   create: {
     *     // ... data to create a UserAddProductToCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddProductToCart we want to update
     *   }
     * })
     */
    upsert<T extends UserAddProductToCartUpsertArgs>(args: SelectSubset<T, UserAddProductToCartUpsertArgs<ExtArgs>>): Prisma__UserAddProductToCartClient<$Result.GetResult<Prisma.$UserAddProductToCartPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserAddProductToCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartCountArgs} args - Arguments to filter UserAddProductToCarts to count.
     * @example
     * // Count the number of UserAddProductToCarts
     * const count = await prisma.userAddProductToCart.count({
     *   where: {
     *     // ... the filter for the UserAddProductToCarts we want to count
     *   }
     * })
    **/
    count<T extends UserAddProductToCartCountArgs>(
      args?: Subset<T, UserAddProductToCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddProductToCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddProductToCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAddProductToCartAggregateArgs>(args: Subset<T, UserAddProductToCartAggregateArgs>): Prisma.PrismaPromise<GetUserAddProductToCartAggregateType<T>>

    /**
     * Group by UserAddProductToCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddProductToCartGroupByArgs} args - Group by arguments.
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
      T extends UserAddProductToCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddProductToCartGroupByArgs['orderBy'] }
        : { orderBy?: UserAddProductToCartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAddProductToCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddProductToCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddProductToCart model
   */
  readonly fields: UserAddProductToCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddProductToCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddProductToCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UserAddProductToCart model
   */ 
  interface UserAddProductToCartFieldRefs {
    readonly id: FieldRef<"UserAddProductToCart", 'String'>
    readonly userId: FieldRef<"UserAddProductToCart", 'String'>
    readonly productId: FieldRef<"UserAddProductToCart", 'String'>
    readonly quantity: FieldRef<"UserAddProductToCart", 'Int'>
    readonly createdAt: FieldRef<"UserAddProductToCart", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAddProductToCart", 'DateTime'>
    readonly isDelete: FieldRef<"UserAddProductToCart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAddProductToCart findUnique
   */
  export type UserAddProductToCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter, which UserAddProductToCart to fetch.
     */
    where: UserAddProductToCartWhereUniqueInput
  }

  /**
   * UserAddProductToCart findUniqueOrThrow
   */
  export type UserAddProductToCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter, which UserAddProductToCart to fetch.
     */
    where: UserAddProductToCartWhereUniqueInput
  }

  /**
   * UserAddProductToCart findFirst
   */
  export type UserAddProductToCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter, which UserAddProductToCart to fetch.
     */
    where?: UserAddProductToCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddProductToCarts to fetch.
     */
    orderBy?: UserAddProductToCartOrderByWithRelationInput | UserAddProductToCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddProductToCarts.
     */
    cursor?: UserAddProductToCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddProductToCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddProductToCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddProductToCarts.
     */
    distinct?: UserAddProductToCartScalarFieldEnum | UserAddProductToCartScalarFieldEnum[]
  }

  /**
   * UserAddProductToCart findFirstOrThrow
   */
  export type UserAddProductToCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter, which UserAddProductToCart to fetch.
     */
    where?: UserAddProductToCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddProductToCarts to fetch.
     */
    orderBy?: UserAddProductToCartOrderByWithRelationInput | UserAddProductToCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddProductToCarts.
     */
    cursor?: UserAddProductToCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddProductToCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddProductToCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddProductToCarts.
     */
    distinct?: UserAddProductToCartScalarFieldEnum | UserAddProductToCartScalarFieldEnum[]
  }

  /**
   * UserAddProductToCart findMany
   */
  export type UserAddProductToCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter, which UserAddProductToCarts to fetch.
     */
    where?: UserAddProductToCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddProductToCarts to fetch.
     */
    orderBy?: UserAddProductToCartOrderByWithRelationInput | UserAddProductToCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddProductToCarts.
     */
    cursor?: UserAddProductToCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddProductToCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddProductToCarts.
     */
    skip?: number
    distinct?: UserAddProductToCartScalarFieldEnum | UserAddProductToCartScalarFieldEnum[]
  }

  /**
   * UserAddProductToCart create
   */
  export type UserAddProductToCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddProductToCart.
     */
    data: XOR<UserAddProductToCartCreateInput, UserAddProductToCartUncheckedCreateInput>
  }

  /**
   * UserAddProductToCart createMany
   */
  export type UserAddProductToCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddProductToCarts.
     */
    data: UserAddProductToCartCreateManyInput | UserAddProductToCartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddProductToCart update
   */
  export type UserAddProductToCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddProductToCart.
     */
    data: XOR<UserAddProductToCartUpdateInput, UserAddProductToCartUncheckedUpdateInput>
    /**
     * Choose, which UserAddProductToCart to update.
     */
    where: UserAddProductToCartWhereUniqueInput
  }

  /**
   * UserAddProductToCart updateMany
   */
  export type UserAddProductToCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddProductToCarts.
     */
    data: XOR<UserAddProductToCartUpdateManyMutationInput, UserAddProductToCartUncheckedUpdateManyInput>
    /**
     * Filter which UserAddProductToCarts to update
     */
    where?: UserAddProductToCartWhereInput
  }

  /**
   * UserAddProductToCart upsert
   */
  export type UserAddProductToCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddProductToCart to update in case it exists.
     */
    where: UserAddProductToCartWhereUniqueInput
    /**
     * In case the UserAddProductToCart found by the `where` argument doesn't exist, create a new UserAddProductToCart with this data.
     */
    create: XOR<UserAddProductToCartCreateInput, UserAddProductToCartUncheckedCreateInput>
    /**
     * In case the UserAddProductToCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddProductToCartUpdateInput, UserAddProductToCartUncheckedUpdateInput>
  }

  /**
   * UserAddProductToCart delete
   */
  export type UserAddProductToCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
    /**
     * Filter which UserAddProductToCart to delete.
     */
    where: UserAddProductToCartWhereUniqueInput
  }

  /**
   * UserAddProductToCart deleteMany
   */
  export type UserAddProductToCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddProductToCarts to delete
     */
    where?: UserAddProductToCartWhereInput
  }

  /**
   * UserAddProductToCart without action
   */
  export type UserAddProductToCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddProductToCart
     */
    select?: UserAddProductToCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddProductToCart
     */
    omit?: UserAddProductToCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddProductToCartInclude<ExtArgs> | null
  }


  /**
   * Model UserViewProduct
   */

  export type AggregateUserViewProduct = {
    _count: UserViewProductCountAggregateOutputType | null
    _min: UserViewProductMinAggregateOutputType | null
    _max: UserViewProductMaxAggregateOutputType | null
  }

  export type UserViewProductMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    storeId: string | null
    createdAt: Date | null
  }

  export type UserViewProductMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    storeId: string | null
    createdAt: Date | null
  }

  export type UserViewProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    storeId: number
    createdAt: number
    _all: number
  }


  export type UserViewProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    storeId?: true
    createdAt?: true
  }

  export type UserViewProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    storeId?: true
    createdAt?: true
  }

  export type UserViewProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    storeId?: true
    createdAt?: true
    _all?: true
  }

  export type UserViewProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViewProduct to aggregate.
     */
    where?: UserViewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewProducts to fetch.
     */
    orderBy?: UserViewProductOrderByWithRelationInput | UserViewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserViewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserViewProducts
    **/
    _count?: true | UserViewProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserViewProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserViewProductMaxAggregateInputType
  }

  export type GetUserViewProductAggregateType<T extends UserViewProductAggregateArgs> = {
        [P in keyof T & keyof AggregateUserViewProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserViewProduct[P]>
      : GetScalarType<T[P], AggregateUserViewProduct[P]>
  }




  export type UserViewProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewProductWhereInput
    orderBy?: UserViewProductOrderByWithAggregationInput | UserViewProductOrderByWithAggregationInput[]
    by: UserViewProductScalarFieldEnum[] | UserViewProductScalarFieldEnum
    having?: UserViewProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserViewProductCountAggregateInputType | true
    _min?: UserViewProductMinAggregateInputType
    _max?: UserViewProductMaxAggregateInputType
  }

  export type UserViewProductGroupByOutputType = {
    id: string
    userId: string | null
    productId: string
    storeId: string
    createdAt: Date
    _count: UserViewProductCountAggregateOutputType | null
    _min: UserViewProductMinAggregateOutputType | null
    _max: UserViewProductMaxAggregateOutputType | null
  }

  type GetUserViewProductGroupByPayload<T extends UserViewProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserViewProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserViewProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserViewProductGroupByOutputType[P]>
            : GetScalarType<T[P], UserViewProductGroupByOutputType[P]>
        }
      >
    >


  export type UserViewProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    storeId?: boolean
    createdAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userViewProduct"]>


  export type UserViewProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    storeId?: boolean
    createdAt?: boolean
  }

  export type UserViewProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "storeId" | "createdAt", ExtArgs["result"]["userViewProduct"]>
  export type UserViewProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserViewProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserViewProduct"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      productId: string
      storeId: string
      createdAt: Date
    }, ExtArgs["result"]["userViewProduct"]>
    composites: {}
  }

  type UserViewProductGetPayload<S extends boolean | null | undefined | UserViewProductDefaultArgs> = $Result.GetResult<Prisma.$UserViewProductPayload, S>

  type UserViewProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserViewProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserViewProductCountAggregateInputType | true
    }

  export interface UserViewProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserViewProduct'], meta: { name: 'UserViewProduct' } }
    /**
     * Find zero or one UserViewProduct that matches the filter.
     * @param {UserViewProductFindUniqueArgs} args - Arguments to find a UserViewProduct
     * @example
     * // Get one UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserViewProductFindUniqueArgs>(args: SelectSubset<T, UserViewProductFindUniqueArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserViewProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserViewProductFindUniqueOrThrowArgs} args - Arguments to find a UserViewProduct
     * @example
     * // Get one UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserViewProductFindUniqueOrThrowArgs>(args: SelectSubset<T, UserViewProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserViewProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductFindFirstArgs} args - Arguments to find a UserViewProduct
     * @example
     * // Get one UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserViewProductFindFirstArgs>(args?: SelectSubset<T, UserViewProductFindFirstArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserViewProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductFindFirstOrThrowArgs} args - Arguments to find a UserViewProduct
     * @example
     * // Get one UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserViewProductFindFirstOrThrowArgs>(args?: SelectSubset<T, UserViewProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserViewProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserViewProducts
     * const userViewProducts = await prisma.userViewProduct.findMany()
     * 
     * // Get first 10 UserViewProducts
     * const userViewProducts = await prisma.userViewProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userViewProductWithIdOnly = await prisma.userViewProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserViewProductFindManyArgs>(args?: SelectSubset<T, UserViewProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserViewProduct.
     * @param {UserViewProductCreateArgs} args - Arguments to create a UserViewProduct.
     * @example
     * // Create one UserViewProduct
     * const UserViewProduct = await prisma.userViewProduct.create({
     *   data: {
     *     // ... data to create a UserViewProduct
     *   }
     * })
     * 
     */
    create<T extends UserViewProductCreateArgs>(args: SelectSubset<T, UserViewProductCreateArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserViewProducts.
     * @param {UserViewProductCreateManyArgs} args - Arguments to create many UserViewProducts.
     * @example
     * // Create many UserViewProducts
     * const userViewProduct = await prisma.userViewProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserViewProductCreateManyArgs>(args?: SelectSubset<T, UserViewProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserViewProduct.
     * @param {UserViewProductDeleteArgs} args - Arguments to delete one UserViewProduct.
     * @example
     * // Delete one UserViewProduct
     * const UserViewProduct = await prisma.userViewProduct.delete({
     *   where: {
     *     // ... filter to delete one UserViewProduct
     *   }
     * })
     * 
     */
    delete<T extends UserViewProductDeleteArgs>(args: SelectSubset<T, UserViewProductDeleteArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserViewProduct.
     * @param {UserViewProductUpdateArgs} args - Arguments to update one UserViewProduct.
     * @example
     * // Update one UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserViewProductUpdateArgs>(args: SelectSubset<T, UserViewProductUpdateArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserViewProducts.
     * @param {UserViewProductDeleteManyArgs} args - Arguments to filter UserViewProducts to delete.
     * @example
     * // Delete a few UserViewProducts
     * const { count } = await prisma.userViewProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserViewProductDeleteManyArgs>(args?: SelectSubset<T, UserViewProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViewProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserViewProducts
     * const userViewProduct = await prisma.userViewProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserViewProductUpdateManyArgs>(args: SelectSubset<T, UserViewProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserViewProduct.
     * @param {UserViewProductUpsertArgs} args - Arguments to update or create a UserViewProduct.
     * @example
     * // Update or create a UserViewProduct
     * const userViewProduct = await prisma.userViewProduct.upsert({
     *   create: {
     *     // ... data to create a UserViewProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserViewProduct we want to update
     *   }
     * })
     */
    upsert<T extends UserViewProductUpsertArgs>(args: SelectSubset<T, UserViewProductUpsertArgs<ExtArgs>>): Prisma__UserViewProductClient<$Result.GetResult<Prisma.$UserViewProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserViewProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductCountArgs} args - Arguments to filter UserViewProducts to count.
     * @example
     * // Count the number of UserViewProducts
     * const count = await prisma.userViewProduct.count({
     *   where: {
     *     // ... the filter for the UserViewProducts we want to count
     *   }
     * })
    **/
    count<T extends UserViewProductCountArgs>(
      args?: Subset<T, UserViewProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserViewProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserViewProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserViewProductAggregateArgs>(args: Subset<T, UserViewProductAggregateArgs>): Prisma.PrismaPromise<GetUserViewProductAggregateType<T>>

    /**
     * Group by UserViewProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewProductGroupByArgs} args - Group by arguments.
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
      T extends UserViewProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserViewProductGroupByArgs['orderBy'] }
        : { orderBy?: UserViewProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserViewProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserViewProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserViewProduct model
   */
  readonly fields: UserViewProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserViewProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserViewProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UserViewProduct model
   */ 
  interface UserViewProductFieldRefs {
    readonly id: FieldRef<"UserViewProduct", 'String'>
    readonly userId: FieldRef<"UserViewProduct", 'String'>
    readonly productId: FieldRef<"UserViewProduct", 'String'>
    readonly storeId: FieldRef<"UserViewProduct", 'String'>
    readonly createdAt: FieldRef<"UserViewProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserViewProduct findUnique
   */
  export type UserViewProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter, which UserViewProduct to fetch.
     */
    where: UserViewProductWhereUniqueInput
  }

  /**
   * UserViewProduct findUniqueOrThrow
   */
  export type UserViewProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter, which UserViewProduct to fetch.
     */
    where: UserViewProductWhereUniqueInput
  }

  /**
   * UserViewProduct findFirst
   */
  export type UserViewProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter, which UserViewProduct to fetch.
     */
    where?: UserViewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewProducts to fetch.
     */
    orderBy?: UserViewProductOrderByWithRelationInput | UserViewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViewProducts.
     */
    cursor?: UserViewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViewProducts.
     */
    distinct?: UserViewProductScalarFieldEnum | UserViewProductScalarFieldEnum[]
  }

  /**
   * UserViewProduct findFirstOrThrow
   */
  export type UserViewProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter, which UserViewProduct to fetch.
     */
    where?: UserViewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewProducts to fetch.
     */
    orderBy?: UserViewProductOrderByWithRelationInput | UserViewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViewProducts.
     */
    cursor?: UserViewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViewProducts.
     */
    distinct?: UserViewProductScalarFieldEnum | UserViewProductScalarFieldEnum[]
  }

  /**
   * UserViewProduct findMany
   */
  export type UserViewProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter, which UserViewProducts to fetch.
     */
    where?: UserViewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewProducts to fetch.
     */
    orderBy?: UserViewProductOrderByWithRelationInput | UserViewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserViewProducts.
     */
    cursor?: UserViewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewProducts.
     */
    skip?: number
    distinct?: UserViewProductScalarFieldEnum | UserViewProductScalarFieldEnum[]
  }

  /**
   * UserViewProduct create
   */
  export type UserViewProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * The data needed to create a UserViewProduct.
     */
    data: XOR<UserViewProductCreateInput, UserViewProductUncheckedCreateInput>
  }

  /**
   * UserViewProduct createMany
   */
  export type UserViewProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserViewProducts.
     */
    data: UserViewProductCreateManyInput | UserViewProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserViewProduct update
   */
  export type UserViewProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * The data needed to update a UserViewProduct.
     */
    data: XOR<UserViewProductUpdateInput, UserViewProductUncheckedUpdateInput>
    /**
     * Choose, which UserViewProduct to update.
     */
    where: UserViewProductWhereUniqueInput
  }

  /**
   * UserViewProduct updateMany
   */
  export type UserViewProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserViewProducts.
     */
    data: XOR<UserViewProductUpdateManyMutationInput, UserViewProductUncheckedUpdateManyInput>
    /**
     * Filter which UserViewProducts to update
     */
    where?: UserViewProductWhereInput
  }

  /**
   * UserViewProduct upsert
   */
  export type UserViewProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * The filter to search for the UserViewProduct to update in case it exists.
     */
    where: UserViewProductWhereUniqueInput
    /**
     * In case the UserViewProduct found by the `where` argument doesn't exist, create a new UserViewProduct with this data.
     */
    create: XOR<UserViewProductCreateInput, UserViewProductUncheckedCreateInput>
    /**
     * In case the UserViewProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserViewProductUpdateInput, UserViewProductUncheckedUpdateInput>
  }

  /**
   * UserViewProduct delete
   */
  export type UserViewProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
    /**
     * Filter which UserViewProduct to delete.
     */
    where: UserViewProductWhereUniqueInput
  }

  /**
   * UserViewProduct deleteMany
   */
  export type UserViewProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViewProducts to delete
     */
    where?: UserViewProductWhereInput
  }

  /**
   * UserViewProduct without action
   */
  export type UserViewProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewProduct
     */
    select?: UserViewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewProduct
     */
    omit?: UserViewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewProductInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    shortname: 'shortname',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    priceBefore: 'priceBefore',
    priceAfter: 'priceAfter',
    initQuantity: 'initQuantity',
    currentQuantity: 'currentQuantity',
    sold: 'sold',
    description: 'description',
    status: 'status',
    category: 'category',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt',
    storeId: 'storeId',
    voucherId: 'voucherId',
    rate: 'rate',
    isDelete: 'isDelete'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const UserAddProductToCartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDelete: 'isDelete'
  };

  export type UserAddProductToCartScalarFieldEnum = (typeof UserAddProductToCartScalarFieldEnum)[keyof typeof UserAddProductToCartScalarFieldEnum]


  export const UserViewProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    storeId: 'storeId',
    createdAt: 'createdAt'
  };

  export type UserViewProductScalarFieldEnum = (typeof UserViewProductScalarFieldEnum)[keyof typeof UserViewProductScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    shortname?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    Product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    shortname?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    shortname?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    Product?: ProductListRelationFilter
  }, "shortname">

  export type CategoryOrderByWithAggregationInput = {
    shortname?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    shortname?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    priceBefore?: FloatFilter<"Product"> | number
    priceAfter?: FloatNullableFilter<"Product"> | number | null
    initQuantity?: IntFilter<"Product"> | number
    currentQuantity?: IntFilter<"Product"> | number
    sold?: IntFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    createdBy?: StringFilter<"Product"> | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    storeId?: StringFilter<"Product"> | string
    voucherId?: StringNullableFilter<"Product"> | string | null
    rate?: FloatFilter<"Product"> | number
    isDelete?: BoolNullableFilter<"Product"> | boolean | null
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    ProductImage?: ProductImageListRelationFilter
    UserAddProductToCart?: UserAddProductToCartListRelationFilter
    UserViewProduct?: UserViewProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrderInput | SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    storeId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    rate?: SortOrder
    isDelete?: SortOrderInput | SortOrder
    Category?: CategoryOrderByWithRelationInput
    ProductImage?: ProductImageOrderByRelationAggregateInput
    UserAddProductToCart?: UserAddProductToCartOrderByRelationAggregateInput
    UserViewProduct?: UserViewProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    priceBefore?: FloatFilter<"Product"> | number
    priceAfter?: FloatNullableFilter<"Product"> | number | null
    initQuantity?: IntFilter<"Product"> | number
    currentQuantity?: IntFilter<"Product"> | number
    sold?: IntFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    createdBy?: StringFilter<"Product"> | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    storeId?: StringFilter<"Product"> | string
    voucherId?: StringNullableFilter<"Product"> | string | null
    rate?: FloatFilter<"Product"> | number
    isDelete?: BoolNullableFilter<"Product"> | boolean | null
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    ProductImage?: ProductImageListRelationFilter
    UserAddProductToCart?: UserAddProductToCartListRelationFilter
    UserViewProduct?: UserViewProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrderInput | SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    storeId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    rate?: SortOrder
    isDelete?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    image?: StringWithAggregatesFilter<"Product"> | string
    priceBefore?: FloatWithAggregatesFilter<"Product"> | number
    priceAfter?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    initQuantity?: IntWithAggregatesFilter<"Product"> | number
    currentQuantity?: IntWithAggregatesFilter<"Product"> | number
    sold?: IntWithAggregatesFilter<"Product"> | number
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: StringWithAggregatesFilter<"Product"> | string
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdBy?: StringWithAggregatesFilter<"Product"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    storeId?: StringWithAggregatesFilter<"Product"> | string
    voucherId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    rate?: FloatWithAggregatesFilter<"Product"> | number
    isDelete?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    createdBy?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeNullableFilter<"ProductImage"> | Date | string | null
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    createdBy?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeNullableFilter<"ProductImage"> | Date | string | null
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    createdBy?: StringWithAggregatesFilter<"ProductImage"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductImage"> | Date | string | null
  }

  export type UserAddProductToCartWhereInput = {
    AND?: UserAddProductToCartWhereInput | UserAddProductToCartWhereInput[]
    OR?: UserAddProductToCartWhereInput[]
    NOT?: UserAddProductToCartWhereInput | UserAddProductToCartWhereInput[]
    id?: StringFilter<"UserAddProductToCart"> | string
    userId?: StringNullableFilter<"UserAddProductToCart"> | string | null
    productId?: StringFilter<"UserAddProductToCart"> | string
    quantity?: IntFilter<"UserAddProductToCart"> | number
    createdAt?: DateTimeFilter<"UserAddProductToCart"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserAddProductToCart"> | Date | string | null
    isDelete?: IntNullableFilter<"UserAddProductToCart"> | number | null
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type UserAddProductToCartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDelete?: SortOrderInput | SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type UserAddProductToCartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAddProductToCartWhereInput | UserAddProductToCartWhereInput[]
    OR?: UserAddProductToCartWhereInput[]
    NOT?: UserAddProductToCartWhereInput | UserAddProductToCartWhereInput[]
    userId?: StringNullableFilter<"UserAddProductToCart"> | string | null
    productId?: StringFilter<"UserAddProductToCart"> | string
    quantity?: IntFilter<"UserAddProductToCart"> | number
    createdAt?: DateTimeFilter<"UserAddProductToCart"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserAddProductToCart"> | Date | string | null
    isDelete?: IntNullableFilter<"UserAddProductToCart"> | number | null
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type UserAddProductToCartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isDelete?: SortOrderInput | SortOrder
    _count?: UserAddProductToCartCountOrderByAggregateInput
    _avg?: UserAddProductToCartAvgOrderByAggregateInput
    _max?: UserAddProductToCartMaxOrderByAggregateInput
    _min?: UserAddProductToCartMinOrderByAggregateInput
    _sum?: UserAddProductToCartSumOrderByAggregateInput
  }

  export type UserAddProductToCartScalarWhereWithAggregatesInput = {
    AND?: UserAddProductToCartScalarWhereWithAggregatesInput | UserAddProductToCartScalarWhereWithAggregatesInput[]
    OR?: UserAddProductToCartScalarWhereWithAggregatesInput[]
    NOT?: UserAddProductToCartScalarWhereWithAggregatesInput | UserAddProductToCartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAddProductToCart"> | string
    userId?: StringNullableWithAggregatesFilter<"UserAddProductToCart"> | string | null
    productId?: StringWithAggregatesFilter<"UserAddProductToCart"> | string
    quantity?: IntWithAggregatesFilter<"UserAddProductToCart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserAddProductToCart"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserAddProductToCart"> | Date | string | null
    isDelete?: IntNullableWithAggregatesFilter<"UserAddProductToCart"> | number | null
  }

  export type UserViewProductWhereInput = {
    AND?: UserViewProductWhereInput | UserViewProductWhereInput[]
    OR?: UserViewProductWhereInput[]
    NOT?: UserViewProductWhereInput | UserViewProductWhereInput[]
    id?: StringFilter<"UserViewProduct"> | string
    userId?: StringNullableFilter<"UserViewProduct"> | string | null
    productId?: StringFilter<"UserViewProduct"> | string
    storeId?: StringFilter<"UserViewProduct"> | string
    createdAt?: DateTimeFilter<"UserViewProduct"> | Date | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type UserViewProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type UserViewProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserViewProductWhereInput | UserViewProductWhereInput[]
    OR?: UserViewProductWhereInput[]
    NOT?: UserViewProductWhereInput | UserViewProductWhereInput[]
    userId?: StringNullableFilter<"UserViewProduct"> | string | null
    productId?: StringFilter<"UserViewProduct"> | string
    storeId?: StringFilter<"UserViewProduct"> | string
    createdAt?: DateTimeFilter<"UserViewProduct"> | Date | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type UserViewProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    _count?: UserViewProductCountOrderByAggregateInput
    _max?: UserViewProductMaxOrderByAggregateInput
    _min?: UserViewProductMinOrderByAggregateInput
  }

  export type UserViewProductScalarWhereWithAggregatesInput = {
    AND?: UserViewProductScalarWhereWithAggregatesInput | UserViewProductScalarWhereWithAggregatesInput[]
    OR?: UserViewProductScalarWhereWithAggregatesInput[]
    NOT?: UserViewProductScalarWhereWithAggregatesInput | UserViewProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserViewProduct"> | string
    userId?: StringNullableWithAggregatesFilter<"UserViewProduct"> | string | null
    productId?: StringWithAggregatesFilter<"UserViewProduct"> | string
    storeId?: StringWithAggregatesFilter<"UserViewProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserViewProduct"> | Date | string
  }

  export type CategoryCreateInput = {
    shortname: string
    name: string
    description?: string | null
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    shortname: string
    name: string
    description?: string | null
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    shortname: string
    name: string
    description?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    category?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartUncheckedCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUncheckedUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    category?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductImageCreateInput = {
    id: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductImageInput
  }

  export type ProductImageUncheckedCreateInput = {
    id: string
    productId: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductImageNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageCreateManyInput = {
    id: string
    productId: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAddProductToCartCreateInput = {
    id: string
    userId?: string | null
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
    Product: ProductCreateNestedOneWithoutUserAddProductToCartInput
  }

  export type UserAddProductToCartUncheckedCreateInput = {
    id: string
    userId?: string | null
    productId: string
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
  }

  export type UserAddProductToCartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
    Product?: ProductUpdateOneRequiredWithoutUserAddProductToCartNestedInput
  }

  export type UserAddProductToCartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAddProductToCartCreateManyInput = {
    id: string
    userId?: string | null
    productId: string
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
  }

  export type UserAddProductToCartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAddProductToCartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserViewProductCreateInput = {
    id: string
    userId?: string | null
    storeId: string
    createdAt: Date | string
    Product: ProductCreateNestedOneWithoutUserViewProductInput
  }

  export type UserViewProductUncheckedCreateInput = {
    id: string
    userId?: string | null
    productId: string
    storeId: string
    createdAt: Date | string
  }

  export type UserViewProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutUserViewProductNestedInput
  }

  export type UserViewProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserViewProductCreateManyInput = {
    id: string
    userId?: string | null
    productId: string
    storeId: string
    createdAt: Date | string
  }

  export type UserViewProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserViewProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    shortname?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    shortname?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    shortname?: SortOrder
    name?: SortOrder
    description?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type UserAddProductToCartListRelationFilter = {
    every?: UserAddProductToCartWhereInput
    some?: UserAddProductToCartWhereInput
    none?: UserAddProductToCartWhereInput
  }

  export type UserViewProductListRelationFilter = {
    every?: UserViewProductWhereInput
    some?: UserViewProductWhereInput
    none?: UserViewProductWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAddProductToCartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserViewProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
    storeId?: SortOrder
    voucherId?: SortOrder
    rate?: SortOrder
    isDelete?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    rate?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
    storeId?: SortOrder
    voucherId?: SortOrder
    rate?: SortOrder
    isDelete?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
    storeId?: SortOrder
    voucherId?: SortOrder
    rate?: SortOrder
    isDelete?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    priceBefore?: SortOrder
    priceAfter?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    sold?: SortOrder
    rate?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
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

  export type UserAddProductToCartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDelete?: SortOrder
  }

  export type UserAddProductToCartAvgOrderByAggregateInput = {
    quantity?: SortOrder
    isDelete?: SortOrder
  }

  export type UserAddProductToCartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDelete?: SortOrder
  }

  export type UserAddProductToCartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDelete?: SortOrder
  }

  export type UserAddProductToCartSumOrderByAggregateInput = {
    quantity?: SortOrder
    isDelete?: SortOrder
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

  export type UserViewProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserViewProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserViewProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type UserAddProductToCartCreateNestedManyWithoutProductInput = {
    create?: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput> | UserAddProductToCartCreateWithoutProductInput[] | UserAddProductToCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserAddProductToCartCreateOrConnectWithoutProductInput | UserAddProductToCartCreateOrConnectWithoutProductInput[]
    createMany?: UserAddProductToCartCreateManyProductInputEnvelope
    connect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
  }

  export type UserViewProductCreateNestedManyWithoutProductInput = {
    create?: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput> | UserViewProductCreateWithoutProductInput[] | UserViewProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserViewProductCreateOrConnectWithoutProductInput | UserViewProductCreateOrConnectWithoutProductInput[]
    createMany?: UserViewProductCreateManyProductInputEnvelope
    connect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type UserAddProductToCartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput> | UserAddProductToCartCreateWithoutProductInput[] | UserAddProductToCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserAddProductToCartCreateOrConnectWithoutProductInput | UserAddProductToCartCreateOrConnectWithoutProductInput[]
    createMany?: UserAddProductToCartCreateManyProductInputEnvelope
    connect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
  }

  export type UserViewProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput> | UserViewProductCreateWithoutProductInput[] | UserViewProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserViewProductCreateOrConnectWithoutProductInput | UserViewProductCreateOrConnectWithoutProductInput[]
    createMany?: UserViewProductCreateManyProductInputEnvelope
    connect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CategoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type UserAddProductToCartUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput> | UserAddProductToCartCreateWithoutProductInput[] | UserAddProductToCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserAddProductToCartCreateOrConnectWithoutProductInput | UserAddProductToCartCreateOrConnectWithoutProductInput[]
    upsert?: UserAddProductToCartUpsertWithWhereUniqueWithoutProductInput | UserAddProductToCartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserAddProductToCartCreateManyProductInputEnvelope
    set?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    disconnect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    delete?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    connect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    update?: UserAddProductToCartUpdateWithWhereUniqueWithoutProductInput | UserAddProductToCartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserAddProductToCartUpdateManyWithWhereWithoutProductInput | UserAddProductToCartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserAddProductToCartScalarWhereInput | UserAddProductToCartScalarWhereInput[]
  }

  export type UserViewProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput> | UserViewProductCreateWithoutProductInput[] | UserViewProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserViewProductCreateOrConnectWithoutProductInput | UserViewProductCreateOrConnectWithoutProductInput[]
    upsert?: UserViewProductUpsertWithWhereUniqueWithoutProductInput | UserViewProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserViewProductCreateManyProductInputEnvelope
    set?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    disconnect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    delete?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    connect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    update?: UserViewProductUpdateWithWhereUniqueWithoutProductInput | UserViewProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserViewProductUpdateManyWithWhereWithoutProductInput | UserViewProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserViewProductScalarWhereInput | UserViewProductScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type UserAddProductToCartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput> | UserAddProductToCartCreateWithoutProductInput[] | UserAddProductToCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserAddProductToCartCreateOrConnectWithoutProductInput | UserAddProductToCartCreateOrConnectWithoutProductInput[]
    upsert?: UserAddProductToCartUpsertWithWhereUniqueWithoutProductInput | UserAddProductToCartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserAddProductToCartCreateManyProductInputEnvelope
    set?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    disconnect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    delete?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    connect?: UserAddProductToCartWhereUniqueInput | UserAddProductToCartWhereUniqueInput[]
    update?: UserAddProductToCartUpdateWithWhereUniqueWithoutProductInput | UserAddProductToCartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserAddProductToCartUpdateManyWithWhereWithoutProductInput | UserAddProductToCartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserAddProductToCartScalarWhereInput | UserAddProductToCartScalarWhereInput[]
  }

  export type UserViewProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput> | UserViewProductCreateWithoutProductInput[] | UserViewProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserViewProductCreateOrConnectWithoutProductInput | UserViewProductCreateOrConnectWithoutProductInput[]
    upsert?: UserViewProductUpsertWithWhereUniqueWithoutProductInput | UserViewProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserViewProductCreateManyProductInputEnvelope
    set?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    disconnect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    delete?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    connect?: UserViewProductWhereUniqueInput | UserViewProductWhereUniqueInput[]
    update?: UserViewProductUpdateWithWhereUniqueWithoutProductInput | UserViewProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserViewProductUpdateManyWithWhereWithoutProductInput | UserViewProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserViewProductScalarWhereInput | UserViewProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductImageInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductImageNestedInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    upsert?: ProductUpsertWithoutProductImageInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductImageInput, ProductUpdateWithoutProductImageInput>, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductCreateNestedOneWithoutUserAddProductToCartInput = {
    create?: XOR<ProductCreateWithoutUserAddProductToCartInput, ProductUncheckedCreateWithoutUserAddProductToCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserAddProductToCartInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutUserAddProductToCartNestedInput = {
    create?: XOR<ProductCreateWithoutUserAddProductToCartInput, ProductUncheckedCreateWithoutUserAddProductToCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserAddProductToCartInput
    upsert?: ProductUpsertWithoutUserAddProductToCartInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserAddProductToCartInput, ProductUpdateWithoutUserAddProductToCartInput>, ProductUncheckedUpdateWithoutUserAddProductToCartInput>
  }

  export type ProductCreateNestedOneWithoutUserViewProductInput = {
    create?: XOR<ProductCreateWithoutUserViewProductInput, ProductUncheckedCreateWithoutUserViewProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserViewProductInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutUserViewProductNestedInput = {
    create?: XOR<ProductCreateWithoutUserViewProductInput, ProductUncheckedCreateWithoutUserViewProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserViewProductInput
    upsert?: ProductUpsertWithoutUserViewProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserViewProductInput, ProductUpdateWithoutUserViewProductInput>, ProductUncheckedUpdateWithoutUserViewProductInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type ProductCreateWithoutCategoryInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartUncheckedCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    priceBefore?: FloatFilter<"Product"> | number
    priceAfter?: FloatNullableFilter<"Product"> | number | null
    initQuantity?: IntFilter<"Product"> | number
    currentQuantity?: IntFilter<"Product"> | number
    sold?: IntFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    createdBy?: StringFilter<"Product"> | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    storeId?: StringFilter<"Product"> | string
    voucherId?: StringNullableFilter<"Product"> | string | null
    rate?: FloatFilter<"Product"> | number
    isDelete?: BoolNullableFilter<"Product"> | boolean | null
  }

  export type CategoryCreateWithoutProductInput = {
    shortname: string
    name: string
    description?: string | null
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    shortname: string
    name: string
    description?: string | null
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateWithoutProductInput = {
    id: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserAddProductToCartCreateWithoutProductInput = {
    id: string
    userId?: string | null
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
  }

  export type UserAddProductToCartUncheckedCreateWithoutProductInput = {
    id: string
    userId?: string | null
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
  }

  export type UserAddProductToCartCreateOrConnectWithoutProductInput = {
    where: UserAddProductToCartWhereUniqueInput
    create: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput>
  }

  export type UserAddProductToCartCreateManyProductInputEnvelope = {
    data: UserAddProductToCartCreateManyProductInput | UserAddProductToCartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserViewProductCreateWithoutProductInput = {
    id: string
    userId?: string | null
    storeId: string
    createdAt: Date | string
  }

  export type UserViewProductUncheckedCreateWithoutProductInput = {
    id: string
    userId?: string | null
    storeId: string
    createdAt: Date | string
  }

  export type UserViewProductCreateOrConnectWithoutProductInput = {
    where: UserViewProductWhereUniqueInput
    create: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput>
  }

  export type UserViewProductCreateManyProductInputEnvelope = {
    data: UserViewProductCreateManyProductInput | UserViewProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    shortname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    createdBy?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeNullableFilter<"ProductImage"> | Date | string | null
  }

  export type UserAddProductToCartUpsertWithWhereUniqueWithoutProductInput = {
    where: UserAddProductToCartWhereUniqueInput
    update: XOR<UserAddProductToCartUpdateWithoutProductInput, UserAddProductToCartUncheckedUpdateWithoutProductInput>
    create: XOR<UserAddProductToCartCreateWithoutProductInput, UserAddProductToCartUncheckedCreateWithoutProductInput>
  }

  export type UserAddProductToCartUpdateWithWhereUniqueWithoutProductInput = {
    where: UserAddProductToCartWhereUniqueInput
    data: XOR<UserAddProductToCartUpdateWithoutProductInput, UserAddProductToCartUncheckedUpdateWithoutProductInput>
  }

  export type UserAddProductToCartUpdateManyWithWhereWithoutProductInput = {
    where: UserAddProductToCartScalarWhereInput
    data: XOR<UserAddProductToCartUpdateManyMutationInput, UserAddProductToCartUncheckedUpdateManyWithoutProductInput>
  }

  export type UserAddProductToCartScalarWhereInput = {
    AND?: UserAddProductToCartScalarWhereInput | UserAddProductToCartScalarWhereInput[]
    OR?: UserAddProductToCartScalarWhereInput[]
    NOT?: UserAddProductToCartScalarWhereInput | UserAddProductToCartScalarWhereInput[]
    id?: StringFilter<"UserAddProductToCart"> | string
    userId?: StringNullableFilter<"UserAddProductToCart"> | string | null
    productId?: StringFilter<"UserAddProductToCart"> | string
    quantity?: IntFilter<"UserAddProductToCart"> | number
    createdAt?: DateTimeFilter<"UserAddProductToCart"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserAddProductToCart"> | Date | string | null
    isDelete?: IntNullableFilter<"UserAddProductToCart"> | number | null
  }

  export type UserViewProductUpsertWithWhereUniqueWithoutProductInput = {
    where: UserViewProductWhereUniqueInput
    update: XOR<UserViewProductUpdateWithoutProductInput, UserViewProductUncheckedUpdateWithoutProductInput>
    create: XOR<UserViewProductCreateWithoutProductInput, UserViewProductUncheckedCreateWithoutProductInput>
  }

  export type UserViewProductUpdateWithWhereUniqueWithoutProductInput = {
    where: UserViewProductWhereUniqueInput
    data: XOR<UserViewProductUpdateWithoutProductInput, UserViewProductUncheckedUpdateWithoutProductInput>
  }

  export type UserViewProductUpdateManyWithWhereWithoutProductInput = {
    where: UserViewProductScalarWhereInput
    data: XOR<UserViewProductUpdateManyMutationInput, UserViewProductUncheckedUpdateManyWithoutProductInput>
  }

  export type UserViewProductScalarWhereInput = {
    AND?: UserViewProductScalarWhereInput | UserViewProductScalarWhereInput[]
    OR?: UserViewProductScalarWhereInput[]
    NOT?: UserViewProductScalarWhereInput | UserViewProductScalarWhereInput[]
    id?: StringFilter<"UserViewProduct"> | string
    userId?: StringNullableFilter<"UserViewProduct"> | string | null
    productId?: StringFilter<"UserViewProduct"> | string
    storeId?: StringFilter<"UserViewProduct"> | string
    createdAt?: DateTimeFilter<"UserViewProduct"> | Date | string
  }

  export type ProductCreateWithoutProductImageInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImageInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    category?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    UserAddProductToCart?: UserAddProductToCartUncheckedCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
  }

  export type ProductUpsertWithoutProductImageInput = {
    update: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductImageInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductUpdateWithoutProductImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserAddProductToCart?: UserAddProductToCartUncheckedUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutUserAddProductToCartInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserAddProductToCartInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    category?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    UserViewProduct?: UserViewProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserAddProductToCartInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserAddProductToCartInput, ProductUncheckedCreateWithoutUserAddProductToCartInput>
  }

  export type ProductUpsertWithoutUserAddProductToCartInput = {
    update: XOR<ProductUpdateWithoutUserAddProductToCartInput, ProductUncheckedUpdateWithoutUserAddProductToCartInput>
    create: XOR<ProductCreateWithoutUserAddProductToCartInput, ProductUncheckedCreateWithoutUserAddProductToCartInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserAddProductToCartInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserAddProductToCartInput, ProductUncheckedUpdateWithoutUserAddProductToCartInput>
  }

  export type ProductUpdateWithoutUserAddProductToCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserAddProductToCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutUserViewProductInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    Category?: CategoryCreateNestedOneWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserViewProductInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    category?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    UserAddProductToCart?: UserAddProductToCartUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserViewProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserViewProductInput, ProductUncheckedCreateWithoutUserViewProductInput>
  }

  export type ProductUpsertWithoutUserViewProductInput = {
    update: XOR<ProductUpdateWithoutUserViewProductInput, ProductUncheckedUpdateWithoutUserViewProductInput>
    create: XOR<ProductCreateWithoutUserViewProductInput, ProductUncheckedCreateWithoutUserViewProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserViewProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserViewProductInput, ProductUncheckedUpdateWithoutUserViewProductInput>
  }

  export type ProductUpdateWithoutUserViewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Category?: CategoryUpdateOneWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserViewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id: string
    name: string
    image: string
    priceBefore: number
    priceAfter?: number | null
    initQuantity: number
    currentQuantity: number
    sold?: number
    description?: string | null
    status: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedBy?: string | null
    deletedAt?: Date | string | null
    storeId: string
    voucherId?: string | null
    rate?: number
    isDelete?: boolean | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    UserAddProductToCart?: UserAddProductToCartUncheckedUpdateManyWithoutProductNestedInput
    UserViewProduct?: UserViewProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    priceBefore?: FloatFieldUpdateOperationsInput | number
    priceAfter?: NullableFloatFieldUpdateOperationsInput | number | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: FloatFieldUpdateOperationsInput | number
    isDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductImageCreateManyProductInput = {
    id: string
    url: string
    createdBy: string
    createdAt?: Date | string | null
  }

  export type UserAddProductToCartCreateManyProductInput = {
    id: string
    userId?: string | null
    quantity: number
    createdAt: Date | string
    updatedAt?: Date | string | null
    isDelete?: number | null
  }

  export type UserViewProductCreateManyProductInput = {
    id: string
    userId?: string | null
    storeId: string
    createdAt: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAddProductToCartUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAddProductToCartUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAddProductToCartUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserViewProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserViewProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserViewProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductImageDefaultArgs instead
     */
    export type ProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAddProductToCartDefaultArgs instead
     */
    export type UserAddProductToCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAddProductToCartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserViewProductDefaultArgs instead
     */
    export type UserViewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserViewProductDefaultArgs<ExtArgs>

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