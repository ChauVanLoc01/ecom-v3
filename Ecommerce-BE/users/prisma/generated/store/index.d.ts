
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
 * Model CategoryConditionVoucher
 * 
 */
export type CategoryConditionVoucher = $Result.DefaultSelection<Prisma.$CategoryConditionVoucherPayload>
/**
 * Model PriceConditionVoucher
 * 
 */
export type PriceConditionVoucher = $Result.DefaultSelection<Prisma.$PriceConditionVoucherPayload>
/**
 * Model ProductPromotion
 * 
 */
export type ProductPromotion = $Result.DefaultSelection<Prisma.$ProductPromotionPayload>
/**
 * Model SalePromotion
 * 
 */
export type SalePromotion = $Result.DefaultSelection<Prisma.$SalePromotionPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StorePromotion
 * 
 */
export type StorePromotion = $Result.DefaultSelection<Prisma.$StorePromotionPayload>
/**
 * Model UserViewStore
 * 
 */
export type UserViewStore = $Result.DefaultSelection<Prisma.$UserViewStorePayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model RatingMaterial
 * 
 */
export type RatingMaterial = $Result.DefaultSelection<Prisma.$RatingMaterialPayload>
/**
 * Model RatingReply
 * 
 */
export type RatingReply = $Result.DefaultSelection<Prisma.$RatingReplyPayload>
/**
 * Model StoreRating
 * 
 */
export type StoreRating = $Result.DefaultSelection<Prisma.$StoreRatingPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CategoryConditionVouchers
 * const categoryConditionVouchers = await prisma.categoryConditionVoucher.findMany()
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
   * // Fetch zero or more CategoryConditionVouchers
   * const categoryConditionVouchers = await prisma.categoryConditionVoucher.findMany()
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
   * `prisma.categoryConditionVoucher`: Exposes CRUD operations for the **CategoryConditionVoucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryConditionVouchers
    * const categoryConditionVouchers = await prisma.categoryConditionVoucher.findMany()
    * ```
    */
  get categoryConditionVoucher(): Prisma.CategoryConditionVoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceConditionVoucher`: Exposes CRUD operations for the **PriceConditionVoucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceConditionVouchers
    * const priceConditionVouchers = await prisma.priceConditionVoucher.findMany()
    * ```
    */
  get priceConditionVoucher(): Prisma.PriceConditionVoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPromotion`: Exposes CRUD operations for the **ProductPromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPromotions
    * const productPromotions = await prisma.productPromotion.findMany()
    * ```
    */
  get productPromotion(): Prisma.ProductPromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salePromotion`: Exposes CRUD operations for the **SalePromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalePromotions
    * const salePromotions = await prisma.salePromotion.findMany()
    * ```
    */
  get salePromotion(): Prisma.SalePromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storePromotion`: Exposes CRUD operations for the **StorePromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorePromotions
    * const storePromotions = await prisma.storePromotion.findMany()
    * ```
    */
  get storePromotion(): Prisma.StorePromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userViewStore`: Exposes CRUD operations for the **UserViewStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserViewStores
    * const userViewStores = await prisma.userViewStore.findMany()
    * ```
    */
  get userViewStore(): Prisma.UserViewStoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingMaterial`: Exposes CRUD operations for the **RatingMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingMaterials
    * const ratingMaterials = await prisma.ratingMaterial.findMany()
    * ```
    */
  get ratingMaterial(): Prisma.RatingMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingReply`: Exposes CRUD operations for the **RatingReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingReplies
    * const ratingReplies = await prisma.ratingReply.findMany()
    * ```
    */
  get ratingReply(): Prisma.RatingReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeRating`: Exposes CRUD operations for the **StoreRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreRatings
    * const storeRatings = await prisma.storeRating.findMany()
    * ```
    */
  get storeRating(): Prisma.StoreRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;
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
    CategoryConditionVoucher: 'CategoryConditionVoucher',
    PriceConditionVoucher: 'PriceConditionVoucher',
    ProductPromotion: 'ProductPromotion',
    SalePromotion: 'SalePromotion',
    Store: 'Store',
    StorePromotion: 'StorePromotion',
    UserViewStore: 'UserViewStore',
    Rating: 'Rating',
    RatingMaterial: 'RatingMaterial',
    RatingReply: 'RatingReply',
    StoreRating: 'StoreRating',
    Voucher: 'Voucher'
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
      modelProps: "categoryConditionVoucher" | "priceConditionVoucher" | "productPromotion" | "salePromotion" | "store" | "storePromotion" | "userViewStore" | "rating" | "ratingMaterial" | "ratingReply" | "storeRating" | "voucher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CategoryConditionVoucher: {
        payload: Prisma.$CategoryConditionVoucherPayload<ExtArgs>
        fields: Prisma.CategoryConditionVoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryConditionVoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryConditionVoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          findFirst: {
            args: Prisma.CategoryConditionVoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryConditionVoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          findMany: {
            args: Prisma.CategoryConditionVoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>[]
          }
          create: {
            args: Prisma.CategoryConditionVoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          createMany: {
            args: Prisma.CategoryConditionVoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryConditionVoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          update: {
            args: Prisma.CategoryConditionVoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          deleteMany: {
            args: Prisma.CategoryConditionVoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryConditionVoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryConditionVoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryConditionVoucherPayload>
          }
          aggregate: {
            args: Prisma.CategoryConditionVoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryConditionVoucher>
          }
          groupBy: {
            args: Prisma.CategoryConditionVoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryConditionVoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryConditionVoucherCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryConditionVoucherCountAggregateOutputType> | number
          }
        }
      }
      PriceConditionVoucher: {
        payload: Prisma.$PriceConditionVoucherPayload<ExtArgs>
        fields: Prisma.PriceConditionVoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceConditionVoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceConditionVoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          findFirst: {
            args: Prisma.PriceConditionVoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceConditionVoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          findMany: {
            args: Prisma.PriceConditionVoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>[]
          }
          create: {
            args: Prisma.PriceConditionVoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          createMany: {
            args: Prisma.PriceConditionVoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PriceConditionVoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          update: {
            args: Prisma.PriceConditionVoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          deleteMany: {
            args: Prisma.PriceConditionVoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceConditionVoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceConditionVoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceConditionVoucherPayload>
          }
          aggregate: {
            args: Prisma.PriceConditionVoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceConditionVoucher>
          }
          groupBy: {
            args: Prisma.PriceConditionVoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceConditionVoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceConditionVoucherCountArgs<ExtArgs>
            result: $Utils.Optional<PriceConditionVoucherCountAggregateOutputType> | number
          }
        }
      }
      ProductPromotion: {
        payload: Prisma.$ProductPromotionPayload<ExtArgs>
        fields: Prisma.ProductPromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          findFirst: {
            args: Prisma.ProductPromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          findMany: {
            args: Prisma.ProductPromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>[]
          }
          create: {
            args: Prisma.ProductPromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          createMany: {
            args: Prisma.ProductPromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductPromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          update: {
            args: Prisma.ProductPromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          deleteMany: {
            args: Prisma.ProductPromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPromotionPayload>
          }
          aggregate: {
            args: Prisma.ProductPromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPromotion>
          }
          groupBy: {
            args: Prisma.ProductPromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPromotionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPromotionCountAggregateOutputType> | number
          }
        }
      }
      SalePromotion: {
        payload: Prisma.$SalePromotionPayload<ExtArgs>
        fields: Prisma.SalePromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalePromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalePromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          findFirst: {
            args: Prisma.SalePromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalePromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          findMany: {
            args: Prisma.SalePromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>[]
          }
          create: {
            args: Prisma.SalePromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          createMany: {
            args: Prisma.SalePromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalePromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          update: {
            args: Prisma.SalePromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          deleteMany: {
            args: Prisma.SalePromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalePromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalePromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePromotionPayload>
          }
          aggregate: {
            args: Prisma.SalePromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalePromotion>
          }
          groupBy: {
            args: Prisma.SalePromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalePromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalePromotionCountArgs<ExtArgs>
            result: $Utils.Optional<SalePromotionCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StorePromotion: {
        payload: Prisma.$StorePromotionPayload<ExtArgs>
        fields: Prisma.StorePromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorePromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorePromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          findFirst: {
            args: Prisma.StorePromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorePromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          findMany: {
            args: Prisma.StorePromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>[]
          }
          create: {
            args: Prisma.StorePromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          createMany: {
            args: Prisma.StorePromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StorePromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          update: {
            args: Prisma.StorePromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          deleteMany: {
            args: Prisma.StorePromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorePromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StorePromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePromotionPayload>
          }
          aggregate: {
            args: Prisma.StorePromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorePromotion>
          }
          groupBy: {
            args: Prisma.StorePromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorePromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorePromotionCountArgs<ExtArgs>
            result: $Utils.Optional<StorePromotionCountAggregateOutputType> | number
          }
        }
      }
      UserViewStore: {
        payload: Prisma.$UserViewStorePayload<ExtArgs>
        fields: Prisma.UserViewStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserViewStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserViewStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          findFirst: {
            args: Prisma.UserViewStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserViewStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          findMany: {
            args: Prisma.UserViewStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>[]
          }
          create: {
            args: Prisma.UserViewStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          createMany: {
            args: Prisma.UserViewStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserViewStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          update: {
            args: Prisma.UserViewStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          deleteMany: {
            args: Prisma.UserViewStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserViewStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserViewStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewStorePayload>
          }
          aggregate: {
            args: Prisma.UserViewStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserViewStore>
          }
          groupBy: {
            args: Prisma.UserViewStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserViewStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserViewStoreCountArgs<ExtArgs>
            result: $Utils.Optional<UserViewStoreCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      RatingMaterial: {
        payload: Prisma.$RatingMaterialPayload<ExtArgs>
        fields: Prisma.RatingMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          findFirst: {
            args: Prisma.RatingMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          findMany: {
            args: Prisma.RatingMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>[]
          }
          create: {
            args: Prisma.RatingMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          createMany: {
            args: Prisma.RatingMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          update: {
            args: Prisma.RatingMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          deleteMany: {
            args: Prisma.RatingMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingMaterialPayload>
          }
          aggregate: {
            args: Prisma.RatingMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingMaterial>
          }
          groupBy: {
            args: Prisma.RatingMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<RatingMaterialCountAggregateOutputType> | number
          }
        }
      }
      RatingReply: {
        payload: Prisma.$RatingReplyPayload<ExtArgs>
        fields: Prisma.RatingReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          findFirst: {
            args: Prisma.RatingReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          findMany: {
            args: Prisma.RatingReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>[]
          }
          create: {
            args: Prisma.RatingReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          createMany: {
            args: Prisma.RatingReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          update: {
            args: Prisma.RatingReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          deleteMany: {
            args: Prisma.RatingReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingReplyPayload>
          }
          aggregate: {
            args: Prisma.RatingReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingReply>
          }
          groupBy: {
            args: Prisma.RatingReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingReplyCountArgs<ExtArgs>
            result: $Utils.Optional<RatingReplyCountAggregateOutputType> | number
          }
        }
      }
      StoreRating: {
        payload: Prisma.$StoreRatingPayload<ExtArgs>
        fields: Prisma.StoreRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          findFirst: {
            args: Prisma.StoreRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          findMany: {
            args: Prisma.StoreRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>[]
          }
          create: {
            args: Prisma.StoreRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          createMany: {
            args: Prisma.StoreRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          update: {
            args: Prisma.StoreRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          deleteMany: {
            args: Prisma.StoreRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreRatingPayload>
          }
          aggregate: {
            args: Prisma.StoreRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreRating>
          }
          groupBy: {
            args: Prisma.StoreRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreRatingCountArgs<ExtArgs>
            result: $Utils.Optional<StoreRatingCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
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
    categoryConditionVoucher?: CategoryConditionVoucherOmit
    priceConditionVoucher?: PriceConditionVoucherOmit
    productPromotion?: ProductPromotionOmit
    salePromotion?: SalePromotionOmit
    store?: StoreOmit
    storePromotion?: StorePromotionOmit
    userViewStore?: UserViewStoreOmit
    rating?: RatingOmit
    ratingMaterial?: RatingMaterialOmit
    ratingReply?: RatingReplyOmit
    storeRating?: StoreRatingOmit
    voucher?: VoucherOmit
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
   * Count Type CategoryConditionVoucherCountOutputType
   */

  export type CategoryConditionVoucherCountOutputType = {
    Voucher: number
  }

  export type CategoryConditionVoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Voucher?: boolean | CategoryConditionVoucherCountOutputTypeCountVoucherArgs
  }

  // Custom InputTypes
  /**
   * CategoryConditionVoucherCountOutputType without action
   */
  export type CategoryConditionVoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucherCountOutputType
     */
    select?: CategoryConditionVoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryConditionVoucherCountOutputType without action
   */
  export type CategoryConditionVoucherCountOutputTypeCountVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type PriceConditionVoucherCountOutputType
   */

  export type PriceConditionVoucherCountOutputType = {
    Voucher: number
  }

  export type PriceConditionVoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Voucher?: boolean | PriceConditionVoucherCountOutputTypeCountVoucherArgs
  }

  // Custom InputTypes
  /**
   * PriceConditionVoucherCountOutputType without action
   */
  export type PriceConditionVoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucherCountOutputType
     */
    select?: PriceConditionVoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PriceConditionVoucherCountOutputType without action
   */
  export type PriceConditionVoucherCountOutputTypeCountVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type SalePromotionCountOutputType
   */

  export type SalePromotionCountOutputType = {
    ProductPromotion: number
    StorePromotion: number
  }

  export type SalePromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPromotion?: boolean | SalePromotionCountOutputTypeCountProductPromotionArgs
    StorePromotion?: boolean | SalePromotionCountOutputTypeCountStorePromotionArgs
  }

  // Custom InputTypes
  /**
   * SalePromotionCountOutputType without action
   */
  export type SalePromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotionCountOutputType
     */
    select?: SalePromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalePromotionCountOutputType without action
   */
  export type SalePromotionCountOutputTypeCountProductPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
  }

  /**
   * SalePromotionCountOutputType without action
   */
  export type SalePromotionCountOutputTypeCountStorePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorePromotionWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    Rating: number
    StorePromotion: number
    UserViewStore: number
    Voucher: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | StoreCountOutputTypeCountRatingArgs
    StorePromotion?: boolean | StoreCountOutputTypeCountStorePromotionArgs
    UserViewStore?: boolean | StoreCountOutputTypeCountUserViewStoreArgs
    Voucher?: boolean | StoreCountOutputTypeCountVoucherArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStorePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorePromotionWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountUserViewStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewStoreWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type StorePromotionCountOutputType
   */

  export type StorePromotionCountOutputType = {
    ProductPromotion: number
  }

  export type StorePromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPromotion?: boolean | StorePromotionCountOutputTypeCountProductPromotionArgs
  }

  // Custom InputTypes
  /**
   * StorePromotionCountOutputType without action
   */
  export type StorePromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotionCountOutputType
     */
    select?: StorePromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorePromotionCountOutputType without action
   */
  export type StorePromotionCountOutputTypeCountProductPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
  }


  /**
   * Count Type RatingCountOutputType
   */

  export type RatingCountOutputType = {
    RatingReply: number
  }

  export type RatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RatingReply?: boolean | RatingCountOutputTypeCountRatingReplyArgs
  }

  // Custom InputTypes
  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingCountOutputType
     */
    select?: RatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeCountRatingReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingReplyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CategoryConditionVoucher
   */

  export type AggregateCategoryConditionVoucher = {
    _count: CategoryConditionVoucherCountAggregateOutputType | null
    _min: CategoryConditionVoucherMinAggregateOutputType | null
    _max: CategoryConditionVoucherMaxAggregateOutputType | null
  }

  export type CategoryConditionVoucherMinAggregateOutputType = {
    id: string | null
    categoryShortName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CategoryConditionVoucherMaxAggregateOutputType = {
    id: string | null
    categoryShortName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CategoryConditionVoucherCountAggregateOutputType = {
    id: number
    categoryShortName: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type CategoryConditionVoucherMinAggregateInputType = {
    id?: true
    categoryShortName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CategoryConditionVoucherMaxAggregateInputType = {
    id?: true
    categoryShortName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CategoryConditionVoucherCountAggregateInputType = {
    id?: true
    categoryShortName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type CategoryConditionVoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryConditionVoucher to aggregate.
     */
    where?: CategoryConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryConditionVouchers to fetch.
     */
    orderBy?: CategoryConditionVoucherOrderByWithRelationInput | CategoryConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryConditionVouchers
    **/
    _count?: true | CategoryConditionVoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryConditionVoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryConditionVoucherMaxAggregateInputType
  }

  export type GetCategoryConditionVoucherAggregateType<T extends CategoryConditionVoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryConditionVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryConditionVoucher[P]>
      : GetScalarType<T[P], AggregateCategoryConditionVoucher[P]>
  }




  export type CategoryConditionVoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryConditionVoucherWhereInput
    orderBy?: CategoryConditionVoucherOrderByWithAggregationInput | CategoryConditionVoucherOrderByWithAggregationInput[]
    by: CategoryConditionVoucherScalarFieldEnum[] | CategoryConditionVoucherScalarFieldEnum
    having?: CategoryConditionVoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryConditionVoucherCountAggregateInputType | true
    _min?: CategoryConditionVoucherMinAggregateInputType
    _max?: CategoryConditionVoucherMaxAggregateInputType
  }

  export type CategoryConditionVoucherGroupByOutputType = {
    id: string
    categoryShortName: string
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: CategoryConditionVoucherCountAggregateOutputType | null
    _min: CategoryConditionVoucherMinAggregateOutputType | null
    _max: CategoryConditionVoucherMaxAggregateOutputType | null
  }

  type GetCategoryConditionVoucherGroupByPayload<T extends CategoryConditionVoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryConditionVoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryConditionVoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryConditionVoucherGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryConditionVoucherGroupByOutputType[P]>
        }
      >
    >


  export type CategoryConditionVoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryShortName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    Voucher?: boolean | CategoryConditionVoucher$VoucherArgs<ExtArgs>
    _count?: boolean | CategoryConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryConditionVoucher"]>


  export type CategoryConditionVoucherSelectScalar = {
    id?: boolean
    categoryShortName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type CategoryConditionVoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryShortName" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["categoryConditionVoucher"]>
  export type CategoryConditionVoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Voucher?: boolean | CategoryConditionVoucher$VoucherArgs<ExtArgs>
    _count?: boolean | CategoryConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryConditionVoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryConditionVoucher"
    objects: {
      Voucher: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryShortName: string
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["categoryConditionVoucher"]>
    composites: {}
  }

  type CategoryConditionVoucherGetPayload<S extends boolean | null | undefined | CategoryConditionVoucherDefaultArgs> = $Result.GetResult<Prisma.$CategoryConditionVoucherPayload, S>

  type CategoryConditionVoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryConditionVoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryConditionVoucherCountAggregateInputType | true
    }

  export interface CategoryConditionVoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryConditionVoucher'], meta: { name: 'CategoryConditionVoucher' } }
    /**
     * Find zero or one CategoryConditionVoucher that matches the filter.
     * @param {CategoryConditionVoucherFindUniqueArgs} args - Arguments to find a CategoryConditionVoucher
     * @example
     * // Get one CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryConditionVoucherFindUniqueArgs>(args: SelectSubset<T, CategoryConditionVoucherFindUniqueArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CategoryConditionVoucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryConditionVoucherFindUniqueOrThrowArgs} args - Arguments to find a CategoryConditionVoucher
     * @example
     * // Get one CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryConditionVoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryConditionVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryConditionVoucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherFindFirstArgs} args - Arguments to find a CategoryConditionVoucher
     * @example
     * // Get one CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryConditionVoucherFindFirstArgs>(args?: SelectSubset<T, CategoryConditionVoucherFindFirstArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryConditionVoucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherFindFirstOrThrowArgs} args - Arguments to find a CategoryConditionVoucher
     * @example
     * // Get one CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryConditionVoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryConditionVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CategoryConditionVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryConditionVouchers
     * const categoryConditionVouchers = await prisma.categoryConditionVoucher.findMany()
     * 
     * // Get first 10 CategoryConditionVouchers
     * const categoryConditionVouchers = await prisma.categoryConditionVoucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryConditionVoucherWithIdOnly = await prisma.categoryConditionVoucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryConditionVoucherFindManyArgs>(args?: SelectSubset<T, CategoryConditionVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CategoryConditionVoucher.
     * @param {CategoryConditionVoucherCreateArgs} args - Arguments to create a CategoryConditionVoucher.
     * @example
     * // Create one CategoryConditionVoucher
     * const CategoryConditionVoucher = await prisma.categoryConditionVoucher.create({
     *   data: {
     *     // ... data to create a CategoryConditionVoucher
     *   }
     * })
     * 
     */
    create<T extends CategoryConditionVoucherCreateArgs>(args: SelectSubset<T, CategoryConditionVoucherCreateArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CategoryConditionVouchers.
     * @param {CategoryConditionVoucherCreateManyArgs} args - Arguments to create many CategoryConditionVouchers.
     * @example
     * // Create many CategoryConditionVouchers
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryConditionVoucherCreateManyArgs>(args?: SelectSubset<T, CategoryConditionVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryConditionVoucher.
     * @param {CategoryConditionVoucherDeleteArgs} args - Arguments to delete one CategoryConditionVoucher.
     * @example
     * // Delete one CategoryConditionVoucher
     * const CategoryConditionVoucher = await prisma.categoryConditionVoucher.delete({
     *   where: {
     *     // ... filter to delete one CategoryConditionVoucher
     *   }
     * })
     * 
     */
    delete<T extends CategoryConditionVoucherDeleteArgs>(args: SelectSubset<T, CategoryConditionVoucherDeleteArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CategoryConditionVoucher.
     * @param {CategoryConditionVoucherUpdateArgs} args - Arguments to update one CategoryConditionVoucher.
     * @example
     * // Update one CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryConditionVoucherUpdateArgs>(args: SelectSubset<T, CategoryConditionVoucherUpdateArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CategoryConditionVouchers.
     * @param {CategoryConditionVoucherDeleteManyArgs} args - Arguments to filter CategoryConditionVouchers to delete.
     * @example
     * // Delete a few CategoryConditionVouchers
     * const { count } = await prisma.categoryConditionVoucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryConditionVoucherDeleteManyArgs>(args?: SelectSubset<T, CategoryConditionVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryConditionVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryConditionVouchers
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryConditionVoucherUpdateManyArgs>(args: SelectSubset<T, CategoryConditionVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryConditionVoucher.
     * @param {CategoryConditionVoucherUpsertArgs} args - Arguments to update or create a CategoryConditionVoucher.
     * @example
     * // Update or create a CategoryConditionVoucher
     * const categoryConditionVoucher = await prisma.categoryConditionVoucher.upsert({
     *   create: {
     *     // ... data to create a CategoryConditionVoucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryConditionVoucher we want to update
     *   }
     * })
     */
    upsert<T extends CategoryConditionVoucherUpsertArgs>(args: SelectSubset<T, CategoryConditionVoucherUpsertArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CategoryConditionVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherCountArgs} args - Arguments to filter CategoryConditionVouchers to count.
     * @example
     * // Count the number of CategoryConditionVouchers
     * const count = await prisma.categoryConditionVoucher.count({
     *   where: {
     *     // ... the filter for the CategoryConditionVouchers we want to count
     *   }
     * })
    **/
    count<T extends CategoryConditionVoucherCountArgs>(
      args?: Subset<T, CategoryConditionVoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryConditionVoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryConditionVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryConditionVoucherAggregateArgs>(args: Subset<T, CategoryConditionVoucherAggregateArgs>): Prisma.PrismaPromise<GetCategoryConditionVoucherAggregateType<T>>

    /**
     * Group by CategoryConditionVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryConditionVoucherGroupByArgs} args - Group by arguments.
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
      T extends CategoryConditionVoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryConditionVoucherGroupByArgs['orderBy'] }
        : { orderBy?: CategoryConditionVoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryConditionVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryConditionVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryConditionVoucher model
   */
  readonly fields: CategoryConditionVoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryConditionVoucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryConditionVoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Voucher<T extends CategoryConditionVoucher$VoucherArgs<ExtArgs> = {}>(args?: Subset<T, CategoryConditionVoucher$VoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the CategoryConditionVoucher model
   */ 
  interface CategoryConditionVoucherFieldRefs {
    readonly id: FieldRef<"CategoryConditionVoucher", 'String'>
    readonly categoryShortName: FieldRef<"CategoryConditionVoucher", 'String'>
    readonly createdAt: FieldRef<"CategoryConditionVoucher", 'DateTime'>
    readonly createdBy: FieldRef<"CategoryConditionVoucher", 'String'>
    readonly updatedAt: FieldRef<"CategoryConditionVoucher", 'DateTime'>
    readonly updatedBy: FieldRef<"CategoryConditionVoucher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryConditionVoucher findUnique
   */
  export type CategoryConditionVoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which CategoryConditionVoucher to fetch.
     */
    where: CategoryConditionVoucherWhereUniqueInput
  }

  /**
   * CategoryConditionVoucher findUniqueOrThrow
   */
  export type CategoryConditionVoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which CategoryConditionVoucher to fetch.
     */
    where: CategoryConditionVoucherWhereUniqueInput
  }

  /**
   * CategoryConditionVoucher findFirst
   */
  export type CategoryConditionVoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which CategoryConditionVoucher to fetch.
     */
    where?: CategoryConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryConditionVouchers to fetch.
     */
    orderBy?: CategoryConditionVoucherOrderByWithRelationInput | CategoryConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryConditionVouchers.
     */
    cursor?: CategoryConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryConditionVouchers.
     */
    distinct?: CategoryConditionVoucherScalarFieldEnum | CategoryConditionVoucherScalarFieldEnum[]
  }

  /**
   * CategoryConditionVoucher findFirstOrThrow
   */
  export type CategoryConditionVoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which CategoryConditionVoucher to fetch.
     */
    where?: CategoryConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryConditionVouchers to fetch.
     */
    orderBy?: CategoryConditionVoucherOrderByWithRelationInput | CategoryConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryConditionVouchers.
     */
    cursor?: CategoryConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryConditionVouchers.
     */
    distinct?: CategoryConditionVoucherScalarFieldEnum | CategoryConditionVoucherScalarFieldEnum[]
  }

  /**
   * CategoryConditionVoucher findMany
   */
  export type CategoryConditionVoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which CategoryConditionVouchers to fetch.
     */
    where?: CategoryConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryConditionVouchers to fetch.
     */
    orderBy?: CategoryConditionVoucherOrderByWithRelationInput | CategoryConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryConditionVouchers.
     */
    cursor?: CategoryConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryConditionVouchers.
     */
    skip?: number
    distinct?: CategoryConditionVoucherScalarFieldEnum | CategoryConditionVoucherScalarFieldEnum[]
  }

  /**
   * CategoryConditionVoucher create
   */
  export type CategoryConditionVoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryConditionVoucher.
     */
    data: XOR<CategoryConditionVoucherCreateInput, CategoryConditionVoucherUncheckedCreateInput>
  }

  /**
   * CategoryConditionVoucher createMany
   */
  export type CategoryConditionVoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryConditionVouchers.
     */
    data: CategoryConditionVoucherCreateManyInput | CategoryConditionVoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryConditionVoucher update
   */
  export type CategoryConditionVoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryConditionVoucher.
     */
    data: XOR<CategoryConditionVoucherUpdateInput, CategoryConditionVoucherUncheckedUpdateInput>
    /**
     * Choose, which CategoryConditionVoucher to update.
     */
    where: CategoryConditionVoucherWhereUniqueInput
  }

  /**
   * CategoryConditionVoucher updateMany
   */
  export type CategoryConditionVoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryConditionVouchers.
     */
    data: XOR<CategoryConditionVoucherUpdateManyMutationInput, CategoryConditionVoucherUncheckedUpdateManyInput>
    /**
     * Filter which CategoryConditionVouchers to update
     */
    where?: CategoryConditionVoucherWhereInput
  }

  /**
   * CategoryConditionVoucher upsert
   */
  export type CategoryConditionVoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryConditionVoucher to update in case it exists.
     */
    where: CategoryConditionVoucherWhereUniqueInput
    /**
     * In case the CategoryConditionVoucher found by the `where` argument doesn't exist, create a new CategoryConditionVoucher with this data.
     */
    create: XOR<CategoryConditionVoucherCreateInput, CategoryConditionVoucherUncheckedCreateInput>
    /**
     * In case the CategoryConditionVoucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryConditionVoucherUpdateInput, CategoryConditionVoucherUncheckedUpdateInput>
  }

  /**
   * CategoryConditionVoucher delete
   */
  export type CategoryConditionVoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter which CategoryConditionVoucher to delete.
     */
    where: CategoryConditionVoucherWhereUniqueInput
  }

  /**
   * CategoryConditionVoucher deleteMany
   */
  export type CategoryConditionVoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryConditionVouchers to delete
     */
    where?: CategoryConditionVoucherWhereInput
  }

  /**
   * CategoryConditionVoucher.Voucher
   */
  export type CategoryConditionVoucher$VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * CategoryConditionVoucher without action
   */
  export type CategoryConditionVoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
  }


  /**
   * Model PriceConditionVoucher
   */

  export type AggregatePriceConditionVoucher = {
    _count: PriceConditionVoucherCountAggregateOutputType | null
    _avg: PriceConditionVoucherAvgAggregateOutputType | null
    _sum: PriceConditionVoucherSumAggregateOutputType | null
    _min: PriceConditionVoucherMinAggregateOutputType | null
    _max: PriceConditionVoucherMaxAggregateOutputType | null
  }

  export type PriceConditionVoucherAvgAggregateOutputType = {
    totalMin: number | null
    totalMax: number | null
    priceMin: number | null
    priceMax: number | null
  }

  export type PriceConditionVoucherSumAggregateOutputType = {
    totalMin: number | null
    totalMax: number | null
    priceMin: number | null
    priceMax: number | null
  }

  export type PriceConditionVoucherMinAggregateOutputType = {
    id: string | null
    totalMin: number | null
    totalMax: number | null
    priceMin: number | null
    priceMax: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type PriceConditionVoucherMaxAggregateOutputType = {
    id: string | null
    totalMin: number | null
    totalMax: number | null
    priceMin: number | null
    priceMax: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type PriceConditionVoucherCountAggregateOutputType = {
    id: number
    totalMin: number
    totalMax: number
    priceMin: number
    priceMax: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type PriceConditionVoucherAvgAggregateInputType = {
    totalMin?: true
    totalMax?: true
    priceMin?: true
    priceMax?: true
  }

  export type PriceConditionVoucherSumAggregateInputType = {
    totalMin?: true
    totalMax?: true
    priceMin?: true
    priceMax?: true
  }

  export type PriceConditionVoucherMinAggregateInputType = {
    id?: true
    totalMin?: true
    totalMax?: true
    priceMin?: true
    priceMax?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type PriceConditionVoucherMaxAggregateInputType = {
    id?: true
    totalMin?: true
    totalMax?: true
    priceMin?: true
    priceMax?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type PriceConditionVoucherCountAggregateInputType = {
    id?: true
    totalMin?: true
    totalMax?: true
    priceMin?: true
    priceMax?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type PriceConditionVoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceConditionVoucher to aggregate.
     */
    where?: PriceConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceConditionVouchers to fetch.
     */
    orderBy?: PriceConditionVoucherOrderByWithRelationInput | PriceConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceConditionVouchers
    **/
    _count?: true | PriceConditionVoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceConditionVoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceConditionVoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceConditionVoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceConditionVoucherMaxAggregateInputType
  }

  export type GetPriceConditionVoucherAggregateType<T extends PriceConditionVoucherAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceConditionVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceConditionVoucher[P]>
      : GetScalarType<T[P], AggregatePriceConditionVoucher[P]>
  }




  export type PriceConditionVoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceConditionVoucherWhereInput
    orderBy?: PriceConditionVoucherOrderByWithAggregationInput | PriceConditionVoucherOrderByWithAggregationInput[]
    by: PriceConditionVoucherScalarFieldEnum[] | PriceConditionVoucherScalarFieldEnum
    having?: PriceConditionVoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceConditionVoucherCountAggregateInputType | true
    _avg?: PriceConditionVoucherAvgAggregateInputType
    _sum?: PriceConditionVoucherSumAggregateInputType
    _min?: PriceConditionVoucherMinAggregateInputType
    _max?: PriceConditionVoucherMaxAggregateInputType
  }

  export type PriceConditionVoucherGroupByOutputType = {
    id: string
    totalMin: number | null
    totalMax: number | null
    priceMin: number | null
    priceMax: number | null
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: PriceConditionVoucherCountAggregateOutputType | null
    _avg: PriceConditionVoucherAvgAggregateOutputType | null
    _sum: PriceConditionVoucherSumAggregateOutputType | null
    _min: PriceConditionVoucherMinAggregateOutputType | null
    _max: PriceConditionVoucherMaxAggregateOutputType | null
  }

  type GetPriceConditionVoucherGroupByPayload<T extends PriceConditionVoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceConditionVoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceConditionVoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceConditionVoucherGroupByOutputType[P]>
            : GetScalarType<T[P], PriceConditionVoucherGroupByOutputType[P]>
        }
      >
    >


  export type PriceConditionVoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMin?: boolean
    totalMax?: boolean
    priceMin?: boolean
    priceMax?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    Voucher?: boolean | PriceConditionVoucher$VoucherArgs<ExtArgs>
    _count?: boolean | PriceConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceConditionVoucher"]>


  export type PriceConditionVoucherSelectScalar = {
    id?: boolean
    totalMin?: boolean
    totalMax?: boolean
    priceMin?: boolean
    priceMax?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type PriceConditionVoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalMin" | "totalMax" | "priceMin" | "priceMax" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["priceConditionVoucher"]>
  export type PriceConditionVoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Voucher?: boolean | PriceConditionVoucher$VoucherArgs<ExtArgs>
    _count?: boolean | PriceConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PriceConditionVoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceConditionVoucher"
    objects: {
      Voucher: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalMin: number | null
      totalMax: number | null
      priceMin: number | null
      priceMax: number | null
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["priceConditionVoucher"]>
    composites: {}
  }

  type PriceConditionVoucherGetPayload<S extends boolean | null | undefined | PriceConditionVoucherDefaultArgs> = $Result.GetResult<Prisma.$PriceConditionVoucherPayload, S>

  type PriceConditionVoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceConditionVoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceConditionVoucherCountAggregateInputType | true
    }

  export interface PriceConditionVoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceConditionVoucher'], meta: { name: 'PriceConditionVoucher' } }
    /**
     * Find zero or one PriceConditionVoucher that matches the filter.
     * @param {PriceConditionVoucherFindUniqueArgs} args - Arguments to find a PriceConditionVoucher
     * @example
     * // Get one PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceConditionVoucherFindUniqueArgs>(args: SelectSubset<T, PriceConditionVoucherFindUniqueArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PriceConditionVoucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceConditionVoucherFindUniqueOrThrowArgs} args - Arguments to find a PriceConditionVoucher
     * @example
     * // Get one PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceConditionVoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceConditionVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PriceConditionVoucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherFindFirstArgs} args - Arguments to find a PriceConditionVoucher
     * @example
     * // Get one PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceConditionVoucherFindFirstArgs>(args?: SelectSubset<T, PriceConditionVoucherFindFirstArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PriceConditionVoucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherFindFirstOrThrowArgs} args - Arguments to find a PriceConditionVoucher
     * @example
     * // Get one PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceConditionVoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceConditionVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PriceConditionVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceConditionVouchers
     * const priceConditionVouchers = await prisma.priceConditionVoucher.findMany()
     * 
     * // Get first 10 PriceConditionVouchers
     * const priceConditionVouchers = await prisma.priceConditionVoucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceConditionVoucherWithIdOnly = await prisma.priceConditionVoucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceConditionVoucherFindManyArgs>(args?: SelectSubset<T, PriceConditionVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PriceConditionVoucher.
     * @param {PriceConditionVoucherCreateArgs} args - Arguments to create a PriceConditionVoucher.
     * @example
     * // Create one PriceConditionVoucher
     * const PriceConditionVoucher = await prisma.priceConditionVoucher.create({
     *   data: {
     *     // ... data to create a PriceConditionVoucher
     *   }
     * })
     * 
     */
    create<T extends PriceConditionVoucherCreateArgs>(args: SelectSubset<T, PriceConditionVoucherCreateArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PriceConditionVouchers.
     * @param {PriceConditionVoucherCreateManyArgs} args - Arguments to create many PriceConditionVouchers.
     * @example
     * // Create many PriceConditionVouchers
     * const priceConditionVoucher = await prisma.priceConditionVoucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceConditionVoucherCreateManyArgs>(args?: SelectSubset<T, PriceConditionVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PriceConditionVoucher.
     * @param {PriceConditionVoucherDeleteArgs} args - Arguments to delete one PriceConditionVoucher.
     * @example
     * // Delete one PriceConditionVoucher
     * const PriceConditionVoucher = await prisma.priceConditionVoucher.delete({
     *   where: {
     *     // ... filter to delete one PriceConditionVoucher
     *   }
     * })
     * 
     */
    delete<T extends PriceConditionVoucherDeleteArgs>(args: SelectSubset<T, PriceConditionVoucherDeleteArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PriceConditionVoucher.
     * @param {PriceConditionVoucherUpdateArgs} args - Arguments to update one PriceConditionVoucher.
     * @example
     * // Update one PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceConditionVoucherUpdateArgs>(args: SelectSubset<T, PriceConditionVoucherUpdateArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PriceConditionVouchers.
     * @param {PriceConditionVoucherDeleteManyArgs} args - Arguments to filter PriceConditionVouchers to delete.
     * @example
     * // Delete a few PriceConditionVouchers
     * const { count } = await prisma.priceConditionVoucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceConditionVoucherDeleteManyArgs>(args?: SelectSubset<T, PriceConditionVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceConditionVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceConditionVouchers
     * const priceConditionVoucher = await prisma.priceConditionVoucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceConditionVoucherUpdateManyArgs>(args: SelectSubset<T, PriceConditionVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceConditionVoucher.
     * @param {PriceConditionVoucherUpsertArgs} args - Arguments to update or create a PriceConditionVoucher.
     * @example
     * // Update or create a PriceConditionVoucher
     * const priceConditionVoucher = await prisma.priceConditionVoucher.upsert({
     *   create: {
     *     // ... data to create a PriceConditionVoucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceConditionVoucher we want to update
     *   }
     * })
     */
    upsert<T extends PriceConditionVoucherUpsertArgs>(args: SelectSubset<T, PriceConditionVoucherUpsertArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PriceConditionVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherCountArgs} args - Arguments to filter PriceConditionVouchers to count.
     * @example
     * // Count the number of PriceConditionVouchers
     * const count = await prisma.priceConditionVoucher.count({
     *   where: {
     *     // ... the filter for the PriceConditionVouchers we want to count
     *   }
     * })
    **/
    count<T extends PriceConditionVoucherCountArgs>(
      args?: Subset<T, PriceConditionVoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceConditionVoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceConditionVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceConditionVoucherAggregateArgs>(args: Subset<T, PriceConditionVoucherAggregateArgs>): Prisma.PrismaPromise<GetPriceConditionVoucherAggregateType<T>>

    /**
     * Group by PriceConditionVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceConditionVoucherGroupByArgs} args - Group by arguments.
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
      T extends PriceConditionVoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceConditionVoucherGroupByArgs['orderBy'] }
        : { orderBy?: PriceConditionVoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceConditionVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceConditionVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceConditionVoucher model
   */
  readonly fields: PriceConditionVoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceConditionVoucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceConditionVoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Voucher<T extends PriceConditionVoucher$VoucherArgs<ExtArgs> = {}>(args?: Subset<T, PriceConditionVoucher$VoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the PriceConditionVoucher model
   */ 
  interface PriceConditionVoucherFieldRefs {
    readonly id: FieldRef<"PriceConditionVoucher", 'String'>
    readonly totalMin: FieldRef<"PriceConditionVoucher", 'Float'>
    readonly totalMax: FieldRef<"PriceConditionVoucher", 'Float'>
    readonly priceMin: FieldRef<"PriceConditionVoucher", 'Float'>
    readonly priceMax: FieldRef<"PriceConditionVoucher", 'Float'>
    readonly createdAt: FieldRef<"PriceConditionVoucher", 'DateTime'>
    readonly createdBy: FieldRef<"PriceConditionVoucher", 'String'>
    readonly updatedAt: FieldRef<"PriceConditionVoucher", 'DateTime'>
    readonly updatedBy: FieldRef<"PriceConditionVoucher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceConditionVoucher findUnique
   */
  export type PriceConditionVoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which PriceConditionVoucher to fetch.
     */
    where: PriceConditionVoucherWhereUniqueInput
  }

  /**
   * PriceConditionVoucher findUniqueOrThrow
   */
  export type PriceConditionVoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which PriceConditionVoucher to fetch.
     */
    where: PriceConditionVoucherWhereUniqueInput
  }

  /**
   * PriceConditionVoucher findFirst
   */
  export type PriceConditionVoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which PriceConditionVoucher to fetch.
     */
    where?: PriceConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceConditionVouchers to fetch.
     */
    orderBy?: PriceConditionVoucherOrderByWithRelationInput | PriceConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceConditionVouchers.
     */
    cursor?: PriceConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceConditionVouchers.
     */
    distinct?: PriceConditionVoucherScalarFieldEnum | PriceConditionVoucherScalarFieldEnum[]
  }

  /**
   * PriceConditionVoucher findFirstOrThrow
   */
  export type PriceConditionVoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which PriceConditionVoucher to fetch.
     */
    where?: PriceConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceConditionVouchers to fetch.
     */
    orderBy?: PriceConditionVoucherOrderByWithRelationInput | PriceConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceConditionVouchers.
     */
    cursor?: PriceConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceConditionVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceConditionVouchers.
     */
    distinct?: PriceConditionVoucherScalarFieldEnum | PriceConditionVoucherScalarFieldEnum[]
  }

  /**
   * PriceConditionVoucher findMany
   */
  export type PriceConditionVoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter, which PriceConditionVouchers to fetch.
     */
    where?: PriceConditionVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceConditionVouchers to fetch.
     */
    orderBy?: PriceConditionVoucherOrderByWithRelationInput | PriceConditionVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceConditionVouchers.
     */
    cursor?: PriceConditionVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceConditionVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceConditionVouchers.
     */
    skip?: number
    distinct?: PriceConditionVoucherScalarFieldEnum | PriceConditionVoucherScalarFieldEnum[]
  }

  /**
   * PriceConditionVoucher create
   */
  export type PriceConditionVoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceConditionVoucher.
     */
    data: XOR<PriceConditionVoucherCreateInput, PriceConditionVoucherUncheckedCreateInput>
  }

  /**
   * PriceConditionVoucher createMany
   */
  export type PriceConditionVoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceConditionVouchers.
     */
    data: PriceConditionVoucherCreateManyInput | PriceConditionVoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceConditionVoucher update
   */
  export type PriceConditionVoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceConditionVoucher.
     */
    data: XOR<PriceConditionVoucherUpdateInput, PriceConditionVoucherUncheckedUpdateInput>
    /**
     * Choose, which PriceConditionVoucher to update.
     */
    where: PriceConditionVoucherWhereUniqueInput
  }

  /**
   * PriceConditionVoucher updateMany
   */
  export type PriceConditionVoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceConditionVouchers.
     */
    data: XOR<PriceConditionVoucherUpdateManyMutationInput, PriceConditionVoucherUncheckedUpdateManyInput>
    /**
     * Filter which PriceConditionVouchers to update
     */
    where?: PriceConditionVoucherWhereInput
  }

  /**
   * PriceConditionVoucher upsert
   */
  export type PriceConditionVoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceConditionVoucher to update in case it exists.
     */
    where: PriceConditionVoucherWhereUniqueInput
    /**
     * In case the PriceConditionVoucher found by the `where` argument doesn't exist, create a new PriceConditionVoucher with this data.
     */
    create: XOR<PriceConditionVoucherCreateInput, PriceConditionVoucherUncheckedCreateInput>
    /**
     * In case the PriceConditionVoucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceConditionVoucherUpdateInput, PriceConditionVoucherUncheckedUpdateInput>
  }

  /**
   * PriceConditionVoucher delete
   */
  export type PriceConditionVoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    /**
     * Filter which PriceConditionVoucher to delete.
     */
    where: PriceConditionVoucherWhereUniqueInput
  }

  /**
   * PriceConditionVoucher deleteMany
   */
  export type PriceConditionVoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceConditionVouchers to delete
     */
    where?: PriceConditionVoucherWhereInput
  }

  /**
   * PriceConditionVoucher.Voucher
   */
  export type PriceConditionVoucher$VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * PriceConditionVoucher without action
   */
  export type PriceConditionVoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
  }


  /**
   * Model ProductPromotion
   */

  export type AggregateProductPromotion = {
    _count: ProductPromotionCountAggregateOutputType | null
    _avg: ProductPromotionAvgAggregateOutputType | null
    _sum: ProductPromotionSumAggregateOutputType | null
    _min: ProductPromotionMinAggregateOutputType | null
    _max: ProductPromotionMaxAggregateOutputType | null
  }

  export type ProductPromotionAvgAggregateOutputType = {
    quantity: number | null
    currentQuantity: number | null
    bought: number | null
    priceAfter: number | null
  }

  export type ProductPromotionSumAggregateOutputType = {
    quantity: number | null
    currentQuantity: number | null
    bought: number | null
    priceAfter: number | null
  }

  export type ProductPromotionMinAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    image: string | null
    category: string | null
    quantity: number | null
    currentQuantity: number | null
    bought: number | null
    priceAfter: number | null
    isDelete: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    storePromotionId: string | null
    salePromotionId: string | null
  }

  export type ProductPromotionMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    image: string | null
    category: string | null
    quantity: number | null
    currentQuantity: number | null
    bought: number | null
    priceAfter: number | null
    isDelete: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    storePromotionId: string | null
    salePromotionId: string | null
  }

  export type ProductPromotionCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    image: number
    category: number
    quantity: number
    currentQuantity: number
    bought: number
    priceAfter: number
    isDelete: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    storePromotionId: number
    salePromotionId: number
    _all: number
  }


  export type ProductPromotionAvgAggregateInputType = {
    quantity?: true
    currentQuantity?: true
    bought?: true
    priceAfter?: true
  }

  export type ProductPromotionSumAggregateInputType = {
    quantity?: true
    currentQuantity?: true
    bought?: true
    priceAfter?: true
  }

  export type ProductPromotionMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    image?: true
    category?: true
    quantity?: true
    currentQuantity?: true
    bought?: true
    priceAfter?: true
    isDelete?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    storePromotionId?: true
    salePromotionId?: true
  }

  export type ProductPromotionMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    image?: true
    category?: true
    quantity?: true
    currentQuantity?: true
    bought?: true
    priceAfter?: true
    isDelete?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    storePromotionId?: true
    salePromotionId?: true
  }

  export type ProductPromotionCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    image?: true
    category?: true
    quantity?: true
    currentQuantity?: true
    bought?: true
    priceAfter?: true
    isDelete?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    storePromotionId?: true
    salePromotionId?: true
    _all?: true
  }

  export type ProductPromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPromotion to aggregate.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPromotions
    **/
    _count?: true | ProductPromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPromotionMaxAggregateInputType
  }

  export type GetProductPromotionAggregateType<T extends ProductPromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPromotion[P]>
      : GetScalarType<T[P], AggregateProductPromotion[P]>
  }




  export type ProductPromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithAggregationInput | ProductPromotionOrderByWithAggregationInput[]
    by: ProductPromotionScalarFieldEnum[] | ProductPromotionScalarFieldEnum
    having?: ProductPromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPromotionCountAggregateInputType | true
    _avg?: ProductPromotionAvgAggregateInputType
    _sum?: ProductPromotionSumAggregateInputType
    _min?: ProductPromotionMinAggregateInputType
    _max?: ProductPromotionMaxAggregateInputType
  }

  export type ProductPromotionGroupByOutputType = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought: number | null
    priceAfter: number
    isDelete: boolean
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    storePromotionId: string
    salePromotionId: string
    _count: ProductPromotionCountAggregateOutputType | null
    _avg: ProductPromotionAvgAggregateOutputType | null
    _sum: ProductPromotionSumAggregateOutputType | null
    _min: ProductPromotionMinAggregateOutputType | null
    _max: ProductPromotionMaxAggregateOutputType | null
  }

  type GetProductPromotionGroupByPayload<T extends ProductPromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPromotionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPromotionGroupByOutputType[P]>
        }
      >
    >


  export type ProductPromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    image?: boolean
    category?: boolean
    quantity?: boolean
    currentQuantity?: boolean
    bought?: boolean
    priceAfter?: boolean
    isDelete?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    storePromotionId?: boolean
    salePromotionId?: boolean
    StorePromotion?: boolean | StorePromotionDefaultArgs<ExtArgs>
    SalePromotion?: boolean | SalePromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPromotion"]>


  export type ProductPromotionSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    image?: boolean
    category?: boolean
    quantity?: boolean
    currentQuantity?: boolean
    bought?: boolean
    priceAfter?: boolean
    isDelete?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    storePromotionId?: boolean
    salePromotionId?: boolean
  }

  export type ProductPromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "image" | "category" | "quantity" | "currentQuantity" | "bought" | "priceAfter" | "isDelete" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "storePromotionId" | "salePromotionId", ExtArgs["result"]["productPromotion"]>
  export type ProductPromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StorePromotion?: boolean | StorePromotionDefaultArgs<ExtArgs>
    SalePromotion?: boolean | SalePromotionDefaultArgs<ExtArgs>
  }

  export type $ProductPromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPromotion"
    objects: {
      StorePromotion: Prisma.$StorePromotionPayload<ExtArgs>
      SalePromotion: Prisma.$SalePromotionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      name: string
      image: string
      category: string
      quantity: number
      currentQuantity: number
      bought: number | null
      priceAfter: number
      isDelete: boolean
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
      storePromotionId: string
      salePromotionId: string
    }, ExtArgs["result"]["productPromotion"]>
    composites: {}
  }

  type ProductPromotionGetPayload<S extends boolean | null | undefined | ProductPromotionDefaultArgs> = $Result.GetResult<Prisma.$ProductPromotionPayload, S>

  type ProductPromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductPromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPromotionCountAggregateInputType | true
    }

  export interface ProductPromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPromotion'], meta: { name: 'ProductPromotion' } }
    /**
     * Find zero or one ProductPromotion that matches the filter.
     * @param {ProductPromotionFindUniqueArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPromotionFindUniqueArgs>(args: SelectSubset<T, ProductPromotionFindUniqueArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductPromotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductPromotionFindUniqueOrThrowArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindFirstArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPromotionFindFirstArgs>(args?: SelectSubset<T, ProductPromotionFindFirstArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindFirstOrThrowArgs} args - Arguments to find a ProductPromotion
     * @example
     * // Get one ProductPromotion
     * const productPromotion = await prisma.productPromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductPromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPromotions
     * const productPromotions = await prisma.productPromotion.findMany()
     * 
     * // Get first 10 ProductPromotions
     * const productPromotions = await prisma.productPromotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPromotionWithIdOnly = await prisma.productPromotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPromotionFindManyArgs>(args?: SelectSubset<T, ProductPromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductPromotion.
     * @param {ProductPromotionCreateArgs} args - Arguments to create a ProductPromotion.
     * @example
     * // Create one ProductPromotion
     * const ProductPromotion = await prisma.productPromotion.create({
     *   data: {
     *     // ... data to create a ProductPromotion
     *   }
     * })
     * 
     */
    create<T extends ProductPromotionCreateArgs>(args: SelectSubset<T, ProductPromotionCreateArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductPromotions.
     * @param {ProductPromotionCreateManyArgs} args - Arguments to create many ProductPromotions.
     * @example
     * // Create many ProductPromotions
     * const productPromotion = await prisma.productPromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPromotionCreateManyArgs>(args?: SelectSubset<T, ProductPromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductPromotion.
     * @param {ProductPromotionDeleteArgs} args - Arguments to delete one ProductPromotion.
     * @example
     * // Delete one ProductPromotion
     * const ProductPromotion = await prisma.productPromotion.delete({
     *   where: {
     *     // ... filter to delete one ProductPromotion
     *   }
     * })
     * 
     */
    delete<T extends ProductPromotionDeleteArgs>(args: SelectSubset<T, ProductPromotionDeleteArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductPromotion.
     * @param {ProductPromotionUpdateArgs} args - Arguments to update one ProductPromotion.
     * @example
     * // Update one ProductPromotion
     * const productPromotion = await prisma.productPromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPromotionUpdateArgs>(args: SelectSubset<T, ProductPromotionUpdateArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductPromotions.
     * @param {ProductPromotionDeleteManyArgs} args - Arguments to filter ProductPromotions to delete.
     * @example
     * // Delete a few ProductPromotions
     * const { count } = await prisma.productPromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPromotionDeleteManyArgs>(args?: SelectSubset<T, ProductPromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPromotions
     * const productPromotion = await prisma.productPromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPromotionUpdateManyArgs>(args: SelectSubset<T, ProductPromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPromotion.
     * @param {ProductPromotionUpsertArgs} args - Arguments to update or create a ProductPromotion.
     * @example
     * // Update or create a ProductPromotion
     * const productPromotion = await prisma.productPromotion.upsert({
     *   create: {
     *     // ... data to create a ProductPromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPromotion we want to update
     *   }
     * })
     */
    upsert<T extends ProductPromotionUpsertArgs>(args: SelectSubset<T, ProductPromotionUpsertArgs<ExtArgs>>): Prisma__ProductPromotionClient<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionCountArgs} args - Arguments to filter ProductPromotions to count.
     * @example
     * // Count the number of ProductPromotions
     * const count = await prisma.productPromotion.count({
     *   where: {
     *     // ... the filter for the ProductPromotions we want to count
     *   }
     * })
    **/
    count<T extends ProductPromotionCountArgs>(
      args?: Subset<T, ProductPromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPromotionAggregateArgs>(args: Subset<T, ProductPromotionAggregateArgs>): Prisma.PrismaPromise<GetProductPromotionAggregateType<T>>

    /**
     * Group by ProductPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPromotionGroupByArgs} args - Group by arguments.
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
      T extends ProductPromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPromotionGroupByArgs['orderBy'] }
        : { orderBy?: ProductPromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPromotion model
   */
  readonly fields: ProductPromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StorePromotion<T extends StorePromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorePromotionDefaultArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    SalePromotion<T extends SalePromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalePromotionDefaultArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the ProductPromotion model
   */ 
  interface ProductPromotionFieldRefs {
    readonly id: FieldRef<"ProductPromotion", 'String'>
    readonly productId: FieldRef<"ProductPromotion", 'String'>
    readonly name: FieldRef<"ProductPromotion", 'String'>
    readonly image: FieldRef<"ProductPromotion", 'String'>
    readonly category: FieldRef<"ProductPromotion", 'String'>
    readonly quantity: FieldRef<"ProductPromotion", 'Int'>
    readonly currentQuantity: FieldRef<"ProductPromotion", 'Int'>
    readonly bought: FieldRef<"ProductPromotion", 'Int'>
    readonly priceAfter: FieldRef<"ProductPromotion", 'Float'>
    readonly isDelete: FieldRef<"ProductPromotion", 'Boolean'>
    readonly createdAt: FieldRef<"ProductPromotion", 'DateTime'>
    readonly createdBy: FieldRef<"ProductPromotion", 'String'>
    readonly updatedAt: FieldRef<"ProductPromotion", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductPromotion", 'String'>
    readonly storePromotionId: FieldRef<"ProductPromotion", 'String'>
    readonly salePromotionId: FieldRef<"ProductPromotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductPromotion findUnique
   */
  export type ProductPromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion findUniqueOrThrow
   */
  export type ProductPromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion findFirst
   */
  export type ProductPromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPromotions.
     */
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion findFirstOrThrow
   */
  export type ProductPromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotion to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPromotions.
     */
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion findMany
   */
  export type ProductPromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPromotions to fetch.
     */
    where?: ProductPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPromotions to fetch.
     */
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPromotions.
     */
    cursor?: ProductPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPromotions.
     */
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * ProductPromotion create
   */
  export type ProductPromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPromotion.
     */
    data: XOR<ProductPromotionCreateInput, ProductPromotionUncheckedCreateInput>
  }

  /**
   * ProductPromotion createMany
   */
  export type ProductPromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPromotions.
     */
    data: ProductPromotionCreateManyInput | ProductPromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPromotion update
   */
  export type ProductPromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPromotion.
     */
    data: XOR<ProductPromotionUpdateInput, ProductPromotionUncheckedUpdateInput>
    /**
     * Choose, which ProductPromotion to update.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion updateMany
   */
  export type ProductPromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPromotions.
     */
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyInput>
    /**
     * Filter which ProductPromotions to update
     */
    where?: ProductPromotionWhereInput
  }

  /**
   * ProductPromotion upsert
   */
  export type ProductPromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPromotion to update in case it exists.
     */
    where: ProductPromotionWhereUniqueInput
    /**
     * In case the ProductPromotion found by the `where` argument doesn't exist, create a new ProductPromotion with this data.
     */
    create: XOR<ProductPromotionCreateInput, ProductPromotionUncheckedCreateInput>
    /**
     * In case the ProductPromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPromotionUpdateInput, ProductPromotionUncheckedUpdateInput>
  }

  /**
   * ProductPromotion delete
   */
  export type ProductPromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    /**
     * Filter which ProductPromotion to delete.
     */
    where: ProductPromotionWhereUniqueInput
  }

  /**
   * ProductPromotion deleteMany
   */
  export type ProductPromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPromotions to delete
     */
    where?: ProductPromotionWhereInput
  }

  /**
   * ProductPromotion without action
   */
  export type ProductPromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
  }


  /**
   * Model SalePromotion
   */

  export type AggregateSalePromotion = {
    _count: SalePromotionCountAggregateOutputType | null
    _min: SalePromotionMinAggregateOutputType | null
    _max: SalePromotionMaxAggregateOutputType | null
  }

  export type SalePromotionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    categoryId: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SalePromotionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    categoryId: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SalePromotionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    categoryId: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type SalePromotionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SalePromotionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SalePromotionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type SalePromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePromotion to aggregate.
     */
    where?: SalePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePromotions to fetch.
     */
    orderBy?: SalePromotionOrderByWithRelationInput | SalePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalePromotions
    **/
    _count?: true | SalePromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalePromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalePromotionMaxAggregateInputType
  }

  export type GetSalePromotionAggregateType<T extends SalePromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateSalePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalePromotion[P]>
      : GetScalarType<T[P], AggregateSalePromotion[P]>
  }




  export type SalePromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePromotionWhereInput
    orderBy?: SalePromotionOrderByWithAggregationInput | SalePromotionOrderByWithAggregationInput[]
    by: SalePromotionScalarFieldEnum[] | SalePromotionScalarFieldEnum
    having?: SalePromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalePromotionCountAggregateInputType | true
    _min?: SalePromotionMinAggregateInputType
    _max?: SalePromotionMaxAggregateInputType
  }

  export type SalePromotionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: string
    categoryId: string | null
    status: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: SalePromotionCountAggregateOutputType | null
    _min: SalePromotionMinAggregateOutputType | null
    _max: SalePromotionMaxAggregateOutputType | null
  }

  type GetSalePromotionGroupByPayload<T extends SalePromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalePromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalePromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalePromotionGroupByOutputType[P]>
            : GetScalarType<T[P], SalePromotionGroupByOutputType[P]>
        }
      >
    >


  export type SalePromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ProductPromotion?: boolean | SalePromotion$ProductPromotionArgs<ExtArgs>
    StorePromotion?: boolean | SalePromotion$StorePromotionArgs<ExtArgs>
    _count?: boolean | SalePromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePromotion"]>


  export type SalePromotionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type SalePromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "categoryId" | "status" | "startDate" | "endDate" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["salePromotion"]>
  export type SalePromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPromotion?: boolean | SalePromotion$ProductPromotionArgs<ExtArgs>
    StorePromotion?: boolean | SalePromotion$StorePromotionArgs<ExtArgs>
    _count?: boolean | SalePromotionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SalePromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalePromotion"
    objects: {
      ProductPromotion: Prisma.$ProductPromotionPayload<ExtArgs>[]
      StorePromotion: Prisma.$StorePromotionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: string
      categoryId: string | null
      status: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["salePromotion"]>
    composites: {}
  }

  type SalePromotionGetPayload<S extends boolean | null | undefined | SalePromotionDefaultArgs> = $Result.GetResult<Prisma.$SalePromotionPayload, S>

  type SalePromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalePromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalePromotionCountAggregateInputType | true
    }

  export interface SalePromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalePromotion'], meta: { name: 'SalePromotion' } }
    /**
     * Find zero or one SalePromotion that matches the filter.
     * @param {SalePromotionFindUniqueArgs} args - Arguments to find a SalePromotion
     * @example
     * // Get one SalePromotion
     * const salePromotion = await prisma.salePromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalePromotionFindUniqueArgs>(args: SelectSubset<T, SalePromotionFindUniqueArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SalePromotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalePromotionFindUniqueOrThrowArgs} args - Arguments to find a SalePromotion
     * @example
     * // Get one SalePromotion
     * const salePromotion = await prisma.salePromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalePromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, SalePromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SalePromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionFindFirstArgs} args - Arguments to find a SalePromotion
     * @example
     * // Get one SalePromotion
     * const salePromotion = await prisma.salePromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalePromotionFindFirstArgs>(args?: SelectSubset<T, SalePromotionFindFirstArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SalePromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionFindFirstOrThrowArgs} args - Arguments to find a SalePromotion
     * @example
     * // Get one SalePromotion
     * const salePromotion = await prisma.salePromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalePromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, SalePromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SalePromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalePromotions
     * const salePromotions = await prisma.salePromotion.findMany()
     * 
     * // Get first 10 SalePromotions
     * const salePromotions = await prisma.salePromotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salePromotionWithIdOnly = await prisma.salePromotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalePromotionFindManyArgs>(args?: SelectSubset<T, SalePromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SalePromotion.
     * @param {SalePromotionCreateArgs} args - Arguments to create a SalePromotion.
     * @example
     * // Create one SalePromotion
     * const SalePromotion = await prisma.salePromotion.create({
     *   data: {
     *     // ... data to create a SalePromotion
     *   }
     * })
     * 
     */
    create<T extends SalePromotionCreateArgs>(args: SelectSubset<T, SalePromotionCreateArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SalePromotions.
     * @param {SalePromotionCreateManyArgs} args - Arguments to create many SalePromotions.
     * @example
     * // Create many SalePromotions
     * const salePromotion = await prisma.salePromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalePromotionCreateManyArgs>(args?: SelectSubset<T, SalePromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalePromotion.
     * @param {SalePromotionDeleteArgs} args - Arguments to delete one SalePromotion.
     * @example
     * // Delete one SalePromotion
     * const SalePromotion = await prisma.salePromotion.delete({
     *   where: {
     *     // ... filter to delete one SalePromotion
     *   }
     * })
     * 
     */
    delete<T extends SalePromotionDeleteArgs>(args: SelectSubset<T, SalePromotionDeleteArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SalePromotion.
     * @param {SalePromotionUpdateArgs} args - Arguments to update one SalePromotion.
     * @example
     * // Update one SalePromotion
     * const salePromotion = await prisma.salePromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalePromotionUpdateArgs>(args: SelectSubset<T, SalePromotionUpdateArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SalePromotions.
     * @param {SalePromotionDeleteManyArgs} args - Arguments to filter SalePromotions to delete.
     * @example
     * // Delete a few SalePromotions
     * const { count } = await prisma.salePromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalePromotionDeleteManyArgs>(args?: SelectSubset<T, SalePromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalePromotions
     * const salePromotion = await prisma.salePromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalePromotionUpdateManyArgs>(args: SelectSubset<T, SalePromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalePromotion.
     * @param {SalePromotionUpsertArgs} args - Arguments to update or create a SalePromotion.
     * @example
     * // Update or create a SalePromotion
     * const salePromotion = await prisma.salePromotion.upsert({
     *   create: {
     *     // ... data to create a SalePromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalePromotion we want to update
     *   }
     * })
     */
    upsert<T extends SalePromotionUpsertArgs>(args: SelectSubset<T, SalePromotionUpsertArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SalePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionCountArgs} args - Arguments to filter SalePromotions to count.
     * @example
     * // Count the number of SalePromotions
     * const count = await prisma.salePromotion.count({
     *   where: {
     *     // ... the filter for the SalePromotions we want to count
     *   }
     * })
    **/
    count<T extends SalePromotionCountArgs>(
      args?: Subset<T, SalePromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalePromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalePromotionAggregateArgs>(args: Subset<T, SalePromotionAggregateArgs>): Prisma.PrismaPromise<GetSalePromotionAggregateType<T>>

    /**
     * Group by SalePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePromotionGroupByArgs} args - Group by arguments.
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
      T extends SalePromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalePromotionGroupByArgs['orderBy'] }
        : { orderBy?: SalePromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalePromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalePromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalePromotion model
   */
  readonly fields: SalePromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalePromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalePromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductPromotion<T extends SalePromotion$ProductPromotionArgs<ExtArgs> = {}>(args?: Subset<T, SalePromotion$ProductPromotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    StorePromotion<T extends SalePromotion$StorePromotionArgs<ExtArgs> = {}>(args?: Subset<T, SalePromotion$StorePromotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the SalePromotion model
   */ 
  interface SalePromotionFieldRefs {
    readonly id: FieldRef<"SalePromotion", 'String'>
    readonly title: FieldRef<"SalePromotion", 'String'>
    readonly description: FieldRef<"SalePromotion", 'String'>
    readonly type: FieldRef<"SalePromotion", 'String'>
    readonly categoryId: FieldRef<"SalePromotion", 'String'>
    readonly status: FieldRef<"SalePromotion", 'String'>
    readonly startDate: FieldRef<"SalePromotion", 'DateTime'>
    readonly endDate: FieldRef<"SalePromotion", 'DateTime'>
    readonly createdAt: FieldRef<"SalePromotion", 'DateTime'>
    readonly createdBy: FieldRef<"SalePromotion", 'String'>
    readonly updatedAt: FieldRef<"SalePromotion", 'DateTime'>
    readonly updatedBy: FieldRef<"SalePromotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SalePromotion findUnique
   */
  export type SalePromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter, which SalePromotion to fetch.
     */
    where: SalePromotionWhereUniqueInput
  }

  /**
   * SalePromotion findUniqueOrThrow
   */
  export type SalePromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter, which SalePromotion to fetch.
     */
    where: SalePromotionWhereUniqueInput
  }

  /**
   * SalePromotion findFirst
   */
  export type SalePromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter, which SalePromotion to fetch.
     */
    where?: SalePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePromotions to fetch.
     */
    orderBy?: SalePromotionOrderByWithRelationInput | SalePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePromotions.
     */
    cursor?: SalePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePromotions.
     */
    distinct?: SalePromotionScalarFieldEnum | SalePromotionScalarFieldEnum[]
  }

  /**
   * SalePromotion findFirstOrThrow
   */
  export type SalePromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter, which SalePromotion to fetch.
     */
    where?: SalePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePromotions to fetch.
     */
    orderBy?: SalePromotionOrderByWithRelationInput | SalePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePromotions.
     */
    cursor?: SalePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePromotions.
     */
    distinct?: SalePromotionScalarFieldEnum | SalePromotionScalarFieldEnum[]
  }

  /**
   * SalePromotion findMany
   */
  export type SalePromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter, which SalePromotions to fetch.
     */
    where?: SalePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePromotions to fetch.
     */
    orderBy?: SalePromotionOrderByWithRelationInput | SalePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalePromotions.
     */
    cursor?: SalePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePromotions.
     */
    skip?: number
    distinct?: SalePromotionScalarFieldEnum | SalePromotionScalarFieldEnum[]
  }

  /**
   * SalePromotion create
   */
  export type SalePromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a SalePromotion.
     */
    data: XOR<SalePromotionCreateInput, SalePromotionUncheckedCreateInput>
  }

  /**
   * SalePromotion createMany
   */
  export type SalePromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalePromotions.
     */
    data: SalePromotionCreateManyInput | SalePromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalePromotion update
   */
  export type SalePromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a SalePromotion.
     */
    data: XOR<SalePromotionUpdateInput, SalePromotionUncheckedUpdateInput>
    /**
     * Choose, which SalePromotion to update.
     */
    where: SalePromotionWhereUniqueInput
  }

  /**
   * SalePromotion updateMany
   */
  export type SalePromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalePromotions.
     */
    data: XOR<SalePromotionUpdateManyMutationInput, SalePromotionUncheckedUpdateManyInput>
    /**
     * Filter which SalePromotions to update
     */
    where?: SalePromotionWhereInput
  }

  /**
   * SalePromotion upsert
   */
  export type SalePromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the SalePromotion to update in case it exists.
     */
    where: SalePromotionWhereUniqueInput
    /**
     * In case the SalePromotion found by the `where` argument doesn't exist, create a new SalePromotion with this data.
     */
    create: XOR<SalePromotionCreateInput, SalePromotionUncheckedCreateInput>
    /**
     * In case the SalePromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalePromotionUpdateInput, SalePromotionUncheckedUpdateInput>
  }

  /**
   * SalePromotion delete
   */
  export type SalePromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
    /**
     * Filter which SalePromotion to delete.
     */
    where: SalePromotionWhereUniqueInput
  }

  /**
   * SalePromotion deleteMany
   */
  export type SalePromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePromotions to delete
     */
    where?: SalePromotionWhereInput
  }

  /**
   * SalePromotion.ProductPromotion
   */
  export type SalePromotion$ProductPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    cursor?: ProductPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * SalePromotion.StorePromotion
   */
  export type SalePromotion$StorePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    where?: StorePromotionWhereInput
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    cursor?: StorePromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorePromotionScalarFieldEnum | StorePromotionScalarFieldEnum[]
  }

  /**
   * SalePromotion without action
   */
  export type SalePromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePromotion
     */
    select?: SalePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePromotion
     */
    omit?: SalePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePromotionInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    location: string | null
    description: string | null
    status: string | null
    tax: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    location: string | null
    description: string | null
    status: string | null
    tax: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    image: number
    location: number
    description: number
    status: number
    tax: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    location?: true
    description?: true
    status?: true
    tax?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    location?: true
    description?: true
    status?: true
    tax?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    location?: true
    description?: true
    status?: true
    tax?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    image: string
    location: string | null
    description: string | null
    status: string
    tax: string | null
    createdBy: string
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    location?: boolean
    description?: boolean
    status?: boolean
    tax?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Rating?: boolean | Store$RatingArgs<ExtArgs>
    StorePromotion?: boolean | Store$StorePromotionArgs<ExtArgs>
    UserViewStore?: boolean | Store$UserViewStoreArgs<ExtArgs>
    Voucher?: boolean | Store$VoucherArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>


  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    location?: boolean
    description?: boolean
    status?: boolean
    tax?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "location" | "description" | "status" | "tax" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | Store$RatingArgs<ExtArgs>
    StorePromotion?: boolean | Store$StorePromotionArgs<ExtArgs>
    UserViewStore?: boolean | Store$UserViewStoreArgs<ExtArgs>
    Voucher?: boolean | Store$VoucherArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      Rating: Prisma.$RatingPayload<ExtArgs>[]
      StorePromotion: Prisma.$StorePromotionPayload<ExtArgs>[]
      UserViewStore: Prisma.$UserViewStorePayload<ExtArgs>[]
      Voucher: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      location: string | null
      description: string | null
      status: string
      tax: string | null
      createdBy: string
      updatedBy: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rating<T extends Store$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Store$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    StorePromotion<T extends Store$StorePromotionArgs<ExtArgs> = {}>(args?: Subset<T, Store$StorePromotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UserViewStore<T extends Store$UserViewStoreArgs<ExtArgs> = {}>(args?: Subset<T, Store$UserViewStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Voucher<T extends Store$VoucherArgs<ExtArgs> = {}>(args?: Subset<T, Store$VoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly image: FieldRef<"Store", 'String'>
    readonly location: FieldRef<"Store", 'String'>
    readonly description: FieldRef<"Store", 'String'>
    readonly status: FieldRef<"Store", 'String'>
    readonly tax: FieldRef<"Store", 'String'>
    readonly createdBy: FieldRef<"Store", 'String'>
    readonly updatedBy: FieldRef<"Store", 'String'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.Rating
   */
  export type Store$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Store.StorePromotion
   */
  export type Store$StorePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    where?: StorePromotionWhereInput
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    cursor?: StorePromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorePromotionScalarFieldEnum | StorePromotionScalarFieldEnum[]
  }

  /**
   * Store.UserViewStore
   */
  export type Store$UserViewStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    where?: UserViewStoreWhereInput
    orderBy?: UserViewStoreOrderByWithRelationInput | UserViewStoreOrderByWithRelationInput[]
    cursor?: UserViewStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserViewStoreScalarFieldEnum | UserViewStoreScalarFieldEnum[]
  }

  /**
   * Store.Voucher
   */
  export type Store$VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model StorePromotion
   */

  export type AggregateStorePromotion = {
    _count: StorePromotionCountAggregateOutputType | null
    _min: StorePromotionMinAggregateOutputType | null
    _max: StorePromotionMaxAggregateOutputType | null
  }

  export type StorePromotionMinAggregateOutputType = {
    id: string | null
    salePromotionId: string | null
    storeId: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type StorePromotionMaxAggregateOutputType = {
    id: string | null
    salePromotionId: string | null
    storeId: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type StorePromotionCountAggregateOutputType = {
    id: number
    salePromotionId: number
    storeId: number
    status: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type StorePromotionMinAggregateInputType = {
    id?: true
    salePromotionId?: true
    storeId?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type StorePromotionMaxAggregateInputType = {
    id?: true
    salePromotionId?: true
    storeId?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type StorePromotionCountAggregateInputType = {
    id?: true
    salePromotionId?: true
    storeId?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type StorePromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorePromotion to aggregate.
     */
    where?: StorePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorePromotions to fetch.
     */
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorePromotions
    **/
    _count?: true | StorePromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorePromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorePromotionMaxAggregateInputType
  }

  export type GetStorePromotionAggregateType<T extends StorePromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateStorePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorePromotion[P]>
      : GetScalarType<T[P], AggregateStorePromotion[P]>
  }




  export type StorePromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorePromotionWhereInput
    orderBy?: StorePromotionOrderByWithAggregationInput | StorePromotionOrderByWithAggregationInput[]
    by: StorePromotionScalarFieldEnum[] | StorePromotionScalarFieldEnum
    having?: StorePromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorePromotionCountAggregateInputType | true
    _min?: StorePromotionMinAggregateInputType
    _max?: StorePromotionMaxAggregateInputType
  }

  export type StorePromotionGroupByOutputType = {
    id: string
    salePromotionId: string
    storeId: string
    status: string
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: StorePromotionCountAggregateOutputType | null
    _min: StorePromotionMinAggregateOutputType | null
    _max: StorePromotionMaxAggregateOutputType | null
  }

  type GetStorePromotionGroupByPayload<T extends StorePromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorePromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorePromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorePromotionGroupByOutputType[P]>
            : GetScalarType<T[P], StorePromotionGroupByOutputType[P]>
        }
      >
    >


  export type StorePromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salePromotionId?: boolean
    storeId?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ProductPromotion?: boolean | StorePromotion$ProductPromotionArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
    SalePromotion?: boolean | SalePromotionDefaultArgs<ExtArgs>
    _count?: boolean | StorePromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storePromotion"]>


  export type StorePromotionSelectScalar = {
    id?: boolean
    salePromotionId?: boolean
    storeId?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type StorePromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salePromotionId" | "storeId" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["storePromotion"]>
  export type StorePromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPromotion?: boolean | StorePromotion$ProductPromotionArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
    SalePromotion?: boolean | SalePromotionDefaultArgs<ExtArgs>
    _count?: boolean | StorePromotionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorePromotion"
    objects: {
      ProductPromotion: Prisma.$ProductPromotionPayload<ExtArgs>[]
      Store: Prisma.$StorePayload<ExtArgs>
      SalePromotion: Prisma.$SalePromotionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salePromotionId: string
      storeId: string
      status: string
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["storePromotion"]>
    composites: {}
  }

  type StorePromotionGetPayload<S extends boolean | null | undefined | StorePromotionDefaultArgs> = $Result.GetResult<Prisma.$StorePromotionPayload, S>

  type StorePromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StorePromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorePromotionCountAggregateInputType | true
    }

  export interface StorePromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorePromotion'], meta: { name: 'StorePromotion' } }
    /**
     * Find zero or one StorePromotion that matches the filter.
     * @param {StorePromotionFindUniqueArgs} args - Arguments to find a StorePromotion
     * @example
     * // Get one StorePromotion
     * const storePromotion = await prisma.storePromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorePromotionFindUniqueArgs>(args: SelectSubset<T, StorePromotionFindUniqueArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StorePromotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StorePromotionFindUniqueOrThrowArgs} args - Arguments to find a StorePromotion
     * @example
     * // Get one StorePromotion
     * const storePromotion = await prisma.storePromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorePromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, StorePromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StorePromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionFindFirstArgs} args - Arguments to find a StorePromotion
     * @example
     * // Get one StorePromotion
     * const storePromotion = await prisma.storePromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorePromotionFindFirstArgs>(args?: SelectSubset<T, StorePromotionFindFirstArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StorePromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionFindFirstOrThrowArgs} args - Arguments to find a StorePromotion
     * @example
     * // Get one StorePromotion
     * const storePromotion = await prisma.storePromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorePromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, StorePromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StorePromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorePromotions
     * const storePromotions = await prisma.storePromotion.findMany()
     * 
     * // Get first 10 StorePromotions
     * const storePromotions = await prisma.storePromotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storePromotionWithIdOnly = await prisma.storePromotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorePromotionFindManyArgs>(args?: SelectSubset<T, StorePromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StorePromotion.
     * @param {StorePromotionCreateArgs} args - Arguments to create a StorePromotion.
     * @example
     * // Create one StorePromotion
     * const StorePromotion = await prisma.storePromotion.create({
     *   data: {
     *     // ... data to create a StorePromotion
     *   }
     * })
     * 
     */
    create<T extends StorePromotionCreateArgs>(args: SelectSubset<T, StorePromotionCreateArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StorePromotions.
     * @param {StorePromotionCreateManyArgs} args - Arguments to create many StorePromotions.
     * @example
     * // Create many StorePromotions
     * const storePromotion = await prisma.storePromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorePromotionCreateManyArgs>(args?: SelectSubset<T, StorePromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StorePromotion.
     * @param {StorePromotionDeleteArgs} args - Arguments to delete one StorePromotion.
     * @example
     * // Delete one StorePromotion
     * const StorePromotion = await prisma.storePromotion.delete({
     *   where: {
     *     // ... filter to delete one StorePromotion
     *   }
     * })
     * 
     */
    delete<T extends StorePromotionDeleteArgs>(args: SelectSubset<T, StorePromotionDeleteArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StorePromotion.
     * @param {StorePromotionUpdateArgs} args - Arguments to update one StorePromotion.
     * @example
     * // Update one StorePromotion
     * const storePromotion = await prisma.storePromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorePromotionUpdateArgs>(args: SelectSubset<T, StorePromotionUpdateArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StorePromotions.
     * @param {StorePromotionDeleteManyArgs} args - Arguments to filter StorePromotions to delete.
     * @example
     * // Delete a few StorePromotions
     * const { count } = await prisma.storePromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorePromotionDeleteManyArgs>(args?: SelectSubset<T, StorePromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorePromotions
     * const storePromotion = await prisma.storePromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorePromotionUpdateManyArgs>(args: SelectSubset<T, StorePromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StorePromotion.
     * @param {StorePromotionUpsertArgs} args - Arguments to update or create a StorePromotion.
     * @example
     * // Update or create a StorePromotion
     * const storePromotion = await prisma.storePromotion.upsert({
     *   create: {
     *     // ... data to create a StorePromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorePromotion we want to update
     *   }
     * })
     */
    upsert<T extends StorePromotionUpsertArgs>(args: SelectSubset<T, StorePromotionUpsertArgs<ExtArgs>>): Prisma__StorePromotionClient<$Result.GetResult<Prisma.$StorePromotionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StorePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionCountArgs} args - Arguments to filter StorePromotions to count.
     * @example
     * // Count the number of StorePromotions
     * const count = await prisma.storePromotion.count({
     *   where: {
     *     // ... the filter for the StorePromotions we want to count
     *   }
     * })
    **/
    count<T extends StorePromotionCountArgs>(
      args?: Subset<T, StorePromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorePromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorePromotionAggregateArgs>(args: Subset<T, StorePromotionAggregateArgs>): Prisma.PrismaPromise<GetStorePromotionAggregateType<T>>

    /**
     * Group by StorePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorePromotionGroupByArgs} args - Group by arguments.
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
      T extends StorePromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorePromotionGroupByArgs['orderBy'] }
        : { orderBy?: StorePromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorePromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorePromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorePromotion model
   */
  readonly fields: StorePromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorePromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorePromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductPromotion<T extends StorePromotion$ProductPromotionArgs<ExtArgs> = {}>(args?: Subset<T, StorePromotion$ProductPromotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPromotionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    SalePromotion<T extends SalePromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalePromotionDefaultArgs<ExtArgs>>): Prisma__SalePromotionClient<$Result.GetResult<Prisma.$SalePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the StorePromotion model
   */ 
  interface StorePromotionFieldRefs {
    readonly id: FieldRef<"StorePromotion", 'String'>
    readonly salePromotionId: FieldRef<"StorePromotion", 'String'>
    readonly storeId: FieldRef<"StorePromotion", 'String'>
    readonly status: FieldRef<"StorePromotion", 'String'>
    readonly createdAt: FieldRef<"StorePromotion", 'DateTime'>
    readonly createdBy: FieldRef<"StorePromotion", 'String'>
    readonly updatedAt: FieldRef<"StorePromotion", 'DateTime'>
    readonly updatedBy: FieldRef<"StorePromotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StorePromotion findUnique
   */
  export type StorePromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter, which StorePromotion to fetch.
     */
    where: StorePromotionWhereUniqueInput
  }

  /**
   * StorePromotion findUniqueOrThrow
   */
  export type StorePromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter, which StorePromotion to fetch.
     */
    where: StorePromotionWhereUniqueInput
  }

  /**
   * StorePromotion findFirst
   */
  export type StorePromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter, which StorePromotion to fetch.
     */
    where?: StorePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorePromotions to fetch.
     */
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorePromotions.
     */
    cursor?: StorePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorePromotions.
     */
    distinct?: StorePromotionScalarFieldEnum | StorePromotionScalarFieldEnum[]
  }

  /**
   * StorePromotion findFirstOrThrow
   */
  export type StorePromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter, which StorePromotion to fetch.
     */
    where?: StorePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorePromotions to fetch.
     */
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorePromotions.
     */
    cursor?: StorePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorePromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorePromotions.
     */
    distinct?: StorePromotionScalarFieldEnum | StorePromotionScalarFieldEnum[]
  }

  /**
   * StorePromotion findMany
   */
  export type StorePromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter, which StorePromotions to fetch.
     */
    where?: StorePromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorePromotions to fetch.
     */
    orderBy?: StorePromotionOrderByWithRelationInput | StorePromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorePromotions.
     */
    cursor?: StorePromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorePromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorePromotions.
     */
    skip?: number
    distinct?: StorePromotionScalarFieldEnum | StorePromotionScalarFieldEnum[]
  }

  /**
   * StorePromotion create
   */
  export type StorePromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a StorePromotion.
     */
    data: XOR<StorePromotionCreateInput, StorePromotionUncheckedCreateInput>
  }

  /**
   * StorePromotion createMany
   */
  export type StorePromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorePromotions.
     */
    data: StorePromotionCreateManyInput | StorePromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorePromotion update
   */
  export type StorePromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a StorePromotion.
     */
    data: XOR<StorePromotionUpdateInput, StorePromotionUncheckedUpdateInput>
    /**
     * Choose, which StorePromotion to update.
     */
    where: StorePromotionWhereUniqueInput
  }

  /**
   * StorePromotion updateMany
   */
  export type StorePromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorePromotions.
     */
    data: XOR<StorePromotionUpdateManyMutationInput, StorePromotionUncheckedUpdateManyInput>
    /**
     * Filter which StorePromotions to update
     */
    where?: StorePromotionWhereInput
  }

  /**
   * StorePromotion upsert
   */
  export type StorePromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the StorePromotion to update in case it exists.
     */
    where: StorePromotionWhereUniqueInput
    /**
     * In case the StorePromotion found by the `where` argument doesn't exist, create a new StorePromotion with this data.
     */
    create: XOR<StorePromotionCreateInput, StorePromotionUncheckedCreateInput>
    /**
     * In case the StorePromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorePromotionUpdateInput, StorePromotionUncheckedUpdateInput>
  }

  /**
   * StorePromotion delete
   */
  export type StorePromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
    /**
     * Filter which StorePromotion to delete.
     */
    where: StorePromotionWhereUniqueInput
  }

  /**
   * StorePromotion deleteMany
   */
  export type StorePromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorePromotions to delete
     */
    where?: StorePromotionWhereInput
  }

  /**
   * StorePromotion.ProductPromotion
   */
  export type StorePromotion$ProductPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPromotion
     */
    select?: ProductPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPromotion
     */
    omit?: ProductPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPromotionInclude<ExtArgs> | null
    where?: ProductPromotionWhereInput
    orderBy?: ProductPromotionOrderByWithRelationInput | ProductPromotionOrderByWithRelationInput[]
    cursor?: ProductPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPromotionScalarFieldEnum | ProductPromotionScalarFieldEnum[]
  }

  /**
   * StorePromotion without action
   */
  export type StorePromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorePromotion
     */
    select?: StorePromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorePromotion
     */
    omit?: StorePromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorePromotionInclude<ExtArgs> | null
  }


  /**
   * Model UserViewStore
   */

  export type AggregateUserViewStore = {
    _count: UserViewStoreCountAggregateOutputType | null
    _min: UserViewStoreMinAggregateOutputType | null
    _max: UserViewStoreMaxAggregateOutputType | null
  }

  export type UserViewStoreMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type UserViewStoreMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type UserViewStoreCountAggregateOutputType = {
    id: number
    storeId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type UserViewStoreMinAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    createdAt?: true
  }

  export type UserViewStoreMaxAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    createdAt?: true
  }

  export type UserViewStoreCountAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type UserViewStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViewStore to aggregate.
     */
    where?: UserViewStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewStores to fetch.
     */
    orderBy?: UserViewStoreOrderByWithRelationInput | UserViewStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserViewStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserViewStores
    **/
    _count?: true | UserViewStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserViewStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserViewStoreMaxAggregateInputType
  }

  export type GetUserViewStoreAggregateType<T extends UserViewStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateUserViewStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserViewStore[P]>
      : GetScalarType<T[P], AggregateUserViewStore[P]>
  }




  export type UserViewStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewStoreWhereInput
    orderBy?: UserViewStoreOrderByWithAggregationInput | UserViewStoreOrderByWithAggregationInput[]
    by: UserViewStoreScalarFieldEnum[] | UserViewStoreScalarFieldEnum
    having?: UserViewStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserViewStoreCountAggregateInputType | true
    _min?: UserViewStoreMinAggregateInputType
    _max?: UserViewStoreMaxAggregateInputType
  }

  export type UserViewStoreGroupByOutputType = {
    id: string
    storeId: string
    userId: string | null
    createdAt: Date | null
    _count: UserViewStoreCountAggregateOutputType | null
    _min: UserViewStoreMinAggregateOutputType | null
    _max: UserViewStoreMaxAggregateOutputType | null
  }

  type GetUserViewStoreGroupByPayload<T extends UserViewStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserViewStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserViewStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserViewStoreGroupByOutputType[P]>
            : GetScalarType<T[P], UserViewStoreGroupByOutputType[P]>
        }
      >
    >


  export type UserViewStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    userId?: boolean
    createdAt?: boolean
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userViewStore"]>


  export type UserViewStoreSelectScalar = {
    id?: boolean
    storeId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type UserViewStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "userId" | "createdAt", ExtArgs["result"]["userViewStore"]>
  export type UserViewStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $UserViewStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserViewStore"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      userId: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["userViewStore"]>
    composites: {}
  }

  type UserViewStoreGetPayload<S extends boolean | null | undefined | UserViewStoreDefaultArgs> = $Result.GetResult<Prisma.$UserViewStorePayload, S>

  type UserViewStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserViewStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserViewStoreCountAggregateInputType | true
    }

  export interface UserViewStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserViewStore'], meta: { name: 'UserViewStore' } }
    /**
     * Find zero or one UserViewStore that matches the filter.
     * @param {UserViewStoreFindUniqueArgs} args - Arguments to find a UserViewStore
     * @example
     * // Get one UserViewStore
     * const userViewStore = await prisma.userViewStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserViewStoreFindUniqueArgs>(args: SelectSubset<T, UserViewStoreFindUniqueArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserViewStore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserViewStoreFindUniqueOrThrowArgs} args - Arguments to find a UserViewStore
     * @example
     * // Get one UserViewStore
     * const userViewStore = await prisma.userViewStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserViewStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, UserViewStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserViewStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreFindFirstArgs} args - Arguments to find a UserViewStore
     * @example
     * // Get one UserViewStore
     * const userViewStore = await prisma.userViewStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserViewStoreFindFirstArgs>(args?: SelectSubset<T, UserViewStoreFindFirstArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserViewStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreFindFirstOrThrowArgs} args - Arguments to find a UserViewStore
     * @example
     * // Get one UserViewStore
     * const userViewStore = await prisma.userViewStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserViewStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, UserViewStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserViewStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserViewStores
     * const userViewStores = await prisma.userViewStore.findMany()
     * 
     * // Get first 10 UserViewStores
     * const userViewStores = await prisma.userViewStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userViewStoreWithIdOnly = await prisma.userViewStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserViewStoreFindManyArgs>(args?: SelectSubset<T, UserViewStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserViewStore.
     * @param {UserViewStoreCreateArgs} args - Arguments to create a UserViewStore.
     * @example
     * // Create one UserViewStore
     * const UserViewStore = await prisma.userViewStore.create({
     *   data: {
     *     // ... data to create a UserViewStore
     *   }
     * })
     * 
     */
    create<T extends UserViewStoreCreateArgs>(args: SelectSubset<T, UserViewStoreCreateArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserViewStores.
     * @param {UserViewStoreCreateManyArgs} args - Arguments to create many UserViewStores.
     * @example
     * // Create many UserViewStores
     * const userViewStore = await prisma.userViewStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserViewStoreCreateManyArgs>(args?: SelectSubset<T, UserViewStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserViewStore.
     * @param {UserViewStoreDeleteArgs} args - Arguments to delete one UserViewStore.
     * @example
     * // Delete one UserViewStore
     * const UserViewStore = await prisma.userViewStore.delete({
     *   where: {
     *     // ... filter to delete one UserViewStore
     *   }
     * })
     * 
     */
    delete<T extends UserViewStoreDeleteArgs>(args: SelectSubset<T, UserViewStoreDeleteArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserViewStore.
     * @param {UserViewStoreUpdateArgs} args - Arguments to update one UserViewStore.
     * @example
     * // Update one UserViewStore
     * const userViewStore = await prisma.userViewStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserViewStoreUpdateArgs>(args: SelectSubset<T, UserViewStoreUpdateArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserViewStores.
     * @param {UserViewStoreDeleteManyArgs} args - Arguments to filter UserViewStores to delete.
     * @example
     * // Delete a few UserViewStores
     * const { count } = await prisma.userViewStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserViewStoreDeleteManyArgs>(args?: SelectSubset<T, UserViewStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViewStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserViewStores
     * const userViewStore = await prisma.userViewStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserViewStoreUpdateManyArgs>(args: SelectSubset<T, UserViewStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserViewStore.
     * @param {UserViewStoreUpsertArgs} args - Arguments to update or create a UserViewStore.
     * @example
     * // Update or create a UserViewStore
     * const userViewStore = await prisma.userViewStore.upsert({
     *   create: {
     *     // ... data to create a UserViewStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserViewStore we want to update
     *   }
     * })
     */
    upsert<T extends UserViewStoreUpsertArgs>(args: SelectSubset<T, UserViewStoreUpsertArgs<ExtArgs>>): Prisma__UserViewStoreClient<$Result.GetResult<Prisma.$UserViewStorePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserViewStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreCountArgs} args - Arguments to filter UserViewStores to count.
     * @example
     * // Count the number of UserViewStores
     * const count = await prisma.userViewStore.count({
     *   where: {
     *     // ... the filter for the UserViewStores we want to count
     *   }
     * })
    **/
    count<T extends UserViewStoreCountArgs>(
      args?: Subset<T, UserViewStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserViewStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserViewStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserViewStoreAggregateArgs>(args: Subset<T, UserViewStoreAggregateArgs>): Prisma.PrismaPromise<GetUserViewStoreAggregateType<T>>

    /**
     * Group by UserViewStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewStoreGroupByArgs} args - Group by arguments.
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
      T extends UserViewStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserViewStoreGroupByArgs['orderBy'] }
        : { orderBy?: UserViewStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserViewStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserViewStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserViewStore model
   */
  readonly fields: UserViewStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserViewStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserViewStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UserViewStore model
   */ 
  interface UserViewStoreFieldRefs {
    readonly id: FieldRef<"UserViewStore", 'String'>
    readonly storeId: FieldRef<"UserViewStore", 'String'>
    readonly userId: FieldRef<"UserViewStore", 'String'>
    readonly createdAt: FieldRef<"UserViewStore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserViewStore findUnique
   */
  export type UserViewStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserViewStore to fetch.
     */
    where: UserViewStoreWhereUniqueInput
  }

  /**
   * UserViewStore findUniqueOrThrow
   */
  export type UserViewStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserViewStore to fetch.
     */
    where: UserViewStoreWhereUniqueInput
  }

  /**
   * UserViewStore findFirst
   */
  export type UserViewStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserViewStore to fetch.
     */
    where?: UserViewStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewStores to fetch.
     */
    orderBy?: UserViewStoreOrderByWithRelationInput | UserViewStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViewStores.
     */
    cursor?: UserViewStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViewStores.
     */
    distinct?: UserViewStoreScalarFieldEnum | UserViewStoreScalarFieldEnum[]
  }

  /**
   * UserViewStore findFirstOrThrow
   */
  export type UserViewStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserViewStore to fetch.
     */
    where?: UserViewStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewStores to fetch.
     */
    orderBy?: UserViewStoreOrderByWithRelationInput | UserViewStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViewStores.
     */
    cursor?: UserViewStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViewStores.
     */
    distinct?: UserViewStoreScalarFieldEnum | UserViewStoreScalarFieldEnum[]
  }

  /**
   * UserViewStore findMany
   */
  export type UserViewStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserViewStores to fetch.
     */
    where?: UserViewStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViewStores to fetch.
     */
    orderBy?: UserViewStoreOrderByWithRelationInput | UserViewStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserViewStores.
     */
    cursor?: UserViewStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViewStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViewStores.
     */
    skip?: number
    distinct?: UserViewStoreScalarFieldEnum | UserViewStoreScalarFieldEnum[]
  }

  /**
   * UserViewStore create
   */
  export type UserViewStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a UserViewStore.
     */
    data: XOR<UserViewStoreCreateInput, UserViewStoreUncheckedCreateInput>
  }

  /**
   * UserViewStore createMany
   */
  export type UserViewStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserViewStores.
     */
    data: UserViewStoreCreateManyInput | UserViewStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserViewStore update
   */
  export type UserViewStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a UserViewStore.
     */
    data: XOR<UserViewStoreUpdateInput, UserViewStoreUncheckedUpdateInput>
    /**
     * Choose, which UserViewStore to update.
     */
    where: UserViewStoreWhereUniqueInput
  }

  /**
   * UserViewStore updateMany
   */
  export type UserViewStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserViewStores.
     */
    data: XOR<UserViewStoreUpdateManyMutationInput, UserViewStoreUncheckedUpdateManyInput>
    /**
     * Filter which UserViewStores to update
     */
    where?: UserViewStoreWhereInput
  }

  /**
   * UserViewStore upsert
   */
  export type UserViewStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the UserViewStore to update in case it exists.
     */
    where: UserViewStoreWhereUniqueInput
    /**
     * In case the UserViewStore found by the `where` argument doesn't exist, create a new UserViewStore with this data.
     */
    create: XOR<UserViewStoreCreateInput, UserViewStoreUncheckedCreateInput>
    /**
     * In case the UserViewStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserViewStoreUpdateInput, UserViewStoreUncheckedUpdateInput>
  }

  /**
   * UserViewStore delete
   */
  export type UserViewStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
    /**
     * Filter which UserViewStore to delete.
     */
    where: UserViewStoreWhereUniqueInput
  }

  /**
   * UserViewStore deleteMany
   */
  export type UserViewStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViewStores to delete
     */
    where?: UserViewStoreWhereInput
  }

  /**
   * UserViewStore without action
   */
  export type UserViewStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserViewStore
     */
    select?: UserViewStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserViewStore
     */
    omit?: UserViewStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewStoreInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    stars: number | null
  }

  export type RatingSumAggregateOutputType = {
    stars: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    orderId: string | null
    stars: number | null
    comment: string | null
    isReply: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    orderId: string | null
    stars: number | null
    comment: string | null
    isReply: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    storeId: number
    orderId: number
    stars: number
    comment: number
    isReply: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    stars?: true
  }

  export type RatingSumAggregateInputType = {
    stars?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    storeId?: true
    orderId?: true
    stars?: true
    comment?: true
    isReply?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    storeId?: true
    orderId?: true
    stars?: true
    comment?: true
    isReply?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    storeId?: true
    orderId?: true
    stars?: true
    comment?: true
    isReply?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    storeId: string
    orderId: string
    stars: number
    comment: string
    isReply: boolean | null
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    orderId?: boolean
    stars?: boolean
    comment?: boolean
    isReply?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    Store?: boolean | StoreDefaultArgs<ExtArgs>
    RatingReply?: boolean | Rating$RatingReplyArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>


  export type RatingSelectScalar = {
    id?: boolean
    storeId?: boolean
    orderId?: boolean
    stars?: boolean
    comment?: boolean
    isReply?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "orderId" | "stars" | "comment" | "isReply" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | StoreDefaultArgs<ExtArgs>
    RatingReply?: boolean | Rating$RatingReplyArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs>
      RatingReply: Prisma.$RatingReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      orderId: string
      stars: number
      comment: string
      isReply: boolean | null
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    RatingReply<T extends Rating$RatingReplyArgs<ExtArgs> = {}>(args?: Subset<T, Rating$RatingReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Rating model
   */ 
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly storeId: FieldRef<"Rating", 'String'>
    readonly orderId: FieldRef<"Rating", 'String'>
    readonly stars: FieldRef<"Rating", 'Float'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly isReply: FieldRef<"Rating", 'Boolean'>
    readonly createdBy: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedBy: FieldRef<"Rating", 'String'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
  }

  /**
   * Rating.RatingReply
   */
  export type Rating$RatingReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    where?: RatingReplyWhereInput
    orderBy?: RatingReplyOrderByWithRelationInput | RatingReplyOrderByWithRelationInput[]
    cursor?: RatingReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingReplyScalarFieldEnum | RatingReplyScalarFieldEnum[]
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model RatingMaterial
   */

  export type AggregateRatingMaterial = {
    _count: RatingMaterialCountAggregateOutputType | null
    _min: RatingMaterialMinAggregateOutputType | null
    _max: RatingMaterialMaxAggregateOutputType | null
  }

  export type RatingMaterialMinAggregateOutputType = {
    id: string | null
    url: string | null
    isPrimary: boolean | null
    ratingId: string | null
    ratingReplyId: string | null
  }

  export type RatingMaterialMaxAggregateOutputType = {
    id: string | null
    url: string | null
    isPrimary: boolean | null
    ratingId: string | null
    ratingReplyId: string | null
  }

  export type RatingMaterialCountAggregateOutputType = {
    id: number
    url: number
    isPrimary: number
    ratingId: number
    ratingReplyId: number
    _all: number
  }


  export type RatingMaterialMinAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    ratingId?: true
    ratingReplyId?: true
  }

  export type RatingMaterialMaxAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    ratingId?: true
    ratingReplyId?: true
  }

  export type RatingMaterialCountAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    ratingId?: true
    ratingReplyId?: true
    _all?: true
  }

  export type RatingMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingMaterial to aggregate.
     */
    where?: RatingMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingMaterials to fetch.
     */
    orderBy?: RatingMaterialOrderByWithRelationInput | RatingMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingMaterials
    **/
    _count?: true | RatingMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaterialMaxAggregateInputType
  }

  export type GetRatingMaterialAggregateType<T extends RatingMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingMaterial[P]>
      : GetScalarType<T[P], AggregateRatingMaterial[P]>
  }




  export type RatingMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingMaterialWhereInput
    orderBy?: RatingMaterialOrderByWithAggregationInput | RatingMaterialOrderByWithAggregationInput[]
    by: RatingMaterialScalarFieldEnum[] | RatingMaterialScalarFieldEnum
    having?: RatingMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingMaterialCountAggregateInputType | true
    _min?: RatingMaterialMinAggregateInputType
    _max?: RatingMaterialMaxAggregateInputType
  }

  export type RatingMaterialGroupByOutputType = {
    id: string
    url: string
    isPrimary: boolean | null
    ratingId: string | null
    ratingReplyId: string | null
    _count: RatingMaterialCountAggregateOutputType | null
    _min: RatingMaterialMinAggregateOutputType | null
    _max: RatingMaterialMaxAggregateOutputType | null
  }

  type GetRatingMaterialGroupByPayload<T extends RatingMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], RatingMaterialGroupByOutputType[P]>
        }
      >
    >


  export type RatingMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    ratingId?: boolean
    ratingReplyId?: boolean
  }, ExtArgs["result"]["ratingMaterial"]>


  export type RatingMaterialSelectScalar = {
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    ratingId?: boolean
    ratingReplyId?: boolean
  }

  export type RatingMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "isPrimary" | "ratingId" | "ratingReplyId", ExtArgs["result"]["ratingMaterial"]>

  export type $RatingMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingMaterial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      isPrimary: boolean | null
      ratingId: string | null
      ratingReplyId: string | null
    }, ExtArgs["result"]["ratingMaterial"]>
    composites: {}
  }

  type RatingMaterialGetPayload<S extends boolean | null | undefined | RatingMaterialDefaultArgs> = $Result.GetResult<Prisma.$RatingMaterialPayload, S>

  type RatingMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RatingMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingMaterialCountAggregateInputType | true
    }

  export interface RatingMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingMaterial'], meta: { name: 'RatingMaterial' } }
    /**
     * Find zero or one RatingMaterial that matches the filter.
     * @param {RatingMaterialFindUniqueArgs} args - Arguments to find a RatingMaterial
     * @example
     * // Get one RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingMaterialFindUniqueArgs>(args: SelectSubset<T, RatingMaterialFindUniqueArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RatingMaterial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RatingMaterialFindUniqueOrThrowArgs} args - Arguments to find a RatingMaterial
     * @example
     * // Get one RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RatingMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialFindFirstArgs} args - Arguments to find a RatingMaterial
     * @example
     * // Get one RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingMaterialFindFirstArgs>(args?: SelectSubset<T, RatingMaterialFindFirstArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RatingMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialFindFirstOrThrowArgs} args - Arguments to find a RatingMaterial
     * @example
     * // Get one RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RatingMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingMaterials
     * const ratingMaterials = await prisma.ratingMaterial.findMany()
     * 
     * // Get first 10 RatingMaterials
     * const ratingMaterials = await prisma.ratingMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingMaterialWithIdOnly = await prisma.ratingMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingMaterialFindManyArgs>(args?: SelectSubset<T, RatingMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RatingMaterial.
     * @param {RatingMaterialCreateArgs} args - Arguments to create a RatingMaterial.
     * @example
     * // Create one RatingMaterial
     * const RatingMaterial = await prisma.ratingMaterial.create({
     *   data: {
     *     // ... data to create a RatingMaterial
     *   }
     * })
     * 
     */
    create<T extends RatingMaterialCreateArgs>(args: SelectSubset<T, RatingMaterialCreateArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RatingMaterials.
     * @param {RatingMaterialCreateManyArgs} args - Arguments to create many RatingMaterials.
     * @example
     * // Create many RatingMaterials
     * const ratingMaterial = await prisma.ratingMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingMaterialCreateManyArgs>(args?: SelectSubset<T, RatingMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RatingMaterial.
     * @param {RatingMaterialDeleteArgs} args - Arguments to delete one RatingMaterial.
     * @example
     * // Delete one RatingMaterial
     * const RatingMaterial = await prisma.ratingMaterial.delete({
     *   where: {
     *     // ... filter to delete one RatingMaterial
     *   }
     * })
     * 
     */
    delete<T extends RatingMaterialDeleteArgs>(args: SelectSubset<T, RatingMaterialDeleteArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RatingMaterial.
     * @param {RatingMaterialUpdateArgs} args - Arguments to update one RatingMaterial.
     * @example
     * // Update one RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingMaterialUpdateArgs>(args: SelectSubset<T, RatingMaterialUpdateArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RatingMaterials.
     * @param {RatingMaterialDeleteManyArgs} args - Arguments to filter RatingMaterials to delete.
     * @example
     * // Delete a few RatingMaterials
     * const { count } = await prisma.ratingMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingMaterialDeleteManyArgs>(args?: SelectSubset<T, RatingMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingMaterials
     * const ratingMaterial = await prisma.ratingMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingMaterialUpdateManyArgs>(args: SelectSubset<T, RatingMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RatingMaterial.
     * @param {RatingMaterialUpsertArgs} args - Arguments to update or create a RatingMaterial.
     * @example
     * // Update or create a RatingMaterial
     * const ratingMaterial = await prisma.ratingMaterial.upsert({
     *   create: {
     *     // ... data to create a RatingMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingMaterial we want to update
     *   }
     * })
     */
    upsert<T extends RatingMaterialUpsertArgs>(args: SelectSubset<T, RatingMaterialUpsertArgs<ExtArgs>>): Prisma__RatingMaterialClient<$Result.GetResult<Prisma.$RatingMaterialPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RatingMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialCountArgs} args - Arguments to filter RatingMaterials to count.
     * @example
     * // Count the number of RatingMaterials
     * const count = await prisma.ratingMaterial.count({
     *   where: {
     *     // ... the filter for the RatingMaterials we want to count
     *   }
     * })
    **/
    count<T extends RatingMaterialCountArgs>(
      args?: Subset<T, RatingMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingMaterialAggregateArgs>(args: Subset<T, RatingMaterialAggregateArgs>): Prisma.PrismaPromise<GetRatingMaterialAggregateType<T>>

    /**
     * Group by RatingMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingMaterialGroupByArgs} args - Group by arguments.
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
      T extends RatingMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingMaterialGroupByArgs['orderBy'] }
        : { orderBy?: RatingMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingMaterial model
   */
  readonly fields: RatingMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RatingMaterial model
   */ 
  interface RatingMaterialFieldRefs {
    readonly id: FieldRef<"RatingMaterial", 'String'>
    readonly url: FieldRef<"RatingMaterial", 'String'>
    readonly isPrimary: FieldRef<"RatingMaterial", 'Boolean'>
    readonly ratingId: FieldRef<"RatingMaterial", 'String'>
    readonly ratingReplyId: FieldRef<"RatingMaterial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RatingMaterial findUnique
   */
  export type RatingMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter, which RatingMaterial to fetch.
     */
    where: RatingMaterialWhereUniqueInput
  }

  /**
   * RatingMaterial findUniqueOrThrow
   */
  export type RatingMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter, which RatingMaterial to fetch.
     */
    where: RatingMaterialWhereUniqueInput
  }

  /**
   * RatingMaterial findFirst
   */
  export type RatingMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter, which RatingMaterial to fetch.
     */
    where?: RatingMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingMaterials to fetch.
     */
    orderBy?: RatingMaterialOrderByWithRelationInput | RatingMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingMaterials.
     */
    cursor?: RatingMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingMaterials.
     */
    distinct?: RatingMaterialScalarFieldEnum | RatingMaterialScalarFieldEnum[]
  }

  /**
   * RatingMaterial findFirstOrThrow
   */
  export type RatingMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter, which RatingMaterial to fetch.
     */
    where?: RatingMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingMaterials to fetch.
     */
    orderBy?: RatingMaterialOrderByWithRelationInput | RatingMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingMaterials.
     */
    cursor?: RatingMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingMaterials.
     */
    distinct?: RatingMaterialScalarFieldEnum | RatingMaterialScalarFieldEnum[]
  }

  /**
   * RatingMaterial findMany
   */
  export type RatingMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter, which RatingMaterials to fetch.
     */
    where?: RatingMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingMaterials to fetch.
     */
    orderBy?: RatingMaterialOrderByWithRelationInput | RatingMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingMaterials.
     */
    cursor?: RatingMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingMaterials.
     */
    skip?: number
    distinct?: RatingMaterialScalarFieldEnum | RatingMaterialScalarFieldEnum[]
  }

  /**
   * RatingMaterial create
   */
  export type RatingMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * The data needed to create a RatingMaterial.
     */
    data: XOR<RatingMaterialCreateInput, RatingMaterialUncheckedCreateInput>
  }

  /**
   * RatingMaterial createMany
   */
  export type RatingMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingMaterials.
     */
    data: RatingMaterialCreateManyInput | RatingMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingMaterial update
   */
  export type RatingMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * The data needed to update a RatingMaterial.
     */
    data: XOR<RatingMaterialUpdateInput, RatingMaterialUncheckedUpdateInput>
    /**
     * Choose, which RatingMaterial to update.
     */
    where: RatingMaterialWhereUniqueInput
  }

  /**
   * RatingMaterial updateMany
   */
  export type RatingMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingMaterials.
     */
    data: XOR<RatingMaterialUpdateManyMutationInput, RatingMaterialUncheckedUpdateManyInput>
    /**
     * Filter which RatingMaterials to update
     */
    where?: RatingMaterialWhereInput
  }

  /**
   * RatingMaterial upsert
   */
  export type RatingMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * The filter to search for the RatingMaterial to update in case it exists.
     */
    where: RatingMaterialWhereUniqueInput
    /**
     * In case the RatingMaterial found by the `where` argument doesn't exist, create a new RatingMaterial with this data.
     */
    create: XOR<RatingMaterialCreateInput, RatingMaterialUncheckedCreateInput>
    /**
     * In case the RatingMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingMaterialUpdateInput, RatingMaterialUncheckedUpdateInput>
  }

  /**
   * RatingMaterial delete
   */
  export type RatingMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
    /**
     * Filter which RatingMaterial to delete.
     */
    where: RatingMaterialWhereUniqueInput
  }

  /**
   * RatingMaterial deleteMany
   */
  export type RatingMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingMaterials to delete
     */
    where?: RatingMaterialWhereInput
  }

  /**
   * RatingMaterial without action
   */
  export type RatingMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingMaterial
     */
    select?: RatingMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingMaterial
     */
    omit?: RatingMaterialOmit<ExtArgs> | null
  }


  /**
   * Model RatingReply
   */

  export type AggregateRatingReply = {
    _count: RatingReplyCountAggregateOutputType | null
    _min: RatingReplyMinAggregateOutputType | null
    _max: RatingReplyMaxAggregateOutputType | null
  }

  export type RatingReplyMinAggregateOutputType = {
    id: string | null
    parentRatingId: string | null
    detail: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RatingReplyMaxAggregateOutputType = {
    id: string | null
    parentRatingId: string | null
    detail: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RatingReplyCountAggregateOutputType = {
    id: number
    parentRatingId: number
    detail: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type RatingReplyMinAggregateInputType = {
    id?: true
    parentRatingId?: true
    detail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RatingReplyMaxAggregateInputType = {
    id?: true
    parentRatingId?: true
    detail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RatingReplyCountAggregateInputType = {
    id?: true
    parentRatingId?: true
    detail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type RatingReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingReply to aggregate.
     */
    where?: RatingReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingReplies to fetch.
     */
    orderBy?: RatingReplyOrderByWithRelationInput | RatingReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingReplies
    **/
    _count?: true | RatingReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingReplyMaxAggregateInputType
  }

  export type GetRatingReplyAggregateType<T extends RatingReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingReply[P]>
      : GetScalarType<T[P], AggregateRatingReply[P]>
  }




  export type RatingReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingReplyWhereInput
    orderBy?: RatingReplyOrderByWithAggregationInput | RatingReplyOrderByWithAggregationInput[]
    by: RatingReplyScalarFieldEnum[] | RatingReplyScalarFieldEnum
    having?: RatingReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingReplyCountAggregateInputType | true
    _min?: RatingReplyMinAggregateInputType
    _max?: RatingReplyMaxAggregateInputType
  }

  export type RatingReplyGroupByOutputType = {
    id: string
    parentRatingId: string
    detail: string
    createdAt: Date
    createdBy: string
    updatedAt: Date | null
    updatedBy: string | null
    _count: RatingReplyCountAggregateOutputType | null
    _min: RatingReplyMinAggregateOutputType | null
    _max: RatingReplyMaxAggregateOutputType | null
  }

  type GetRatingReplyGroupByPayload<T extends RatingReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingReplyGroupByOutputType[P]>
            : GetScalarType<T[P], RatingReplyGroupByOutputType[P]>
        }
      >
    >


  export type RatingReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentRatingId?: boolean
    detail?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    Rating?: boolean | RatingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingReply"]>


  export type RatingReplySelectScalar = {
    id?: boolean
    parentRatingId?: boolean
    detail?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type RatingReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentRatingId" | "detail" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["ratingReply"]>
  export type RatingReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rating?: boolean | RatingDefaultArgs<ExtArgs>
  }

  export type $RatingReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingReply"
    objects: {
      Rating: Prisma.$RatingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentRatingId: string
      detail: string
      createdAt: Date
      createdBy: string
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["ratingReply"]>
    composites: {}
  }

  type RatingReplyGetPayload<S extends boolean | null | undefined | RatingReplyDefaultArgs> = $Result.GetResult<Prisma.$RatingReplyPayload, S>

  type RatingReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RatingReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingReplyCountAggregateInputType | true
    }

  export interface RatingReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingReply'], meta: { name: 'RatingReply' } }
    /**
     * Find zero or one RatingReply that matches the filter.
     * @param {RatingReplyFindUniqueArgs} args - Arguments to find a RatingReply
     * @example
     * // Get one RatingReply
     * const ratingReply = await prisma.ratingReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingReplyFindUniqueArgs>(args: SelectSubset<T, RatingReplyFindUniqueArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RatingReply that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RatingReplyFindUniqueOrThrowArgs} args - Arguments to find a RatingReply
     * @example
     * // Get one RatingReply
     * const ratingReply = await prisma.ratingReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RatingReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyFindFirstArgs} args - Arguments to find a RatingReply
     * @example
     * // Get one RatingReply
     * const ratingReply = await prisma.ratingReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingReplyFindFirstArgs>(args?: SelectSubset<T, RatingReplyFindFirstArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RatingReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyFindFirstOrThrowArgs} args - Arguments to find a RatingReply
     * @example
     * // Get one RatingReply
     * const ratingReply = await prisma.ratingReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RatingReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingReplies
     * const ratingReplies = await prisma.ratingReply.findMany()
     * 
     * // Get first 10 RatingReplies
     * const ratingReplies = await prisma.ratingReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingReplyWithIdOnly = await prisma.ratingReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingReplyFindManyArgs>(args?: SelectSubset<T, RatingReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RatingReply.
     * @param {RatingReplyCreateArgs} args - Arguments to create a RatingReply.
     * @example
     * // Create one RatingReply
     * const RatingReply = await prisma.ratingReply.create({
     *   data: {
     *     // ... data to create a RatingReply
     *   }
     * })
     * 
     */
    create<T extends RatingReplyCreateArgs>(args: SelectSubset<T, RatingReplyCreateArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RatingReplies.
     * @param {RatingReplyCreateManyArgs} args - Arguments to create many RatingReplies.
     * @example
     * // Create many RatingReplies
     * const ratingReply = await prisma.ratingReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingReplyCreateManyArgs>(args?: SelectSubset<T, RatingReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RatingReply.
     * @param {RatingReplyDeleteArgs} args - Arguments to delete one RatingReply.
     * @example
     * // Delete one RatingReply
     * const RatingReply = await prisma.ratingReply.delete({
     *   where: {
     *     // ... filter to delete one RatingReply
     *   }
     * })
     * 
     */
    delete<T extends RatingReplyDeleteArgs>(args: SelectSubset<T, RatingReplyDeleteArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RatingReply.
     * @param {RatingReplyUpdateArgs} args - Arguments to update one RatingReply.
     * @example
     * // Update one RatingReply
     * const ratingReply = await prisma.ratingReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingReplyUpdateArgs>(args: SelectSubset<T, RatingReplyUpdateArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RatingReplies.
     * @param {RatingReplyDeleteManyArgs} args - Arguments to filter RatingReplies to delete.
     * @example
     * // Delete a few RatingReplies
     * const { count } = await prisma.ratingReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingReplyDeleteManyArgs>(args?: SelectSubset<T, RatingReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingReplies
     * const ratingReply = await prisma.ratingReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingReplyUpdateManyArgs>(args: SelectSubset<T, RatingReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RatingReply.
     * @param {RatingReplyUpsertArgs} args - Arguments to update or create a RatingReply.
     * @example
     * // Update or create a RatingReply
     * const ratingReply = await prisma.ratingReply.upsert({
     *   create: {
     *     // ... data to create a RatingReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingReply we want to update
     *   }
     * })
     */
    upsert<T extends RatingReplyUpsertArgs>(args: SelectSubset<T, RatingReplyUpsertArgs<ExtArgs>>): Prisma__RatingReplyClient<$Result.GetResult<Prisma.$RatingReplyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RatingReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyCountArgs} args - Arguments to filter RatingReplies to count.
     * @example
     * // Count the number of RatingReplies
     * const count = await prisma.ratingReply.count({
     *   where: {
     *     // ... the filter for the RatingReplies we want to count
     *   }
     * })
    **/
    count<T extends RatingReplyCountArgs>(
      args?: Subset<T, RatingReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingReplyAggregateArgs>(args: Subset<T, RatingReplyAggregateArgs>): Prisma.PrismaPromise<GetRatingReplyAggregateType<T>>

    /**
     * Group by RatingReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingReplyGroupByArgs} args - Group by arguments.
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
      T extends RatingReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingReplyGroupByArgs['orderBy'] }
        : { orderBy?: RatingReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingReply model
   */
  readonly fields: RatingReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rating<T extends RatingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RatingDefaultArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RatingReply model
   */ 
  interface RatingReplyFieldRefs {
    readonly id: FieldRef<"RatingReply", 'String'>
    readonly parentRatingId: FieldRef<"RatingReply", 'String'>
    readonly detail: FieldRef<"RatingReply", 'String'>
    readonly createdAt: FieldRef<"RatingReply", 'DateTime'>
    readonly createdBy: FieldRef<"RatingReply", 'String'>
    readonly updatedAt: FieldRef<"RatingReply", 'DateTime'>
    readonly updatedBy: FieldRef<"RatingReply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RatingReply findUnique
   */
  export type RatingReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter, which RatingReply to fetch.
     */
    where: RatingReplyWhereUniqueInput
  }

  /**
   * RatingReply findUniqueOrThrow
   */
  export type RatingReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter, which RatingReply to fetch.
     */
    where: RatingReplyWhereUniqueInput
  }

  /**
   * RatingReply findFirst
   */
  export type RatingReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter, which RatingReply to fetch.
     */
    where?: RatingReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingReplies to fetch.
     */
    orderBy?: RatingReplyOrderByWithRelationInput | RatingReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingReplies.
     */
    cursor?: RatingReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingReplies.
     */
    distinct?: RatingReplyScalarFieldEnum | RatingReplyScalarFieldEnum[]
  }

  /**
   * RatingReply findFirstOrThrow
   */
  export type RatingReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter, which RatingReply to fetch.
     */
    where?: RatingReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingReplies to fetch.
     */
    orderBy?: RatingReplyOrderByWithRelationInput | RatingReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingReplies.
     */
    cursor?: RatingReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingReplies.
     */
    distinct?: RatingReplyScalarFieldEnum | RatingReplyScalarFieldEnum[]
  }

  /**
   * RatingReply findMany
   */
  export type RatingReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter, which RatingReplies to fetch.
     */
    where?: RatingReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingReplies to fetch.
     */
    orderBy?: RatingReplyOrderByWithRelationInput | RatingReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingReplies.
     */
    cursor?: RatingReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingReplies.
     */
    skip?: number
    distinct?: RatingReplyScalarFieldEnum | RatingReplyScalarFieldEnum[]
  }

  /**
   * RatingReply create
   */
  export type RatingReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a RatingReply.
     */
    data: XOR<RatingReplyCreateInput, RatingReplyUncheckedCreateInput>
  }

  /**
   * RatingReply createMany
   */
  export type RatingReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingReplies.
     */
    data: RatingReplyCreateManyInput | RatingReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingReply update
   */
  export type RatingReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a RatingReply.
     */
    data: XOR<RatingReplyUpdateInput, RatingReplyUncheckedUpdateInput>
    /**
     * Choose, which RatingReply to update.
     */
    where: RatingReplyWhereUniqueInput
  }

  /**
   * RatingReply updateMany
   */
  export type RatingReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingReplies.
     */
    data: XOR<RatingReplyUpdateManyMutationInput, RatingReplyUncheckedUpdateManyInput>
    /**
     * Filter which RatingReplies to update
     */
    where?: RatingReplyWhereInput
  }

  /**
   * RatingReply upsert
   */
  export type RatingReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the RatingReply to update in case it exists.
     */
    where: RatingReplyWhereUniqueInput
    /**
     * In case the RatingReply found by the `where` argument doesn't exist, create a new RatingReply with this data.
     */
    create: XOR<RatingReplyCreateInput, RatingReplyUncheckedCreateInput>
    /**
     * In case the RatingReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingReplyUpdateInput, RatingReplyUncheckedUpdateInput>
  }

  /**
   * RatingReply delete
   */
  export type RatingReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
    /**
     * Filter which RatingReply to delete.
     */
    where: RatingReplyWhereUniqueInput
  }

  /**
   * RatingReply deleteMany
   */
  export type RatingReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingReplies to delete
     */
    where?: RatingReplyWhereInput
  }

  /**
   * RatingReply without action
   */
  export type RatingReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingReply
     */
    select?: RatingReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingReply
     */
    omit?: RatingReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingReplyInclude<ExtArgs> | null
  }


  /**
   * Model StoreRating
   */

  export type AggregateStoreRating = {
    _count: StoreRatingCountAggregateOutputType | null
    _avg: StoreRatingAvgAggregateOutputType | null
    _sum: StoreRatingSumAggregateOutputType | null
    _min: StoreRatingMinAggregateOutputType | null
    _max: StoreRatingMaxAggregateOutputType | null
  }

  export type StoreRatingAvgAggregateOutputType = {
    one: number | null
    two: number | null
    three: number | null
    four: number | null
    five: number | null
    total: number | null
    average: number | null
  }

  export type StoreRatingSumAggregateOutputType = {
    one: number | null
    two: number | null
    three: number | null
    four: number | null
    five: number | null
    total: number | null
    average: number | null
  }

  export type StoreRatingMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    one: number | null
    two: number | null
    three: number | null
    four: number | null
    five: number | null
    total: number | null
    average: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreRatingMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    one: number | null
    two: number | null
    three: number | null
    four: number | null
    five: number | null
    total: number | null
    average: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreRatingCountAggregateOutputType = {
    id: number
    storeId: number
    one: number
    two: number
    three: number
    four: number
    five: number
    total: number
    average: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreRatingAvgAggregateInputType = {
    one?: true
    two?: true
    three?: true
    four?: true
    five?: true
    total?: true
    average?: true
  }

  export type StoreRatingSumAggregateInputType = {
    one?: true
    two?: true
    three?: true
    four?: true
    five?: true
    total?: true
    average?: true
  }

  export type StoreRatingMinAggregateInputType = {
    id?: true
    storeId?: true
    one?: true
    two?: true
    three?: true
    four?: true
    five?: true
    total?: true
    average?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreRatingMaxAggregateInputType = {
    id?: true
    storeId?: true
    one?: true
    two?: true
    three?: true
    four?: true
    five?: true
    total?: true
    average?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreRatingCountAggregateInputType = {
    id?: true
    storeId?: true
    one?: true
    two?: true
    three?: true
    four?: true
    five?: true
    total?: true
    average?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreRating to aggregate.
     */
    where?: StoreRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRatings to fetch.
     */
    orderBy?: StoreRatingOrderByWithRelationInput | StoreRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreRatings
    **/
    _count?: true | StoreRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreRatingMaxAggregateInputType
  }

  export type GetStoreRatingAggregateType<T extends StoreRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreRating[P]>
      : GetScalarType<T[P], AggregateStoreRating[P]>
  }




  export type StoreRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreRatingWhereInput
    orderBy?: StoreRatingOrderByWithAggregationInput | StoreRatingOrderByWithAggregationInput[]
    by: StoreRatingScalarFieldEnum[] | StoreRatingScalarFieldEnum
    having?: StoreRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreRatingCountAggregateInputType | true
    _avg?: StoreRatingAvgAggregateInputType
    _sum?: StoreRatingSumAggregateInputType
    _min?: StoreRatingMinAggregateInputType
    _max?: StoreRatingMaxAggregateInputType
  }

  export type StoreRatingGroupByOutputType = {
    id: string
    storeId: string
    one: number
    two: number
    three: number
    four: number
    five: number
    total: number
    average: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: StoreRatingCountAggregateOutputType | null
    _avg: StoreRatingAvgAggregateOutputType | null
    _sum: StoreRatingSumAggregateOutputType | null
    _min: StoreRatingMinAggregateOutputType | null
    _max: StoreRatingMaxAggregateOutputType | null
  }

  type GetStoreRatingGroupByPayload<T extends StoreRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreRatingGroupByOutputType[P]>
            : GetScalarType<T[P], StoreRatingGroupByOutputType[P]>
        }
      >
    >


  export type StoreRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    one?: boolean
    two?: boolean
    three?: boolean
    four?: boolean
    five?: boolean
    total?: boolean
    average?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeRating"]>


  export type StoreRatingSelectScalar = {
    id?: boolean
    storeId?: boolean
    one?: boolean
    two?: boolean
    three?: boolean
    four?: boolean
    five?: boolean
    total?: boolean
    average?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "one" | "two" | "three" | "four" | "five" | "total" | "average" | "createdAt" | "updatedAt", ExtArgs["result"]["storeRating"]>

  export type $StoreRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreRating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      one: number
      two: number
      three: number
      four: number
      five: number
      total: number
      average: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["storeRating"]>
    composites: {}
  }

  type StoreRatingGetPayload<S extends boolean | null | undefined | StoreRatingDefaultArgs> = $Result.GetResult<Prisma.$StoreRatingPayload, S>

  type StoreRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreRatingCountAggregateInputType | true
    }

  export interface StoreRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreRating'], meta: { name: 'StoreRating' } }
    /**
     * Find zero or one StoreRating that matches the filter.
     * @param {StoreRatingFindUniqueArgs} args - Arguments to find a StoreRating
     * @example
     * // Get one StoreRating
     * const storeRating = await prisma.storeRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreRatingFindUniqueArgs>(args: SelectSubset<T, StoreRatingFindUniqueArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StoreRating that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreRatingFindUniqueOrThrowArgs} args - Arguments to find a StoreRating
     * @example
     * // Get one StoreRating
     * const storeRating = await prisma.storeRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StoreRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingFindFirstArgs} args - Arguments to find a StoreRating
     * @example
     * // Get one StoreRating
     * const storeRating = await prisma.storeRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreRatingFindFirstArgs>(args?: SelectSubset<T, StoreRatingFindFirstArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StoreRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingFindFirstOrThrowArgs} args - Arguments to find a StoreRating
     * @example
     * // Get one StoreRating
     * const storeRating = await prisma.storeRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StoreRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreRatings
     * const storeRatings = await prisma.storeRating.findMany()
     * 
     * // Get first 10 StoreRatings
     * const storeRatings = await prisma.storeRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeRatingWithIdOnly = await prisma.storeRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreRatingFindManyArgs>(args?: SelectSubset<T, StoreRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StoreRating.
     * @param {StoreRatingCreateArgs} args - Arguments to create a StoreRating.
     * @example
     * // Create one StoreRating
     * const StoreRating = await prisma.storeRating.create({
     *   data: {
     *     // ... data to create a StoreRating
     *   }
     * })
     * 
     */
    create<T extends StoreRatingCreateArgs>(args: SelectSubset<T, StoreRatingCreateArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StoreRatings.
     * @param {StoreRatingCreateManyArgs} args - Arguments to create many StoreRatings.
     * @example
     * // Create many StoreRatings
     * const storeRating = await prisma.storeRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreRatingCreateManyArgs>(args?: SelectSubset<T, StoreRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreRating.
     * @param {StoreRatingDeleteArgs} args - Arguments to delete one StoreRating.
     * @example
     * // Delete one StoreRating
     * const StoreRating = await prisma.storeRating.delete({
     *   where: {
     *     // ... filter to delete one StoreRating
     *   }
     * })
     * 
     */
    delete<T extends StoreRatingDeleteArgs>(args: SelectSubset<T, StoreRatingDeleteArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StoreRating.
     * @param {StoreRatingUpdateArgs} args - Arguments to update one StoreRating.
     * @example
     * // Update one StoreRating
     * const storeRating = await prisma.storeRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreRatingUpdateArgs>(args: SelectSubset<T, StoreRatingUpdateArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StoreRatings.
     * @param {StoreRatingDeleteManyArgs} args - Arguments to filter StoreRatings to delete.
     * @example
     * // Delete a few StoreRatings
     * const { count } = await prisma.storeRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreRatingDeleteManyArgs>(args?: SelectSubset<T, StoreRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreRatings
     * const storeRating = await prisma.storeRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreRatingUpdateManyArgs>(args: SelectSubset<T, StoreRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreRating.
     * @param {StoreRatingUpsertArgs} args - Arguments to update or create a StoreRating.
     * @example
     * // Update or create a StoreRating
     * const storeRating = await prisma.storeRating.upsert({
     *   create: {
     *     // ... data to create a StoreRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreRating we want to update
     *   }
     * })
     */
    upsert<T extends StoreRatingUpsertArgs>(args: SelectSubset<T, StoreRatingUpsertArgs<ExtArgs>>): Prisma__StoreRatingClient<$Result.GetResult<Prisma.$StoreRatingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StoreRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingCountArgs} args - Arguments to filter StoreRatings to count.
     * @example
     * // Count the number of StoreRatings
     * const count = await prisma.storeRating.count({
     *   where: {
     *     // ... the filter for the StoreRatings we want to count
     *   }
     * })
    **/
    count<T extends StoreRatingCountArgs>(
      args?: Subset<T, StoreRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreRatingAggregateArgs>(args: Subset<T, StoreRatingAggregateArgs>): Prisma.PrismaPromise<GetStoreRatingAggregateType<T>>

    /**
     * Group by StoreRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreRatingGroupByArgs} args - Group by arguments.
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
      T extends StoreRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreRatingGroupByArgs['orderBy'] }
        : { orderBy?: StoreRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreRating model
   */
  readonly fields: StoreRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StoreRating model
   */ 
  interface StoreRatingFieldRefs {
    readonly id: FieldRef<"StoreRating", 'String'>
    readonly storeId: FieldRef<"StoreRating", 'String'>
    readonly one: FieldRef<"StoreRating", 'Int'>
    readonly two: FieldRef<"StoreRating", 'Int'>
    readonly three: FieldRef<"StoreRating", 'Int'>
    readonly four: FieldRef<"StoreRating", 'Int'>
    readonly five: FieldRef<"StoreRating", 'Int'>
    readonly total: FieldRef<"StoreRating", 'Int'>
    readonly average: FieldRef<"StoreRating", 'Float'>
    readonly createdAt: FieldRef<"StoreRating", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreRating findUnique
   */
  export type StoreRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter, which StoreRating to fetch.
     */
    where: StoreRatingWhereUniqueInput
  }

  /**
   * StoreRating findUniqueOrThrow
   */
  export type StoreRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter, which StoreRating to fetch.
     */
    where: StoreRatingWhereUniqueInput
  }

  /**
   * StoreRating findFirst
   */
  export type StoreRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter, which StoreRating to fetch.
     */
    where?: StoreRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRatings to fetch.
     */
    orderBy?: StoreRatingOrderByWithRelationInput | StoreRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreRatings.
     */
    cursor?: StoreRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreRatings.
     */
    distinct?: StoreRatingScalarFieldEnum | StoreRatingScalarFieldEnum[]
  }

  /**
   * StoreRating findFirstOrThrow
   */
  export type StoreRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter, which StoreRating to fetch.
     */
    where?: StoreRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRatings to fetch.
     */
    orderBy?: StoreRatingOrderByWithRelationInput | StoreRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreRatings.
     */
    cursor?: StoreRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreRatings.
     */
    distinct?: StoreRatingScalarFieldEnum | StoreRatingScalarFieldEnum[]
  }

  /**
   * StoreRating findMany
   */
  export type StoreRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter, which StoreRatings to fetch.
     */
    where?: StoreRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreRatings to fetch.
     */
    orderBy?: StoreRatingOrderByWithRelationInput | StoreRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreRatings.
     */
    cursor?: StoreRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreRatings.
     */
    skip?: number
    distinct?: StoreRatingScalarFieldEnum | StoreRatingScalarFieldEnum[]
  }

  /**
   * StoreRating create
   */
  export type StoreRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * The data needed to create a StoreRating.
     */
    data: XOR<StoreRatingCreateInput, StoreRatingUncheckedCreateInput>
  }

  /**
   * StoreRating createMany
   */
  export type StoreRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreRatings.
     */
    data: StoreRatingCreateManyInput | StoreRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreRating update
   */
  export type StoreRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * The data needed to update a StoreRating.
     */
    data: XOR<StoreRatingUpdateInput, StoreRatingUncheckedUpdateInput>
    /**
     * Choose, which StoreRating to update.
     */
    where: StoreRatingWhereUniqueInput
  }

  /**
   * StoreRating updateMany
   */
  export type StoreRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreRatings.
     */
    data: XOR<StoreRatingUpdateManyMutationInput, StoreRatingUncheckedUpdateManyInput>
    /**
     * Filter which StoreRatings to update
     */
    where?: StoreRatingWhereInput
  }

  /**
   * StoreRating upsert
   */
  export type StoreRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * The filter to search for the StoreRating to update in case it exists.
     */
    where: StoreRatingWhereUniqueInput
    /**
     * In case the StoreRating found by the `where` argument doesn't exist, create a new StoreRating with this data.
     */
    create: XOR<StoreRatingCreateInput, StoreRatingUncheckedCreateInput>
    /**
     * In case the StoreRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreRatingUpdateInput, StoreRatingUncheckedUpdateInput>
  }

  /**
   * StoreRating delete
   */
  export type StoreRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
    /**
     * Filter which StoreRating to delete.
     */
    where: StoreRatingWhereUniqueInput
  }

  /**
   * StoreRating deleteMany
   */
  export type StoreRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreRatings to delete
     */
    where?: StoreRatingWhereInput
  }

  /**
   * StoreRating without action
   */
  export type StoreRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreRating
     */
    select?: StoreRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreRating
     */
    omit?: StoreRatingOmit<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    initQuantity: number | null
    currentQuantity: number | null
    percent: number | null
    maximum: number | null
  }

  export type VoucherSumAggregateOutputType = {
    initQuantity: number | null
    currentQuantity: number | null
    percent: number | null
    maximum: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    initQuantity: number | null
    currentQuantity: number | null
    status: string | null
    type: string | null
    storeId: string | null
    percent: number | null
    maximum: number | null
    startDate: Date | null
    endDate: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    categoryConditionId: string | null
    priceConditionId: string | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    initQuantity: number | null
    currentQuantity: number | null
    status: string | null
    type: string | null
    storeId: string | null
    percent: number | null
    maximum: number | null
    startDate: Date | null
    endDate: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    categoryConditionId: string | null
    priceConditionId: string | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    code: number
    title: number
    description: number
    initQuantity: number
    currentQuantity: number
    status: number
    type: number
    storeId: number
    percent: number
    maximum: number
    startDate: number
    endDate: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    categoryConditionId: number
    priceConditionId: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    initQuantity?: true
    currentQuantity?: true
    percent?: true
    maximum?: true
  }

  export type VoucherSumAggregateInputType = {
    initQuantity?: true
    currentQuantity?: true
    percent?: true
    maximum?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    initQuantity?: true
    currentQuantity?: true
    status?: true
    type?: true
    storeId?: true
    percent?: true
    maximum?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    categoryConditionId?: true
    priceConditionId?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    initQuantity?: true
    currentQuantity?: true
    status?: true
    type?: true
    storeId?: true
    percent?: true
    maximum?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    categoryConditionId?: true
    priceConditionId?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    initQuantity?: true
    currentQuantity?: true
    status?: true
    type?: true
    storeId?: true
    percent?: true
    maximum?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    categoryConditionId?: true
    priceConditionId?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    code: string
    title: string
    description: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId: string | null
    percent: number | null
    maximum: number | null
    startDate: Date
    endDate: Date | null
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date | null
    categoryConditionId: string | null
    priceConditionId: string | null
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    initQuantity?: boolean
    currentQuantity?: boolean
    status?: boolean
    type?: boolean
    storeId?: boolean
    percent?: boolean
    maximum?: boolean
    startDate?: boolean
    endDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    categoryConditionId?: boolean
    priceConditionId?: boolean
    Store?: boolean | Voucher$StoreArgs<ExtArgs>
    CategoryConditionVoucher?: boolean | Voucher$CategoryConditionVoucherArgs<ExtArgs>
    PriceConditionVoucher?: boolean | Voucher$PriceConditionVoucherArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>


  export type VoucherSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    initQuantity?: boolean
    currentQuantity?: boolean
    status?: boolean
    type?: boolean
    storeId?: boolean
    percent?: boolean
    maximum?: boolean
    startDate?: boolean
    endDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    categoryConditionId?: boolean
    priceConditionId?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "description" | "initQuantity" | "currentQuantity" | "status" | "type" | "storeId" | "percent" | "maximum" | "startDate" | "endDate" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt" | "categoryConditionId" | "priceConditionId", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | Voucher$StoreArgs<ExtArgs>
    CategoryConditionVoucher?: boolean | Voucher$CategoryConditionVoucherArgs<ExtArgs>
    PriceConditionVoucher?: boolean | Voucher$PriceConditionVoucherArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs> | null
      CategoryConditionVoucher: Prisma.$CategoryConditionVoucherPayload<ExtArgs> | null
      PriceConditionVoucher: Prisma.$PriceConditionVoucherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      description: string | null
      initQuantity: number
      currentQuantity: number
      status: string
      type: string
      storeId: string | null
      percent: number | null
      maximum: number | null
      startDate: Date
      endDate: Date | null
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date | null
      categoryConditionId: string | null
      priceConditionId: string | null
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Store<T extends Voucher$StoreArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$StoreArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    CategoryConditionVoucher<T extends Voucher$CategoryConditionVoucherArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$CategoryConditionVoucherArgs<ExtArgs>>): Prisma__CategoryConditionVoucherClient<$Result.GetResult<Prisma.$CategoryConditionVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    PriceConditionVoucher<T extends Voucher$PriceConditionVoucherArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$PriceConditionVoucherArgs<ExtArgs>>): Prisma__PriceConditionVoucherClient<$Result.GetResult<Prisma.$PriceConditionVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Voucher model
   */ 
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly title: FieldRef<"Voucher", 'String'>
    readonly description: FieldRef<"Voucher", 'String'>
    readonly initQuantity: FieldRef<"Voucher", 'Int'>
    readonly currentQuantity: FieldRef<"Voucher", 'Int'>
    readonly status: FieldRef<"Voucher", 'String'>
    readonly type: FieldRef<"Voucher", 'String'>
    readonly storeId: FieldRef<"Voucher", 'String'>
    readonly percent: FieldRef<"Voucher", 'Float'>
    readonly maximum: FieldRef<"Voucher", 'Int'>
    readonly startDate: FieldRef<"Voucher", 'DateTime'>
    readonly endDate: FieldRef<"Voucher", 'DateTime'>
    readonly createdBy: FieldRef<"Voucher", 'String'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
    readonly updatedBy: FieldRef<"Voucher", 'String'>
    readonly updatedAt: FieldRef<"Voucher", 'DateTime'>
    readonly categoryConditionId: FieldRef<"Voucher", 'String'>
    readonly priceConditionId: FieldRef<"Voucher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
  }

  /**
   * Voucher.Store
   */
  export type Voucher$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Voucher.CategoryConditionVoucher
   */
  export type Voucher$CategoryConditionVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryConditionVoucher
     */
    select?: CategoryConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryConditionVoucher
     */
    omit?: CategoryConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryConditionVoucherInclude<ExtArgs> | null
    where?: CategoryConditionVoucherWhereInput
  }

  /**
   * Voucher.PriceConditionVoucher
   */
  export type Voucher$PriceConditionVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceConditionVoucher
     */
    select?: PriceConditionVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceConditionVoucher
     */
    omit?: PriceConditionVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceConditionVoucherInclude<ExtArgs> | null
    where?: PriceConditionVoucherWhereInput
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
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


  export const CategoryConditionVoucherScalarFieldEnum: {
    id: 'id',
    categoryShortName: 'categoryShortName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type CategoryConditionVoucherScalarFieldEnum = (typeof CategoryConditionVoucherScalarFieldEnum)[keyof typeof CategoryConditionVoucherScalarFieldEnum]


  export const PriceConditionVoucherScalarFieldEnum: {
    id: 'id',
    totalMin: 'totalMin',
    totalMax: 'totalMax',
    priceMin: 'priceMin',
    priceMax: 'priceMax',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type PriceConditionVoucherScalarFieldEnum = (typeof PriceConditionVoucherScalarFieldEnum)[keyof typeof PriceConditionVoucherScalarFieldEnum]


  export const ProductPromotionScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    image: 'image',
    category: 'category',
    quantity: 'quantity',
    currentQuantity: 'currentQuantity',
    bought: 'bought',
    priceAfter: 'priceAfter',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    storePromotionId: 'storePromotionId',
    salePromotionId: 'salePromotionId'
  };

  export type ProductPromotionScalarFieldEnum = (typeof ProductPromotionScalarFieldEnum)[keyof typeof ProductPromotionScalarFieldEnum]


  export const SalePromotionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    categoryId: 'categoryId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type SalePromotionScalarFieldEnum = (typeof SalePromotionScalarFieldEnum)[keyof typeof SalePromotionScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    location: 'location',
    description: 'description',
    status: 'status',
    tax: 'tax',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StorePromotionScalarFieldEnum: {
    id: 'id',
    salePromotionId: 'salePromotionId',
    storeId: 'storeId',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type StorePromotionScalarFieldEnum = (typeof StorePromotionScalarFieldEnum)[keyof typeof StorePromotionScalarFieldEnum]


  export const UserViewStoreScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type UserViewStoreScalarFieldEnum = (typeof UserViewStoreScalarFieldEnum)[keyof typeof UserViewStoreScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    orderId: 'orderId',
    stars: 'stars',
    comment: 'comment',
    isReply: 'isReply',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const RatingMaterialScalarFieldEnum: {
    id: 'id',
    url: 'url',
    isPrimary: 'isPrimary',
    ratingId: 'ratingId',
    ratingReplyId: 'ratingReplyId'
  };

  export type RatingMaterialScalarFieldEnum = (typeof RatingMaterialScalarFieldEnum)[keyof typeof RatingMaterialScalarFieldEnum]


  export const RatingReplyScalarFieldEnum: {
    id: 'id',
    parentRatingId: 'parentRatingId',
    detail: 'detail',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type RatingReplyScalarFieldEnum = (typeof RatingReplyScalarFieldEnum)[keyof typeof RatingReplyScalarFieldEnum]


  export const StoreRatingScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five',
    total: 'total',
    average: 'average',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreRatingScalarFieldEnum = (typeof StoreRatingScalarFieldEnum)[keyof typeof StoreRatingScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    initQuantity: 'initQuantity',
    currentQuantity: 'currentQuantity',
    status: 'status',
    type: 'type',
    storeId: 'storeId',
    percent: 'percent',
    maximum: 'maximum',
    startDate: 'startDate',
    endDate: 'endDate',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    categoryConditionId: 'categoryConditionId',
    priceConditionId: 'priceConditionId'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CategoryConditionVoucherWhereInput = {
    AND?: CategoryConditionVoucherWhereInput | CategoryConditionVoucherWhereInput[]
    OR?: CategoryConditionVoucherWhereInput[]
    NOT?: CategoryConditionVoucherWhereInput | CategoryConditionVoucherWhereInput[]
    id?: StringFilter<"CategoryConditionVoucher"> | string
    categoryShortName?: StringFilter<"CategoryConditionVoucher"> | string
    createdAt?: DateTimeFilter<"CategoryConditionVoucher"> | Date | string
    createdBy?: StringFilter<"CategoryConditionVoucher"> | string
    updatedAt?: DateTimeNullableFilter<"CategoryConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableFilter<"CategoryConditionVoucher"> | string | null
    Voucher?: VoucherListRelationFilter
  }

  export type CategoryConditionVoucherOrderByWithRelationInput = {
    id?: SortOrder
    categoryShortName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    Voucher?: VoucherOrderByRelationAggregateInput
  }

  export type CategoryConditionVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryConditionVoucherWhereInput | CategoryConditionVoucherWhereInput[]
    OR?: CategoryConditionVoucherWhereInput[]
    NOT?: CategoryConditionVoucherWhereInput | CategoryConditionVoucherWhereInput[]
    categoryShortName?: StringFilter<"CategoryConditionVoucher"> | string
    createdAt?: DateTimeFilter<"CategoryConditionVoucher"> | Date | string
    createdBy?: StringFilter<"CategoryConditionVoucher"> | string
    updatedAt?: DateTimeNullableFilter<"CategoryConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableFilter<"CategoryConditionVoucher"> | string | null
    Voucher?: VoucherListRelationFilter
  }, "id">

  export type CategoryConditionVoucherOrderByWithAggregationInput = {
    id?: SortOrder
    categoryShortName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: CategoryConditionVoucherCountOrderByAggregateInput
    _max?: CategoryConditionVoucherMaxOrderByAggregateInput
    _min?: CategoryConditionVoucherMinOrderByAggregateInput
  }

  export type CategoryConditionVoucherScalarWhereWithAggregatesInput = {
    AND?: CategoryConditionVoucherScalarWhereWithAggregatesInput | CategoryConditionVoucherScalarWhereWithAggregatesInput[]
    OR?: CategoryConditionVoucherScalarWhereWithAggregatesInput[]
    NOT?: CategoryConditionVoucherScalarWhereWithAggregatesInput | CategoryConditionVoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryConditionVoucher"> | string
    categoryShortName?: StringWithAggregatesFilter<"CategoryConditionVoucher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CategoryConditionVoucher"> | Date | string
    createdBy?: StringWithAggregatesFilter<"CategoryConditionVoucher"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CategoryConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"CategoryConditionVoucher"> | string | null
  }

  export type PriceConditionVoucherWhereInput = {
    AND?: PriceConditionVoucherWhereInput | PriceConditionVoucherWhereInput[]
    OR?: PriceConditionVoucherWhereInput[]
    NOT?: PriceConditionVoucherWhereInput | PriceConditionVoucherWhereInput[]
    id?: StringFilter<"PriceConditionVoucher"> | string
    totalMin?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    totalMax?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    priceMin?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    priceMax?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    createdAt?: DateTimeFilter<"PriceConditionVoucher"> | Date | string
    createdBy?: StringFilter<"PriceConditionVoucher"> | string
    updatedAt?: DateTimeNullableFilter<"PriceConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableFilter<"PriceConditionVoucher"> | string | null
    Voucher?: VoucherListRelationFilter
  }

  export type PriceConditionVoucherOrderByWithRelationInput = {
    id?: SortOrder
    totalMin?: SortOrderInput | SortOrder
    totalMax?: SortOrderInput | SortOrder
    priceMin?: SortOrderInput | SortOrder
    priceMax?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    Voucher?: VoucherOrderByRelationAggregateInput
  }

  export type PriceConditionVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceConditionVoucherWhereInput | PriceConditionVoucherWhereInput[]
    OR?: PriceConditionVoucherWhereInput[]
    NOT?: PriceConditionVoucherWhereInput | PriceConditionVoucherWhereInput[]
    totalMin?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    totalMax?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    priceMin?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    priceMax?: FloatNullableFilter<"PriceConditionVoucher"> | number | null
    createdAt?: DateTimeFilter<"PriceConditionVoucher"> | Date | string
    createdBy?: StringFilter<"PriceConditionVoucher"> | string
    updatedAt?: DateTimeNullableFilter<"PriceConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableFilter<"PriceConditionVoucher"> | string | null
    Voucher?: VoucherListRelationFilter
  }, "id">

  export type PriceConditionVoucherOrderByWithAggregationInput = {
    id?: SortOrder
    totalMin?: SortOrderInput | SortOrder
    totalMax?: SortOrderInput | SortOrder
    priceMin?: SortOrderInput | SortOrder
    priceMax?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: PriceConditionVoucherCountOrderByAggregateInput
    _avg?: PriceConditionVoucherAvgOrderByAggregateInput
    _max?: PriceConditionVoucherMaxOrderByAggregateInput
    _min?: PriceConditionVoucherMinOrderByAggregateInput
    _sum?: PriceConditionVoucherSumOrderByAggregateInput
  }

  export type PriceConditionVoucherScalarWhereWithAggregatesInput = {
    AND?: PriceConditionVoucherScalarWhereWithAggregatesInput | PriceConditionVoucherScalarWhereWithAggregatesInput[]
    OR?: PriceConditionVoucherScalarWhereWithAggregatesInput[]
    NOT?: PriceConditionVoucherScalarWhereWithAggregatesInput | PriceConditionVoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceConditionVoucher"> | string
    totalMin?: FloatNullableWithAggregatesFilter<"PriceConditionVoucher"> | number | null
    totalMax?: FloatNullableWithAggregatesFilter<"PriceConditionVoucher"> | number | null
    priceMin?: FloatNullableWithAggregatesFilter<"PriceConditionVoucher"> | number | null
    priceMax?: FloatNullableWithAggregatesFilter<"PriceConditionVoucher"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PriceConditionVoucher"> | Date | string
    createdBy?: StringWithAggregatesFilter<"PriceConditionVoucher"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PriceConditionVoucher"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"PriceConditionVoucher"> | string | null
  }

  export type ProductPromotionWhereInput = {
    AND?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    OR?: ProductPromotionWhereInput[]
    NOT?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    id?: StringFilter<"ProductPromotion"> | string
    productId?: StringFilter<"ProductPromotion"> | string
    name?: StringFilter<"ProductPromotion"> | string
    image?: StringFilter<"ProductPromotion"> | string
    category?: StringFilter<"ProductPromotion"> | string
    quantity?: IntFilter<"ProductPromotion"> | number
    currentQuantity?: IntFilter<"ProductPromotion"> | number
    bought?: IntNullableFilter<"ProductPromotion"> | number | null
    priceAfter?: FloatFilter<"ProductPromotion"> | number
    isDelete?: BoolFilter<"ProductPromotion"> | boolean
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    createdBy?: StringFilter<"ProductPromotion"> | string
    updatedAt?: DateTimeNullableFilter<"ProductPromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"ProductPromotion"> | string | null
    storePromotionId?: StringFilter<"ProductPromotion"> | string
    salePromotionId?: StringFilter<"ProductPromotion"> | string
    StorePromotion?: XOR<StorePromotionRelationFilter, StorePromotionWhereInput>
    SalePromotion?: XOR<SalePromotionRelationFilter, SalePromotionWhereInput>
  }

  export type ProductPromotionOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrderInput | SortOrder
    priceAfter?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    storePromotionId?: SortOrder
    salePromotionId?: SortOrder
    StorePromotion?: StorePromotionOrderByWithRelationInput
    SalePromotion?: SalePromotionOrderByWithRelationInput
  }

  export type ProductPromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    OR?: ProductPromotionWhereInput[]
    NOT?: ProductPromotionWhereInput | ProductPromotionWhereInput[]
    productId?: StringFilter<"ProductPromotion"> | string
    name?: StringFilter<"ProductPromotion"> | string
    image?: StringFilter<"ProductPromotion"> | string
    category?: StringFilter<"ProductPromotion"> | string
    quantity?: IntFilter<"ProductPromotion"> | number
    currentQuantity?: IntFilter<"ProductPromotion"> | number
    bought?: IntNullableFilter<"ProductPromotion"> | number | null
    priceAfter?: FloatFilter<"ProductPromotion"> | number
    isDelete?: BoolFilter<"ProductPromotion"> | boolean
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    createdBy?: StringFilter<"ProductPromotion"> | string
    updatedAt?: DateTimeNullableFilter<"ProductPromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"ProductPromotion"> | string | null
    storePromotionId?: StringFilter<"ProductPromotion"> | string
    salePromotionId?: StringFilter<"ProductPromotion"> | string
    StorePromotion?: XOR<StorePromotionRelationFilter, StorePromotionWhereInput>
    SalePromotion?: XOR<SalePromotionRelationFilter, SalePromotionWhereInput>
  }, "id">

  export type ProductPromotionOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrderInput | SortOrder
    priceAfter?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    storePromotionId?: SortOrder
    salePromotionId?: SortOrder
    _count?: ProductPromotionCountOrderByAggregateInput
    _avg?: ProductPromotionAvgOrderByAggregateInput
    _max?: ProductPromotionMaxOrderByAggregateInput
    _min?: ProductPromotionMinOrderByAggregateInput
    _sum?: ProductPromotionSumOrderByAggregateInput
  }

  export type ProductPromotionScalarWhereWithAggregatesInput = {
    AND?: ProductPromotionScalarWhereWithAggregatesInput | ProductPromotionScalarWhereWithAggregatesInput[]
    OR?: ProductPromotionScalarWhereWithAggregatesInput[]
    NOT?: ProductPromotionScalarWhereWithAggregatesInput | ProductPromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPromotion"> | string
    productId?: StringWithAggregatesFilter<"ProductPromotion"> | string
    name?: StringWithAggregatesFilter<"ProductPromotion"> | string
    image?: StringWithAggregatesFilter<"ProductPromotion"> | string
    category?: StringWithAggregatesFilter<"ProductPromotion"> | string
    quantity?: IntWithAggregatesFilter<"ProductPromotion"> | number
    currentQuantity?: IntWithAggregatesFilter<"ProductPromotion"> | number
    bought?: IntNullableWithAggregatesFilter<"ProductPromotion"> | number | null
    priceAfter?: FloatWithAggregatesFilter<"ProductPromotion"> | number
    isDelete?: BoolWithAggregatesFilter<"ProductPromotion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductPromotion"> | Date | string
    createdBy?: StringWithAggregatesFilter<"ProductPromotion"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductPromotion"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"ProductPromotion"> | string | null
    storePromotionId?: StringWithAggregatesFilter<"ProductPromotion"> | string
    salePromotionId?: StringWithAggregatesFilter<"ProductPromotion"> | string
  }

  export type SalePromotionWhereInput = {
    AND?: SalePromotionWhereInput | SalePromotionWhereInput[]
    OR?: SalePromotionWhereInput[]
    NOT?: SalePromotionWhereInput | SalePromotionWhereInput[]
    id?: StringFilter<"SalePromotion"> | string
    title?: StringFilter<"SalePromotion"> | string
    description?: StringNullableFilter<"SalePromotion"> | string | null
    type?: StringFilter<"SalePromotion"> | string
    categoryId?: StringNullableFilter<"SalePromotion"> | string | null
    status?: StringFilter<"SalePromotion"> | string
    startDate?: DateTimeFilter<"SalePromotion"> | Date | string
    endDate?: DateTimeNullableFilter<"SalePromotion"> | Date | string | null
    createdAt?: DateTimeFilter<"SalePromotion"> | Date | string
    createdBy?: StringFilter<"SalePromotion"> | string
    updatedAt?: DateTimeNullableFilter<"SalePromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"SalePromotion"> | string | null
    ProductPromotion?: ProductPromotionListRelationFilter
    StorePromotion?: StorePromotionListRelationFilter
  }

  export type SalePromotionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    ProductPromotion?: ProductPromotionOrderByRelationAggregateInput
    StorePromotion?: StorePromotionOrderByRelationAggregateInput
  }

  export type SalePromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalePromotionWhereInput | SalePromotionWhereInput[]
    OR?: SalePromotionWhereInput[]
    NOT?: SalePromotionWhereInput | SalePromotionWhereInput[]
    title?: StringFilter<"SalePromotion"> | string
    description?: StringNullableFilter<"SalePromotion"> | string | null
    type?: StringFilter<"SalePromotion"> | string
    categoryId?: StringNullableFilter<"SalePromotion"> | string | null
    status?: StringFilter<"SalePromotion"> | string
    startDate?: DateTimeFilter<"SalePromotion"> | Date | string
    endDate?: DateTimeNullableFilter<"SalePromotion"> | Date | string | null
    createdAt?: DateTimeFilter<"SalePromotion"> | Date | string
    createdBy?: StringFilter<"SalePromotion"> | string
    updatedAt?: DateTimeNullableFilter<"SalePromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"SalePromotion"> | string | null
    ProductPromotion?: ProductPromotionListRelationFilter
    StorePromotion?: StorePromotionListRelationFilter
  }, "id">

  export type SalePromotionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SalePromotionCountOrderByAggregateInput
    _max?: SalePromotionMaxOrderByAggregateInput
    _min?: SalePromotionMinOrderByAggregateInput
  }

  export type SalePromotionScalarWhereWithAggregatesInput = {
    AND?: SalePromotionScalarWhereWithAggregatesInput | SalePromotionScalarWhereWithAggregatesInput[]
    OR?: SalePromotionScalarWhereWithAggregatesInput[]
    NOT?: SalePromotionScalarWhereWithAggregatesInput | SalePromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalePromotion"> | string
    title?: StringWithAggregatesFilter<"SalePromotion"> | string
    description?: StringNullableWithAggregatesFilter<"SalePromotion"> | string | null
    type?: StringWithAggregatesFilter<"SalePromotion"> | string
    categoryId?: StringNullableWithAggregatesFilter<"SalePromotion"> | string | null
    status?: StringWithAggregatesFilter<"SalePromotion"> | string
    startDate?: DateTimeWithAggregatesFilter<"SalePromotion"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"SalePromotion"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SalePromotion"> | Date | string
    createdBy?: StringWithAggregatesFilter<"SalePromotion"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SalePromotion"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"SalePromotion"> | string | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    image?: StringFilter<"Store"> | string
    location?: StringNullableFilter<"Store"> | string | null
    description?: StringNullableFilter<"Store"> | string | null
    status?: StringFilter<"Store"> | string
    tax?: StringNullableFilter<"Store"> | string | null
    createdBy?: StringFilter<"Store"> | string
    updatedBy?: StringNullableFilter<"Store"> | string | null
    createdAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    Rating?: RatingListRelationFilter
    StorePromotion?: StorePromotionListRelationFilter
    UserViewStore?: UserViewStoreListRelationFilter
    Voucher?: VoucherListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    tax?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Rating?: RatingOrderByRelationAggregateInput
    StorePromotion?: StorePromotionOrderByRelationAggregateInput
    UserViewStore?: UserViewStoreOrderByRelationAggregateInput
    Voucher?: VoucherOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    image?: StringFilter<"Store"> | string
    location?: StringNullableFilter<"Store"> | string | null
    description?: StringNullableFilter<"Store"> | string | null
    status?: StringFilter<"Store"> | string
    tax?: StringNullableFilter<"Store"> | string | null
    createdBy?: StringFilter<"Store"> | string
    updatedBy?: StringNullableFilter<"Store"> | string | null
    createdAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    Rating?: RatingListRelationFilter
    StorePromotion?: StorePromotionListRelationFilter
    UserViewStore?: UserViewStoreListRelationFilter
    Voucher?: VoucherListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    tax?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    image?: StringWithAggregatesFilter<"Store"> | string
    location?: StringNullableWithAggregatesFilter<"Store"> | string | null
    description?: StringNullableWithAggregatesFilter<"Store"> | string | null
    status?: StringWithAggregatesFilter<"Store"> | string
    tax?: StringNullableWithAggregatesFilter<"Store"> | string | null
    createdBy?: StringWithAggregatesFilter<"Store"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"Store"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
  }

  export type StorePromotionWhereInput = {
    AND?: StorePromotionWhereInput | StorePromotionWhereInput[]
    OR?: StorePromotionWhereInput[]
    NOT?: StorePromotionWhereInput | StorePromotionWhereInput[]
    id?: StringFilter<"StorePromotion"> | string
    salePromotionId?: StringFilter<"StorePromotion"> | string
    storeId?: StringFilter<"StorePromotion"> | string
    status?: StringFilter<"StorePromotion"> | string
    createdAt?: DateTimeFilter<"StorePromotion"> | Date | string
    createdBy?: StringFilter<"StorePromotion"> | string
    updatedAt?: DateTimeNullableFilter<"StorePromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"StorePromotion"> | string | null
    ProductPromotion?: ProductPromotionListRelationFilter
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
    SalePromotion?: XOR<SalePromotionRelationFilter, SalePromotionWhereInput>
  }

  export type StorePromotionOrderByWithRelationInput = {
    id?: SortOrder
    salePromotionId?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    ProductPromotion?: ProductPromotionOrderByRelationAggregateInput
    Store?: StoreOrderByWithRelationInput
    SalePromotion?: SalePromotionOrderByWithRelationInput
  }

  export type StorePromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StorePromotionWhereInput | StorePromotionWhereInput[]
    OR?: StorePromotionWhereInput[]
    NOT?: StorePromotionWhereInput | StorePromotionWhereInput[]
    salePromotionId?: StringFilter<"StorePromotion"> | string
    storeId?: StringFilter<"StorePromotion"> | string
    status?: StringFilter<"StorePromotion"> | string
    createdAt?: DateTimeFilter<"StorePromotion"> | Date | string
    createdBy?: StringFilter<"StorePromotion"> | string
    updatedAt?: DateTimeNullableFilter<"StorePromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"StorePromotion"> | string | null
    ProductPromotion?: ProductPromotionListRelationFilter
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
    SalePromotion?: XOR<SalePromotionRelationFilter, SalePromotionWhereInput>
  }, "id">

  export type StorePromotionOrderByWithAggregationInput = {
    id?: SortOrder
    salePromotionId?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: StorePromotionCountOrderByAggregateInput
    _max?: StorePromotionMaxOrderByAggregateInput
    _min?: StorePromotionMinOrderByAggregateInput
  }

  export type StorePromotionScalarWhereWithAggregatesInput = {
    AND?: StorePromotionScalarWhereWithAggregatesInput | StorePromotionScalarWhereWithAggregatesInput[]
    OR?: StorePromotionScalarWhereWithAggregatesInput[]
    NOT?: StorePromotionScalarWhereWithAggregatesInput | StorePromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorePromotion"> | string
    salePromotionId?: StringWithAggregatesFilter<"StorePromotion"> | string
    storeId?: StringWithAggregatesFilter<"StorePromotion"> | string
    status?: StringWithAggregatesFilter<"StorePromotion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StorePromotion"> | Date | string
    createdBy?: StringWithAggregatesFilter<"StorePromotion"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"StorePromotion"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"StorePromotion"> | string | null
  }

  export type UserViewStoreWhereInput = {
    AND?: UserViewStoreWhereInput | UserViewStoreWhereInput[]
    OR?: UserViewStoreWhereInput[]
    NOT?: UserViewStoreWhereInput | UserViewStoreWhereInput[]
    id?: StringFilter<"UserViewStore"> | string
    storeId?: StringFilter<"UserViewStore"> | string
    userId?: StringNullableFilter<"UserViewStore"> | string | null
    createdAt?: DateTimeNullableFilter<"UserViewStore"> | Date | string | null
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type UserViewStoreOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    Store?: StoreOrderByWithRelationInput
  }

  export type UserViewStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserViewStoreWhereInput | UserViewStoreWhereInput[]
    OR?: UserViewStoreWhereInput[]
    NOT?: UserViewStoreWhereInput | UserViewStoreWhereInput[]
    storeId?: StringFilter<"UserViewStore"> | string
    userId?: StringNullableFilter<"UserViewStore"> | string | null
    createdAt?: DateTimeNullableFilter<"UserViewStore"> | Date | string | null
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type UserViewStoreOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserViewStoreCountOrderByAggregateInput
    _max?: UserViewStoreMaxOrderByAggregateInput
    _min?: UserViewStoreMinOrderByAggregateInput
  }

  export type UserViewStoreScalarWhereWithAggregatesInput = {
    AND?: UserViewStoreScalarWhereWithAggregatesInput | UserViewStoreScalarWhereWithAggregatesInput[]
    OR?: UserViewStoreScalarWhereWithAggregatesInput[]
    NOT?: UserViewStoreScalarWhereWithAggregatesInput | UserViewStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserViewStore"> | string
    storeId?: StringWithAggregatesFilter<"UserViewStore"> | string
    userId?: StringNullableWithAggregatesFilter<"UserViewStore"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"UserViewStore"> | Date | string | null
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    storeId?: StringFilter<"Rating"> | string
    orderId?: StringFilter<"Rating"> | string
    stars?: FloatFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    isReply?: BoolNullableFilter<"Rating"> | boolean | null
    createdBy?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedBy?: StringNullableFilter<"Rating"> | string | null
    updatedAt?: DateTimeNullableFilter<"Rating"> | Date | string | null
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
    RatingReply?: RatingReplyListRelationFilter
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    orderId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    isReply?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Store?: StoreOrderByWithRelationInput
    RatingReply?: RatingReplyOrderByRelationAggregateInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    storeId?: StringFilter<"Rating"> | string
    orderId?: StringFilter<"Rating"> | string
    stars?: FloatFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    isReply?: BoolNullableFilter<"Rating"> | boolean | null
    createdBy?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedBy?: StringNullableFilter<"Rating"> | string | null
    updatedAt?: DateTimeNullableFilter<"Rating"> | Date | string | null
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
    RatingReply?: RatingReplyListRelationFilter
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    orderId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    isReply?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    storeId?: StringWithAggregatesFilter<"Rating"> | string
    orderId?: StringWithAggregatesFilter<"Rating"> | string
    stars?: FloatWithAggregatesFilter<"Rating"> | number
    comment?: StringWithAggregatesFilter<"Rating"> | string
    isReply?: BoolNullableWithAggregatesFilter<"Rating"> | boolean | null
    createdBy?: StringWithAggregatesFilter<"Rating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Rating"> | Date | string | null
  }

  export type RatingMaterialWhereInput = {
    AND?: RatingMaterialWhereInput | RatingMaterialWhereInput[]
    OR?: RatingMaterialWhereInput[]
    NOT?: RatingMaterialWhereInput | RatingMaterialWhereInput[]
    id?: StringFilter<"RatingMaterial"> | string
    url?: StringFilter<"RatingMaterial"> | string
    isPrimary?: BoolNullableFilter<"RatingMaterial"> | boolean | null
    ratingId?: StringNullableFilter<"RatingMaterial"> | string | null
    ratingReplyId?: StringNullableFilter<"RatingMaterial"> | string | null
  }

  export type RatingMaterialOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrderInput | SortOrder
    ratingId?: SortOrderInput | SortOrder
    ratingReplyId?: SortOrderInput | SortOrder
  }

  export type RatingMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingMaterialWhereInput | RatingMaterialWhereInput[]
    OR?: RatingMaterialWhereInput[]
    NOT?: RatingMaterialWhereInput | RatingMaterialWhereInput[]
    url?: StringFilter<"RatingMaterial"> | string
    isPrimary?: BoolNullableFilter<"RatingMaterial"> | boolean | null
    ratingId?: StringNullableFilter<"RatingMaterial"> | string | null
    ratingReplyId?: StringNullableFilter<"RatingMaterial"> | string | null
  }, "id">

  export type RatingMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrderInput | SortOrder
    ratingId?: SortOrderInput | SortOrder
    ratingReplyId?: SortOrderInput | SortOrder
    _count?: RatingMaterialCountOrderByAggregateInput
    _max?: RatingMaterialMaxOrderByAggregateInput
    _min?: RatingMaterialMinOrderByAggregateInput
  }

  export type RatingMaterialScalarWhereWithAggregatesInput = {
    AND?: RatingMaterialScalarWhereWithAggregatesInput | RatingMaterialScalarWhereWithAggregatesInput[]
    OR?: RatingMaterialScalarWhereWithAggregatesInput[]
    NOT?: RatingMaterialScalarWhereWithAggregatesInput | RatingMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatingMaterial"> | string
    url?: StringWithAggregatesFilter<"RatingMaterial"> | string
    isPrimary?: BoolNullableWithAggregatesFilter<"RatingMaterial"> | boolean | null
    ratingId?: StringNullableWithAggregatesFilter<"RatingMaterial"> | string | null
    ratingReplyId?: StringNullableWithAggregatesFilter<"RatingMaterial"> | string | null
  }

  export type RatingReplyWhereInput = {
    AND?: RatingReplyWhereInput | RatingReplyWhereInput[]
    OR?: RatingReplyWhereInput[]
    NOT?: RatingReplyWhereInput | RatingReplyWhereInput[]
    id?: StringFilter<"RatingReply"> | string
    parentRatingId?: StringFilter<"RatingReply"> | string
    detail?: StringFilter<"RatingReply"> | string
    createdAt?: DateTimeFilter<"RatingReply"> | Date | string
    createdBy?: StringFilter<"RatingReply"> | string
    updatedAt?: DateTimeNullableFilter<"RatingReply"> | Date | string | null
    updatedBy?: StringNullableFilter<"RatingReply"> | string | null
    Rating?: XOR<RatingRelationFilter, RatingWhereInput>
  }

  export type RatingReplyOrderByWithRelationInput = {
    id?: SortOrder
    parentRatingId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    Rating?: RatingOrderByWithRelationInput
  }

  export type RatingReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingReplyWhereInput | RatingReplyWhereInput[]
    OR?: RatingReplyWhereInput[]
    NOT?: RatingReplyWhereInput | RatingReplyWhereInput[]
    parentRatingId?: StringFilter<"RatingReply"> | string
    detail?: StringFilter<"RatingReply"> | string
    createdAt?: DateTimeFilter<"RatingReply"> | Date | string
    createdBy?: StringFilter<"RatingReply"> | string
    updatedAt?: DateTimeNullableFilter<"RatingReply"> | Date | string | null
    updatedBy?: StringNullableFilter<"RatingReply"> | string | null
    Rating?: XOR<RatingRelationFilter, RatingWhereInput>
  }, "id">

  export type RatingReplyOrderByWithAggregationInput = {
    id?: SortOrder
    parentRatingId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: RatingReplyCountOrderByAggregateInput
    _max?: RatingReplyMaxOrderByAggregateInput
    _min?: RatingReplyMinOrderByAggregateInput
  }

  export type RatingReplyScalarWhereWithAggregatesInput = {
    AND?: RatingReplyScalarWhereWithAggregatesInput | RatingReplyScalarWhereWithAggregatesInput[]
    OR?: RatingReplyScalarWhereWithAggregatesInput[]
    NOT?: RatingReplyScalarWhereWithAggregatesInput | RatingReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatingReply"> | string
    parentRatingId?: StringWithAggregatesFilter<"RatingReply"> | string
    detail?: StringWithAggregatesFilter<"RatingReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RatingReply"> | Date | string
    createdBy?: StringWithAggregatesFilter<"RatingReply"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"RatingReply"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"RatingReply"> | string | null
  }

  export type StoreRatingWhereInput = {
    AND?: StoreRatingWhereInput | StoreRatingWhereInput[]
    OR?: StoreRatingWhereInput[]
    NOT?: StoreRatingWhereInput | StoreRatingWhereInput[]
    id?: StringFilter<"StoreRating"> | string
    storeId?: StringFilter<"StoreRating"> | string
    one?: IntFilter<"StoreRating"> | number
    two?: IntFilter<"StoreRating"> | number
    three?: IntFilter<"StoreRating"> | number
    four?: IntFilter<"StoreRating"> | number
    five?: IntFilter<"StoreRating"> | number
    total?: IntFilter<"StoreRating"> | number
    average?: FloatFilter<"StoreRating"> | number
    createdAt?: DateTimeNullableFilter<"StoreRating"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StoreRating"> | Date | string | null
  }

  export type StoreRatingOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type StoreRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreRatingWhereInput | StoreRatingWhereInput[]
    OR?: StoreRatingWhereInput[]
    NOT?: StoreRatingWhereInput | StoreRatingWhereInput[]
    storeId?: StringFilter<"StoreRating"> | string
    one?: IntFilter<"StoreRating"> | number
    two?: IntFilter<"StoreRating"> | number
    three?: IntFilter<"StoreRating"> | number
    four?: IntFilter<"StoreRating"> | number
    five?: IntFilter<"StoreRating"> | number
    total?: IntFilter<"StoreRating"> | number
    average?: FloatFilter<"StoreRating"> | number
    createdAt?: DateTimeNullableFilter<"StoreRating"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StoreRating"> | Date | string | null
  }, "id">

  export type StoreRatingOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StoreRatingCountOrderByAggregateInput
    _avg?: StoreRatingAvgOrderByAggregateInput
    _max?: StoreRatingMaxOrderByAggregateInput
    _min?: StoreRatingMinOrderByAggregateInput
    _sum?: StoreRatingSumOrderByAggregateInput
  }

  export type StoreRatingScalarWhereWithAggregatesInput = {
    AND?: StoreRatingScalarWhereWithAggregatesInput | StoreRatingScalarWhereWithAggregatesInput[]
    OR?: StoreRatingScalarWhereWithAggregatesInput[]
    NOT?: StoreRatingScalarWhereWithAggregatesInput | StoreRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoreRating"> | string
    storeId?: StringWithAggregatesFilter<"StoreRating"> | string
    one?: IntWithAggregatesFilter<"StoreRating"> | number
    two?: IntWithAggregatesFilter<"StoreRating"> | number
    three?: IntWithAggregatesFilter<"StoreRating"> | number
    four?: IntWithAggregatesFilter<"StoreRating"> | number
    five?: IntWithAggregatesFilter<"StoreRating"> | number
    total?: IntWithAggregatesFilter<"StoreRating"> | number
    average?: FloatWithAggregatesFilter<"StoreRating"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"StoreRating"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"StoreRating"> | Date | string | null
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    title?: StringFilter<"Voucher"> | string
    description?: StringNullableFilter<"Voucher"> | string | null
    initQuantity?: IntFilter<"Voucher"> | number
    currentQuantity?: IntFilter<"Voucher"> | number
    status?: StringFilter<"Voucher"> | string
    type?: StringFilter<"Voucher"> | string
    storeId?: StringNullableFilter<"Voucher"> | string | null
    percent?: FloatNullableFilter<"Voucher"> | number | null
    maximum?: IntNullableFilter<"Voucher"> | number | null
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    createdBy?: StringFilter<"Voucher"> | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedBy?: StringNullableFilter<"Voucher"> | string | null
    updatedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    categoryConditionId?: StringNullableFilter<"Voucher"> | string | null
    priceConditionId?: StringNullableFilter<"Voucher"> | string | null
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    CategoryConditionVoucher?: XOR<CategoryConditionVoucherNullableRelationFilter, CategoryConditionVoucherWhereInput> | null
    PriceConditionVoucher?: XOR<PriceConditionVoucherNullableRelationFilter, PriceConditionVoucherWhereInput> | null
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    status?: SortOrder
    type?: SortOrder
    storeId?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    maximum?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    categoryConditionId?: SortOrderInput | SortOrder
    priceConditionId?: SortOrderInput | SortOrder
    Store?: StoreOrderByWithRelationInput
    CategoryConditionVoucher?: CategoryConditionVoucherOrderByWithRelationInput
    PriceConditionVoucher?: PriceConditionVoucherOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    code?: StringFilter<"Voucher"> | string
    title?: StringFilter<"Voucher"> | string
    description?: StringNullableFilter<"Voucher"> | string | null
    initQuantity?: IntFilter<"Voucher"> | number
    currentQuantity?: IntFilter<"Voucher"> | number
    status?: StringFilter<"Voucher"> | string
    type?: StringFilter<"Voucher"> | string
    storeId?: StringNullableFilter<"Voucher"> | string | null
    percent?: FloatNullableFilter<"Voucher"> | number | null
    maximum?: IntNullableFilter<"Voucher"> | number | null
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    createdBy?: StringFilter<"Voucher"> | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedBy?: StringNullableFilter<"Voucher"> | string | null
    updatedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    categoryConditionId?: StringNullableFilter<"Voucher"> | string | null
    priceConditionId?: StringNullableFilter<"Voucher"> | string | null
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    CategoryConditionVoucher?: XOR<CategoryConditionVoucherNullableRelationFilter, CategoryConditionVoucherWhereInput> | null
    PriceConditionVoucher?: XOR<PriceConditionVoucherNullableRelationFilter, PriceConditionVoucherWhereInput> | null
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    status?: SortOrder
    type?: SortOrder
    storeId?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    maximum?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    categoryConditionId?: SortOrderInput | SortOrder
    priceConditionId?: SortOrderInput | SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    code?: StringWithAggregatesFilter<"Voucher"> | string
    title?: StringWithAggregatesFilter<"Voucher"> | string
    description?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    initQuantity?: IntWithAggregatesFilter<"Voucher"> | number
    currentQuantity?: IntWithAggregatesFilter<"Voucher"> | number
    status?: StringWithAggregatesFilter<"Voucher"> | string
    type?: StringWithAggregatesFilter<"Voucher"> | string
    storeId?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    percent?: FloatNullableWithAggregatesFilter<"Voucher"> | number | null
    maximum?: IntNullableWithAggregatesFilter<"Voucher"> | number | null
    startDate?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Voucher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    categoryConditionId?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    priceConditionId?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
  }

  export type CategoryConditionVoucherCreateInput = {
    id: string
    categoryShortName: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Voucher?: VoucherCreateNestedManyWithoutCategoryConditionVoucherInput
  }

  export type CategoryConditionVoucherUncheckedCreateInput = {
    id: string
    categoryShortName: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Voucher?: VoucherUncheckedCreateNestedManyWithoutCategoryConditionVoucherInput
  }

  export type CategoryConditionVoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Voucher?: VoucherUpdateManyWithoutCategoryConditionVoucherNestedInput
  }

  export type CategoryConditionVoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Voucher?: VoucherUncheckedUpdateManyWithoutCategoryConditionVoucherNestedInput
  }

  export type CategoryConditionVoucherCreateManyInput = {
    id: string
    categoryShortName: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type CategoryConditionVoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryConditionVoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceConditionVoucherCreateInput = {
    id: string
    totalMin?: number | null
    totalMax?: number | null
    priceMin?: number | null
    priceMax?: number | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Voucher?: VoucherCreateNestedManyWithoutPriceConditionVoucherInput
  }

  export type PriceConditionVoucherUncheckedCreateInput = {
    id: string
    totalMin?: number | null
    totalMax?: number | null
    priceMin?: number | null
    priceMax?: number | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Voucher?: VoucherUncheckedCreateNestedManyWithoutPriceConditionVoucherInput
  }

  export type PriceConditionVoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Voucher?: VoucherUpdateManyWithoutPriceConditionVoucherNestedInput
  }

  export type PriceConditionVoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Voucher?: VoucherUncheckedUpdateManyWithoutPriceConditionVoucherNestedInput
  }

  export type PriceConditionVoucherCreateManyInput = {
    id: string
    totalMin?: number | null
    totalMax?: number | null
    priceMin?: number | null
    priceMax?: number | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PriceConditionVoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceConditionVoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPromotionCreateInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    StorePromotion: StorePromotionCreateNestedOneWithoutProductPromotionInput
    SalePromotion: SalePromotionCreateNestedOneWithoutProductPromotionInput
  }

  export type ProductPromotionUncheckedCreateInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    storePromotionId: string
    salePromotionId: string
  }

  export type ProductPromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    StorePromotion?: StorePromotionUpdateOneRequiredWithoutProductPromotionNestedInput
    SalePromotion?: SalePromotionUpdateOneRequiredWithoutProductPromotionNestedInput
  }

  export type ProductPromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    storePromotionId?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPromotionCreateManyInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    storePromotionId: string
    salePromotionId: string
  }

  export type ProductPromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    storePromotionId?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePromotionCreateInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionCreateNestedManyWithoutSalePromotionInput
    StorePromotion?: StorePromotionCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionUncheckedCreateNestedManyWithoutSalePromotionInput
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUpdateManyWithoutSalePromotionNestedInput
    StorePromotion?: StorePromotionUpdateManyWithoutSalePromotionNestedInput
  }

  export type SalePromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUncheckedUpdateManyWithoutSalePromotionNestedInput
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutSalePromotionNestedInput
  }

  export type SalePromotionCreateManyInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type SalePromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalePromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreCreateInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreCreateNestedManyWithoutStoreInput
    Voucher?: VoucherCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingUncheckedCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreUncheckedCreateNestedManyWithoutStoreInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUncheckedUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUncheckedUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StorePromotionCreateInput = {
    id: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionCreateNestedManyWithoutStorePromotionInput
    Store: StoreCreateNestedOneWithoutStorePromotionInput
    SalePromotion: SalePromotionCreateNestedOneWithoutStorePromotionInput
  }

  export type StorePromotionUncheckedCreateInput = {
    id: string
    salePromotionId: string
    storeId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionUncheckedCreateNestedManyWithoutStorePromotionInput
  }

  export type StorePromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUpdateManyWithoutStorePromotionNestedInput
    Store?: StoreUpdateOneRequiredWithoutStorePromotionNestedInput
    SalePromotion?: SalePromotionUpdateOneRequiredWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUncheckedUpdateManyWithoutStorePromotionNestedInput
  }

  export type StorePromotionCreateManyInput = {
    id: string
    salePromotionId: string
    storeId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type StorePromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StorePromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewStoreCreateInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string | null
    Store: StoreCreateNestedOneWithoutUserViewStoreInput
  }

  export type UserViewStoreUncheckedCreateInput = {
    id: string
    storeId: string
    userId?: string | null
    createdAt?: Date | string | null
  }

  export type UserViewStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneRequiredWithoutUserViewStoreNestedInput
  }

  export type UserViewStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserViewStoreCreateManyInput = {
    id: string
    storeId: string
    userId?: string | null
    createdAt?: Date | string | null
  }

  export type UserViewStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserViewStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingCreateInput = {
    id: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    Store: StoreCreateNestedOneWithoutRatingInput
    RatingReply?: RatingReplyCreateNestedManyWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id: string
    storeId: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    RatingReply?: RatingReplyUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneRequiredWithoutRatingNestedInput
    RatingReply?: RatingReplyUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RatingReply?: RatingReplyUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingCreateManyInput = {
    id: string
    storeId: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RatingMaterialCreateInput = {
    id: string
    url: string
    isPrimary?: boolean | null
    ratingId?: string | null
    ratingReplyId?: string | null
  }

  export type RatingMaterialUncheckedCreateInput = {
    id: string
    url: string
    isPrimary?: boolean | null
    ratingId?: string | null
    ratingReplyId?: string | null
  }

  export type RatingMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingReplyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingReplyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingMaterialCreateManyInput = {
    id: string
    url: string
    isPrimary?: boolean | null
    ratingId?: string | null
    ratingReplyId?: string | null
  }

  export type RatingMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingReplyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ratingId?: NullableStringFieldUpdateOperationsInput | string | null
    ratingReplyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingReplyCreateInput = {
    id: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Rating: RatingCreateNestedOneWithoutRatingReplyInput
  }

  export type RatingReplyUncheckedCreateInput = {
    id: string
    parentRatingId: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type RatingReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: RatingUpdateOneRequiredWithoutRatingReplyNestedInput
  }

  export type RatingReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentRatingId?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingReplyCreateManyInput = {
    id: string
    parentRatingId: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type RatingReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentRatingId?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreRatingCreateInput = {
    id: string
    storeId: string
    one?: number
    two?: number
    three?: number
    four?: number
    five?: number
    total?: number
    average?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRatingUncheckedCreateInput = {
    id: string
    storeId: string
    one?: number
    two?: number
    three?: number
    four?: number
    five?: number
    total?: number
    average?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    one?: IntFieldUpdateOperationsInput | number
    two?: IntFieldUpdateOperationsInput | number
    three?: IntFieldUpdateOperationsInput | number
    four?: IntFieldUpdateOperationsInput | number
    five?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    average?: FloatFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    one?: IntFieldUpdateOperationsInput | number
    two?: IntFieldUpdateOperationsInput | number
    three?: IntFieldUpdateOperationsInput | number
    four?: IntFieldUpdateOperationsInput | number
    five?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    average?: FloatFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreRatingCreateManyInput = {
    id: string
    storeId: string
    one?: number
    two?: number
    three?: number
    four?: number
    five?: number
    total?: number
    average?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StoreRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    one?: IntFieldUpdateOperationsInput | number
    two?: IntFieldUpdateOperationsInput | number
    three?: IntFieldUpdateOperationsInput | number
    four?: IntFieldUpdateOperationsInput | number
    five?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    average?: FloatFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    one?: IntFieldUpdateOperationsInput | number
    two?: IntFieldUpdateOperationsInput | number
    three?: IntFieldUpdateOperationsInput | number
    four?: IntFieldUpdateOperationsInput | number
    five?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    average?: FloatFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherCreateInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    Store?: StoreCreateNestedOneWithoutVoucherInput
    CategoryConditionVoucher?: CategoryConditionVoucherCreateNestedOneWithoutVoucherInput
    PriceConditionVoucher?: PriceConditionVoucherCreateNestedOneWithoutVoucherInput
  }

  export type VoucherUncheckedCreateInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
    priceConditionId?: string | null
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneWithoutVoucherNestedInput
    CategoryConditionVoucher?: CategoryConditionVoucherUpdateOneWithoutVoucherNestedInput
    PriceConditionVoucher?: PriceConditionVoucherUpdateOneWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherCreateManyInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
    priceConditionId?: string | null
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryConditionVoucherCountOrderByAggregateInput = {
    id?: SortOrder
    categoryShortName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CategoryConditionVoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryShortName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CategoryConditionVoucherMinOrderByAggregateInput = {
    id?: SortOrder
    categoryShortName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
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

  export type PriceConditionVoucherCountOrderByAggregateInput = {
    id?: SortOrder
    totalMin?: SortOrder
    totalMax?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type PriceConditionVoucherAvgOrderByAggregateInput = {
    totalMin?: SortOrder
    totalMax?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
  }

  export type PriceConditionVoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    totalMin?: SortOrder
    totalMax?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type PriceConditionVoucherMinOrderByAggregateInput = {
    id?: SortOrder
    totalMin?: SortOrder
    totalMax?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type PriceConditionVoucherSumOrderByAggregateInput = {
    totalMin?: SortOrder
    totalMax?: SortOrder
    priceMin?: SortOrder
    priceMax?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StorePromotionRelationFilter = {
    is?: StorePromotionWhereInput
    isNot?: StorePromotionWhereInput
  }

  export type SalePromotionRelationFilter = {
    is?: SalePromotionWhereInput
    isNot?: SalePromotionWhereInput
  }

  export type ProductPromotionCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrder
    priceAfter?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    storePromotionId?: SortOrder
    salePromotionId?: SortOrder
  }

  export type ProductPromotionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrder
    priceAfter?: SortOrder
  }

  export type ProductPromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrder
    priceAfter?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    storePromotionId?: SortOrder
    salePromotionId?: SortOrder
  }

  export type ProductPromotionMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrder
    priceAfter?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    storePromotionId?: SortOrder
    salePromotionId?: SortOrder
  }

  export type ProductPromotionSumOrderByAggregateInput = {
    quantity?: SortOrder
    currentQuantity?: SortOrder
    bought?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductPromotionListRelationFilter = {
    every?: ProductPromotionWhereInput
    some?: ProductPromotionWhereInput
    none?: ProductPromotionWhereInput
  }

  export type StorePromotionListRelationFilter = {
    every?: StorePromotionWhereInput
    some?: StorePromotionWhereInput
    none?: StorePromotionWhereInput
  }

  export type ProductPromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorePromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalePromotionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SalePromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SalePromotionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type UserViewStoreListRelationFilter = {
    every?: UserViewStoreWhereInput
    some?: UserViewStoreWhereInput
    none?: UserViewStoreWhereInput
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserViewStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    location?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tax?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    location?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tax?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    location?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tax?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type StorePromotionCountOrderByAggregateInput = {
    id?: SortOrder
    salePromotionId?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type StorePromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    salePromotionId?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type StorePromotionMinOrderByAggregateInput = {
    id?: SortOrder
    salePromotionId?: SortOrder
    storeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserViewStoreCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserViewStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserViewStoreMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RatingReplyListRelationFilter = {
    every?: RatingReplyWhereInput
    some?: RatingReplyWhereInput
    none?: RatingReplyWhereInput
  }

  export type RatingReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    orderId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    isReply?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    orderId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    isReply?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    orderId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    isReply?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RatingMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    ratingId?: SortOrder
    ratingReplyId?: SortOrder
  }

  export type RatingMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    ratingId?: SortOrder
    ratingReplyId?: SortOrder
  }

  export type RatingMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    ratingId?: SortOrder
    ratingReplyId?: SortOrder
  }

  export type RatingRelationFilter = {
    is?: RatingWhereInput
    isNot?: RatingWhereInput
  }

  export type RatingReplyCountOrderByAggregateInput = {
    id?: SortOrder
    parentRatingId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RatingReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    parentRatingId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RatingReplyMinOrderByAggregateInput = {
    id?: SortOrder
    parentRatingId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type StoreRatingCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRatingAvgOrderByAggregateInput = {
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
  }

  export type StoreRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRatingMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRatingSumOrderByAggregateInput = {
    one?: SortOrder
    two?: SortOrder
    three?: SortOrder
    four?: SortOrder
    five?: SortOrder
    total?: SortOrder
    average?: SortOrder
  }

  export type StoreNullableRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type CategoryConditionVoucherNullableRelationFilter = {
    is?: CategoryConditionVoucherWhereInput | null
    isNot?: CategoryConditionVoucherWhereInput | null
  }

  export type PriceConditionVoucherNullableRelationFilter = {
    is?: PriceConditionVoucherWhereInput | null
    isNot?: PriceConditionVoucherWhereInput | null
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    status?: SortOrder
    type?: SortOrder
    storeId?: SortOrder
    percent?: SortOrder
    maximum?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    categoryConditionId?: SortOrder
    priceConditionId?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    percent?: SortOrder
    maximum?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    status?: SortOrder
    type?: SortOrder
    storeId?: SortOrder
    percent?: SortOrder
    maximum?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    categoryConditionId?: SortOrder
    priceConditionId?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    status?: SortOrder
    type?: SortOrder
    storeId?: SortOrder
    percent?: SortOrder
    maximum?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    categoryConditionId?: SortOrder
    priceConditionId?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    initQuantity?: SortOrder
    currentQuantity?: SortOrder
    percent?: SortOrder
    maximum?: SortOrder
  }

  export type VoucherCreateNestedManyWithoutCategoryConditionVoucherInput = {
    create?: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput> | VoucherCreateWithoutCategoryConditionVoucherInput[] | VoucherUncheckedCreateWithoutCategoryConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutCategoryConditionVoucherInput | VoucherCreateOrConnectWithoutCategoryConditionVoucherInput[]
    createMany?: VoucherCreateManyCategoryConditionVoucherInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutCategoryConditionVoucherInput = {
    create?: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput> | VoucherCreateWithoutCategoryConditionVoucherInput[] | VoucherUncheckedCreateWithoutCategoryConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutCategoryConditionVoucherInput | VoucherCreateOrConnectWithoutCategoryConditionVoucherInput[]
    createMany?: VoucherCreateManyCategoryConditionVoucherInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VoucherUpdateManyWithoutCategoryConditionVoucherNestedInput = {
    create?: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput> | VoucherCreateWithoutCategoryConditionVoucherInput[] | VoucherUncheckedCreateWithoutCategoryConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutCategoryConditionVoucherInput | VoucherCreateOrConnectWithoutCategoryConditionVoucherInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutCategoryConditionVoucherInput | VoucherUpsertWithWhereUniqueWithoutCategoryConditionVoucherInput[]
    createMany?: VoucherCreateManyCategoryConditionVoucherInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutCategoryConditionVoucherInput | VoucherUpdateWithWhereUniqueWithoutCategoryConditionVoucherInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutCategoryConditionVoucherInput | VoucherUpdateManyWithWhereWithoutCategoryConditionVoucherInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutCategoryConditionVoucherNestedInput = {
    create?: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput> | VoucherCreateWithoutCategoryConditionVoucherInput[] | VoucherUncheckedCreateWithoutCategoryConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutCategoryConditionVoucherInput | VoucherCreateOrConnectWithoutCategoryConditionVoucherInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutCategoryConditionVoucherInput | VoucherUpsertWithWhereUniqueWithoutCategoryConditionVoucherInput[]
    createMany?: VoucherCreateManyCategoryConditionVoucherInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutCategoryConditionVoucherInput | VoucherUpdateWithWhereUniqueWithoutCategoryConditionVoucherInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutCategoryConditionVoucherInput | VoucherUpdateManyWithWhereWithoutCategoryConditionVoucherInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type VoucherCreateNestedManyWithoutPriceConditionVoucherInput = {
    create?: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput> | VoucherCreateWithoutPriceConditionVoucherInput[] | VoucherUncheckedCreateWithoutPriceConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPriceConditionVoucherInput | VoucherCreateOrConnectWithoutPriceConditionVoucherInput[]
    createMany?: VoucherCreateManyPriceConditionVoucherInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutPriceConditionVoucherInput = {
    create?: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput> | VoucherCreateWithoutPriceConditionVoucherInput[] | VoucherUncheckedCreateWithoutPriceConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPriceConditionVoucherInput | VoucherCreateOrConnectWithoutPriceConditionVoucherInput[]
    createMany?: VoucherCreateManyPriceConditionVoucherInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoucherUpdateManyWithoutPriceConditionVoucherNestedInput = {
    create?: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput> | VoucherCreateWithoutPriceConditionVoucherInput[] | VoucherUncheckedCreateWithoutPriceConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPriceConditionVoucherInput | VoucherCreateOrConnectWithoutPriceConditionVoucherInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutPriceConditionVoucherInput | VoucherUpsertWithWhereUniqueWithoutPriceConditionVoucherInput[]
    createMany?: VoucherCreateManyPriceConditionVoucherInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutPriceConditionVoucherInput | VoucherUpdateWithWhereUniqueWithoutPriceConditionVoucherInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutPriceConditionVoucherInput | VoucherUpdateManyWithWhereWithoutPriceConditionVoucherInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutPriceConditionVoucherNestedInput = {
    create?: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput> | VoucherCreateWithoutPriceConditionVoucherInput[] | VoucherUncheckedCreateWithoutPriceConditionVoucherInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPriceConditionVoucherInput | VoucherCreateOrConnectWithoutPriceConditionVoucherInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutPriceConditionVoucherInput | VoucherUpsertWithWhereUniqueWithoutPriceConditionVoucherInput[]
    createMany?: VoucherCreateManyPriceConditionVoucherInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutPriceConditionVoucherInput | VoucherUpdateWithWhereUniqueWithoutPriceConditionVoucherInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutPriceConditionVoucherInput | VoucherUpdateManyWithWhereWithoutPriceConditionVoucherInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type StorePromotionCreateNestedOneWithoutProductPromotionInput = {
    create?: XOR<StorePromotionCreateWithoutProductPromotionInput, StorePromotionUncheckedCreateWithoutProductPromotionInput>
    connectOrCreate?: StorePromotionCreateOrConnectWithoutProductPromotionInput
    connect?: StorePromotionWhereUniqueInput
  }

  export type SalePromotionCreateNestedOneWithoutProductPromotionInput = {
    create?: XOR<SalePromotionCreateWithoutProductPromotionInput, SalePromotionUncheckedCreateWithoutProductPromotionInput>
    connectOrCreate?: SalePromotionCreateOrConnectWithoutProductPromotionInput
    connect?: SalePromotionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StorePromotionUpdateOneRequiredWithoutProductPromotionNestedInput = {
    create?: XOR<StorePromotionCreateWithoutProductPromotionInput, StorePromotionUncheckedCreateWithoutProductPromotionInput>
    connectOrCreate?: StorePromotionCreateOrConnectWithoutProductPromotionInput
    upsert?: StorePromotionUpsertWithoutProductPromotionInput
    connect?: StorePromotionWhereUniqueInput
    update?: XOR<XOR<StorePromotionUpdateToOneWithWhereWithoutProductPromotionInput, StorePromotionUpdateWithoutProductPromotionInput>, StorePromotionUncheckedUpdateWithoutProductPromotionInput>
  }

  export type SalePromotionUpdateOneRequiredWithoutProductPromotionNestedInput = {
    create?: XOR<SalePromotionCreateWithoutProductPromotionInput, SalePromotionUncheckedCreateWithoutProductPromotionInput>
    connectOrCreate?: SalePromotionCreateOrConnectWithoutProductPromotionInput
    upsert?: SalePromotionUpsertWithoutProductPromotionInput
    connect?: SalePromotionWhereUniqueInput
    update?: XOR<XOR<SalePromotionUpdateToOneWithWhereWithoutProductPromotionInput, SalePromotionUpdateWithoutProductPromotionInput>, SalePromotionUncheckedUpdateWithoutProductPromotionInput>
  }

  export type ProductPromotionCreateNestedManyWithoutSalePromotionInput = {
    create?: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput> | ProductPromotionCreateWithoutSalePromotionInput[] | ProductPromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutSalePromotionInput | ProductPromotionCreateOrConnectWithoutSalePromotionInput[]
    createMany?: ProductPromotionCreateManySalePromotionInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type StorePromotionCreateNestedManyWithoutSalePromotionInput = {
    create?: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput> | StorePromotionCreateWithoutSalePromotionInput[] | StorePromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutSalePromotionInput | StorePromotionCreateOrConnectWithoutSalePromotionInput[]
    createMany?: StorePromotionCreateManySalePromotionInputEnvelope
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
  }

  export type ProductPromotionUncheckedCreateNestedManyWithoutSalePromotionInput = {
    create?: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput> | ProductPromotionCreateWithoutSalePromotionInput[] | ProductPromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutSalePromotionInput | ProductPromotionCreateOrConnectWithoutSalePromotionInput[]
    createMany?: ProductPromotionCreateManySalePromotionInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type StorePromotionUncheckedCreateNestedManyWithoutSalePromotionInput = {
    create?: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput> | StorePromotionCreateWithoutSalePromotionInput[] | StorePromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutSalePromotionInput | StorePromotionCreateOrConnectWithoutSalePromotionInput[]
    createMany?: StorePromotionCreateManySalePromotionInputEnvelope
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
  }

  export type ProductPromotionUpdateManyWithoutSalePromotionNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput> | ProductPromotionCreateWithoutSalePromotionInput[] | ProductPromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutSalePromotionInput | ProductPromotionCreateOrConnectWithoutSalePromotionInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutSalePromotionInput | ProductPromotionUpsertWithWhereUniqueWithoutSalePromotionInput[]
    createMany?: ProductPromotionCreateManySalePromotionInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutSalePromotionInput | ProductPromotionUpdateWithWhereUniqueWithoutSalePromotionInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutSalePromotionInput | ProductPromotionUpdateManyWithWhereWithoutSalePromotionInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type StorePromotionUpdateManyWithoutSalePromotionNestedInput = {
    create?: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput> | StorePromotionCreateWithoutSalePromotionInput[] | StorePromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutSalePromotionInput | StorePromotionCreateOrConnectWithoutSalePromotionInput[]
    upsert?: StorePromotionUpsertWithWhereUniqueWithoutSalePromotionInput | StorePromotionUpsertWithWhereUniqueWithoutSalePromotionInput[]
    createMany?: StorePromotionCreateManySalePromotionInputEnvelope
    set?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    disconnect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    delete?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    update?: StorePromotionUpdateWithWhereUniqueWithoutSalePromotionInput | StorePromotionUpdateWithWhereUniqueWithoutSalePromotionInput[]
    updateMany?: StorePromotionUpdateManyWithWhereWithoutSalePromotionInput | StorePromotionUpdateManyWithWhereWithoutSalePromotionInput[]
    deleteMany?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
  }

  export type ProductPromotionUncheckedUpdateManyWithoutSalePromotionNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput> | ProductPromotionCreateWithoutSalePromotionInput[] | ProductPromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutSalePromotionInput | ProductPromotionCreateOrConnectWithoutSalePromotionInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutSalePromotionInput | ProductPromotionUpsertWithWhereUniqueWithoutSalePromotionInput[]
    createMany?: ProductPromotionCreateManySalePromotionInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutSalePromotionInput | ProductPromotionUpdateWithWhereUniqueWithoutSalePromotionInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutSalePromotionInput | ProductPromotionUpdateManyWithWhereWithoutSalePromotionInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type StorePromotionUncheckedUpdateManyWithoutSalePromotionNestedInput = {
    create?: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput> | StorePromotionCreateWithoutSalePromotionInput[] | StorePromotionUncheckedCreateWithoutSalePromotionInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutSalePromotionInput | StorePromotionCreateOrConnectWithoutSalePromotionInput[]
    upsert?: StorePromotionUpsertWithWhereUniqueWithoutSalePromotionInput | StorePromotionUpsertWithWhereUniqueWithoutSalePromotionInput[]
    createMany?: StorePromotionCreateManySalePromotionInputEnvelope
    set?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    disconnect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    delete?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    update?: StorePromotionUpdateWithWhereUniqueWithoutSalePromotionInput | StorePromotionUpdateWithWhereUniqueWithoutSalePromotionInput[]
    updateMany?: StorePromotionUpdateManyWithWhereWithoutSalePromotionInput | StorePromotionUpdateManyWithWhereWithoutSalePromotionInput[]
    deleteMany?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
  }

  export type RatingCreateNestedManyWithoutStoreInput = {
    create?: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput> | RatingCreateWithoutStoreInput[] | RatingUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStoreInput | RatingCreateOrConnectWithoutStoreInput[]
    createMany?: RatingCreateManyStoreInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type StorePromotionCreateNestedManyWithoutStoreInput = {
    create?: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput> | StorePromotionCreateWithoutStoreInput[] | StorePromotionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutStoreInput | StorePromotionCreateOrConnectWithoutStoreInput[]
    createMany?: StorePromotionCreateManyStoreInputEnvelope
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
  }

  export type UserViewStoreCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput> | UserViewStoreCreateWithoutStoreInput[] | UserViewStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserViewStoreCreateOrConnectWithoutStoreInput | UserViewStoreCreateOrConnectWithoutStoreInput[]
    createMany?: UserViewStoreCreateManyStoreInputEnvelope
    connect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutStoreInput = {
    create?: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput> | VoucherCreateWithoutStoreInput[] | VoucherUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutStoreInput | VoucherCreateOrConnectWithoutStoreInput[]
    createMany?: VoucherCreateManyStoreInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput> | RatingCreateWithoutStoreInput[] | RatingUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStoreInput | RatingCreateOrConnectWithoutStoreInput[]
    createMany?: RatingCreateManyStoreInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type StorePromotionUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput> | StorePromotionCreateWithoutStoreInput[] | StorePromotionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutStoreInput | StorePromotionCreateOrConnectWithoutStoreInput[]
    createMany?: StorePromotionCreateManyStoreInputEnvelope
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
  }

  export type UserViewStoreUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput> | UserViewStoreCreateWithoutStoreInput[] | UserViewStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserViewStoreCreateOrConnectWithoutStoreInput | UserViewStoreCreateOrConnectWithoutStoreInput[]
    createMany?: UserViewStoreCreateManyStoreInputEnvelope
    connect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput> | VoucherCreateWithoutStoreInput[] | VoucherUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutStoreInput | VoucherCreateOrConnectWithoutStoreInput[]
    createMany?: VoucherCreateManyStoreInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type RatingUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput> | RatingCreateWithoutStoreInput[] | RatingUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStoreInput | RatingCreateOrConnectWithoutStoreInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutStoreInput | RatingUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RatingCreateManyStoreInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutStoreInput | RatingUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutStoreInput | RatingUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type StorePromotionUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput> | StorePromotionCreateWithoutStoreInput[] | StorePromotionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutStoreInput | StorePromotionCreateOrConnectWithoutStoreInput[]
    upsert?: StorePromotionUpsertWithWhereUniqueWithoutStoreInput | StorePromotionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StorePromotionCreateManyStoreInputEnvelope
    set?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    disconnect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    delete?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    update?: StorePromotionUpdateWithWhereUniqueWithoutStoreInput | StorePromotionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StorePromotionUpdateManyWithWhereWithoutStoreInput | StorePromotionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
  }

  export type UserViewStoreUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput> | UserViewStoreCreateWithoutStoreInput[] | UserViewStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserViewStoreCreateOrConnectWithoutStoreInput | UserViewStoreCreateOrConnectWithoutStoreInput[]
    upsert?: UserViewStoreUpsertWithWhereUniqueWithoutStoreInput | UserViewStoreUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserViewStoreCreateManyStoreInputEnvelope
    set?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    disconnect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    delete?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    connect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    update?: UserViewStoreUpdateWithWhereUniqueWithoutStoreInput | UserViewStoreUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserViewStoreUpdateManyWithWhereWithoutStoreInput | UserViewStoreUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserViewStoreScalarWhereInput | UserViewStoreScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutStoreNestedInput = {
    create?: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput> | VoucherCreateWithoutStoreInput[] | VoucherUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutStoreInput | VoucherCreateOrConnectWithoutStoreInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutStoreInput | VoucherUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: VoucherCreateManyStoreInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutStoreInput | VoucherUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutStoreInput | VoucherUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput> | RatingCreateWithoutStoreInput[] | RatingUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutStoreInput | RatingCreateOrConnectWithoutStoreInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutStoreInput | RatingUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RatingCreateManyStoreInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutStoreInput | RatingUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutStoreInput | RatingUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type StorePromotionUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput> | StorePromotionCreateWithoutStoreInput[] | StorePromotionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StorePromotionCreateOrConnectWithoutStoreInput | StorePromotionCreateOrConnectWithoutStoreInput[]
    upsert?: StorePromotionUpsertWithWhereUniqueWithoutStoreInput | StorePromotionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StorePromotionCreateManyStoreInputEnvelope
    set?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    disconnect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    delete?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    connect?: StorePromotionWhereUniqueInput | StorePromotionWhereUniqueInput[]
    update?: StorePromotionUpdateWithWhereUniqueWithoutStoreInput | StorePromotionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StorePromotionUpdateManyWithWhereWithoutStoreInput | StorePromotionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
  }

  export type UserViewStoreUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput> | UserViewStoreCreateWithoutStoreInput[] | UserViewStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserViewStoreCreateOrConnectWithoutStoreInput | UserViewStoreCreateOrConnectWithoutStoreInput[]
    upsert?: UserViewStoreUpsertWithWhereUniqueWithoutStoreInput | UserViewStoreUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserViewStoreCreateManyStoreInputEnvelope
    set?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    disconnect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    delete?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    connect?: UserViewStoreWhereUniqueInput | UserViewStoreWhereUniqueInput[]
    update?: UserViewStoreUpdateWithWhereUniqueWithoutStoreInput | UserViewStoreUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserViewStoreUpdateManyWithWhereWithoutStoreInput | UserViewStoreUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserViewStoreScalarWhereInput | UserViewStoreScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput> | VoucherCreateWithoutStoreInput[] | VoucherUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutStoreInput | VoucherCreateOrConnectWithoutStoreInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutStoreInput | VoucherUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: VoucherCreateManyStoreInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutStoreInput | VoucherUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutStoreInput | VoucherUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type ProductPromotionCreateNestedManyWithoutStorePromotionInput = {
    create?: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput> | ProductPromotionCreateWithoutStorePromotionInput[] | ProductPromotionUncheckedCreateWithoutStorePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutStorePromotionInput | ProductPromotionCreateOrConnectWithoutStorePromotionInput[]
    createMany?: ProductPromotionCreateManyStorePromotionInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type StoreCreateNestedOneWithoutStorePromotionInput = {
    create?: XOR<StoreCreateWithoutStorePromotionInput, StoreUncheckedCreateWithoutStorePromotionInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStorePromotionInput
    connect?: StoreWhereUniqueInput
  }

  export type SalePromotionCreateNestedOneWithoutStorePromotionInput = {
    create?: XOR<SalePromotionCreateWithoutStorePromotionInput, SalePromotionUncheckedCreateWithoutStorePromotionInput>
    connectOrCreate?: SalePromotionCreateOrConnectWithoutStorePromotionInput
    connect?: SalePromotionWhereUniqueInput
  }

  export type ProductPromotionUncheckedCreateNestedManyWithoutStorePromotionInput = {
    create?: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput> | ProductPromotionCreateWithoutStorePromotionInput[] | ProductPromotionUncheckedCreateWithoutStorePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutStorePromotionInput | ProductPromotionCreateOrConnectWithoutStorePromotionInput[]
    createMany?: ProductPromotionCreateManyStorePromotionInputEnvelope
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
  }

  export type ProductPromotionUpdateManyWithoutStorePromotionNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput> | ProductPromotionCreateWithoutStorePromotionInput[] | ProductPromotionUncheckedCreateWithoutStorePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutStorePromotionInput | ProductPromotionCreateOrConnectWithoutStorePromotionInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutStorePromotionInput | ProductPromotionUpsertWithWhereUniqueWithoutStorePromotionInput[]
    createMany?: ProductPromotionCreateManyStorePromotionInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutStorePromotionInput | ProductPromotionUpdateWithWhereUniqueWithoutStorePromotionInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutStorePromotionInput | ProductPromotionUpdateManyWithWhereWithoutStorePromotionInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type StoreUpdateOneRequiredWithoutStorePromotionNestedInput = {
    create?: XOR<StoreCreateWithoutStorePromotionInput, StoreUncheckedCreateWithoutStorePromotionInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStorePromotionInput
    upsert?: StoreUpsertWithoutStorePromotionInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStorePromotionInput, StoreUpdateWithoutStorePromotionInput>, StoreUncheckedUpdateWithoutStorePromotionInput>
  }

  export type SalePromotionUpdateOneRequiredWithoutStorePromotionNestedInput = {
    create?: XOR<SalePromotionCreateWithoutStorePromotionInput, SalePromotionUncheckedCreateWithoutStorePromotionInput>
    connectOrCreate?: SalePromotionCreateOrConnectWithoutStorePromotionInput
    upsert?: SalePromotionUpsertWithoutStorePromotionInput
    connect?: SalePromotionWhereUniqueInput
    update?: XOR<XOR<SalePromotionUpdateToOneWithWhereWithoutStorePromotionInput, SalePromotionUpdateWithoutStorePromotionInput>, SalePromotionUncheckedUpdateWithoutStorePromotionInput>
  }

  export type ProductPromotionUncheckedUpdateManyWithoutStorePromotionNestedInput = {
    create?: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput> | ProductPromotionCreateWithoutStorePromotionInput[] | ProductPromotionUncheckedCreateWithoutStorePromotionInput[]
    connectOrCreate?: ProductPromotionCreateOrConnectWithoutStorePromotionInput | ProductPromotionCreateOrConnectWithoutStorePromotionInput[]
    upsert?: ProductPromotionUpsertWithWhereUniqueWithoutStorePromotionInput | ProductPromotionUpsertWithWhereUniqueWithoutStorePromotionInput[]
    createMany?: ProductPromotionCreateManyStorePromotionInputEnvelope
    set?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    disconnect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    delete?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    connect?: ProductPromotionWhereUniqueInput | ProductPromotionWhereUniqueInput[]
    update?: ProductPromotionUpdateWithWhereUniqueWithoutStorePromotionInput | ProductPromotionUpdateWithWhereUniqueWithoutStorePromotionInput[]
    updateMany?: ProductPromotionUpdateManyWithWhereWithoutStorePromotionInput | ProductPromotionUpdateManyWithWhereWithoutStorePromotionInput[]
    deleteMany?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutUserViewStoreInput = {
    create?: XOR<StoreCreateWithoutUserViewStoreInput, StoreUncheckedCreateWithoutUserViewStoreInput>
    connectOrCreate?: StoreCreateOrConnectWithoutUserViewStoreInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutUserViewStoreNestedInput = {
    create?: XOR<StoreCreateWithoutUserViewStoreInput, StoreUncheckedCreateWithoutUserViewStoreInput>
    connectOrCreate?: StoreCreateOrConnectWithoutUserViewStoreInput
    upsert?: StoreUpsertWithoutUserViewStoreInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutUserViewStoreInput, StoreUpdateWithoutUserViewStoreInput>, StoreUncheckedUpdateWithoutUserViewStoreInput>
  }

  export type StoreCreateNestedOneWithoutRatingInput = {
    create?: XOR<StoreCreateWithoutRatingInput, StoreUncheckedCreateWithoutRatingInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRatingInput
    connect?: StoreWhereUniqueInput
  }

  export type RatingReplyCreateNestedManyWithoutRatingInput = {
    create?: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput> | RatingReplyCreateWithoutRatingInput[] | RatingReplyUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: RatingReplyCreateOrConnectWithoutRatingInput | RatingReplyCreateOrConnectWithoutRatingInput[]
    createMany?: RatingReplyCreateManyRatingInputEnvelope
    connect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
  }

  export type RatingReplyUncheckedCreateNestedManyWithoutRatingInput = {
    create?: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput> | RatingReplyCreateWithoutRatingInput[] | RatingReplyUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: RatingReplyCreateOrConnectWithoutRatingInput | RatingReplyCreateOrConnectWithoutRatingInput[]
    createMany?: RatingReplyCreateManyRatingInputEnvelope
    connect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StoreUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<StoreCreateWithoutRatingInput, StoreUncheckedCreateWithoutRatingInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRatingInput
    upsert?: StoreUpsertWithoutRatingInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutRatingInput, StoreUpdateWithoutRatingInput>, StoreUncheckedUpdateWithoutRatingInput>
  }

  export type RatingReplyUpdateManyWithoutRatingNestedInput = {
    create?: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput> | RatingReplyCreateWithoutRatingInput[] | RatingReplyUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: RatingReplyCreateOrConnectWithoutRatingInput | RatingReplyCreateOrConnectWithoutRatingInput[]
    upsert?: RatingReplyUpsertWithWhereUniqueWithoutRatingInput | RatingReplyUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: RatingReplyCreateManyRatingInputEnvelope
    set?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    disconnect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    delete?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    connect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    update?: RatingReplyUpdateWithWhereUniqueWithoutRatingInput | RatingReplyUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: RatingReplyUpdateManyWithWhereWithoutRatingInput | RatingReplyUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: RatingReplyScalarWhereInput | RatingReplyScalarWhereInput[]
  }

  export type RatingReplyUncheckedUpdateManyWithoutRatingNestedInput = {
    create?: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput> | RatingReplyCreateWithoutRatingInput[] | RatingReplyUncheckedCreateWithoutRatingInput[]
    connectOrCreate?: RatingReplyCreateOrConnectWithoutRatingInput | RatingReplyCreateOrConnectWithoutRatingInput[]
    upsert?: RatingReplyUpsertWithWhereUniqueWithoutRatingInput | RatingReplyUpsertWithWhereUniqueWithoutRatingInput[]
    createMany?: RatingReplyCreateManyRatingInputEnvelope
    set?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    disconnect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    delete?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    connect?: RatingReplyWhereUniqueInput | RatingReplyWhereUniqueInput[]
    update?: RatingReplyUpdateWithWhereUniqueWithoutRatingInput | RatingReplyUpdateWithWhereUniqueWithoutRatingInput[]
    updateMany?: RatingReplyUpdateManyWithWhereWithoutRatingInput | RatingReplyUpdateManyWithWhereWithoutRatingInput[]
    deleteMany?: RatingReplyScalarWhereInput | RatingReplyScalarWhereInput[]
  }

  export type RatingCreateNestedOneWithoutRatingReplyInput = {
    create?: XOR<RatingCreateWithoutRatingReplyInput, RatingUncheckedCreateWithoutRatingReplyInput>
    connectOrCreate?: RatingCreateOrConnectWithoutRatingReplyInput
    connect?: RatingWhereUniqueInput
  }

  export type RatingUpdateOneRequiredWithoutRatingReplyNestedInput = {
    create?: XOR<RatingCreateWithoutRatingReplyInput, RatingUncheckedCreateWithoutRatingReplyInput>
    connectOrCreate?: RatingCreateOrConnectWithoutRatingReplyInput
    upsert?: RatingUpsertWithoutRatingReplyInput
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutRatingReplyInput, RatingUpdateWithoutRatingReplyInput>, RatingUncheckedUpdateWithoutRatingReplyInput>
  }

  export type StoreCreateNestedOneWithoutVoucherInput = {
    create?: XOR<StoreCreateWithoutVoucherInput, StoreUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: StoreCreateOrConnectWithoutVoucherInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryConditionVoucherCreateNestedOneWithoutVoucherInput = {
    create?: XOR<CategoryConditionVoucherCreateWithoutVoucherInput, CategoryConditionVoucherUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: CategoryConditionVoucherCreateOrConnectWithoutVoucherInput
    connect?: CategoryConditionVoucherWhereUniqueInput
  }

  export type PriceConditionVoucherCreateNestedOneWithoutVoucherInput = {
    create?: XOR<PriceConditionVoucherCreateWithoutVoucherInput, PriceConditionVoucherUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: PriceConditionVoucherCreateOrConnectWithoutVoucherInput
    connect?: PriceConditionVoucherWhereUniqueInput
  }

  export type StoreUpdateOneWithoutVoucherNestedInput = {
    create?: XOR<StoreCreateWithoutVoucherInput, StoreUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: StoreCreateOrConnectWithoutVoucherInput
    upsert?: StoreUpsertWithoutVoucherInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutVoucherInput, StoreUpdateWithoutVoucherInput>, StoreUncheckedUpdateWithoutVoucherInput>
  }

  export type CategoryConditionVoucherUpdateOneWithoutVoucherNestedInput = {
    create?: XOR<CategoryConditionVoucherCreateWithoutVoucherInput, CategoryConditionVoucherUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: CategoryConditionVoucherCreateOrConnectWithoutVoucherInput
    upsert?: CategoryConditionVoucherUpsertWithoutVoucherInput
    disconnect?: CategoryConditionVoucherWhereInput | boolean
    delete?: CategoryConditionVoucherWhereInput | boolean
    connect?: CategoryConditionVoucherWhereUniqueInput
    update?: XOR<XOR<CategoryConditionVoucherUpdateToOneWithWhereWithoutVoucherInput, CategoryConditionVoucherUpdateWithoutVoucherInput>, CategoryConditionVoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type PriceConditionVoucherUpdateOneWithoutVoucherNestedInput = {
    create?: XOR<PriceConditionVoucherCreateWithoutVoucherInput, PriceConditionVoucherUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: PriceConditionVoucherCreateOrConnectWithoutVoucherInput
    upsert?: PriceConditionVoucherUpsertWithoutVoucherInput
    disconnect?: PriceConditionVoucherWhereInput | boolean
    delete?: PriceConditionVoucherWhereInput | boolean
    connect?: PriceConditionVoucherWhereUniqueInput
    update?: XOR<XOR<PriceConditionVoucherUpdateToOneWithWhereWithoutVoucherInput, PriceConditionVoucherUpdateWithoutVoucherInput>, PriceConditionVoucherUncheckedUpdateWithoutVoucherInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type VoucherCreateWithoutCategoryConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    Store?: StoreCreateNestedOneWithoutVoucherInput
    PriceConditionVoucher?: PriceConditionVoucherCreateNestedOneWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutCategoryConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    priceConditionId?: string | null
  }

  export type VoucherCreateOrConnectWithoutCategoryConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput>
  }

  export type VoucherCreateManyCategoryConditionVoucherInputEnvelope = {
    data: VoucherCreateManyCategoryConditionVoucherInput | VoucherCreateManyCategoryConditionVoucherInput[]
    skipDuplicates?: boolean
  }

  export type VoucherUpsertWithWhereUniqueWithoutCategoryConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutCategoryConditionVoucherInput, VoucherUncheckedUpdateWithoutCategoryConditionVoucherInput>
    create: XOR<VoucherCreateWithoutCategoryConditionVoucherInput, VoucherUncheckedCreateWithoutCategoryConditionVoucherInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutCategoryConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutCategoryConditionVoucherInput, VoucherUncheckedUpdateWithoutCategoryConditionVoucherInput>
  }

  export type VoucherUpdateManyWithWhereWithoutCategoryConditionVoucherInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutCategoryConditionVoucherInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    title?: StringFilter<"Voucher"> | string
    description?: StringNullableFilter<"Voucher"> | string | null
    initQuantity?: IntFilter<"Voucher"> | number
    currentQuantity?: IntFilter<"Voucher"> | number
    status?: StringFilter<"Voucher"> | string
    type?: StringFilter<"Voucher"> | string
    storeId?: StringNullableFilter<"Voucher"> | string | null
    percent?: FloatNullableFilter<"Voucher"> | number | null
    maximum?: IntNullableFilter<"Voucher"> | number | null
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    createdBy?: StringFilter<"Voucher"> | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedBy?: StringNullableFilter<"Voucher"> | string | null
    updatedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    categoryConditionId?: StringNullableFilter<"Voucher"> | string | null
    priceConditionId?: StringNullableFilter<"Voucher"> | string | null
  }

  export type VoucherCreateWithoutPriceConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    Store?: StoreCreateNestedOneWithoutVoucherInput
    CategoryConditionVoucher?: CategoryConditionVoucherCreateNestedOneWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutPriceConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
  }

  export type VoucherCreateOrConnectWithoutPriceConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput>
  }

  export type VoucherCreateManyPriceConditionVoucherInputEnvelope = {
    data: VoucherCreateManyPriceConditionVoucherInput | VoucherCreateManyPriceConditionVoucherInput[]
    skipDuplicates?: boolean
  }

  export type VoucherUpsertWithWhereUniqueWithoutPriceConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutPriceConditionVoucherInput, VoucherUncheckedUpdateWithoutPriceConditionVoucherInput>
    create: XOR<VoucherCreateWithoutPriceConditionVoucherInput, VoucherUncheckedCreateWithoutPriceConditionVoucherInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutPriceConditionVoucherInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutPriceConditionVoucherInput, VoucherUncheckedUpdateWithoutPriceConditionVoucherInput>
  }

  export type VoucherUpdateManyWithWhereWithoutPriceConditionVoucherInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutPriceConditionVoucherInput>
  }

  export type StorePromotionCreateWithoutProductPromotionInput = {
    id: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    Store: StoreCreateNestedOneWithoutStorePromotionInput
    SalePromotion: SalePromotionCreateNestedOneWithoutStorePromotionInput
  }

  export type StorePromotionUncheckedCreateWithoutProductPromotionInput = {
    id: string
    salePromotionId: string
    storeId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type StorePromotionCreateOrConnectWithoutProductPromotionInput = {
    where: StorePromotionWhereUniqueInput
    create: XOR<StorePromotionCreateWithoutProductPromotionInput, StorePromotionUncheckedCreateWithoutProductPromotionInput>
  }

  export type SalePromotionCreateWithoutProductPromotionInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    StorePromotion?: StorePromotionCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionUncheckedCreateWithoutProductPromotionInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionCreateOrConnectWithoutProductPromotionInput = {
    where: SalePromotionWhereUniqueInput
    create: XOR<SalePromotionCreateWithoutProductPromotionInput, SalePromotionUncheckedCreateWithoutProductPromotionInput>
  }

  export type StorePromotionUpsertWithoutProductPromotionInput = {
    update: XOR<StorePromotionUpdateWithoutProductPromotionInput, StorePromotionUncheckedUpdateWithoutProductPromotionInput>
    create: XOR<StorePromotionCreateWithoutProductPromotionInput, StorePromotionUncheckedCreateWithoutProductPromotionInput>
    where?: StorePromotionWhereInput
  }

  export type StorePromotionUpdateToOneWithWhereWithoutProductPromotionInput = {
    where?: StorePromotionWhereInput
    data: XOR<StorePromotionUpdateWithoutProductPromotionInput, StorePromotionUncheckedUpdateWithoutProductPromotionInput>
  }

  export type StorePromotionUpdateWithoutProductPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Store?: StoreUpdateOneRequiredWithoutStorePromotionNestedInput
    SalePromotion?: SalePromotionUpdateOneRequiredWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateWithoutProductPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalePromotionUpsertWithoutProductPromotionInput = {
    update: XOR<SalePromotionUpdateWithoutProductPromotionInput, SalePromotionUncheckedUpdateWithoutProductPromotionInput>
    create: XOR<SalePromotionCreateWithoutProductPromotionInput, SalePromotionUncheckedCreateWithoutProductPromotionInput>
    where?: SalePromotionWhereInput
  }

  export type SalePromotionUpdateToOneWithWhereWithoutProductPromotionInput = {
    where?: SalePromotionWhereInput
    data: XOR<SalePromotionUpdateWithoutProductPromotionInput, SalePromotionUncheckedUpdateWithoutProductPromotionInput>
  }

  export type SalePromotionUpdateWithoutProductPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    StorePromotion?: StorePromotionUpdateManyWithoutSalePromotionNestedInput
  }

  export type SalePromotionUncheckedUpdateWithoutProductPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutSalePromotionNestedInput
  }

  export type ProductPromotionCreateWithoutSalePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    StorePromotion: StorePromotionCreateNestedOneWithoutProductPromotionInput
  }

  export type ProductPromotionUncheckedCreateWithoutSalePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    storePromotionId: string
  }

  export type ProductPromotionCreateOrConnectWithoutSalePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    create: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput>
  }

  export type ProductPromotionCreateManySalePromotionInputEnvelope = {
    data: ProductPromotionCreateManySalePromotionInput | ProductPromotionCreateManySalePromotionInput[]
    skipDuplicates?: boolean
  }

  export type StorePromotionCreateWithoutSalePromotionInput = {
    id: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionCreateNestedManyWithoutStorePromotionInput
    Store: StoreCreateNestedOneWithoutStorePromotionInput
  }

  export type StorePromotionUncheckedCreateWithoutSalePromotionInput = {
    id: string
    storeId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionUncheckedCreateNestedManyWithoutStorePromotionInput
  }

  export type StorePromotionCreateOrConnectWithoutSalePromotionInput = {
    where: StorePromotionWhereUniqueInput
    create: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput>
  }

  export type StorePromotionCreateManySalePromotionInputEnvelope = {
    data: StorePromotionCreateManySalePromotionInput | StorePromotionCreateManySalePromotionInput[]
    skipDuplicates?: boolean
  }

  export type ProductPromotionUpsertWithWhereUniqueWithoutSalePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    update: XOR<ProductPromotionUpdateWithoutSalePromotionInput, ProductPromotionUncheckedUpdateWithoutSalePromotionInput>
    create: XOR<ProductPromotionCreateWithoutSalePromotionInput, ProductPromotionUncheckedCreateWithoutSalePromotionInput>
  }

  export type ProductPromotionUpdateWithWhereUniqueWithoutSalePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    data: XOR<ProductPromotionUpdateWithoutSalePromotionInput, ProductPromotionUncheckedUpdateWithoutSalePromotionInput>
  }

  export type ProductPromotionUpdateManyWithWhereWithoutSalePromotionInput = {
    where: ProductPromotionScalarWhereInput
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyWithoutSalePromotionInput>
  }

  export type ProductPromotionScalarWhereInput = {
    AND?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
    OR?: ProductPromotionScalarWhereInput[]
    NOT?: ProductPromotionScalarWhereInput | ProductPromotionScalarWhereInput[]
    id?: StringFilter<"ProductPromotion"> | string
    productId?: StringFilter<"ProductPromotion"> | string
    name?: StringFilter<"ProductPromotion"> | string
    image?: StringFilter<"ProductPromotion"> | string
    category?: StringFilter<"ProductPromotion"> | string
    quantity?: IntFilter<"ProductPromotion"> | number
    currentQuantity?: IntFilter<"ProductPromotion"> | number
    bought?: IntNullableFilter<"ProductPromotion"> | number | null
    priceAfter?: FloatFilter<"ProductPromotion"> | number
    isDelete?: BoolFilter<"ProductPromotion"> | boolean
    createdAt?: DateTimeFilter<"ProductPromotion"> | Date | string
    createdBy?: StringFilter<"ProductPromotion"> | string
    updatedAt?: DateTimeNullableFilter<"ProductPromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"ProductPromotion"> | string | null
    storePromotionId?: StringFilter<"ProductPromotion"> | string
    salePromotionId?: StringFilter<"ProductPromotion"> | string
  }

  export type StorePromotionUpsertWithWhereUniqueWithoutSalePromotionInput = {
    where: StorePromotionWhereUniqueInput
    update: XOR<StorePromotionUpdateWithoutSalePromotionInput, StorePromotionUncheckedUpdateWithoutSalePromotionInput>
    create: XOR<StorePromotionCreateWithoutSalePromotionInput, StorePromotionUncheckedCreateWithoutSalePromotionInput>
  }

  export type StorePromotionUpdateWithWhereUniqueWithoutSalePromotionInput = {
    where: StorePromotionWhereUniqueInput
    data: XOR<StorePromotionUpdateWithoutSalePromotionInput, StorePromotionUncheckedUpdateWithoutSalePromotionInput>
  }

  export type StorePromotionUpdateManyWithWhereWithoutSalePromotionInput = {
    where: StorePromotionScalarWhereInput
    data: XOR<StorePromotionUpdateManyMutationInput, StorePromotionUncheckedUpdateManyWithoutSalePromotionInput>
  }

  export type StorePromotionScalarWhereInput = {
    AND?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
    OR?: StorePromotionScalarWhereInput[]
    NOT?: StorePromotionScalarWhereInput | StorePromotionScalarWhereInput[]
    id?: StringFilter<"StorePromotion"> | string
    salePromotionId?: StringFilter<"StorePromotion"> | string
    storeId?: StringFilter<"StorePromotion"> | string
    status?: StringFilter<"StorePromotion"> | string
    createdAt?: DateTimeFilter<"StorePromotion"> | Date | string
    createdBy?: StringFilter<"StorePromotion"> | string
    updatedAt?: DateTimeNullableFilter<"StorePromotion"> | Date | string | null
    updatedBy?: StringNullableFilter<"StorePromotion"> | string | null
  }

  export type RatingCreateWithoutStoreInput = {
    id: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    RatingReply?: RatingReplyCreateNestedManyWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutStoreInput = {
    id: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    RatingReply?: RatingReplyUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingCreateOrConnectWithoutStoreInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput>
  }

  export type RatingCreateManyStoreInputEnvelope = {
    data: RatingCreateManyStoreInput | RatingCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StorePromotionCreateWithoutStoreInput = {
    id: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionCreateNestedManyWithoutStorePromotionInput
    SalePromotion: SalePromotionCreateNestedOneWithoutStorePromotionInput
  }

  export type StorePromotionUncheckedCreateWithoutStoreInput = {
    id: string
    salePromotionId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionUncheckedCreateNestedManyWithoutStorePromotionInput
  }

  export type StorePromotionCreateOrConnectWithoutStoreInput = {
    where: StorePromotionWhereUniqueInput
    create: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput>
  }

  export type StorePromotionCreateManyStoreInputEnvelope = {
    data: StorePromotionCreateManyStoreInput | StorePromotionCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserViewStoreCreateWithoutStoreInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string | null
  }

  export type UserViewStoreUncheckedCreateWithoutStoreInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string | null
  }

  export type UserViewStoreCreateOrConnectWithoutStoreInput = {
    where: UserViewStoreWhereUniqueInput
    create: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput>
  }

  export type UserViewStoreCreateManyStoreInputEnvelope = {
    data: UserViewStoreCreateManyStoreInput | UserViewStoreCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutStoreInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    CategoryConditionVoucher?: CategoryConditionVoucherCreateNestedOneWithoutVoucherInput
    PriceConditionVoucher?: PriceConditionVoucherCreateNestedOneWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutStoreInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
    priceConditionId?: string | null
  }

  export type VoucherCreateOrConnectWithoutStoreInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput>
  }

  export type VoucherCreateManyStoreInputEnvelope = {
    data: VoucherCreateManyStoreInput | VoucherCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type RatingUpsertWithWhereUniqueWithoutStoreInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutStoreInput, RatingUncheckedUpdateWithoutStoreInput>
    create: XOR<RatingCreateWithoutStoreInput, RatingUncheckedCreateWithoutStoreInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutStoreInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutStoreInput, RatingUncheckedUpdateWithoutStoreInput>
  }

  export type RatingUpdateManyWithWhereWithoutStoreInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutStoreInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    storeId?: StringFilter<"Rating"> | string
    orderId?: StringFilter<"Rating"> | string
    stars?: FloatFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    isReply?: BoolNullableFilter<"Rating"> | boolean | null
    createdBy?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedBy?: StringNullableFilter<"Rating"> | string | null
    updatedAt?: DateTimeNullableFilter<"Rating"> | Date | string | null
  }

  export type StorePromotionUpsertWithWhereUniqueWithoutStoreInput = {
    where: StorePromotionWhereUniqueInput
    update: XOR<StorePromotionUpdateWithoutStoreInput, StorePromotionUncheckedUpdateWithoutStoreInput>
    create: XOR<StorePromotionCreateWithoutStoreInput, StorePromotionUncheckedCreateWithoutStoreInput>
  }

  export type StorePromotionUpdateWithWhereUniqueWithoutStoreInput = {
    where: StorePromotionWhereUniqueInput
    data: XOR<StorePromotionUpdateWithoutStoreInput, StorePromotionUncheckedUpdateWithoutStoreInput>
  }

  export type StorePromotionUpdateManyWithWhereWithoutStoreInput = {
    where: StorePromotionScalarWhereInput
    data: XOR<StorePromotionUpdateManyMutationInput, StorePromotionUncheckedUpdateManyWithoutStoreInput>
  }

  export type UserViewStoreUpsertWithWhereUniqueWithoutStoreInput = {
    where: UserViewStoreWhereUniqueInput
    update: XOR<UserViewStoreUpdateWithoutStoreInput, UserViewStoreUncheckedUpdateWithoutStoreInput>
    create: XOR<UserViewStoreCreateWithoutStoreInput, UserViewStoreUncheckedCreateWithoutStoreInput>
  }

  export type UserViewStoreUpdateWithWhereUniqueWithoutStoreInput = {
    where: UserViewStoreWhereUniqueInput
    data: XOR<UserViewStoreUpdateWithoutStoreInput, UserViewStoreUncheckedUpdateWithoutStoreInput>
  }

  export type UserViewStoreUpdateManyWithWhereWithoutStoreInput = {
    where: UserViewStoreScalarWhereInput
    data: XOR<UserViewStoreUpdateManyMutationInput, UserViewStoreUncheckedUpdateManyWithoutStoreInput>
  }

  export type UserViewStoreScalarWhereInput = {
    AND?: UserViewStoreScalarWhereInput | UserViewStoreScalarWhereInput[]
    OR?: UserViewStoreScalarWhereInput[]
    NOT?: UserViewStoreScalarWhereInput | UserViewStoreScalarWhereInput[]
    id?: StringFilter<"UserViewStore"> | string
    storeId?: StringFilter<"UserViewStore"> | string
    userId?: StringNullableFilter<"UserViewStore"> | string | null
    createdAt?: DateTimeNullableFilter<"UserViewStore"> | Date | string | null
  }

  export type VoucherUpsertWithWhereUniqueWithoutStoreInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutStoreInput, VoucherUncheckedUpdateWithoutStoreInput>
    create: XOR<VoucherCreateWithoutStoreInput, VoucherUncheckedCreateWithoutStoreInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutStoreInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutStoreInput, VoucherUncheckedUpdateWithoutStoreInput>
  }

  export type VoucherUpdateManyWithWhereWithoutStoreInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutStoreInput>
  }

  export type ProductPromotionCreateWithoutStorePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    SalePromotion: SalePromotionCreateNestedOneWithoutProductPromotionInput
  }

  export type ProductPromotionUncheckedCreateWithoutStorePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    salePromotionId: string
  }

  export type ProductPromotionCreateOrConnectWithoutStorePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    create: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput>
  }

  export type ProductPromotionCreateManyStorePromotionInputEnvelope = {
    data: ProductPromotionCreateManyStorePromotionInput | ProductPromotionCreateManyStorePromotionInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutStorePromotionInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreCreateNestedManyWithoutStoreInput
    Voucher?: VoucherCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutStorePromotionInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingUncheckedCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreUncheckedCreateNestedManyWithoutStoreInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStorePromotionInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStorePromotionInput, StoreUncheckedCreateWithoutStorePromotionInput>
  }

  export type SalePromotionCreateWithoutStorePromotionInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionUncheckedCreateWithoutStorePromotionInput = {
    id: string
    title: string
    description?: string | null
    type: string
    categoryId?: string | null
    status: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    ProductPromotion?: ProductPromotionUncheckedCreateNestedManyWithoutSalePromotionInput
  }

  export type SalePromotionCreateOrConnectWithoutStorePromotionInput = {
    where: SalePromotionWhereUniqueInput
    create: XOR<SalePromotionCreateWithoutStorePromotionInput, SalePromotionUncheckedCreateWithoutStorePromotionInput>
  }

  export type ProductPromotionUpsertWithWhereUniqueWithoutStorePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    update: XOR<ProductPromotionUpdateWithoutStorePromotionInput, ProductPromotionUncheckedUpdateWithoutStorePromotionInput>
    create: XOR<ProductPromotionCreateWithoutStorePromotionInput, ProductPromotionUncheckedCreateWithoutStorePromotionInput>
  }

  export type ProductPromotionUpdateWithWhereUniqueWithoutStorePromotionInput = {
    where: ProductPromotionWhereUniqueInput
    data: XOR<ProductPromotionUpdateWithoutStorePromotionInput, ProductPromotionUncheckedUpdateWithoutStorePromotionInput>
  }

  export type ProductPromotionUpdateManyWithWhereWithoutStorePromotionInput = {
    where: ProductPromotionScalarWhereInput
    data: XOR<ProductPromotionUpdateManyMutationInput, ProductPromotionUncheckedUpdateManyWithoutStorePromotionInput>
  }

  export type StoreUpsertWithoutStorePromotionInput = {
    update: XOR<StoreUpdateWithoutStorePromotionInput, StoreUncheckedUpdateWithoutStorePromotionInput>
    create: XOR<StoreCreateWithoutStorePromotionInput, StoreUncheckedCreateWithoutStorePromotionInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStorePromotionInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStorePromotionInput, StoreUncheckedUpdateWithoutStorePromotionInput>
  }

  export type StoreUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUncheckedUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUncheckedUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type SalePromotionUpsertWithoutStorePromotionInput = {
    update: XOR<SalePromotionUpdateWithoutStorePromotionInput, SalePromotionUncheckedUpdateWithoutStorePromotionInput>
    create: XOR<SalePromotionCreateWithoutStorePromotionInput, SalePromotionUncheckedCreateWithoutStorePromotionInput>
    where?: SalePromotionWhereInput
  }

  export type SalePromotionUpdateToOneWithWhereWithoutStorePromotionInput = {
    where?: SalePromotionWhereInput
    data: XOR<SalePromotionUpdateWithoutStorePromotionInput, SalePromotionUncheckedUpdateWithoutStorePromotionInput>
  }

  export type SalePromotionUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUpdateManyWithoutSalePromotionNestedInput
  }

  export type SalePromotionUncheckedUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUncheckedUpdateManyWithoutSalePromotionNestedInput
  }

  export type StoreCreateWithoutUserViewStoreInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionCreateNestedManyWithoutStoreInput
    Voucher?: VoucherCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutUserViewStoreInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingUncheckedCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutStoreInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutUserViewStoreInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserViewStoreInput, StoreUncheckedCreateWithoutUserViewStoreInput>
  }

  export type StoreUpsertWithoutUserViewStoreInput = {
    update: XOR<StoreUpdateWithoutUserViewStoreInput, StoreUncheckedUpdateWithoutUserViewStoreInput>
    create: XOR<StoreCreateWithoutUserViewStoreInput, StoreUncheckedCreateWithoutUserViewStoreInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutUserViewStoreInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutUserViewStoreInput, StoreUncheckedUpdateWithoutUserViewStoreInput>
  }

  export type StoreUpdateWithoutUserViewStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutUserViewStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUncheckedUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutRatingInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    StorePromotion?: StorePromotionCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreCreateNestedManyWithoutStoreInput
    Voucher?: VoucherCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutRatingInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreUncheckedCreateNestedManyWithoutStoreInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutRatingInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutRatingInput, StoreUncheckedCreateWithoutRatingInput>
  }

  export type RatingReplyCreateWithoutRatingInput = {
    id: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type RatingReplyUncheckedCreateWithoutRatingInput = {
    id: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type RatingReplyCreateOrConnectWithoutRatingInput = {
    where: RatingReplyWhereUniqueInput
    create: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput>
  }

  export type RatingReplyCreateManyRatingInputEnvelope = {
    data: RatingReplyCreateManyRatingInput | RatingReplyCreateManyRatingInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutRatingInput = {
    update: XOR<StoreUpdateWithoutRatingInput, StoreUncheckedUpdateWithoutRatingInput>
    create: XOR<StoreCreateWithoutRatingInput, StoreUncheckedCreateWithoutRatingInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutRatingInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutRatingInput, StoreUncheckedUpdateWithoutRatingInput>
  }

  export type StoreUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StorePromotion?: StorePromotionUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUncheckedUpdateManyWithoutStoreNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type RatingReplyUpsertWithWhereUniqueWithoutRatingInput = {
    where: RatingReplyWhereUniqueInput
    update: XOR<RatingReplyUpdateWithoutRatingInput, RatingReplyUncheckedUpdateWithoutRatingInput>
    create: XOR<RatingReplyCreateWithoutRatingInput, RatingReplyUncheckedCreateWithoutRatingInput>
  }

  export type RatingReplyUpdateWithWhereUniqueWithoutRatingInput = {
    where: RatingReplyWhereUniqueInput
    data: XOR<RatingReplyUpdateWithoutRatingInput, RatingReplyUncheckedUpdateWithoutRatingInput>
  }

  export type RatingReplyUpdateManyWithWhereWithoutRatingInput = {
    where: RatingReplyScalarWhereInput
    data: XOR<RatingReplyUpdateManyMutationInput, RatingReplyUncheckedUpdateManyWithoutRatingInput>
  }

  export type RatingReplyScalarWhereInput = {
    AND?: RatingReplyScalarWhereInput | RatingReplyScalarWhereInput[]
    OR?: RatingReplyScalarWhereInput[]
    NOT?: RatingReplyScalarWhereInput | RatingReplyScalarWhereInput[]
    id?: StringFilter<"RatingReply"> | string
    parentRatingId?: StringFilter<"RatingReply"> | string
    detail?: StringFilter<"RatingReply"> | string
    createdAt?: DateTimeFilter<"RatingReply"> | Date | string
    createdBy?: StringFilter<"RatingReply"> | string
    updatedAt?: DateTimeNullableFilter<"RatingReply"> | Date | string | null
    updatedBy?: StringNullableFilter<"RatingReply"> | string | null
  }

  export type RatingCreateWithoutRatingReplyInput = {
    id: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    Store: StoreCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutRatingReplyInput = {
    id: string
    storeId: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
  }

  export type RatingCreateOrConnectWithoutRatingReplyInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutRatingReplyInput, RatingUncheckedCreateWithoutRatingReplyInput>
  }

  export type RatingUpsertWithoutRatingReplyInput = {
    update: XOR<RatingUpdateWithoutRatingReplyInput, RatingUncheckedUpdateWithoutRatingReplyInput>
    create: XOR<RatingCreateWithoutRatingReplyInput, RatingUncheckedCreateWithoutRatingReplyInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutRatingReplyInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutRatingReplyInput, RatingUncheckedUpdateWithoutRatingReplyInput>
  }

  export type RatingUpdateWithoutRatingReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutRatingReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreCreateWithoutVoucherInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutVoucherInput = {
    id: string
    name: string
    image: string
    location?: string | null
    description?: string | null
    status: string
    tax?: string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Rating?: RatingUncheckedCreateNestedManyWithoutStoreInput
    StorePromotion?: StorePromotionUncheckedCreateNestedManyWithoutStoreInput
    UserViewStore?: UserViewStoreUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutVoucherInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutVoucherInput, StoreUncheckedCreateWithoutVoucherInput>
  }

  export type CategoryConditionVoucherCreateWithoutVoucherInput = {
    id: string
    categoryShortName: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type CategoryConditionVoucherUncheckedCreateWithoutVoucherInput = {
    id: string
    categoryShortName: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type CategoryConditionVoucherCreateOrConnectWithoutVoucherInput = {
    where: CategoryConditionVoucherWhereUniqueInput
    create: XOR<CategoryConditionVoucherCreateWithoutVoucherInput, CategoryConditionVoucherUncheckedCreateWithoutVoucherInput>
  }

  export type PriceConditionVoucherCreateWithoutVoucherInput = {
    id: string
    totalMin?: number | null
    totalMax?: number | null
    priceMin?: number | null
    priceMax?: number | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PriceConditionVoucherUncheckedCreateWithoutVoucherInput = {
    id: string
    totalMin?: number | null
    totalMax?: number | null
    priceMin?: number | null
    priceMax?: number | null
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type PriceConditionVoucherCreateOrConnectWithoutVoucherInput = {
    where: PriceConditionVoucherWhereUniqueInput
    create: XOR<PriceConditionVoucherCreateWithoutVoucherInput, PriceConditionVoucherUncheckedCreateWithoutVoucherInput>
  }

  export type StoreUpsertWithoutVoucherInput = {
    update: XOR<StoreUpdateWithoutVoucherInput, StoreUncheckedUpdateWithoutVoucherInput>
    create: XOR<StoreCreateWithoutVoucherInput, StoreUncheckedCreateWithoutVoucherInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutVoucherInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutVoucherInput, StoreUncheckedUpdateWithoutVoucherInput>
  }

  export type StoreUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rating?: RatingUncheckedUpdateManyWithoutStoreNestedInput
    StorePromotion?: StorePromotionUncheckedUpdateManyWithoutStoreNestedInput
    UserViewStore?: UserViewStoreUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryConditionVoucherUpsertWithoutVoucherInput = {
    update: XOR<CategoryConditionVoucherUpdateWithoutVoucherInput, CategoryConditionVoucherUncheckedUpdateWithoutVoucherInput>
    create: XOR<CategoryConditionVoucherCreateWithoutVoucherInput, CategoryConditionVoucherUncheckedCreateWithoutVoucherInput>
    where?: CategoryConditionVoucherWhereInput
  }

  export type CategoryConditionVoucherUpdateToOneWithWhereWithoutVoucherInput = {
    where?: CategoryConditionVoucherWhereInput
    data: XOR<CategoryConditionVoucherUpdateWithoutVoucherInput, CategoryConditionVoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type CategoryConditionVoucherUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryConditionVoucherUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryShortName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceConditionVoucherUpsertWithoutVoucherInput = {
    update: XOR<PriceConditionVoucherUpdateWithoutVoucherInput, PriceConditionVoucherUncheckedUpdateWithoutVoucherInput>
    create: XOR<PriceConditionVoucherCreateWithoutVoucherInput, PriceConditionVoucherUncheckedCreateWithoutVoucherInput>
    where?: PriceConditionVoucherWhereInput
  }

  export type PriceConditionVoucherUpdateToOneWithWhereWithoutVoucherInput = {
    where?: PriceConditionVoucherWhereInput
    data: XOR<PriceConditionVoucherUpdateWithoutVoucherInput, PriceConditionVoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type PriceConditionVoucherUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceConditionVoucherUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMin?: NullableFloatFieldUpdateOperationsInput | number | null
    totalMax?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMin?: NullableFloatFieldUpdateOperationsInput | number | null
    priceMax?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherCreateManyCategoryConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    priceConditionId?: string | null
  }

  export type VoucherUpdateWithoutCategoryConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneWithoutVoucherNestedInput
    PriceConditionVoucher?: PriceConditionVoucherUpdateOneWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutCategoryConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherUncheckedUpdateManyWithoutCategoryConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherCreateManyPriceConditionVoucherInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    storeId?: string | null
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
  }

  export type VoucherUpdateWithoutPriceConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Store?: StoreUpdateOneWithoutVoucherNestedInput
    CategoryConditionVoucher?: CategoryConditionVoucherUpdateOneWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutPriceConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherUncheckedUpdateManyWithoutPriceConditionVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPromotionCreateManySalePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    storePromotionId: string
  }

  export type StorePromotionCreateManySalePromotionInput = {
    id: string
    storeId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type ProductPromotionUpdateWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    StorePromotion?: StorePromotionUpdateOneRequiredWithoutProductPromotionNestedInput
  }

  export type ProductPromotionUncheckedUpdateWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    storePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPromotionUncheckedUpdateManyWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    storePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type StorePromotionUpdateWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUpdateManyWithoutStorePromotionNestedInput
    Store?: StoreUpdateOneRequiredWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUncheckedUpdateManyWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateManyWithoutSalePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateManyStoreInput = {
    id: string
    orderId: string
    stars: number
    comment: string
    isReply?: boolean | null
    createdBy: string
    createdAt: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
  }

  export type StorePromotionCreateManyStoreInput = {
    id: string
    salePromotionId: string
    status: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type UserViewStoreCreateManyStoreInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string | null
  }

  export type VoucherCreateManyStoreInput = {
    id: string
    code: string
    title: string
    description?: string | null
    initQuantity: number
    currentQuantity: number
    status: string
    type: string
    percent?: number | null
    maximum?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string | null
    categoryConditionId?: string | null
    priceConditionId?: string | null
  }

  export type RatingUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RatingReply?: RatingReplyUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RatingReply?: RatingReplyUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    stars?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StorePromotionUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUpdateManyWithoutStorePromotionNestedInput
    SalePromotion?: SalePromotionUpdateOneRequiredWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ProductPromotion?: ProductPromotionUncheckedUpdateManyWithoutStorePromotionNestedInput
  }

  export type StorePromotionUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePromotionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserViewStoreUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserViewStoreUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserViewStoreUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CategoryConditionVoucher?: CategoryConditionVoucherUpdateOneWithoutVoucherNestedInput
    PriceConditionVoucher?: PriceConditionVoucherUpdateOneWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    initQuantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    percent?: NullableFloatFieldUpdateOperationsInput | number | null
    maximum?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryConditionId?: NullableStringFieldUpdateOperationsInput | string | null
    priceConditionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPromotionCreateManyStorePromotionInput = {
    id: string
    productId: string
    name: string
    image: string
    category: string
    quantity: number
    currentQuantity: number
    bought?: number | null
    priceAfter: number
    isDelete?: boolean
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    salePromotionId: string
  }

  export type ProductPromotionUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    SalePromotion?: SalePromotionUpdateOneRequiredWithoutProductPromotionNestedInput
  }

  export type ProductPromotionUncheckedUpdateWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    salePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPromotionUncheckedUpdateManyWithoutStorePromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    currentQuantity?: IntFieldUpdateOperationsInput | number
    bought?: NullableIntFieldUpdateOperationsInput | number | null
    priceAfter?: FloatFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    salePromotionId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingReplyCreateManyRatingInput = {
    id: string
    detail: string
    createdAt: Date | string
    createdBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type RatingReplyUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingReplyUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingReplyUncheckedUpdateManyWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryConditionVoucherCountOutputTypeDefaultArgs instead
     */
    export type CategoryConditionVoucherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceConditionVoucherCountOutputTypeDefaultArgs instead
     */
    export type PriceConditionVoucherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceConditionVoucherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalePromotionCountOutputTypeDefaultArgs instead
     */
    export type SalePromotionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalePromotionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StorePromotionCountOutputTypeDefaultArgs instead
     */
    export type StorePromotionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StorePromotionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RatingCountOutputTypeDefaultArgs instead
     */
    export type RatingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RatingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryConditionVoucherDefaultArgs instead
     */
    export type CategoryConditionVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryConditionVoucherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceConditionVoucherDefaultArgs instead
     */
    export type PriceConditionVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceConditionVoucherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPromotionDefaultArgs instead
     */
    export type ProductPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductPromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalePromotionDefaultArgs instead
     */
    export type SalePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalePromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StorePromotionDefaultArgs instead
     */
    export type StorePromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StorePromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserViewStoreDefaultArgs instead
     */
    export type UserViewStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserViewStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RatingDefaultArgs instead
     */
    export type RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RatingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RatingMaterialDefaultArgs instead
     */
    export type RatingMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RatingMaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RatingReplyDefaultArgs instead
     */
    export type RatingReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RatingReplyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreRatingDefaultArgs instead
     */
    export type StoreRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreRatingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoucherDefaultArgs instead
     */
    export type VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VoucherDefaultArgs<ExtArgs>

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