
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model StoreRole
 * 
 */
export type StoreRole = $Result.DefaultSelection<Prisma.$StoreRolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DeliveryInformation
 * 
 */
export type DeliveryInformation = $Result.DefaultSelection<Prisma.$DeliveryInformationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeRole`: Exposes CRUD operations for the **StoreRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreRoles
    * const storeRoles = await prisma.storeRole.findMany()
    * ```
    */
  get storeRole(): Prisma.StoreRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryInformation`: Exposes CRUD operations for the **DeliveryInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryInformations
    * const deliveryInformations = await prisma.deliveryInformation.findMany()
    * ```
    */
  get deliveryInformation(): Prisma.DeliveryInformationDelegate<ExtArgs, ClientOptions>;
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
    Account: 'Account',
    Permission: 'Permission',
    StoreRole: 'StoreRole',
    User: 'User',
    DeliveryInformation: 'DeliveryInformation'
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
      modelProps: "account" | "permission" | "storeRole" | "user" | "deliveryInformation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      StoreRole: {
        payload: Prisma.$StoreRolePayload<ExtArgs>
        fields: Prisma.StoreRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          findFirst: {
            args: Prisma.StoreRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          findMany: {
            args: Prisma.StoreRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>[]
          }
          create: {
            args: Prisma.StoreRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          createMany: {
            args: Prisma.StoreRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          update: {
            args: Prisma.StoreRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          deleteMany: {
            args: Prisma.StoreRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRolePayload>
          }
          aggregate: {
            args: Prisma.StoreRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreRole>
          }
          groupBy: {
            args: Prisma.StoreRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreRoleCountArgs<ExtArgs>
            result: $Utils.Optional<StoreRoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DeliveryInformation: {
        payload: Prisma.$DeliveryInformationPayload<ExtArgs>
        fields: Prisma.DeliveryInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          findFirst: {
            args: Prisma.DeliveryInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          findMany: {
            args: Prisma.DeliveryInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>[]
          }
          create: {
            args: Prisma.DeliveryInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          createMany: {
            args: Prisma.DeliveryInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeliveryInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          update: {
            args: Prisma.DeliveryInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInformationPayload>
          }
          aggregate: {
            args: Prisma.DeliveryInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryInformation>
          }
          groupBy: {
            args: Prisma.DeliveryInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryInformationCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryInformationCountAggregateOutputType> | number
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
    account?: AccountOmit
    permission?: PermissionOmit
    storeRole?: StoreRoleOmit
    user?: UserOmit
    deliveryInformation?: DeliveryInformationOmit
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
   * Count Type StoreRoleCountOutputType
   */

  export type StoreRoleCountOutputType = {
    Account: number
  }

  export type StoreRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | StoreRoleCountOutputTypeCountAccountArgs
  }

  // Custom InputTypes
  /**
   * StoreRoleCountOutputType without action
   */
  export type StoreRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRoleCountOutputType
     */
    select?: StoreRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreRoleCountOutputType without action
   */
  export type StoreRoleCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Account_Account_userIdToUser: number
    Account_Account_createdByToUser: number
    Account_Account_updatedByToUser: number
    DeliveryInformation: number
    Permission_Permission_userIdToUser: number
    Permission_Permission_createdByToUser: number
    StoreRole_StoreRole_createdByToUser: number
    StoreRole_StoreRole_updatedByToUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Account_userIdToUser?: boolean | UserCountOutputTypeCountAccount_Account_userIdToUserArgs
    Account_Account_createdByToUser?: boolean | UserCountOutputTypeCountAccount_Account_createdByToUserArgs
    Account_Account_updatedByToUser?: boolean | UserCountOutputTypeCountAccount_Account_updatedByToUserArgs
    DeliveryInformation?: boolean | UserCountOutputTypeCountDeliveryInformationArgs
    Permission_Permission_userIdToUser?: boolean | UserCountOutputTypeCountPermission_Permission_userIdToUserArgs
    Permission_Permission_createdByToUser?: boolean | UserCountOutputTypeCountPermission_Permission_createdByToUserArgs
    StoreRole_StoreRole_createdByToUser?: boolean | UserCountOutputTypeCountStoreRole_StoreRole_createdByToUserArgs
    StoreRole_StoreRole_updatedByToUser?: boolean | UserCountOutputTypeCountStoreRole_StoreRole_updatedByToUserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccount_Account_userIdToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccount_Account_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccount_Account_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveryInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryInformationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermission_Permission_userIdToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermission_Permission_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoreRole_StoreRole_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoreRole_StoreRole_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    username: string | null
    password: string | null
    userId: string | null
    storeRoleId: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    username: string | null
    password: string | null
    userId: string | null
    storeRoleId: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    username: number
    password: number
    userId: number
    storeRoleId: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    username?: true
    password?: true
    userId?: true
    storeRoleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    username?: true
    password?: true
    userId?: true
    storeRoleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    username?: true
    password?: true
    userId?: true
    storeRoleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    username: string
    password: string
    userId: string
    storeRoleId: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
    userId?: boolean
    storeRoleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User_Account_userIdToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_Account_createdByToUser?: boolean | Account$User_Account_createdByToUserArgs<ExtArgs>
    User_Account_updatedByToUser?: boolean | Account$User_Account_updatedByToUserArgs<ExtArgs>
    StoreRole?: boolean | Account$StoreRoleArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>


  export type AccountSelectScalar = {
    username?: boolean
    password?: boolean
    userId?: boolean
    storeRoleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "password" | "userId" | "storeRoleId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Account_userIdToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_Account_createdByToUser?: boolean | Account$User_Account_createdByToUserArgs<ExtArgs>
    User_Account_updatedByToUser?: boolean | Account$User_Account_updatedByToUserArgs<ExtArgs>
    StoreRole?: boolean | Account$StoreRoleArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      User_Account_userIdToUser: Prisma.$UserPayload<ExtArgs>
      User_Account_createdByToUser: Prisma.$UserPayload<ExtArgs> | null
      User_Account_updatedByToUser: Prisma.$UserPayload<ExtArgs> | null
      StoreRole: Prisma.$StoreRolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      password: string
      userId: string
      storeRoleId: string | null
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const accountWithUsernameOnly = await prisma.account.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User_Account_userIdToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    User_Account_createdByToUser<T extends Account$User_Account_createdByToUserArgs<ExtArgs> = {}>(args?: Subset<T, Account$User_Account_createdByToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    User_Account_updatedByToUser<T extends Account$User_Account_updatedByToUserArgs<ExtArgs> = {}>(args?: Subset<T, Account$User_Account_updatedByToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    StoreRole<T extends Account$StoreRoleArgs<ExtArgs> = {}>(args?: Subset<T, Account$StoreRoleArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly username: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly storeRoleId: FieldRef<"Account", 'String'>
    readonly createdBy: FieldRef<"Account", 'String'>
    readonly updatedBy: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.User_Account_createdByToUser
   */
  export type Account$User_Account_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account.User_Account_updatedByToUser
   */
  export type Account$User_Account_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account.StoreRole
   */
  export type Account$StoreRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    where?: StoreRoleWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    instance: string | null
    permission: string | null
    userId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    instance: string | null
    permission: string | null
    userId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    instance: number
    permission: number
    userId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    instance?: true
    permission?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    instance?: true
    permission?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    instance?: true
    permission?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    instance: string
    permission: string
    userId: string
    createdAt: Date | null
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instance?: boolean
    permission?: boolean
    userId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    User_Permission_userIdToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_Permission_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>


  export type PermissionSelectScalar = {
    id?: boolean
    instance?: boolean
    permission?: boolean
    userId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instance" | "permission" | "userId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Permission_userIdToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_Permission_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      User_Permission_userIdToUser: Prisma.$UserPayload<ExtArgs>
      User_Permission_createdByToUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instance: string
      permission: string
      userId: string
      createdAt: Date | null
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User_Permission_userIdToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    User_Permission_createdByToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly instance: FieldRef<"Permission", 'String'>
    readonly permission: FieldRef<"Permission", 'String'>
    readonly userId: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly createdBy: FieldRef<"Permission", 'String'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedBy: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model StoreRole
   */

  export type AggregateStoreRole = {
    _count: StoreRoleCountAggregateOutputType | null
    _min: StoreRoleMinAggregateOutputType | null
    _max: StoreRoleMaxAggregateOutputType | null
  }

  export type StoreRoleMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    status: string | null
    role: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreRoleMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    status: string | null
    role: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreRoleCountAggregateOutputType = {
    id: number
    storeId: number
    status: number
    role: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreRoleMinAggregateInputType = {
    id?: true
    storeId?: true
    status?: true
    role?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreRoleMaxAggregateInputType = {
    id?: true
    storeId?: true
    status?: true
    role?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreRoleCountAggregateInputType = {
    id?: true
    storeId?: true
    status?: true
    role?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreRole to aggregate.
     */
    where?: StoreRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRoles to fetch.
     */
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreRoles
    **/
    _count?: true | StoreRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreRoleMaxAggregateInputType
  }

  export type GetStoreRoleAggregateType<T extends StoreRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreRole[P]>
      : GetScalarType<T[P], AggregateStoreRole[P]>
  }




  export type StoreRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreRoleWhereInput
    orderBy?: StoreRoleOrderByWithAggregationInput | StoreRoleOrderByWithAggregationInput[]
    by: StoreRoleScalarFieldEnum[] | StoreRoleScalarFieldEnum
    having?: StoreRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreRoleCountAggregateInputType | true
    _min?: StoreRoleMinAggregateInputType
    _max?: StoreRoleMaxAggregateInputType
  }

  export type StoreRoleGroupByOutputType = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: StoreRoleCountAggregateOutputType | null
    _min: StoreRoleMinAggregateOutputType | null
    _max: StoreRoleMaxAggregateOutputType | null
  }

  type GetStoreRoleGroupByPayload<T extends StoreRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreRoleGroupByOutputType[P]>
            : GetScalarType<T[P], StoreRoleGroupByOutputType[P]>
        }
      >
    >


  export type StoreRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    status?: boolean
    role?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Account?: boolean | StoreRole$AccountArgs<ExtArgs>
    User_StoreRole_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_StoreRole_updatedByToUser?: boolean | StoreRole$User_StoreRole_updatedByToUserArgs<ExtArgs>
    _count?: boolean | StoreRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeRole"]>


  export type StoreRoleSelectScalar = {
    id?: boolean
    storeId?: boolean
    status?: boolean
    role?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "status" | "role" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["storeRole"]>
  export type StoreRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | StoreRole$AccountArgs<ExtArgs>
    User_StoreRole_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
    User_StoreRole_updatedByToUser?: boolean | StoreRole$User_StoreRole_updatedByToUserArgs<ExtArgs>
    _count?: boolean | StoreRoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StoreRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreRole"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>[]
      User_StoreRole_createdByToUser: Prisma.$UserPayload<ExtArgs>
      User_StoreRole_updatedByToUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      status: string
      role: string
      createdBy: string
      updatedBy: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["storeRole"]>
    composites: {}
  }

  type StoreRoleGetPayload<S extends boolean | null | undefined | StoreRoleDefaultArgs> = $Result.GetResult<Prisma.$StoreRolePayload, S>

  type StoreRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreRoleCountAggregateInputType | true
    }

  export interface StoreRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreRole'], meta: { name: 'StoreRole' } }
    /**
     * Find zero or one StoreRole that matches the filter.
     * @param {StoreRoleFindUniqueArgs} args - Arguments to find a StoreRole
     * @example
     * // Get one StoreRole
     * const storeRole = await prisma.storeRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreRoleFindUniqueArgs>(args: SelectSubset<T, StoreRoleFindUniqueArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StoreRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreRoleFindUniqueOrThrowArgs} args - Arguments to find a StoreRole
     * @example
     * // Get one StoreRole
     * const storeRole = await prisma.storeRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StoreRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleFindFirstArgs} args - Arguments to find a StoreRole
     * @example
     * // Get one StoreRole
     * const storeRole = await prisma.storeRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreRoleFindFirstArgs>(args?: SelectSubset<T, StoreRoleFindFirstArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StoreRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleFindFirstOrThrowArgs} args - Arguments to find a StoreRole
     * @example
     * // Get one StoreRole
     * const storeRole = await prisma.storeRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StoreRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreRoles
     * const storeRoles = await prisma.storeRole.findMany()
     * 
     * // Get first 10 StoreRoles
     * const storeRoles = await prisma.storeRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeRoleWithIdOnly = await prisma.storeRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreRoleFindManyArgs>(args?: SelectSubset<T, StoreRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StoreRole.
     * @param {StoreRoleCreateArgs} args - Arguments to create a StoreRole.
     * @example
     * // Create one StoreRole
     * const StoreRole = await prisma.storeRole.create({
     *   data: {
     *     // ... data to create a StoreRole
     *   }
     * })
     * 
     */
    create<T extends StoreRoleCreateArgs>(args: SelectSubset<T, StoreRoleCreateArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StoreRoles.
     * @param {StoreRoleCreateManyArgs} args - Arguments to create many StoreRoles.
     * @example
     * // Create many StoreRoles
     * const storeRole = await prisma.storeRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreRoleCreateManyArgs>(args?: SelectSubset<T, StoreRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreRole.
     * @param {StoreRoleDeleteArgs} args - Arguments to delete one StoreRole.
     * @example
     * // Delete one StoreRole
     * const StoreRole = await prisma.storeRole.delete({
     *   where: {
     *     // ... filter to delete one StoreRole
     *   }
     * })
     * 
     */
    delete<T extends StoreRoleDeleteArgs>(args: SelectSubset<T, StoreRoleDeleteArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StoreRole.
     * @param {StoreRoleUpdateArgs} args - Arguments to update one StoreRole.
     * @example
     * // Update one StoreRole
     * const storeRole = await prisma.storeRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreRoleUpdateArgs>(args: SelectSubset<T, StoreRoleUpdateArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StoreRoles.
     * @param {StoreRoleDeleteManyArgs} args - Arguments to filter StoreRoles to delete.
     * @example
     * // Delete a few StoreRoles
     * const { count } = await prisma.storeRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreRoleDeleteManyArgs>(args?: SelectSubset<T, StoreRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreRoles
     * const storeRole = await prisma.storeRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreRoleUpdateManyArgs>(args: SelectSubset<T, StoreRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreRole.
     * @param {StoreRoleUpsertArgs} args - Arguments to update or create a StoreRole.
     * @example
     * // Update or create a StoreRole
     * const storeRole = await prisma.storeRole.upsert({
     *   create: {
     *     // ... data to create a StoreRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreRole we want to update
     *   }
     * })
     */
    upsert<T extends StoreRoleUpsertArgs>(args: SelectSubset<T, StoreRoleUpsertArgs<ExtArgs>>): Prisma__StoreRoleClient<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StoreRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleCountArgs} args - Arguments to filter StoreRoles to count.
     * @example
     * // Count the number of StoreRoles
     * const count = await prisma.storeRole.count({
     *   where: {
     *     // ... the filter for the StoreRoles we want to count
     *   }
     * })
    **/
    count<T extends StoreRoleCountArgs>(
      args?: Subset<T, StoreRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreRoleAggregateArgs>(args: Subset<T, StoreRoleAggregateArgs>): Prisma.PrismaPromise<GetStoreRoleAggregateType<T>>

    /**
     * Group by StoreRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRoleGroupByArgs} args - Group by arguments.
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
      T extends StoreRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreRoleGroupByArgs['orderBy'] }
        : { orderBy?: StoreRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreRole model
   */
  readonly fields: StoreRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends StoreRole$AccountArgs<ExtArgs> = {}>(args?: Subset<T, StoreRole$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    User_StoreRole_createdByToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    User_StoreRole_updatedByToUser<T extends StoreRole$User_StoreRole_updatedByToUserArgs<ExtArgs> = {}>(args?: Subset<T, StoreRole$User_StoreRole_updatedByToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the StoreRole model
   */ 
  interface StoreRoleFieldRefs {
    readonly id: FieldRef<"StoreRole", 'String'>
    readonly storeId: FieldRef<"StoreRole", 'String'>
    readonly status: FieldRef<"StoreRole", 'String'>
    readonly role: FieldRef<"StoreRole", 'String'>
    readonly createdBy: FieldRef<"StoreRole", 'String'>
    readonly updatedBy: FieldRef<"StoreRole", 'String'>
    readonly createdAt: FieldRef<"StoreRole", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreRole findUnique
   */
  export type StoreRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter, which StoreRole to fetch.
     */
    where: StoreRoleWhereUniqueInput
  }

  /**
   * StoreRole findUniqueOrThrow
   */
  export type StoreRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter, which StoreRole to fetch.
     */
    where: StoreRoleWhereUniqueInput
  }

  /**
   * StoreRole findFirst
   */
  export type StoreRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter, which StoreRole to fetch.
     */
    where?: StoreRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRoles to fetch.
     */
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreRoles.
     */
    cursor?: StoreRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreRoles.
     */
    distinct?: StoreRoleScalarFieldEnum | StoreRoleScalarFieldEnum[]
  }

  /**
   * StoreRole findFirstOrThrow
   */
  export type StoreRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter, which StoreRole to fetch.
     */
    where?: StoreRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRoles to fetch.
     */
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreRoles.
     */
    cursor?: StoreRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreRoles.
     */
    distinct?: StoreRoleScalarFieldEnum | StoreRoleScalarFieldEnum[]
  }

  /**
   * StoreRole findMany
   */
  export type StoreRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter, which StoreRoles to fetch.
     */
    where?: StoreRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRoles to fetch.
     */
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreRoles.
     */
    cursor?: StoreRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRoles.
     */
    skip?: number
    distinct?: StoreRoleScalarFieldEnum | StoreRoleScalarFieldEnum[]
  }

  /**
   * StoreRole create
   */
  export type StoreRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreRole.
     */
    data: XOR<StoreRoleCreateInput, StoreRoleUncheckedCreateInput>
  }

  /**
   * StoreRole createMany
   */
  export type StoreRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreRoles.
     */
    data: StoreRoleCreateManyInput | StoreRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreRole update
   */
  export type StoreRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreRole.
     */
    data: XOR<StoreRoleUpdateInput, StoreRoleUncheckedUpdateInput>
    /**
     * Choose, which StoreRole to update.
     */
    where: StoreRoleWhereUniqueInput
  }

  /**
   * StoreRole updateMany
   */
  export type StoreRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreRoles.
     */
    data: XOR<StoreRoleUpdateManyMutationInput, StoreRoleUncheckedUpdateManyInput>
    /**
     * Filter which StoreRoles to update
     */
    where?: StoreRoleWhereInput
  }

  /**
   * StoreRole upsert
   */
  export type StoreRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreRole to update in case it exists.
     */
    where: StoreRoleWhereUniqueInput
    /**
     * In case the StoreRole found by the `where` argument doesn't exist, create a new StoreRole with this data.
     */
    create: XOR<StoreRoleCreateInput, StoreRoleUncheckedCreateInput>
    /**
     * In case the StoreRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreRoleUpdateInput, StoreRoleUncheckedUpdateInput>
  }

  /**
   * StoreRole delete
   */
  export type StoreRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    /**
     * Filter which StoreRole to delete.
     */
    where: StoreRoleWhereUniqueInput
  }

  /**
   * StoreRole deleteMany
   */
  export type StoreRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreRoles to delete
     */
    where?: StoreRoleWhereInput
  }

  /**
   * StoreRole.Account
   */
  export type StoreRole$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * StoreRole.User_StoreRole_updatedByToUser
   */
  export type StoreRole$User_StoreRole_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * StoreRole without action
   */
  export type StoreRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    image: string | null
    full_name: string | null
    birthday: Date | null
    email: string | null
    address: string | null
    rankId: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    image: string | null
    full_name: string | null
    birthday: Date | null
    email: string | null
    address: string | null
    rankId: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    image: number
    full_name: number
    birthday: number
    email: number
    address: number
    rankId: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    image?: true
    full_name?: true
    birthday?: true
    email?: true
    address?: true
    rankId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    image?: true
    full_name?: true
    birthday?: true
    email?: true
    address?: true
    rankId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    image?: true
    full_name?: true
    birthday?: true
    email?: true
    address?: true
    rankId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    image: string | null
    full_name: string
    birthday: Date | null
    email: string
    address: string | null
    rankId: string | null
    role: string
    status: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    full_name?: boolean
    birthday?: boolean
    email?: boolean
    address?: boolean
    rankId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Account_Account_userIdToUser?: boolean | User$Account_Account_userIdToUserArgs<ExtArgs>
    Account_Account_createdByToUser?: boolean | User$Account_Account_createdByToUserArgs<ExtArgs>
    Account_Account_updatedByToUser?: boolean | User$Account_Account_updatedByToUserArgs<ExtArgs>
    DeliveryInformation?: boolean | User$DeliveryInformationArgs<ExtArgs>
    Permission_Permission_userIdToUser?: boolean | User$Permission_Permission_userIdToUserArgs<ExtArgs>
    Permission_Permission_createdByToUser?: boolean | User$Permission_Permission_createdByToUserArgs<ExtArgs>
    StoreRole_StoreRole_createdByToUser?: boolean | User$StoreRole_StoreRole_createdByToUserArgs<ExtArgs>
    StoreRole_StoreRole_updatedByToUser?: boolean | User$StoreRole_StoreRole_updatedByToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    image?: boolean
    full_name?: boolean
    birthday?: boolean
    email?: boolean
    address?: boolean
    rankId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "full_name" | "birthday" | "email" | "address" | "rankId" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Account_userIdToUser?: boolean | User$Account_Account_userIdToUserArgs<ExtArgs>
    Account_Account_createdByToUser?: boolean | User$Account_Account_createdByToUserArgs<ExtArgs>
    Account_Account_updatedByToUser?: boolean | User$Account_Account_updatedByToUserArgs<ExtArgs>
    DeliveryInformation?: boolean | User$DeliveryInformationArgs<ExtArgs>
    Permission_Permission_userIdToUser?: boolean | User$Permission_Permission_userIdToUserArgs<ExtArgs>
    Permission_Permission_createdByToUser?: boolean | User$Permission_Permission_createdByToUserArgs<ExtArgs>
    StoreRole_StoreRole_createdByToUser?: boolean | User$StoreRole_StoreRole_createdByToUserArgs<ExtArgs>
    StoreRole_StoreRole_updatedByToUser?: boolean | User$StoreRole_StoreRole_updatedByToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Account_Account_userIdToUser: Prisma.$AccountPayload<ExtArgs>[]
      Account_Account_createdByToUser: Prisma.$AccountPayload<ExtArgs>[]
      Account_Account_updatedByToUser: Prisma.$AccountPayload<ExtArgs>[]
      DeliveryInformation: Prisma.$DeliveryInformationPayload<ExtArgs>[]
      Permission_Permission_userIdToUser: Prisma.$PermissionPayload<ExtArgs>[]
      Permission_Permission_createdByToUser: Prisma.$PermissionPayload<ExtArgs>[]
      StoreRole_StoreRole_createdByToUser: Prisma.$StoreRolePayload<ExtArgs>[]
      StoreRole_StoreRole_updatedByToUser: Prisma.$StoreRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string | null
      full_name: string
      birthday: Date | null
      email: string
      address: string | null
      rankId: string | null
      role: string
      status: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account_Account_userIdToUser<T extends User$Account_Account_userIdToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Account_Account_userIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Account_Account_createdByToUser<T extends User$Account_Account_createdByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Account_Account_createdByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Account_Account_updatedByToUser<T extends User$Account_Account_updatedByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Account_Account_updatedByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    DeliveryInformation<T extends User$DeliveryInformationArgs<ExtArgs> = {}>(args?: Subset<T, User$DeliveryInformationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Permission_Permission_userIdToUser<T extends User$Permission_Permission_userIdToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Permission_Permission_userIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Permission_Permission_createdByToUser<T extends User$Permission_Permission_createdByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Permission_Permission_createdByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    StoreRole_StoreRole_createdByToUser<T extends User$StoreRole_StoreRole_createdByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreRole_StoreRole_createdByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    StoreRole_StoreRole_updatedByToUser<T extends User$StoreRole_StoreRole_updatedByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreRole_StoreRole_updatedByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreRolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly rankId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Account_Account_userIdToUser
   */
  export type User$Account_Account_userIdToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Account_Account_createdByToUser
   */
  export type User$Account_Account_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Account_Account_updatedByToUser
   */
  export type User$Account_Account_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.DeliveryInformation
   */
  export type User$DeliveryInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    where?: DeliveryInformationWhereInput
    orderBy?: DeliveryInformationOrderByWithRelationInput | DeliveryInformationOrderByWithRelationInput[]
    cursor?: DeliveryInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryInformationScalarFieldEnum | DeliveryInformationScalarFieldEnum[]
  }

  /**
   * User.Permission_Permission_userIdToUser
   */
  export type User$Permission_Permission_userIdToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.Permission_Permission_createdByToUser
   */
  export type User$Permission_Permission_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.StoreRole_StoreRole_createdByToUser
   */
  export type User$StoreRole_StoreRole_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    where?: StoreRoleWhereInput
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    cursor?: StoreRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreRoleScalarFieldEnum | StoreRoleScalarFieldEnum[]
  }

  /**
   * User.StoreRole_StoreRole_updatedByToUser
   */
  export type User$StoreRole_StoreRole_updatedByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRole
     */
    select?: StoreRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRole
     */
    omit?: StoreRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreRoleInclude<ExtArgs> | null
    where?: StoreRoleWhereInput
    orderBy?: StoreRoleOrderByWithRelationInput | StoreRoleOrderByWithRelationInput[]
    cursor?: StoreRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreRoleScalarFieldEnum | StoreRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryInformation
   */

  export type AggregateDeliveryInformation = {
    _count: DeliveryInformationCountAggregateOutputType | null
    _min: DeliveryInformationMinAggregateOutputType | null
    _max: DeliveryInformationMaxAggregateOutputType | null
  }

  export type DeliveryInformationMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    address: string | null
    isPrimary: boolean | null
    userId: string | null
    createdAt: Date | null
    isDelete: boolean | null
  }

  export type DeliveryInformationMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    address: string | null
    isPrimary: boolean | null
    userId: string | null
    createdAt: Date | null
    isDelete: boolean | null
  }

  export type DeliveryInformationCountAggregateOutputType = {
    id: number
    full_name: number
    phone: number
    address: number
    isPrimary: number
    userId: number
    createdAt: number
    isDelete: number
    _all: number
  }


  export type DeliveryInformationMinAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    isDelete?: true
  }

  export type DeliveryInformationMaxAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    isDelete?: true
  }

  export type DeliveryInformationCountAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    isDelete?: true
    _all?: true
  }

  export type DeliveryInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryInformation to aggregate.
     */
    where?: DeliveryInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInformations to fetch.
     */
    orderBy?: DeliveryInformationOrderByWithRelationInput | DeliveryInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryInformations
    **/
    _count?: true | DeliveryInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryInformationMaxAggregateInputType
  }

  export type GetDeliveryInformationAggregateType<T extends DeliveryInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryInformation[P]>
      : GetScalarType<T[P], AggregateDeliveryInformation[P]>
  }




  export type DeliveryInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryInformationWhereInput
    orderBy?: DeliveryInformationOrderByWithAggregationInput | DeliveryInformationOrderByWithAggregationInput[]
    by: DeliveryInformationScalarFieldEnum[] | DeliveryInformationScalarFieldEnum
    having?: DeliveryInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryInformationCountAggregateInputType | true
    _min?: DeliveryInformationMinAggregateInputType
    _max?: DeliveryInformationMaxAggregateInputType
  }

  export type DeliveryInformationGroupByOutputType = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary: boolean
    userId: string
    createdAt: Date | null
    isDelete: boolean
    _count: DeliveryInformationCountAggregateOutputType | null
    _min: DeliveryInformationMinAggregateOutputType | null
    _max: DeliveryInformationMaxAggregateOutputType | null
  }

  type GetDeliveryInformationGroupByPayload<T extends DeliveryInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryInformationGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryInformationGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    address?: boolean
    isPrimary?: boolean
    userId?: boolean
    createdAt?: boolean
    isDelete?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryInformation"]>


  export type DeliveryInformationSelectScalar = {
    id?: boolean
    full_name?: boolean
    phone?: boolean
    address?: boolean
    isPrimary?: boolean
    userId?: boolean
    createdAt?: boolean
    isDelete?: boolean
  }

  export type DeliveryInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "phone" | "address" | "isPrimary" | "userId" | "createdAt" | "isDelete", ExtArgs["result"]["deliveryInformation"]>
  export type DeliveryInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeliveryInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryInformation"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      phone: string
      address: string
      isPrimary: boolean
      userId: string
      createdAt: Date | null
      isDelete: boolean
    }, ExtArgs["result"]["deliveryInformation"]>
    composites: {}
  }

  type DeliveryInformationGetPayload<S extends boolean | null | undefined | DeliveryInformationDefaultArgs> = $Result.GetResult<Prisma.$DeliveryInformationPayload, S>

  type DeliveryInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryInformationCountAggregateInputType | true
    }

  export interface DeliveryInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryInformation'], meta: { name: 'DeliveryInformation' } }
    /**
     * Find zero or one DeliveryInformation that matches the filter.
     * @param {DeliveryInformationFindUniqueArgs} args - Arguments to find a DeliveryInformation
     * @example
     * // Get one DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryInformationFindUniqueArgs>(args: SelectSubset<T, DeliveryInformationFindUniqueArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DeliveryInformation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeliveryInformationFindUniqueOrThrowArgs} args - Arguments to find a DeliveryInformation
     * @example
     * // Get one DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DeliveryInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationFindFirstArgs} args - Arguments to find a DeliveryInformation
     * @example
     * // Get one DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryInformationFindFirstArgs>(args?: SelectSubset<T, DeliveryInformationFindFirstArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DeliveryInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationFindFirstOrThrowArgs} args - Arguments to find a DeliveryInformation
     * @example
     * // Get one DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DeliveryInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryInformations
     * const deliveryInformations = await prisma.deliveryInformation.findMany()
     * 
     * // Get first 10 DeliveryInformations
     * const deliveryInformations = await prisma.deliveryInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryInformationWithIdOnly = await prisma.deliveryInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryInformationFindManyArgs>(args?: SelectSubset<T, DeliveryInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DeliveryInformation.
     * @param {DeliveryInformationCreateArgs} args - Arguments to create a DeliveryInformation.
     * @example
     * // Create one DeliveryInformation
     * const DeliveryInformation = await prisma.deliveryInformation.create({
     *   data: {
     *     // ... data to create a DeliveryInformation
     *   }
     * })
     * 
     */
    create<T extends DeliveryInformationCreateArgs>(args: SelectSubset<T, DeliveryInformationCreateArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DeliveryInformations.
     * @param {DeliveryInformationCreateManyArgs} args - Arguments to create many DeliveryInformations.
     * @example
     * // Create many DeliveryInformations
     * const deliveryInformation = await prisma.deliveryInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryInformationCreateManyArgs>(args?: SelectSubset<T, DeliveryInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeliveryInformation.
     * @param {DeliveryInformationDeleteArgs} args - Arguments to delete one DeliveryInformation.
     * @example
     * // Delete one DeliveryInformation
     * const DeliveryInformation = await prisma.deliveryInformation.delete({
     *   where: {
     *     // ... filter to delete one DeliveryInformation
     *   }
     * })
     * 
     */
    delete<T extends DeliveryInformationDeleteArgs>(args: SelectSubset<T, DeliveryInformationDeleteArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DeliveryInformation.
     * @param {DeliveryInformationUpdateArgs} args - Arguments to update one DeliveryInformation.
     * @example
     * // Update one DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryInformationUpdateArgs>(args: SelectSubset<T, DeliveryInformationUpdateArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DeliveryInformations.
     * @param {DeliveryInformationDeleteManyArgs} args - Arguments to filter DeliveryInformations to delete.
     * @example
     * // Delete a few DeliveryInformations
     * const { count } = await prisma.deliveryInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryInformationDeleteManyArgs>(args?: SelectSubset<T, DeliveryInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryInformations
     * const deliveryInformation = await prisma.deliveryInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryInformationUpdateManyArgs>(args: SelectSubset<T, DeliveryInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryInformation.
     * @param {DeliveryInformationUpsertArgs} args - Arguments to update or create a DeliveryInformation.
     * @example
     * // Update or create a DeliveryInformation
     * const deliveryInformation = await prisma.deliveryInformation.upsert({
     *   create: {
     *     // ... data to create a DeliveryInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryInformation we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryInformationUpsertArgs>(args: SelectSubset<T, DeliveryInformationUpsertArgs<ExtArgs>>): Prisma__DeliveryInformationClient<$Result.GetResult<Prisma.$DeliveryInformationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DeliveryInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationCountArgs} args - Arguments to filter DeliveryInformations to count.
     * @example
     * // Count the number of DeliveryInformations
     * const count = await prisma.deliveryInformation.count({
     *   where: {
     *     // ... the filter for the DeliveryInformations we want to count
     *   }
     * })
    **/
    count<T extends DeliveryInformationCountArgs>(
      args?: Subset<T, DeliveryInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryInformationAggregateArgs>(args: Subset<T, DeliveryInformationAggregateArgs>): Prisma.PrismaPromise<GetDeliveryInformationAggregateType<T>>

    /**
     * Group by DeliveryInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInformationGroupByArgs} args - Group by arguments.
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
      T extends DeliveryInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryInformationGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryInformation model
   */
  readonly fields: DeliveryInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the DeliveryInformation model
   */ 
  interface DeliveryInformationFieldRefs {
    readonly id: FieldRef<"DeliveryInformation", 'String'>
    readonly full_name: FieldRef<"DeliveryInformation", 'String'>
    readonly phone: FieldRef<"DeliveryInformation", 'String'>
    readonly address: FieldRef<"DeliveryInformation", 'String'>
    readonly isPrimary: FieldRef<"DeliveryInformation", 'Boolean'>
    readonly userId: FieldRef<"DeliveryInformation", 'String'>
    readonly createdAt: FieldRef<"DeliveryInformation", 'DateTime'>
    readonly isDelete: FieldRef<"DeliveryInformation", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryInformation findUnique
   */
  export type DeliveryInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInformation to fetch.
     */
    where: DeliveryInformationWhereUniqueInput
  }

  /**
   * DeliveryInformation findUniqueOrThrow
   */
  export type DeliveryInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInformation to fetch.
     */
    where: DeliveryInformationWhereUniqueInput
  }

  /**
   * DeliveryInformation findFirst
   */
  export type DeliveryInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInformation to fetch.
     */
    where?: DeliveryInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInformations to fetch.
     */
    orderBy?: DeliveryInformationOrderByWithRelationInput | DeliveryInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryInformations.
     */
    cursor?: DeliveryInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryInformations.
     */
    distinct?: DeliveryInformationScalarFieldEnum | DeliveryInformationScalarFieldEnum[]
  }

  /**
   * DeliveryInformation findFirstOrThrow
   */
  export type DeliveryInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInformation to fetch.
     */
    where?: DeliveryInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInformations to fetch.
     */
    orderBy?: DeliveryInformationOrderByWithRelationInput | DeliveryInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryInformations.
     */
    cursor?: DeliveryInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryInformations.
     */
    distinct?: DeliveryInformationScalarFieldEnum | DeliveryInformationScalarFieldEnum[]
  }

  /**
   * DeliveryInformation findMany
   */
  export type DeliveryInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInformations to fetch.
     */
    where?: DeliveryInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInformations to fetch.
     */
    orderBy?: DeliveryInformationOrderByWithRelationInput | DeliveryInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryInformations.
     */
    cursor?: DeliveryInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInformations.
     */
    skip?: number
    distinct?: DeliveryInformationScalarFieldEnum | DeliveryInformationScalarFieldEnum[]
  }

  /**
   * DeliveryInformation create
   */
  export type DeliveryInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryInformation.
     */
    data: XOR<DeliveryInformationCreateInput, DeliveryInformationUncheckedCreateInput>
  }

  /**
   * DeliveryInformation createMany
   */
  export type DeliveryInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryInformations.
     */
    data: DeliveryInformationCreateManyInput | DeliveryInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryInformation update
   */
  export type DeliveryInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryInformation.
     */
    data: XOR<DeliveryInformationUpdateInput, DeliveryInformationUncheckedUpdateInput>
    /**
     * Choose, which DeliveryInformation to update.
     */
    where: DeliveryInformationWhereUniqueInput
  }

  /**
   * DeliveryInformation updateMany
   */
  export type DeliveryInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryInformations.
     */
    data: XOR<DeliveryInformationUpdateManyMutationInput, DeliveryInformationUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryInformations to update
     */
    where?: DeliveryInformationWhereInput
  }

  /**
   * DeliveryInformation upsert
   */
  export type DeliveryInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryInformation to update in case it exists.
     */
    where: DeliveryInformationWhereUniqueInput
    /**
     * In case the DeliveryInformation found by the `where` argument doesn't exist, create a new DeliveryInformation with this data.
     */
    create: XOR<DeliveryInformationCreateInput, DeliveryInformationUncheckedCreateInput>
    /**
     * In case the DeliveryInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryInformationUpdateInput, DeliveryInformationUncheckedUpdateInput>
  }

  /**
   * DeliveryInformation delete
   */
  export type DeliveryInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
    /**
     * Filter which DeliveryInformation to delete.
     */
    where: DeliveryInformationWhereUniqueInput
  }

  /**
   * DeliveryInformation deleteMany
   */
  export type DeliveryInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryInformations to delete
     */
    where?: DeliveryInformationWhereInput
  }

  /**
   * DeliveryInformation without action
   */
  export type DeliveryInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInformation
     */
    select?: DeliveryInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInformation
     */
    omit?: DeliveryInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInformationInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    username: 'username',
    password: 'password',
    userId: 'userId',
    storeRoleId: 'storeRoleId',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    instance: 'instance',
    permission: 'permission',
    userId: 'userId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const StoreRoleScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    status: 'status',
    role: 'role',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreRoleScalarFieldEnum = (typeof StoreRoleScalarFieldEnum)[keyof typeof StoreRoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    image: 'image',
    full_name: 'full_name',
    birthday: 'birthday',
    email: 'email',
    address: 'address',
    rankId: 'rankId',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeliveryInformationScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    phone: 'phone',
    address: 'address',
    isPrimary: 'isPrimary',
    userId: 'userId',
    createdAt: 'createdAt',
    isDelete: 'isDelete'
  };

  export type DeliveryInformationScalarFieldEnum = (typeof DeliveryInformationScalarFieldEnum)[keyof typeof DeliveryInformationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    username?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    storeRoleId?: StringNullableFilter<"Account"> | string | null
    createdBy?: StringNullableFilter<"Account"> | string | null
    updatedBy?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    User_Account_userIdToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_Account_createdByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    User_Account_updatedByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    StoreRole?: XOR<StoreRoleNullableRelationFilter, StoreRoleWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    storeRoleId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    User_Account_userIdToUser?: UserOrderByWithRelationInput
    User_Account_createdByToUser?: UserOrderByWithRelationInput
    User_Account_updatedByToUser?: UserOrderByWithRelationInput
    StoreRole?: StoreRoleOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    storeRoleId?: StringNullableFilter<"Account"> | string | null
    createdBy?: StringNullableFilter<"Account"> | string | null
    updatedBy?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    User_Account_userIdToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_Account_createdByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    User_Account_updatedByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    StoreRole?: XOR<StoreRoleNullableRelationFilter, StoreRoleWhereInput> | null
  }, "username">

  export type AccountOrderByWithAggregationInput = {
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    storeRoleId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    storeRoleId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Account"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    instance?: StringFilter<"Permission"> | string
    permission?: StringFilter<"Permission"> | string
    userId?: StringFilter<"Permission"> | string
    createdAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    createdBy?: StringFilter<"Permission"> | string
    updatedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    updatedBy?: StringNullableFilter<"Permission"> | string | null
    User_Permission_userIdToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_Permission_createdByToUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    instance?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    User_Permission_userIdToUser?: UserOrderByWithRelationInput
    User_Permission_createdByToUser?: UserOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    instance?: StringFilter<"Permission"> | string
    permission?: StringFilter<"Permission"> | string
    userId?: StringFilter<"Permission"> | string
    createdAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    createdBy?: StringFilter<"Permission"> | string
    updatedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    updatedBy?: StringNullableFilter<"Permission"> | string | null
    User_Permission_userIdToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_Permission_createdByToUser?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    instance?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    instance?: StringWithAggregatesFilter<"Permission"> | string
    permission?: StringWithAggregatesFilter<"Permission"> | string
    userId?: StringWithAggregatesFilter<"Permission"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Permission"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Permission"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Permission"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type StoreRoleWhereInput = {
    AND?: StoreRoleWhereInput | StoreRoleWhereInput[]
    OR?: StoreRoleWhereInput[]
    NOT?: StoreRoleWhereInput | StoreRoleWhereInput[]
    id?: StringFilter<"StoreRole"> | string
    storeId?: StringFilter<"StoreRole"> | string
    status?: StringFilter<"StoreRole"> | string
    role?: StringFilter<"StoreRole"> | string
    createdBy?: StringFilter<"StoreRole"> | string
    updatedBy?: StringNullableFilter<"StoreRole"> | string | null
    createdAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
    Account?: AccountListRelationFilter
    User_StoreRole_createdByToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_StoreRole_updatedByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type StoreRoleOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Account?: AccountOrderByRelationAggregateInput
    User_StoreRole_createdByToUser?: UserOrderByWithRelationInput
    User_StoreRole_updatedByToUser?: UserOrderByWithRelationInput
  }

  export type StoreRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreRoleWhereInput | StoreRoleWhereInput[]
    OR?: StoreRoleWhereInput[]
    NOT?: StoreRoleWhereInput | StoreRoleWhereInput[]
    storeId?: StringFilter<"StoreRole"> | string
    status?: StringFilter<"StoreRole"> | string
    role?: StringFilter<"StoreRole"> | string
    createdBy?: StringFilter<"StoreRole"> | string
    updatedBy?: StringNullableFilter<"StoreRole"> | string | null
    createdAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
    Account?: AccountListRelationFilter
    User_StoreRole_createdByToUser?: XOR<UserRelationFilter, UserWhereInput>
    User_StoreRole_updatedByToUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type StoreRoleOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StoreRoleCountOrderByAggregateInput
    _max?: StoreRoleMaxOrderByAggregateInput
    _min?: StoreRoleMinOrderByAggregateInput
  }

  export type StoreRoleScalarWhereWithAggregatesInput = {
    AND?: StoreRoleScalarWhereWithAggregatesInput | StoreRoleScalarWhereWithAggregatesInput[]
    OR?: StoreRoleScalarWhereWithAggregatesInput[]
    NOT?: StoreRoleScalarWhereWithAggregatesInput | StoreRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoreRole"> | string
    storeId?: StringWithAggregatesFilter<"StoreRole"> | string
    status?: StringWithAggregatesFilter<"StoreRole"> | string
    role?: StringWithAggregatesFilter<"StoreRole"> | string
    createdBy?: StringWithAggregatesFilter<"StoreRole"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"StoreRole"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"StoreRole"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"StoreRole"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    full_name?: StringFilter<"User"> | string
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    rankId?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Account_Account_userIdToUser?: AccountListRelationFilter
    Account_Account_createdByToUser?: AccountListRelationFilter
    Account_Account_updatedByToUser?: AccountListRelationFilter
    DeliveryInformation?: DeliveryInformationListRelationFilter
    Permission_Permission_userIdToUser?: PermissionListRelationFilter
    Permission_Permission_createdByToUser?: PermissionListRelationFilter
    StoreRole_StoreRole_createdByToUser?: StoreRoleListRelationFilter
    StoreRole_StoreRole_updatedByToUser?: StoreRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    full_name?: SortOrder
    birthday?: SortOrderInput | SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    rankId?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Account_Account_userIdToUser?: AccountOrderByRelationAggregateInput
    Account_Account_createdByToUser?: AccountOrderByRelationAggregateInput
    Account_Account_updatedByToUser?: AccountOrderByRelationAggregateInput
    DeliveryInformation?: DeliveryInformationOrderByRelationAggregateInput
    Permission_Permission_userIdToUser?: PermissionOrderByRelationAggregateInput
    Permission_Permission_createdByToUser?: PermissionOrderByRelationAggregateInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleOrderByRelationAggregateInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    image?: StringNullableFilter<"User"> | string | null
    full_name?: StringFilter<"User"> | string
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    rankId?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Account_Account_userIdToUser?: AccountListRelationFilter
    Account_Account_createdByToUser?: AccountListRelationFilter
    Account_Account_updatedByToUser?: AccountListRelationFilter
    DeliveryInformation?: DeliveryInformationListRelationFilter
    Permission_Permission_userIdToUser?: PermissionListRelationFilter
    Permission_Permission_createdByToUser?: PermissionListRelationFilter
    StoreRole_StoreRole_createdByToUser?: StoreRoleListRelationFilter
    StoreRole_StoreRole_updatedByToUser?: StoreRoleListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    full_name?: SortOrder
    birthday?: SortOrderInput | SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    rankId?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    full_name?: StringWithAggregatesFilter<"User"> | string
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    rankId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type DeliveryInformationWhereInput = {
    AND?: DeliveryInformationWhereInput | DeliveryInformationWhereInput[]
    OR?: DeliveryInformationWhereInput[]
    NOT?: DeliveryInformationWhereInput | DeliveryInformationWhereInput[]
    id?: StringFilter<"DeliveryInformation"> | string
    full_name?: StringFilter<"DeliveryInformation"> | string
    phone?: StringFilter<"DeliveryInformation"> | string
    address?: StringFilter<"DeliveryInformation"> | string
    isPrimary?: BoolFilter<"DeliveryInformation"> | boolean
    userId?: StringFilter<"DeliveryInformation"> | string
    createdAt?: DateTimeNullableFilter<"DeliveryInformation"> | Date | string | null
    isDelete?: BoolFilter<"DeliveryInformation"> | boolean
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DeliveryInformationOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type DeliveryInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryInformationWhereInput | DeliveryInformationWhereInput[]
    OR?: DeliveryInformationWhereInput[]
    NOT?: DeliveryInformationWhereInput | DeliveryInformationWhereInput[]
    full_name?: StringFilter<"DeliveryInformation"> | string
    phone?: StringFilter<"DeliveryInformation"> | string
    address?: StringFilter<"DeliveryInformation"> | string
    isPrimary?: BoolFilter<"DeliveryInformation"> | boolean
    userId?: StringFilter<"DeliveryInformation"> | string
    createdAt?: DateTimeNullableFilter<"DeliveryInformation"> | Date | string | null
    isDelete?: BoolFilter<"DeliveryInformation"> | boolean
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DeliveryInformationOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    _count?: DeliveryInformationCountOrderByAggregateInput
    _max?: DeliveryInformationMaxOrderByAggregateInput
    _min?: DeliveryInformationMinOrderByAggregateInput
  }

  export type DeliveryInformationScalarWhereWithAggregatesInput = {
    AND?: DeliveryInformationScalarWhereWithAggregatesInput | DeliveryInformationScalarWhereWithAggregatesInput[]
    OR?: DeliveryInformationScalarWhereWithAggregatesInput[]
    NOT?: DeliveryInformationScalarWhereWithAggregatesInput | DeliveryInformationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryInformation"> | string
    full_name?: StringWithAggregatesFilter<"DeliveryInformation"> | string
    phone?: StringWithAggregatesFilter<"DeliveryInformation"> | string
    address?: StringWithAggregatesFilter<"DeliveryInformation"> | string
    isPrimary?: BoolWithAggregatesFilter<"DeliveryInformation"> | boolean
    userId?: StringWithAggregatesFilter<"DeliveryInformation"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"DeliveryInformation"> | Date | string | null
    isDelete?: BoolWithAggregatesFilter<"DeliveryInformation"> | boolean
  }

  export type AccountCreateInput = {
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_Account_userIdToUser: UserCreateNestedOneWithoutAccount_Account_userIdToUserInput
    User_Account_createdByToUser?: UserCreateNestedOneWithoutAccount_Account_createdByToUserInput
    User_Account_updatedByToUser?: UserCreateNestedOneWithoutAccount_Account_updatedByToUserInput
    StoreRole?: StoreRoleCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Account_userIdToUser?: UserUpdateOneRequiredWithoutAccount_Account_userIdToUserNestedInput
    User_Account_createdByToUser?: UserUpdateOneWithoutAccount_Account_createdByToUserNestedInput
    User_Account_updatedByToUser?: UserUpdateOneWithoutAccount_Account_updatedByToUserNestedInput
    StoreRole?: StoreRoleUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PermissionCreateInput = {
    id: string
    instance: string
    permission: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    User_Permission_userIdToUser: UserCreateNestedOneWithoutPermission_Permission_userIdToUserInput
    User_Permission_createdByToUser: UserCreateNestedOneWithoutPermission_Permission_createdByToUserInput
  }

  export type PermissionUncheckedCreateInput = {
    id: string
    instance: string
    permission: string
    userId: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    User_Permission_userIdToUser?: UserUpdateOneRequiredWithoutPermission_Permission_userIdToUserNestedInput
    User_Permission_createdByToUser?: UserUpdateOneRequiredWithoutPermission_Permission_createdByToUserNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionCreateManyInput = {
    id: string
    instance: string
    permission: string
    userId: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreRoleCreateInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountCreateNestedManyWithoutStoreRoleInput
    User_StoreRole_createdByToUser: UserCreateNestedOneWithoutStoreRole_StoreRole_createdByToUserInput
    User_StoreRole_updatedByToUser?: UserCreateNestedOneWithoutStoreRole_StoreRole_updatedByToUserInput
  }

  export type StoreRoleUncheckedCreateInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountUncheckedCreateNestedManyWithoutStoreRoleInput
  }

  export type StoreRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUpdateManyWithoutStoreRoleNestedInput
    User_StoreRole_createdByToUser?: UserUpdateOneRequiredWithoutStoreRole_StoreRole_createdByToUserNestedInput
    User_StoreRole_updatedByToUser?: UserUpdateOneWithoutStoreRole_StoreRole_updatedByToUserNestedInput
  }

  export type StoreRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUncheckedUpdateManyWithoutStoreRoleNestedInput
  }

  export type StoreRoleCreateManyInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryInformationCreateInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    createdAt?: Date | string | null
    isDelete?: boolean
    User: UserCreateNestedOneWithoutDeliveryInformationInput
  }

  export type DeliveryInformationUncheckedCreateInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    userId: string
    createdAt?: Date | string | null
    isDelete?: boolean
  }

  export type DeliveryInformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutDeliveryInformationNestedInput
  }

  export type DeliveryInformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeliveryInformationCreateManyInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    userId: string
    createdAt?: Date | string | null
    isDelete?: boolean
  }

  export type DeliveryInformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeliveryInformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StoreRoleNullableRelationFilter = {
    is?: StoreRoleWhereInput | null
    isNot?: StoreRoleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountCountOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    storeRoleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    storeRoleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    storeRoleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    instance?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    instance?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    instance?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreRoleCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRoleMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryInformationListRelationFilter = {
    every?: DeliveryInformationWhereInput
    some?: DeliveryInformationWhereInput
    none?: DeliveryInformationWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type StoreRoleListRelationFilter = {
    every?: StoreRoleWhereInput
    some?: StoreRoleWhereInput
    none?: StoreRoleWhereInput
  }

  export type DeliveryInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    full_name?: SortOrder
    birthday?: SortOrder
    email?: SortOrder
    address?: SortOrder
    rankId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    full_name?: SortOrder
    birthday?: SortOrder
    email?: SortOrder
    address?: SortOrder
    rankId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    full_name?: SortOrder
    birthday?: SortOrder
    email?: SortOrder
    address?: SortOrder
    rankId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeliveryInformationCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isDelete?: SortOrder
  }

  export type DeliveryInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isDelete?: SortOrder
  }

  export type DeliveryInformationMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isDelete?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccount_Account_userIdToUserInput = {
    create?: XOR<UserCreateWithoutAccount_Account_userIdToUserInput, UserUncheckedCreateWithoutAccount_Account_userIdToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_userIdToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccount_Account_createdByToUserInput = {
    create?: XOR<UserCreateWithoutAccount_Account_createdByToUserInput, UserUncheckedCreateWithoutAccount_Account_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccount_Account_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutAccount_Account_updatedByToUserInput, UserUncheckedCreateWithoutAccount_Account_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type StoreRoleCreateNestedOneWithoutAccountInput = {
    create?: XOR<StoreRoleCreateWithoutAccountInput, StoreRoleUncheckedCreateWithoutAccountInput>
    connectOrCreate?: StoreRoleCreateOrConnectWithoutAccountInput
    connect?: StoreRoleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccount_Account_userIdToUserNestedInput = {
    create?: XOR<UserCreateWithoutAccount_Account_userIdToUserInput, UserUncheckedCreateWithoutAccount_Account_userIdToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_userIdToUserInput
    upsert?: UserUpsertWithoutAccount_Account_userIdToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccount_Account_userIdToUserInput, UserUpdateWithoutAccount_Account_userIdToUserInput>, UserUncheckedUpdateWithoutAccount_Account_userIdToUserInput>
  }

  export type UserUpdateOneWithoutAccount_Account_createdByToUserNestedInput = {
    create?: XOR<UserCreateWithoutAccount_Account_createdByToUserInput, UserUncheckedCreateWithoutAccount_Account_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_createdByToUserInput
    upsert?: UserUpsertWithoutAccount_Account_createdByToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccount_Account_createdByToUserInput, UserUpdateWithoutAccount_Account_createdByToUserInput>, UserUncheckedUpdateWithoutAccount_Account_createdByToUserInput>
  }

  export type UserUpdateOneWithoutAccount_Account_updatedByToUserNestedInput = {
    create?: XOR<UserCreateWithoutAccount_Account_updatedByToUserInput, UserUncheckedCreateWithoutAccount_Account_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccount_Account_updatedByToUserInput
    upsert?: UserUpsertWithoutAccount_Account_updatedByToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccount_Account_updatedByToUserInput, UserUpdateWithoutAccount_Account_updatedByToUserInput>, UserUncheckedUpdateWithoutAccount_Account_updatedByToUserInput>
  }

  export type StoreRoleUpdateOneWithoutAccountNestedInput = {
    create?: XOR<StoreRoleCreateWithoutAccountInput, StoreRoleUncheckedCreateWithoutAccountInput>
    connectOrCreate?: StoreRoleCreateOrConnectWithoutAccountInput
    upsert?: StoreRoleUpsertWithoutAccountInput
    disconnect?: StoreRoleWhereInput | boolean
    delete?: StoreRoleWhereInput | boolean
    connect?: StoreRoleWhereUniqueInput
    update?: XOR<XOR<StoreRoleUpdateToOneWithWhereWithoutAccountInput, StoreRoleUpdateWithoutAccountInput>, StoreRoleUncheckedUpdateWithoutAccountInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutPermission_Permission_userIdToUserInput = {
    create?: XOR<UserCreateWithoutPermission_Permission_userIdToUserInput, UserUncheckedCreateWithoutPermission_Permission_userIdToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermission_Permission_userIdToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPermission_Permission_createdByToUserInput = {
    create?: XOR<UserCreateWithoutPermission_Permission_createdByToUserInput, UserUncheckedCreateWithoutPermission_Permission_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermission_Permission_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPermission_Permission_userIdToUserNestedInput = {
    create?: XOR<UserCreateWithoutPermission_Permission_userIdToUserInput, UserUncheckedCreateWithoutPermission_Permission_userIdToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermission_Permission_userIdToUserInput
    upsert?: UserUpsertWithoutPermission_Permission_userIdToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermission_Permission_userIdToUserInput, UserUpdateWithoutPermission_Permission_userIdToUserInput>, UserUncheckedUpdateWithoutPermission_Permission_userIdToUserInput>
  }

  export type UserUpdateOneRequiredWithoutPermission_Permission_createdByToUserNestedInput = {
    create?: XOR<UserCreateWithoutPermission_Permission_createdByToUserInput, UserUncheckedCreateWithoutPermission_Permission_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermission_Permission_createdByToUserInput
    upsert?: UserUpsertWithoutPermission_Permission_createdByToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermission_Permission_createdByToUserInput, UserUpdateWithoutPermission_Permission_createdByToUserInput>, UserUncheckedUpdateWithoutPermission_Permission_createdByToUserInput>
  }

  export type AccountCreateNestedManyWithoutStoreRoleInput = {
    create?: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput> | AccountCreateWithoutStoreRoleInput[] | AccountUncheckedCreateWithoutStoreRoleInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutStoreRoleInput | AccountCreateOrConnectWithoutStoreRoleInput[]
    createMany?: AccountCreateManyStoreRoleInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStoreRole_StoreRole_createdByToUserInput = {
    create?: XOR<UserCreateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreRole_StoreRole_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStoreRole_StoreRole_updatedByToUserInput = {
    create?: XOR<UserCreateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreRole_StoreRole_updatedByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutStoreRoleInput = {
    create?: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput> | AccountCreateWithoutStoreRoleInput[] | AccountUncheckedCreateWithoutStoreRoleInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutStoreRoleInput | AccountCreateOrConnectWithoutStoreRoleInput[]
    createMany?: AccountCreateManyStoreRoleInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutStoreRoleNestedInput = {
    create?: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput> | AccountCreateWithoutStoreRoleInput[] | AccountUncheckedCreateWithoutStoreRoleInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutStoreRoleInput | AccountCreateOrConnectWithoutStoreRoleInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutStoreRoleInput | AccountUpsertWithWhereUniqueWithoutStoreRoleInput[]
    createMany?: AccountCreateManyStoreRoleInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutStoreRoleInput | AccountUpdateWithWhereUniqueWithoutStoreRoleInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutStoreRoleInput | AccountUpdateManyWithWhereWithoutStoreRoleInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStoreRole_StoreRole_createdByToUserNestedInput = {
    create?: XOR<UserCreateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreRole_StoreRole_createdByToUserInput
    upsert?: UserUpsertWithoutStoreRole_StoreRole_createdByToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreRole_StoreRole_createdByToUserInput, UserUpdateWithoutStoreRole_StoreRole_createdByToUserInput>, UserUncheckedUpdateWithoutStoreRole_StoreRole_createdByToUserInput>
  }

  export type UserUpdateOneWithoutStoreRole_StoreRole_updatedByToUserNestedInput = {
    create?: XOR<UserCreateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_updatedByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreRole_StoreRole_updatedByToUserInput
    upsert?: UserUpsertWithoutStoreRole_StoreRole_updatedByToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreRole_StoreRole_updatedByToUserInput, UserUpdateWithoutStoreRole_StoreRole_updatedByToUserInput>, UserUncheckedUpdateWithoutStoreRole_StoreRole_updatedByToUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutStoreRoleNestedInput = {
    create?: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput> | AccountCreateWithoutStoreRoleInput[] | AccountUncheckedCreateWithoutStoreRoleInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutStoreRoleInput | AccountCreateOrConnectWithoutStoreRoleInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutStoreRoleInput | AccountUpsertWithWhereUniqueWithoutStoreRoleInput[]
    createMany?: AccountCreateManyStoreRoleInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutStoreRoleInput | AccountUpdateWithWhereUniqueWithoutStoreRoleInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutStoreRoleInput | AccountUpdateManyWithWhereWithoutStoreRoleInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutUser_Account_userIdToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput> | AccountCreateWithoutUser_Account_userIdToUserInput[] | AccountUncheckedCreateWithoutUser_Account_userIdToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_userIdToUserInput | AccountCreateOrConnectWithoutUser_Account_userIdToUserInput[]
    createMany?: AccountCreateManyUser_Account_userIdToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUser_Account_createdByToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput> | AccountCreateWithoutUser_Account_createdByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_createdByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_createdByToUserInput | AccountCreateOrConnectWithoutUser_Account_createdByToUserInput[]
    createMany?: AccountCreateManyUser_Account_createdByToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput> | AccountCreateWithoutUser_Account_updatedByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput | AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput[]
    createMany?: AccountCreateManyUser_Account_updatedByToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeliveryInformationCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput> | DeliveryInformationCreateWithoutUserInput[] | DeliveryInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInformationCreateOrConnectWithoutUserInput | DeliveryInformationCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryInformationCreateManyUserInputEnvelope
    connect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput> | PermissionCreateWithoutUser_Permission_userIdToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput | PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_userIdToUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput> | PermissionCreateWithoutUser_Permission_createdByToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput | PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_createdByToUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_createdByToUserInputEnvelope
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
  }

  export type StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_updatedByToUserInputEnvelope
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput> | AccountCreateWithoutUser_Account_userIdToUserInput[] | AccountUncheckedCreateWithoutUser_Account_userIdToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_userIdToUserInput | AccountCreateOrConnectWithoutUser_Account_userIdToUserInput[]
    createMany?: AccountCreateManyUser_Account_userIdToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput> | AccountCreateWithoutUser_Account_createdByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_createdByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_createdByToUserInput | AccountCreateOrConnectWithoutUser_Account_createdByToUserInput[]
    createMany?: AccountCreateManyUser_Account_createdByToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput = {
    create?: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput> | AccountCreateWithoutUser_Account_updatedByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput | AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput[]
    createMany?: AccountCreateManyUser_Account_updatedByToUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeliveryInformationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput> | DeliveryInformationCreateWithoutUserInput[] | DeliveryInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInformationCreateOrConnectWithoutUserInput | DeliveryInformationCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryInformationCreateManyUserInputEnvelope
    connect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput> | PermissionCreateWithoutUser_Permission_userIdToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput | PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_userIdToUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput> | PermissionCreateWithoutUser_Permission_createdByToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput | PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_createdByToUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_createdByToUserInputEnvelope
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
  }

  export type StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_updatedByToUserInputEnvelope
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput> | AccountCreateWithoutUser_Account_userIdToUserInput[] | AccountUncheckedCreateWithoutUser_Account_userIdToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_userIdToUserInput | AccountCreateOrConnectWithoutUser_Account_userIdToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_userIdToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_userIdToUserInput[]
    createMany?: AccountCreateManyUser_Account_userIdToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_userIdToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_userIdToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_userIdToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_userIdToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput> | AccountCreateWithoutUser_Account_createdByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_createdByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_createdByToUserInput | AccountCreateOrConnectWithoutUser_Account_createdByToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_createdByToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_createdByToUserInput[]
    createMany?: AccountCreateManyUser_Account_createdByToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_createdByToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_createdByToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_createdByToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_createdByToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput> | AccountCreateWithoutUser_Account_updatedByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput | AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_updatedByToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_updatedByToUserInput[]
    createMany?: AccountCreateManyUser_Account_updatedByToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_updatedByToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_updatedByToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_updatedByToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_updatedByToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeliveryInformationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput> | DeliveryInformationCreateWithoutUserInput[] | DeliveryInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInformationCreateOrConnectWithoutUserInput | DeliveryInformationCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryInformationUpsertWithWhereUniqueWithoutUserInput | DeliveryInformationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryInformationCreateManyUserInputEnvelope
    set?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    disconnect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    delete?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    connect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    update?: DeliveryInformationUpdateWithWhereUniqueWithoutUserInput | DeliveryInformationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryInformationUpdateManyWithWhereWithoutUserInput | DeliveryInformationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryInformationScalarWhereInput | DeliveryInformationScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput> | PermissionCreateWithoutUser_Permission_userIdToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput | PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUser_Permission_userIdToUserInput | PermissionUpsertWithWhereUniqueWithoutUser_Permission_userIdToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_userIdToUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUser_Permission_userIdToUserInput | PermissionUpdateWithWhereUniqueWithoutUser_Permission_userIdToUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUser_Permission_userIdToUserInput | PermissionUpdateManyWithWhereWithoutUser_Permission_userIdToUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput> | PermissionCreateWithoutUser_Permission_createdByToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput | PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUser_Permission_createdByToUserInput | PermissionUpsertWithWhereUniqueWithoutUser_Permission_createdByToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_createdByToUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUser_Permission_createdByToUserInput | PermissionUpdateWithWhereUniqueWithoutUser_Permission_createdByToUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUser_Permission_createdByToUserInput | PermissionUpdateManyWithWhereWithoutUser_Permission_createdByToUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput[]
    upsert?: StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_createdByToUserInputEnvelope
    set?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    disconnect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    delete?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    update?: StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput[]
    updateMany?: StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_createdByToUserInput[]
    deleteMany?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
  }

  export type StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput[]
    upsert?: StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_updatedByToUserInputEnvelope
    set?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    disconnect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    delete?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    update?: StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput[]
    updateMany?: StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_updatedByToUserInput[]
    deleteMany?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput> | AccountCreateWithoutUser_Account_userIdToUserInput[] | AccountUncheckedCreateWithoutUser_Account_userIdToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_userIdToUserInput | AccountCreateOrConnectWithoutUser_Account_userIdToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_userIdToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_userIdToUserInput[]
    createMany?: AccountCreateManyUser_Account_userIdToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_userIdToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_userIdToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_userIdToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_userIdToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput> | AccountCreateWithoutUser_Account_createdByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_createdByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_createdByToUserInput | AccountCreateOrConnectWithoutUser_Account_createdByToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_createdByToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_createdByToUserInput[]
    createMany?: AccountCreateManyUser_Account_createdByToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_createdByToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_createdByToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_createdByToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_createdByToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput = {
    create?: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput> | AccountCreateWithoutUser_Account_updatedByToUserInput[] | AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput | AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUser_Account_updatedByToUserInput | AccountUpsertWithWhereUniqueWithoutUser_Account_updatedByToUserInput[]
    createMany?: AccountCreateManyUser_Account_updatedByToUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUser_Account_updatedByToUserInput | AccountUpdateWithWhereUniqueWithoutUser_Account_updatedByToUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUser_Account_updatedByToUserInput | AccountUpdateManyWithWhereWithoutUser_Account_updatedByToUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput> | DeliveryInformationCreateWithoutUserInput[] | DeliveryInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInformationCreateOrConnectWithoutUserInput | DeliveryInformationCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryInformationUpsertWithWhereUniqueWithoutUserInput | DeliveryInformationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryInformationCreateManyUserInputEnvelope
    set?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    disconnect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    delete?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    connect?: DeliveryInformationWhereUniqueInput | DeliveryInformationWhereUniqueInput[]
    update?: DeliveryInformationUpdateWithWhereUniqueWithoutUserInput | DeliveryInformationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryInformationUpdateManyWithWhereWithoutUserInput | DeliveryInformationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryInformationScalarWhereInput | DeliveryInformationScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput> | PermissionCreateWithoutUser_Permission_userIdToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput | PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUser_Permission_userIdToUserInput | PermissionUpsertWithWhereUniqueWithoutUser_Permission_userIdToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_userIdToUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUser_Permission_userIdToUserInput | PermissionUpdateWithWhereUniqueWithoutUser_Permission_userIdToUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUser_Permission_userIdToUserInput | PermissionUpdateManyWithWhereWithoutUser_Permission_userIdToUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput> | PermissionCreateWithoutUser_Permission_createdByToUserInput[] | PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput | PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUser_Permission_createdByToUserInput | PermissionUpsertWithWhereUniqueWithoutUser_Permission_createdByToUserInput[]
    createMany?: PermissionCreateManyUser_Permission_createdByToUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUser_Permission_createdByToUserInput | PermissionUpdateWithWhereUniqueWithoutUser_Permission_createdByToUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUser_Permission_createdByToUserInput | PermissionUpdateManyWithWhereWithoutUser_Permission_createdByToUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput[]
    upsert?: StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_createdByToUserInputEnvelope
    set?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    disconnect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    delete?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    update?: StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput[]
    updateMany?: StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_createdByToUserInput | StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_createdByToUserInput[]
    deleteMany?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
  }

  export type StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput = {
    create?: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput> | StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput[] | StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput[]
    connectOrCreate?: StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput | StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput[]
    upsert?: StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput[]
    createMany?: StoreRoleCreateManyUser_StoreRole_updatedByToUserInputEnvelope
    set?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    disconnect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    delete?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    connect?: StoreRoleWhereUniqueInput | StoreRoleWhereUniqueInput[]
    update?: StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput[]
    updateMany?: StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_updatedByToUserInput | StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_updatedByToUserInput[]
    deleteMany?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeliveryInformationInput = {
    create?: XOR<UserCreateWithoutDeliveryInformationInput, UserUncheckedCreateWithoutDeliveryInformationInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInformationInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDeliveryInformationNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryInformationInput, UserUncheckedCreateWithoutDeliveryInformationInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInformationInput
    upsert?: UserUpsertWithoutDeliveryInformationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryInformationInput, UserUpdateWithoutDeliveryInformationInput>, UserUncheckedUpdateWithoutDeliveryInformationInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccount_Account_userIdToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAccount_Account_userIdToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAccount_Account_userIdToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccount_Account_userIdToUserInput, UserUncheckedCreateWithoutAccount_Account_userIdToUserInput>
  }

  export type UserCreateWithoutAccount_Account_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAccount_Account_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAccount_Account_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccount_Account_createdByToUserInput, UserUncheckedCreateWithoutAccount_Account_createdByToUserInput>
  }

  export type UserCreateWithoutAccount_Account_updatedByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutAccount_Account_updatedByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutAccount_Account_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccount_Account_updatedByToUserInput, UserUncheckedCreateWithoutAccount_Account_updatedByToUserInput>
  }

  export type StoreRoleCreateWithoutAccountInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_StoreRole_createdByToUser: UserCreateNestedOneWithoutStoreRole_StoreRole_createdByToUserInput
    User_StoreRole_updatedByToUser?: UserCreateNestedOneWithoutStoreRole_StoreRole_updatedByToUserInput
  }

  export type StoreRoleUncheckedCreateWithoutAccountInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRoleCreateOrConnectWithoutAccountInput = {
    where: StoreRoleWhereUniqueInput
    create: XOR<StoreRoleCreateWithoutAccountInput, StoreRoleUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccount_Account_userIdToUserInput = {
    update: XOR<UserUpdateWithoutAccount_Account_userIdToUserInput, UserUncheckedUpdateWithoutAccount_Account_userIdToUserInput>
    create: XOR<UserCreateWithoutAccount_Account_userIdToUserInput, UserUncheckedCreateWithoutAccount_Account_userIdToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccount_Account_userIdToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccount_Account_userIdToUserInput, UserUncheckedUpdateWithoutAccount_Account_userIdToUserInput>
  }

  export type UserUpdateWithoutAccount_Account_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccount_Account_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUpsertWithoutAccount_Account_createdByToUserInput = {
    update: XOR<UserUpdateWithoutAccount_Account_createdByToUserInput, UserUncheckedUpdateWithoutAccount_Account_createdByToUserInput>
    create: XOR<UserCreateWithoutAccount_Account_createdByToUserInput, UserUncheckedCreateWithoutAccount_Account_createdByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccount_Account_createdByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccount_Account_createdByToUserInput, UserUncheckedUpdateWithoutAccount_Account_createdByToUserInput>
  }

  export type UserUpdateWithoutAccount_Account_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccount_Account_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUpsertWithoutAccount_Account_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutAccount_Account_updatedByToUserInput, UserUncheckedUpdateWithoutAccount_Account_updatedByToUserInput>
    create: XOR<UserCreateWithoutAccount_Account_updatedByToUserInput, UserUncheckedCreateWithoutAccount_Account_updatedByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccount_Account_updatedByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccount_Account_updatedByToUserInput, UserUncheckedUpdateWithoutAccount_Account_updatedByToUserInput>
  }

  export type UserUpdateWithoutAccount_Account_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccount_Account_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type StoreRoleUpsertWithoutAccountInput = {
    update: XOR<StoreRoleUpdateWithoutAccountInput, StoreRoleUncheckedUpdateWithoutAccountInput>
    create: XOR<StoreRoleCreateWithoutAccountInput, StoreRoleUncheckedCreateWithoutAccountInput>
    where?: StoreRoleWhereInput
  }

  export type StoreRoleUpdateToOneWithWhereWithoutAccountInput = {
    where?: StoreRoleWhereInput
    data: XOR<StoreRoleUpdateWithoutAccountInput, StoreRoleUncheckedUpdateWithoutAccountInput>
  }

  export type StoreRoleUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_StoreRole_createdByToUser?: UserUpdateOneRequiredWithoutStoreRole_StoreRole_createdByToUserNestedInput
    User_StoreRole_updatedByToUser?: UserUpdateOneWithoutStoreRole_StoreRole_updatedByToUserNestedInput
  }

  export type StoreRoleUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutPermission_Permission_userIdToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutPermission_Permission_userIdToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutPermission_Permission_userIdToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermission_Permission_userIdToUserInput, UserUncheckedCreateWithoutPermission_Permission_userIdToUserInput>
  }

  export type UserCreateWithoutPermission_Permission_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutPermission_Permission_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutPermission_Permission_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermission_Permission_createdByToUserInput, UserUncheckedCreateWithoutPermission_Permission_createdByToUserInput>
  }

  export type UserUpsertWithoutPermission_Permission_userIdToUserInput = {
    update: XOR<UserUpdateWithoutPermission_Permission_userIdToUserInput, UserUncheckedUpdateWithoutPermission_Permission_userIdToUserInput>
    create: XOR<UserCreateWithoutPermission_Permission_userIdToUserInput, UserUncheckedCreateWithoutPermission_Permission_userIdToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermission_Permission_userIdToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermission_Permission_userIdToUserInput, UserUncheckedUpdateWithoutPermission_Permission_userIdToUserInput>
  }

  export type UserUpdateWithoutPermission_Permission_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermission_Permission_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUpsertWithoutPermission_Permission_createdByToUserInput = {
    update: XOR<UserUpdateWithoutPermission_Permission_createdByToUserInput, UserUncheckedUpdateWithoutPermission_Permission_createdByToUserInput>
    create: XOR<UserCreateWithoutPermission_Permission_createdByToUserInput, UserUncheckedCreateWithoutPermission_Permission_createdByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermission_Permission_createdByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermission_Permission_createdByToUserInput, UserUncheckedUpdateWithoutPermission_Permission_createdByToUserInput>
  }

  export type UserUpdateWithoutPermission_Permission_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermission_Permission_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type AccountCreateWithoutStoreRoleInput = {
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_Account_userIdToUser: UserCreateNestedOneWithoutAccount_Account_userIdToUserInput
    User_Account_createdByToUser?: UserCreateNestedOneWithoutAccount_Account_createdByToUserInput
    User_Account_updatedByToUser?: UserCreateNestedOneWithoutAccount_Account_updatedByToUserInput
  }

  export type AccountUncheckedCreateWithoutStoreRoleInput = {
    username: string
    password: string
    userId: string
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutStoreRoleInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput>
  }

  export type AccountCreateManyStoreRoleInputEnvelope = {
    data: AccountCreateManyStoreRoleInput | AccountCreateManyStoreRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStoreRole_StoreRole_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutStoreRole_StoreRole_createdByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutStoreRole_StoreRole_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_createdByToUserInput>
  }

  export type UserCreateWithoutStoreRole_StoreRole_updatedByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
  }

  export type UserUncheckedCreateWithoutStoreRole_StoreRole_updatedByToUserInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    DeliveryInformation?: DeliveryInformationUncheckedCreateNestedManyWithoutUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
  }

  export type UserCreateOrConnectWithoutStoreRole_StoreRole_updatedByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_updatedByToUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutStoreRoleInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutStoreRoleInput, AccountUncheckedUpdateWithoutStoreRoleInput>
    create: XOR<AccountCreateWithoutStoreRoleInput, AccountUncheckedCreateWithoutStoreRoleInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutStoreRoleInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutStoreRoleInput, AccountUncheckedUpdateWithoutStoreRoleInput>
  }

  export type AccountUpdateManyWithWhereWithoutStoreRoleInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutStoreRoleInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    username?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    storeRoleId?: StringNullableFilter<"Account"> | string | null
    createdBy?: StringNullableFilter<"Account"> | string | null
    updatedBy?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type UserUpsertWithoutStoreRole_StoreRole_createdByToUserInput = {
    update: XOR<UserUpdateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedUpdateWithoutStoreRole_StoreRole_createdByToUserInput>
    create: XOR<UserCreateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_createdByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoreRole_StoreRole_createdByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoreRole_StoreRole_createdByToUserInput, UserUncheckedUpdateWithoutStoreRole_StoreRole_createdByToUserInput>
  }

  export type UserUpdateWithoutStoreRole_StoreRole_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreRole_StoreRole_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUpsertWithoutStoreRole_StoreRole_updatedByToUserInput = {
    update: XOR<UserUpdateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedUpdateWithoutStoreRole_StoreRole_updatedByToUserInput>
    create: XOR<UserCreateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedCreateWithoutStoreRole_StoreRole_updatedByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoreRole_StoreRole_updatedByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoreRole_StoreRole_updatedByToUserInput, UserUncheckedUpdateWithoutStoreRole_StoreRole_updatedByToUserInput>
  }

  export type UserUpdateWithoutStoreRole_StoreRole_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreRole_StoreRole_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    DeliveryInformation?: DeliveryInformationUncheckedUpdateManyWithoutUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
  }

  export type AccountCreateWithoutUser_Account_userIdToUserInput = {
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_Account_createdByToUser?: UserCreateNestedOneWithoutAccount_Account_createdByToUserInput
    User_Account_updatedByToUser?: UserCreateNestedOneWithoutAccount_Account_updatedByToUserInput
    StoreRole?: StoreRoleCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUser_Account_userIdToUserInput = {
    username: string
    password: string
    storeRoleId?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUser_Account_userIdToUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput>
  }

  export type AccountCreateManyUser_Account_userIdToUserInputEnvelope = {
    data: AccountCreateManyUser_Account_userIdToUserInput | AccountCreateManyUser_Account_userIdToUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUser_Account_createdByToUserInput = {
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_Account_userIdToUser: UserCreateNestedOneWithoutAccount_Account_userIdToUserInput
    User_Account_updatedByToUser?: UserCreateNestedOneWithoutAccount_Account_updatedByToUserInput
    StoreRole?: StoreRoleCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUser_Account_createdByToUserInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUser_Account_createdByToUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput>
  }

  export type AccountCreateManyUser_Account_createdByToUserInputEnvelope = {
    data: AccountCreateManyUser_Account_createdByToUserInput | AccountCreateManyUser_Account_createdByToUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUser_Account_updatedByToUserInput = {
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    User_Account_userIdToUser: UserCreateNestedOneWithoutAccount_Account_userIdToUserInput
    User_Account_createdByToUser?: UserCreateNestedOneWithoutAccount_Account_createdByToUserInput
    StoreRole?: StoreRoleCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    createdBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUser_Account_updatedByToUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput>
  }

  export type AccountCreateManyUser_Account_updatedByToUserInputEnvelope = {
    data: AccountCreateManyUser_Account_updatedByToUserInput | AccountCreateManyUser_Account_updatedByToUserInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryInformationCreateWithoutUserInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    createdAt?: Date | string | null
    isDelete?: boolean
  }

  export type DeliveryInformationUncheckedCreateWithoutUserInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    createdAt?: Date | string | null
    isDelete?: boolean
  }

  export type DeliveryInformationCreateOrConnectWithoutUserInput = {
    where: DeliveryInformationWhereUniqueInput
    create: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput>
  }

  export type DeliveryInformationCreateManyUserInputEnvelope = {
    data: DeliveryInformationCreateManyUserInput | DeliveryInformationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutUser_Permission_userIdToUserInput = {
    id: string
    instance: string
    permission: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    User_Permission_createdByToUser: UserCreateNestedOneWithoutPermission_Permission_createdByToUserInput
  }

  export type PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput = {
    id: string
    instance: string
    permission: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PermissionCreateOrConnectWithoutUser_Permission_userIdToUserInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput>
  }

  export type PermissionCreateManyUser_Permission_userIdToUserInputEnvelope = {
    data: PermissionCreateManyUser_Permission_userIdToUserInput | PermissionCreateManyUser_Permission_userIdToUserInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutUser_Permission_createdByToUserInput = {
    id: string
    instance: string
    permission: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    User_Permission_userIdToUser: UserCreateNestedOneWithoutPermission_Permission_userIdToUserInput
  }

  export type PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput = {
    id: string
    instance: string
    permission: string
    userId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PermissionCreateOrConnectWithoutUser_Permission_createdByToUserInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput>
  }

  export type PermissionCreateManyUser_Permission_createdByToUserInputEnvelope = {
    data: PermissionCreateManyUser_Permission_createdByToUserInput | PermissionCreateManyUser_Permission_createdByToUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountCreateNestedManyWithoutStoreRoleInput
    User_StoreRole_updatedByToUser?: UserCreateNestedOneWithoutStoreRole_StoreRole_updatedByToUserInput
  }

  export type StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountUncheckedCreateNestedManyWithoutStoreRoleInput
  }

  export type StoreRoleCreateOrConnectWithoutUser_StoreRole_createdByToUserInput = {
    where: StoreRoleWhereUniqueInput
    create: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput>
  }

  export type StoreRoleCreateManyUser_StoreRole_createdByToUserInputEnvelope = {
    data: StoreRoleCreateManyUser_StoreRole_createdByToUserInput | StoreRoleCreateManyUser_StoreRole_createdByToUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountCreateNestedManyWithoutStoreRoleInput
    User_StoreRole_createdByToUser: UserCreateNestedOneWithoutStoreRole_StoreRole_createdByToUserInput
  }

  export type StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account?: AccountUncheckedCreateNestedManyWithoutStoreRoleInput
  }

  export type StoreRoleCreateOrConnectWithoutUser_StoreRole_updatedByToUserInput = {
    where: StoreRoleWhereUniqueInput
    create: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput>
  }

  export type StoreRoleCreateManyUser_StoreRole_updatedByToUserInputEnvelope = {
    data: StoreRoleCreateManyUser_StoreRole_updatedByToUserInput | StoreRoleCreateManyUser_StoreRole_updatedByToUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUser_Account_userIdToUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUser_Account_userIdToUserInput, AccountUncheckedUpdateWithoutUser_Account_userIdToUserInput>
    create: XOR<AccountCreateWithoutUser_Account_userIdToUserInput, AccountUncheckedCreateWithoutUser_Account_userIdToUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUser_Account_userIdToUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUser_Account_userIdToUserInput, AccountUncheckedUpdateWithoutUser_Account_userIdToUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUser_Account_userIdToUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUser_Account_createdByToUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUser_Account_createdByToUserInput, AccountUncheckedUpdateWithoutUser_Account_createdByToUserInput>
    create: XOR<AccountCreateWithoutUser_Account_createdByToUserInput, AccountUncheckedCreateWithoutUser_Account_createdByToUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUser_Account_createdByToUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUser_Account_createdByToUserInput, AccountUncheckedUpdateWithoutUser_Account_createdByToUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUser_Account_createdByToUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUser_Account_updatedByToUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUser_Account_updatedByToUserInput, AccountUncheckedUpdateWithoutUser_Account_updatedByToUserInput>
    create: XOR<AccountCreateWithoutUser_Account_updatedByToUserInput, AccountUncheckedCreateWithoutUser_Account_updatedByToUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUser_Account_updatedByToUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUser_Account_updatedByToUserInput, AccountUncheckedUpdateWithoutUser_Account_updatedByToUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUser_Account_updatedByToUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserInput>
  }

  export type DeliveryInformationUpsertWithWhereUniqueWithoutUserInput = {
    where: DeliveryInformationWhereUniqueInput
    update: XOR<DeliveryInformationUpdateWithoutUserInput, DeliveryInformationUncheckedUpdateWithoutUserInput>
    create: XOR<DeliveryInformationCreateWithoutUserInput, DeliveryInformationUncheckedCreateWithoutUserInput>
  }

  export type DeliveryInformationUpdateWithWhereUniqueWithoutUserInput = {
    where: DeliveryInformationWhereUniqueInput
    data: XOR<DeliveryInformationUpdateWithoutUserInput, DeliveryInformationUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryInformationUpdateManyWithWhereWithoutUserInput = {
    where: DeliveryInformationScalarWhereInput
    data: XOR<DeliveryInformationUpdateManyMutationInput, DeliveryInformationUncheckedUpdateManyWithoutUserInput>
  }

  export type DeliveryInformationScalarWhereInput = {
    AND?: DeliveryInformationScalarWhereInput | DeliveryInformationScalarWhereInput[]
    OR?: DeliveryInformationScalarWhereInput[]
    NOT?: DeliveryInformationScalarWhereInput | DeliveryInformationScalarWhereInput[]
    id?: StringFilter<"DeliveryInformation"> | string
    full_name?: StringFilter<"DeliveryInformation"> | string
    phone?: StringFilter<"DeliveryInformation"> | string
    address?: StringFilter<"DeliveryInformation"> | string
    isPrimary?: BoolFilter<"DeliveryInformation"> | boolean
    userId?: StringFilter<"DeliveryInformation"> | string
    createdAt?: DateTimeNullableFilter<"DeliveryInformation"> | Date | string | null
    isDelete?: BoolFilter<"DeliveryInformation"> | boolean
  }

  export type PermissionUpsertWithWhereUniqueWithoutUser_Permission_userIdToUserInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedUpdateWithoutUser_Permission_userIdToUserInput>
    create: XOR<PermissionCreateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedCreateWithoutUser_Permission_userIdToUserInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUser_Permission_userIdToUserInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUser_Permission_userIdToUserInput, PermissionUncheckedUpdateWithoutUser_Permission_userIdToUserInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUser_Permission_userIdToUserInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    instance?: StringFilter<"Permission"> | string
    permission?: StringFilter<"Permission"> | string
    userId?: StringFilter<"Permission"> | string
    createdAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    createdBy?: StringFilter<"Permission"> | string
    updatedAt?: DateTimeNullableFilter<"Permission"> | Date | string | null
    updatedBy?: StringNullableFilter<"Permission"> | string | null
  }

  export type PermissionUpsertWithWhereUniqueWithoutUser_Permission_createdByToUserInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedUpdateWithoutUser_Permission_createdByToUserInput>
    create: XOR<PermissionCreateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedCreateWithoutUser_Permission_createdByToUserInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUser_Permission_createdByToUserInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUser_Permission_createdByToUserInput, PermissionUncheckedUpdateWithoutUser_Permission_createdByToUserInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUser_Permission_createdByToUserInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserInput>
  }

  export type StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput = {
    where: StoreRoleWhereUniqueInput
    update: XOR<StoreRoleUpdateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedUpdateWithoutUser_StoreRole_createdByToUserInput>
    create: XOR<StoreRoleCreateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_createdByToUserInput>
  }

  export type StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_createdByToUserInput = {
    where: StoreRoleWhereUniqueInput
    data: XOR<StoreRoleUpdateWithoutUser_StoreRole_createdByToUserInput, StoreRoleUncheckedUpdateWithoutUser_StoreRole_createdByToUserInput>
  }

  export type StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_createdByToUserInput = {
    where: StoreRoleScalarWhereInput
    data: XOR<StoreRoleUpdateManyMutationInput, StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserInput>
  }

  export type StoreRoleScalarWhereInput = {
    AND?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
    OR?: StoreRoleScalarWhereInput[]
    NOT?: StoreRoleScalarWhereInput | StoreRoleScalarWhereInput[]
    id?: StringFilter<"StoreRole"> | string
    storeId?: StringFilter<"StoreRole"> | string
    status?: StringFilter<"StoreRole"> | string
    role?: StringFilter<"StoreRole"> | string
    createdBy?: StringFilter<"StoreRole"> | string
    updatedBy?: StringNullableFilter<"StoreRole"> | string | null
    createdAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StoreRole"> | Date | string | null
  }

  export type StoreRoleUpsertWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput = {
    where: StoreRoleWhereUniqueInput
    update: XOR<StoreRoleUpdateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedUpdateWithoutUser_StoreRole_updatedByToUserInput>
    create: XOR<StoreRoleCreateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedCreateWithoutUser_StoreRole_updatedByToUserInput>
  }

  export type StoreRoleUpdateWithWhereUniqueWithoutUser_StoreRole_updatedByToUserInput = {
    where: StoreRoleWhereUniqueInput
    data: XOR<StoreRoleUpdateWithoutUser_StoreRole_updatedByToUserInput, StoreRoleUncheckedUpdateWithoutUser_StoreRole_updatedByToUserInput>
  }

  export type StoreRoleUpdateManyWithWhereWithoutUser_StoreRole_updatedByToUserInput = {
    where: StoreRoleScalarWhereInput
    data: XOR<StoreRoleUpdateManyMutationInput, StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserInput>
  }

  export type UserCreateWithoutDeliveryInformationInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountCreateNestedManyWithoutUser_Account_updatedByToUserInput
    Permission_Permission_userIdToUser?: PermissionCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserUncheckedCreateWithoutDeliveryInformationInput = {
    id: string
    image?: string | null
    full_name: string
    birthday?: Date | string | null
    email: string
    address?: string | null
    rankId?: string | null
    role: string
    status: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_userIdToUserInput
    Account_Account_createdByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_createdByToUserInput
    Account_Account_updatedByToUser?: AccountUncheckedCreateNestedManyWithoutUser_Account_updatedByToUserInput
    Permission_Permission_userIdToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_userIdToUserInput
    Permission_Permission_createdByToUser?: PermissionUncheckedCreateNestedManyWithoutUser_Permission_createdByToUserInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_createdByToUserInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedCreateNestedManyWithoutUser_StoreRole_updatedByToUserInput
  }

  export type UserCreateOrConnectWithoutDeliveryInformationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryInformationInput, UserUncheckedCreateWithoutDeliveryInformationInput>
  }

  export type UserUpsertWithoutDeliveryInformationInput = {
    update: XOR<UserUpdateWithoutDeliveryInformationInput, UserUncheckedUpdateWithoutDeliveryInformationInput>
    create: XOR<UserCreateWithoutDeliveryInformationInput, UserUncheckedCreateWithoutDeliveryInformationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryInformationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryInformationInput, UserUncheckedUpdateWithoutDeliveryInformationInput>
  }

  export type UserUpdateWithoutDeliveryInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rankId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account_Account_userIdToUser?: AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserNestedInput
    Account_Account_createdByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserNestedInput
    Account_Account_updatedByToUser?: AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserNestedInput
    Permission_Permission_userIdToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserNestedInput
    Permission_Permission_createdByToUser?: PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserNestedInput
    StoreRole_StoreRole_createdByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserNestedInput
    StoreRole_StoreRole_updatedByToUser?: StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserNestedInput
  }

  export type AccountCreateManyStoreRoleInput = {
    username: string
    password: string
    userId: string
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateWithoutStoreRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Account_userIdToUser?: UserUpdateOneRequiredWithoutAccount_Account_userIdToUserNestedInput
    User_Account_createdByToUser?: UserUpdateOneWithoutAccount_Account_createdByToUserNestedInput
    User_Account_updatedByToUser?: UserUpdateOneWithoutAccount_Account_updatedByToUserNestedInput
  }

  export type AccountUncheckedUpdateWithoutStoreRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutStoreRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyUser_Account_userIdToUserInput = {
    username: string
    password: string
    storeRoleId?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateManyUser_Account_createdByToUserInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateManyUser_Account_updatedByToUserInput = {
    username: string
    password: string
    userId: string
    storeRoleId?: string | null
    createdBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type DeliveryInformationCreateManyUserInput = {
    id: string
    full_name: string
    phone: string
    address: string
    isPrimary?: boolean
    createdAt?: Date | string | null
    isDelete?: boolean
  }

  export type PermissionCreateManyUser_Permission_userIdToUserInput = {
    id: string
    instance: string
    permission: string
    createdAt?: Date | string | null
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PermissionCreateManyUser_Permission_createdByToUserInput = {
    id: string
    instance: string
    permission: string
    userId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type StoreRoleCreateManyUser_StoreRole_createdByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRoleCreateManyUser_StoreRole_updatedByToUserInput = {
    id: string
    storeId: string
    status: string
    role: string
    createdBy: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateWithoutUser_Account_userIdToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Account_createdByToUser?: UserUpdateOneWithoutAccount_Account_createdByToUserNestedInput
    User_Account_updatedByToUser?: UserUpdateOneWithoutAccount_Account_updatedByToUserNestedInput
    StoreRole?: StoreRoleUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUser_Account_userIdToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_userIdToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUpdateWithoutUser_Account_createdByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Account_userIdToUser?: UserUpdateOneRequiredWithoutAccount_Account_userIdToUserNestedInput
    User_Account_updatedByToUser?: UserUpdateOneWithoutAccount_Account_updatedByToUserNestedInput
    StoreRole?: StoreRoleUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUser_Account_createdByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_createdByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUpdateWithoutUser_Account_updatedByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User_Account_userIdToUser?: UserUpdateOneRequiredWithoutAccount_Account_userIdToUserNestedInput
    User_Account_createdByToUser?: UserUpdateOneWithoutAccount_Account_createdByToUserNestedInput
    StoreRole?: StoreRoleUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUser_Account_updatedByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUser_Account_updatedByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryInformationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeliveryInformationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeliveryInformationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUpdateWithoutUser_Permission_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    User_Permission_createdByToUser?: UserUpdateOneRequiredWithoutPermission_Permission_createdByToUserNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUser_Permission_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyWithoutUser_Permission_userIdToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUpdateWithoutUser_Permission_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    User_Permission_userIdToUser?: UserUpdateOneRequiredWithoutPermission_Permission_userIdToUserNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUser_Permission_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyWithoutUser_Permission_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreRoleUpdateWithoutUser_StoreRole_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUpdateManyWithoutStoreRoleNestedInput
    User_StoreRole_updatedByToUser?: UserUpdateOneWithoutStoreRole_StoreRole_updatedByToUserNestedInput
  }

  export type StoreRoleUncheckedUpdateWithoutUser_StoreRole_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUncheckedUpdateManyWithoutStoreRoleNestedInput
  }

  export type StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_createdByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreRoleUpdateWithoutUser_StoreRole_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUpdateManyWithoutStoreRoleNestedInput
    User_StoreRole_createdByToUser?: UserUpdateOneRequiredWithoutStoreRole_StoreRole_createdByToUserNestedInput
  }

  export type StoreRoleUncheckedUpdateWithoutUser_StoreRole_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Account?: AccountUncheckedUpdateManyWithoutStoreRoleNestedInput
  }

  export type StoreRoleUncheckedUpdateManyWithoutUser_StoreRole_updatedByToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StoreRoleCountOutputTypeDefaultArgs instead
     */
    export type StoreRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreRoleDefaultArgs instead
     */
    export type StoreRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryInformationDefaultArgs instead
     */
    export type DeliveryInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryInformationDefaultArgs<ExtArgs>

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