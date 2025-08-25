
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
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model BlogComment
 * 
 */
export type BlogComment = $Result.DefaultSelection<Prisma.$BlogCommentPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
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
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
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
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs>;

  /**
   * `prisma.blogComment`: Exposes CRUD operations for the **BlogComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogComments
    * const blogComments = await prisma.blogComment.findMany()
    * ```
    */
  get blogComment(): Prisma.BlogCommentDelegate<ExtArgs>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    AppUser: 'AppUser',
    BlogComment: 'BlogComment',
    BlogPost: 'BlogPost',
    FileUpload: 'FileUpload'
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
      modelProps: "appUser" | "blogComment" | "blogPost" | "fileUpload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      BlogComment: {
        payload: Prisma.$BlogCommentPayload<ExtArgs>
        fields: Prisma.BlogCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findFirst: {
            args: Prisma.BlogCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findMany: {
            args: Prisma.BlogCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          create: {
            args: Prisma.BlogCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          createMany: {
            args: Prisma.BlogCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          delete: {
            args: Prisma.BlogCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          update: {
            args: Prisma.BlogCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          deleteMany: {
            args: Prisma.BlogCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          aggregate: {
            args: Prisma.BlogCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogComment>
          }
          groupBy: {
            args: Prisma.BlogCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCommentCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
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
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    blogPostBlogPostCreatedByToappUsers: number
    blogPostBlogPostUpdatedByToappUsers: number
    fileUploadFileUploadCreatedByToappUsers: number
    fileUploadFileUploadUpdatedByToappUsers: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostBlogPostCreatedByToappUsers?: boolean | AppUserCountOutputTypeCountBlogPostBlogPostCreatedByToappUsersArgs
    blogPostBlogPostUpdatedByToappUsers?: boolean | AppUserCountOutputTypeCountBlogPostBlogPostUpdatedByToappUsersArgs
    fileUploadFileUploadCreatedByToappUsers?: boolean | AppUserCountOutputTypeCountFileUploadFileUploadCreatedByToappUsersArgs
    fileUploadFileUploadUpdatedByToappUsers?: boolean | AppUserCountOutputTypeCountFileUploadFileUploadUpdatedByToappUsersArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountBlogPostBlogPostCreatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountBlogPostBlogPostUpdatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountFileUploadFileUploadCreatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountFileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    blogComments: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogComments?: boolean | BlogPostCountOutputTypeCountBlogCommentsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountBlogCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    sub: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    sub: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    sub: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    metadata: number
    _all: number
  }


  export type AppUserMinAggregateInputType = {
    id?: true
    sub?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    sub?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    sub?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    metadata?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    sub: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    deletedAt: Date | null
    deletedBy: string | null
    metadata: JsonValue | null
    _count: AppUserCountAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    blogPostBlogPostCreatedByToappUsers?: boolean | AppUser$blogPostBlogPostCreatedByToappUsersArgs<ExtArgs>
    blogPostBlogPostUpdatedByToappUsers?: boolean | AppUser$blogPostBlogPostUpdatedByToappUsersArgs<ExtArgs>
    fileUploadFileUploadCreatedByToappUsers?: boolean | AppUser$fileUploadFileUploadCreatedByToappUsersArgs<ExtArgs>
    fileUploadFileUploadUpdatedByToappUsers?: boolean | AppUser$fileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectScalar = {
    id?: boolean
    sub?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
  }

  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostBlogPostCreatedByToappUsers?: boolean | AppUser$blogPostBlogPostCreatedByToappUsersArgs<ExtArgs>
    blogPostBlogPostUpdatedByToappUsers?: boolean | AppUser$blogPostBlogPostUpdatedByToappUsersArgs<ExtArgs>
    fileUploadFileUploadCreatedByToappUsers?: boolean | AppUser$fileUploadFileUploadCreatedByToappUsersArgs<ExtArgs>
    fileUploadFileUploadUpdatedByToappUsers?: boolean | AppUser$fileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      blogPostBlogPostCreatedByToappUsers: Prisma.$BlogPostPayload<ExtArgs>[]
      blogPostBlogPostUpdatedByToappUsers: Prisma.$BlogPostPayload<ExtArgs>[]
      fileUploadFileUploadCreatedByToappUsers: Prisma.$FileUploadPayload<ExtArgs>[]
      fileUploadFileUploadUpdatedByToappUsers: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sub: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
      deletedAt: Date | null
      deletedBy: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsers and returns the data saved in the database.
     * @param {AppUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
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
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPostBlogPostCreatedByToappUsers<T extends AppUser$blogPostBlogPostCreatedByToappUsersArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$blogPostBlogPostCreatedByToappUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany"> | Null>
    blogPostBlogPostUpdatedByToappUsers<T extends AppUser$blogPostBlogPostUpdatedByToappUsersArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$blogPostBlogPostUpdatedByToappUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany"> | Null>
    fileUploadFileUploadCreatedByToappUsers<T extends AppUser$fileUploadFileUploadCreatedByToappUsersArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$fileUploadFileUploadCreatedByToappUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany"> | Null>
    fileUploadFileUploadUpdatedByToappUsers<T extends AppUser$fileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$fileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AppUser model
   */ 
  interface AppUserFieldRefs {
    readonly id: FieldRef<"AppUser", 'String'>
    readonly sub: FieldRef<"AppUser", 'String'>
    readonly createdAt: FieldRef<"AppUser", 'DateTime'>
    readonly createdBy: FieldRef<"AppUser", 'String'>
    readonly updatedAt: FieldRef<"AppUser", 'DateTime'>
    readonly updatedBy: FieldRef<"AppUser", 'String'>
    readonly deletedAt: FieldRef<"AppUser", 'DateTime'>
    readonly deletedBy: FieldRef<"AppUser", 'String'>
    readonly metadata: FieldRef<"AppUser", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser createManyAndReturn
   */
  export type AppUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser.blogPostBlogPostCreatedByToappUsers
   */
  export type AppUser$blogPostBlogPostCreatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * AppUser.blogPostBlogPostUpdatedByToappUsers
   */
  export type AppUser$blogPostBlogPostUpdatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * AppUser.fileUploadFileUploadCreatedByToappUsers
   */
  export type AppUser$fileUploadFileUploadCreatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * AppUser.fileUploadFileUploadUpdatedByToappUsers
   */
  export type AppUser$fileUploadFileUploadUpdatedByToappUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model BlogComment
   */

  export type AggregateBlogComment = {
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  export type BlogCommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    content: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type BlogCommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    content: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type BlogCommentCountAggregateOutputType = {
    id: number
    postId: number
    content: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    metadata: number
    _all: number
  }


  export type BlogCommentMinAggregateInputType = {
    id?: true
    postId?: true
    content?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type BlogCommentMaxAggregateInputType = {
    id?: true
    postId?: true
    content?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type BlogCommentCountAggregateInputType = {
    id?: true
    postId?: true
    content?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    metadata?: true
    _all?: true
  }

  export type BlogCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComment to aggregate.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogComments
    **/
    _count?: true | BlogCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCommentMaxAggregateInputType
  }

  export type GetBlogCommentAggregateType<T extends BlogCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogComment[P]>
      : GetScalarType<T[P], AggregateBlogComment[P]>
  }




  export type BlogCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithAggregationInput | BlogCommentOrderByWithAggregationInput[]
    by: BlogCommentScalarFieldEnum[] | BlogCommentScalarFieldEnum
    having?: BlogCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCommentCountAggregateInputType | true
    _min?: BlogCommentMinAggregateInputType
    _max?: BlogCommentMaxAggregateInputType
  }

  export type BlogCommentGroupByOutputType = {
    id: string
    postId: string
    content: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    deletedAt: Date | null
    deletedBy: string | null
    metadata: JsonValue | null
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  type GetBlogCommentGroupByPayload<T extends BlogCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    content?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    content?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectScalar = {
    id?: boolean
    postId?: boolean
    content?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
  }

  export type BlogCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $BlogCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogComment"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      content: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
      deletedAt: Date | null
      deletedBy: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["blogComment"]>
    composites: {}
  }

  type BlogCommentGetPayload<S extends boolean | null | undefined | BlogCommentDefaultArgs> = $Result.GetResult<Prisma.$BlogCommentPayload, S>

  type BlogCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogCommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCommentCountAggregateInputType | true
    }

  export interface BlogCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogComment'], meta: { name: 'BlogComment' } }
    /**
     * Find zero or one BlogComment that matches the filter.
     * @param {BlogCommentFindUniqueArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCommentFindUniqueArgs>(args: SelectSubset<T, BlogCommentFindUniqueArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogComment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogCommentFindUniqueOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCommentFindFirstArgs>(args?: SelectSubset<T, BlogCommentFindFirstArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogComments
     * const blogComments = await prisma.blogComment.findMany()
     * 
     * // Get first 10 BlogComments
     * const blogComments = await prisma.blogComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCommentFindManyArgs>(args?: SelectSubset<T, BlogCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogComment.
     * @param {BlogCommentCreateArgs} args - Arguments to create a BlogComment.
     * @example
     * // Create one BlogComment
     * const BlogComment = await prisma.blogComment.create({
     *   data: {
     *     // ... data to create a BlogComment
     *   }
     * })
     * 
     */
    create<T extends BlogCommentCreateArgs>(args: SelectSubset<T, BlogCommentCreateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogComments.
     * @param {BlogCommentCreateManyArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCommentCreateManyArgs>(args?: SelectSubset<T, BlogCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogComments and returns the data saved in the database.
     * @param {BlogCommentCreateManyAndReturnArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogComments and only return the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogComment.
     * @param {BlogCommentDeleteArgs} args - Arguments to delete one BlogComment.
     * @example
     * // Delete one BlogComment
     * const BlogComment = await prisma.blogComment.delete({
     *   where: {
     *     // ... filter to delete one BlogComment
     *   }
     * })
     * 
     */
    delete<T extends BlogCommentDeleteArgs>(args: SelectSubset<T, BlogCommentDeleteArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogComment.
     * @param {BlogCommentUpdateArgs} args - Arguments to update one BlogComment.
     * @example
     * // Update one BlogComment
     * const blogComment = await prisma.blogComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCommentUpdateArgs>(args: SelectSubset<T, BlogCommentUpdateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogComments.
     * @param {BlogCommentDeleteManyArgs} args - Arguments to filter BlogComments to delete.
     * @example
     * // Delete a few BlogComments
     * const { count } = await prisma.blogComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCommentDeleteManyArgs>(args?: SelectSubset<T, BlogCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogComments
     * const blogComment = await prisma.blogComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCommentUpdateManyArgs>(args: SelectSubset<T, BlogCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogComment.
     * @param {BlogCommentUpsertArgs} args - Arguments to update or create a BlogComment.
     * @example
     * // Update or create a BlogComment
     * const blogComment = await prisma.blogComment.upsert({
     *   create: {
     *     // ... data to create a BlogComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogComment we want to update
     *   }
     * })
     */
    upsert<T extends BlogCommentUpsertArgs>(args: SelectSubset<T, BlogCommentUpsertArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentCountArgs} args - Arguments to filter BlogComments to count.
     * @example
     * // Count the number of BlogComments
     * const count = await prisma.blogComment.count({
     *   where: {
     *     // ... the filter for the BlogComments we want to count
     *   }
     * })
    **/
    count<T extends BlogCommentCountArgs>(
      args?: Subset<T, BlogCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogCommentAggregateArgs>(args: Subset<T, BlogCommentAggregateArgs>): Prisma.PrismaPromise<GetBlogCommentAggregateType<T>>

    /**
     * Group by BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentGroupByArgs} args - Group by arguments.
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
      T extends BlogCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCommentGroupByArgs['orderBy'] }
        : { orderBy?: BlogCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogComment model
   */
  readonly fields: BlogCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BlogComment model
   */ 
  interface BlogCommentFieldRefs {
    readonly id: FieldRef<"BlogComment", 'String'>
    readonly postId: FieldRef<"BlogComment", 'String'>
    readonly content: FieldRef<"BlogComment", 'String'>
    readonly createdAt: FieldRef<"BlogComment", 'DateTime'>
    readonly createdBy: FieldRef<"BlogComment", 'String'>
    readonly updatedAt: FieldRef<"BlogComment", 'DateTime'>
    readonly updatedBy: FieldRef<"BlogComment", 'String'>
    readonly deletedAt: FieldRef<"BlogComment", 'DateTime'>
    readonly deletedBy: FieldRef<"BlogComment", 'String'>
    readonly metadata: FieldRef<"BlogComment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BlogComment findUnique
   */
  export type BlogCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findUniqueOrThrow
   */
  export type BlogCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findFirst
   */
  export type BlogCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findFirstOrThrow
   */
  export type BlogCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findMany
   */
  export type BlogCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComments to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment create
   */
  export type BlogCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogComment.
     */
    data: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
  }

  /**
   * BlogComment createMany
   */
  export type BlogCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogComment createManyAndReturn
   */
  export type BlogCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogComment update
   */
  export type BlogCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogComment.
     */
    data: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
    /**
     * Choose, which BlogComment to update.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment updateMany
   */
  export type BlogCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogComments.
     */
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogComments to update
     */
    where?: BlogCommentWhereInput
  }

  /**
   * BlogComment upsert
   */
  export type BlogCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogComment to update in case it exists.
     */
    where: BlogCommentWhereUniqueInput
    /**
     * In case the BlogComment found by the `where` argument doesn't exist, create a new BlogComment with this data.
     */
    create: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
    /**
     * In case the BlogComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
  }

  /**
   * BlogComment delete
   */
  export type BlogCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter which BlogComment to delete.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment deleteMany
   */
  export type BlogCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComments to delete
     */
    where?: BlogCommentWhereInput
  }

  /**
   * BlogComment without action
   */
  export type BlogCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    thumbnail: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    thumbnail: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    thumbnail: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    metadata: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    metadata?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    content: string
    thumbnail: string | null
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    deletedAt: Date | null
    deletedBy: string | null
    metadata: JsonValue | null
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    blogComments?: boolean | BlogPost$blogCommentsArgs<ExtArgs>
    appUserBlogPostCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserBlogPostUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    appUserBlogPostCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserBlogPostUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
  }

  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogComments?: boolean | BlogPost$blogCommentsArgs<ExtArgs>
    appUserBlogPostCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserBlogPostUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appUserBlogPostCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserBlogPostUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      blogComments: Prisma.$BlogCommentPayload<ExtArgs>[]
      appUserBlogPostCreatedByToappUser: Prisma.$AppUserPayload<ExtArgs>
      appUserBlogPostUpdatedByToappUser: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      thumbnail: string | null
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
      deletedAt: Date | null
      deletedBy: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogComments<T extends BlogPost$blogCommentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$blogCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany"> | Null>
    appUserBlogPostCreatedByToappUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appUserBlogPostUpdatedByToappUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BlogPost model
   */ 
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly thumbnail: FieldRef<"BlogPost", 'String'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdBy: FieldRef<"BlogPost", 'String'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedBy: FieldRef<"BlogPost", 'String'>
    readonly deletedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly deletedBy: FieldRef<"BlogPost", 'String'>
    readonly metadata: FieldRef<"BlogPost", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost.blogComments
   */
  export type BlogPost$blogCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    cursor?: BlogCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadAvgAggregateOutputType = {
    size: number | null
  }

  export type FileUploadSumAggregateOutputType = {
    size: number | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: string | null
    url: string | null
    name: string | null
    type: string | null
    size: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: string | null
    url: string | null
    name: string | null
    type: string | null
    size: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    url: number
    name: number
    type: number
    size: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    metadata: number
    _all: number
  }


  export type FileUploadAvgAggregateInputType = {
    size?: true
  }

  export type FileUploadSumAggregateInputType = {
    size?: true
  }

  export type FileUploadMinAggregateInputType = {
    id?: true
    url?: true
    name?: true
    type?: true
    size?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    url?: true
    name?: true
    type?: true
    size?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    url?: true
    name?: true
    type?: true
    size?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    metadata?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _avg?: FileUploadAvgAggregateInputType
    _sum?: FileUploadSumAggregateInputType
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    deletedAt: Date | null
    deletedBy: string | null
    metadata: JsonValue | null
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    appUserFileUploadCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserFileUploadUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
    appUserFileUploadCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserFileUploadUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    url?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    metadata?: boolean
  }

  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appUserFileUploadCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserFileUploadUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appUserFileUploadCreatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
    appUserFileUploadUpdatedByToappUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      appUserFileUploadCreatedByToappUser: Prisma.$AppUserPayload<ExtArgs>
      appUserFileUploadUpdatedByToappUser: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      name: string
      type: string
      size: number
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
      deletedAt: Date | null
      deletedBy: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
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
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appUserFileUploadCreatedByToappUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appUserFileUploadUpdatedByToappUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FileUpload model
   */ 
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'String'>
    readonly url: FieldRef<"FileUpload", 'String'>
    readonly name: FieldRef<"FileUpload", 'String'>
    readonly type: FieldRef<"FileUpload", 'String'>
    readonly size: FieldRef<"FileUpload", 'Int'>
    readonly createdAt: FieldRef<"FileUpload", 'DateTime'>
    readonly createdBy: FieldRef<"FileUpload", 'String'>
    readonly updatedAt: FieldRef<"FileUpload", 'DateTime'>
    readonly updatedBy: FieldRef<"FileUpload", 'String'>
    readonly deletedAt: FieldRef<"FileUpload", 'DateTime'>
    readonly deletedBy: FieldRef<"FileUpload", 'String'>
    readonly metadata: FieldRef<"FileUpload", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
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


  export const AppUserScalarFieldEnum: {
    id: 'id',
    sub: 'sub',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    metadata: 'metadata'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const BlogCommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    content: 'content',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    metadata: 'metadata'
  };

  export type BlogCommentScalarFieldEnum = (typeof BlogCommentScalarFieldEnum)[keyof typeof BlogCommentScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    metadata: 'metadata'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
    id: 'id',
    url: 'url',
    name: 'name',
    type: 'type',
    size: 'size',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    metadata: 'metadata'
  };

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: UuidFilter<"AppUser"> | string
    sub?: UuidFilter<"AppUser"> | string
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    createdBy?: UuidFilter<"AppUser"> | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedBy?: UuidFilter<"AppUser"> | string
    deletedAt?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    deletedBy?: UuidNullableFilter<"AppUser"> | string | null
    metadata?: JsonNullableFilter<"AppUser">
    blogPostBlogPostCreatedByToappUsers?: BlogPostListRelationFilter
    blogPostBlogPostUpdatedByToappUsers?: BlogPostListRelationFilter
    fileUploadFileUploadCreatedByToappUsers?: FileUploadListRelationFilter
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    sub?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    blogPostBlogPostCreatedByToappUsers?: BlogPostOrderByRelationAggregateInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostOrderByRelationAggregateInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadOrderByRelationAggregateInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    sub?: UuidFilter<"AppUser"> | string
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    createdBy?: UuidFilter<"AppUser"> | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedBy?: UuidFilter<"AppUser"> | string
    deletedAt?: DateTimeNullableFilter<"AppUser"> | Date | string | null
    deletedBy?: UuidNullableFilter<"AppUser"> | string | null
    metadata?: JsonNullableFilter<"AppUser">
    blogPostBlogPostCreatedByToappUsers?: BlogPostListRelationFilter
    blogPostBlogPostUpdatedByToappUsers?: BlogPostListRelationFilter
    fileUploadFileUploadCreatedByToappUsers?: FileUploadListRelationFilter
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadListRelationFilter
  }, "id">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    sub?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AppUser"> | string
    sub?: UuidWithAggregatesFilter<"AppUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"AppUser"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"AppUser"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AppUser"> | Date | string | null
    deletedBy?: UuidNullableWithAggregatesFilter<"AppUser"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AppUser">
  }

  export type BlogCommentWhereInput = {
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    id?: UuidFilter<"BlogComment"> | string
    postId?: UuidFilter<"BlogComment"> | string
    content?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    createdBy?: UuidFilter<"BlogComment"> | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedBy?: UuidFilter<"BlogComment"> | string
    deletedAt?: DateTimeNullableFilter<"BlogComment"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogComment"> | string | null
    metadata?: JsonNullableFilter<"BlogComment">
    blogPost?: XOR<BlogPostRelationFilter, BlogPostWhereInput>
  }

  export type BlogCommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
  }

  export type BlogCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    postId?: UuidFilter<"BlogComment"> | string
    content?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    createdBy?: UuidFilter<"BlogComment"> | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedBy?: UuidFilter<"BlogComment"> | string
    deletedAt?: DateTimeNullableFilter<"BlogComment"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogComment"> | string | null
    metadata?: JsonNullableFilter<"BlogComment">
    blogPost?: XOR<BlogPostRelationFilter, BlogPostWhereInput>
  }, "id">

  export type BlogCommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: BlogCommentCountOrderByAggregateInput
    _max?: BlogCommentMaxOrderByAggregateInput
    _min?: BlogCommentMinOrderByAggregateInput
  }

  export type BlogCommentScalarWhereWithAggregatesInput = {
    AND?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    OR?: BlogCommentScalarWhereWithAggregatesInput[]
    NOT?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogComment"> | string
    postId?: UuidWithAggregatesFilter<"BlogComment"> | string
    content?: StringWithAggregatesFilter<"BlogComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"BlogComment"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"BlogComment"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BlogComment"> | Date | string | null
    deletedBy?: UuidNullableWithAggregatesFilter<"BlogComment"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"BlogComment">
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    thumbnail?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    createdBy?: UuidFilter<"BlogPost"> | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedBy?: UuidFilter<"BlogPost"> | string
    deletedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogPost"> | string | null
    metadata?: JsonNullableFilter<"BlogPost">
    blogComments?: BlogCommentListRelationFilter
    appUserBlogPostCreatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    appUserBlogPostUpdatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    blogComments?: BlogCommentOrderByRelationAggregateInput
    appUserBlogPostCreatedByToappUser?: AppUserOrderByWithRelationInput
    appUserBlogPostUpdatedByToappUser?: AppUserOrderByWithRelationInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    thumbnail?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    createdBy?: UuidFilter<"BlogPost"> | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedBy?: UuidFilter<"BlogPost"> | string
    deletedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogPost"> | string | null
    metadata?: JsonNullableFilter<"BlogPost">
    blogComments?: BlogCommentListRelationFilter
    appUserBlogPostCreatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    appUserBlogPostUpdatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }, "id">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"BlogPost"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"BlogPost"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    deletedBy?: UuidNullableWithAggregatesFilter<"BlogPost"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"BlogPost">
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: UuidFilter<"FileUpload"> | string
    url?: StringFilter<"FileUpload"> | string
    name?: StringFilter<"FileUpload"> | string
    type?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    createdBy?: UuidFilter<"FileUpload"> | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedBy?: UuidFilter<"FileUpload"> | string
    deletedAt?: DateTimeNullableFilter<"FileUpload"> | Date | string | null
    deletedBy?: UuidNullableFilter<"FileUpload"> | string | null
    metadata?: JsonNullableFilter<"FileUpload">
    appUserFileUploadCreatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    appUserFileUploadUpdatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    appUserFileUploadCreatedByToappUser?: AppUserOrderByWithRelationInput
    appUserFileUploadUpdatedByToappUser?: AppUserOrderByWithRelationInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    url?: StringFilter<"FileUpload"> | string
    name?: StringFilter<"FileUpload"> | string
    type?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    createdBy?: UuidFilter<"FileUpload"> | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedBy?: UuidFilter<"FileUpload"> | string
    deletedAt?: DateTimeNullableFilter<"FileUpload"> | Date | string | null
    deletedBy?: UuidNullableFilter<"FileUpload"> | string | null
    metadata?: JsonNullableFilter<"FileUpload">
    appUserFileUploadCreatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
    appUserFileUploadUpdatedByToappUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }, "id">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _avg?: FileUploadAvgOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
    _sum?: FileUploadSumOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FileUpload"> | string
    url?: StringWithAggregatesFilter<"FileUpload"> | string
    name?: StringWithAggregatesFilter<"FileUpload"> | string
    type?: StringWithAggregatesFilter<"FileUpload"> | string
    size?: IntWithAggregatesFilter<"FileUpload"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"FileUpload"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"FileUpload"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"FileUpload"> | Date | string | null
    deletedBy?: UuidNullableWithAggregatesFilter<"FileUpload"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"FileUpload">
  }

  export type AppUserCreateInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentCreateInput = {
    id: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPost: BlogPostCreateNestedOneWithoutBlogCommentsInput
  }

  export type BlogCommentUncheckedCreateInput = {
    id: string
    postId: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPost?: BlogPostUpdateOneRequiredWithoutBlogCommentsNestedInput
  }

  export type BlogCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentCreateManyInput = {
    id: string
    postId: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostCreateInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentCreateNestedManyWithoutBlogPostInput
    appUserBlogPostCreatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostCreatedByToappUsersInput
    appUserBlogPostUpdatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostUpdatedByToappUsersInput
  }

  export type BlogPostUncheckedCreateInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUpdateManyWithoutBlogPostNestedInput
    appUserBlogPostCreatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostCreatedByToappUsersNestedInput
    appUserBlogPostUpdatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostUpdatedByToappUsersNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadCreatedByToappUser: AppUserCreateNestedOneWithoutFileUploadFileUploadCreatedByToappUsersInput
    appUserFileUploadUpdatedByToappUser: AppUserCreateNestedOneWithoutFileUploadFileUploadUpdatedByToappUsersInput
  }

  export type FileUploadUncheckedCreateInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadCreatedByToappUser?: AppUserUpdateOneRequiredWithoutFileUploadFileUploadCreatedByToappUsersNestedInput
    appUserFileUploadUpdatedByToappUser?: AppUserUpdateOneRequiredWithoutFileUploadFileUploadUpdatedByToappUsersNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateManyInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    metadata?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BlogPostRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type BlogCommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    metadata?: SortOrder
  }

  export type BlogCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type BlogCommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BlogCommentListRelationFilter = {
    every?: BlogCommentWhereInput
    some?: BlogCommentWhereInput
    none?: BlogCommentWhereInput
  }

  export type AppUserRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type BlogCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    metadata?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    metadata?: SortOrder
  }

  export type FileUploadAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type FileUploadSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BlogPostCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostCreatedByToappUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadCreatedByToappUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostCreatedByToappUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadCreatedByToappUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
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

  export type BlogPostUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostCreatedByToappUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpdateManyWithWhereWithoutAppUserBlogPostCreatedByToappUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpdateManyWithWhereWithoutAppUserBlogPostUpdatedByToappUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadCreatedByToappUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpdateManyWithWhereWithoutAppUserFileUploadCreatedByToappUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpdateManyWithWhereWithoutAppUserFileUploadUpdatedByToappUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostCreatedByToappUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAppUserBlogPostCreatedByToappUserInput | BlogPostUpdateManyWithWhereWithoutAppUserBlogPostCreatedByToappUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput> | BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput[] | BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput[]
    createMany?: BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAppUserBlogPostUpdatedByToappUserInput | BlogPostUpdateManyWithWhereWithoutAppUserBlogPostUpdatedByToappUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadCreatedByToappUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutAppUserFileUploadCreatedByToappUserInput | FileUploadUpdateManyWithWhereWithoutAppUserFileUploadCreatedByToappUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput> | FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput[] | FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput[]
    createMany?: FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutAppUserFileUploadUpdatedByToappUserInput | FileUploadUpdateManyWithWhereWithoutAppUserFileUploadUpdatedByToappUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutBlogCommentsInput = {
    create?: XOR<BlogPostCreateWithoutBlogCommentsInput, BlogPostUncheckedCreateWithoutBlogCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogCommentsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutBlogCommentsNestedInput = {
    create?: XOR<BlogPostCreateWithoutBlogCommentsInput, BlogPostUncheckedCreateWithoutBlogCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogCommentsInput
    upsert?: BlogPostUpsertWithoutBlogCommentsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutBlogCommentsInput, BlogPostUpdateWithoutBlogCommentsInput>, BlogPostUncheckedUpdateWithoutBlogCommentsInput>
  }

  export type BlogCommentCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput> | BlogCommentCreateWithoutBlogPostInput[] | BlogCommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogPostInput | BlogCommentCreateOrConnectWithoutBlogPostInput[]
    createMany?: BlogCommentCreateManyBlogPostInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type AppUserCreateNestedOneWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    create?: XOR<AppUserCreateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostCreatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutBlogPostBlogPostCreatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserCreateNestedOneWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    create?: XOR<AppUserCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutBlogPostBlogPostUpdatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
  }

  export type BlogCommentUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput> | BlogCommentCreateWithoutBlogPostInput[] | BlogCommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogPostInput | BlogCommentCreateOrConnectWithoutBlogPostInput[]
    createMany?: BlogCommentCreateManyBlogPostInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogCommentUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput> | BlogCommentCreateWithoutBlogPostInput[] | BlogCommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogPostInput | BlogCommentCreateOrConnectWithoutBlogPostInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutBlogPostInput | BlogCommentUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BlogCommentCreateManyBlogPostInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutBlogPostInput | BlogCommentUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutBlogPostInput | BlogCommentUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type AppUserUpdateOneRequiredWithoutBlogPostBlogPostCreatedByToappUsersNestedInput = {
    create?: XOR<AppUserCreateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostCreatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutBlogPostBlogPostCreatedByToappUsersInput
    upsert?: AppUserUpsertWithoutBlogPostBlogPostCreatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput>, AppUserUncheckedUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput>
  }

  export type AppUserUpdateOneRequiredWithoutBlogPostBlogPostUpdatedByToappUsersNestedInput = {
    create?: XOR<AppUserCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutBlogPostBlogPostUpdatedByToappUsersInput
    upsert?: AppUserUpsertWithoutBlogPostBlogPostUpdatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput>, AppUserUncheckedUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
  }

  export type BlogCommentUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput> | BlogCommentCreateWithoutBlogPostInput[] | BlogCommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogPostInput | BlogCommentCreateOrConnectWithoutBlogPostInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutBlogPostInput | BlogCommentUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BlogCommentCreateManyBlogPostInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutBlogPostInput | BlogCommentUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutBlogPostInput | BlogCommentUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    create?: XOR<AppUserCreateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadCreatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutFileUploadFileUploadCreatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserCreateNestedOneWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    create?: XOR<AppUserCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutFileUploadFileUploadUpdatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppUserUpdateOneRequiredWithoutFileUploadFileUploadCreatedByToappUsersNestedInput = {
    create?: XOR<AppUserCreateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadCreatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutFileUploadFileUploadCreatedByToappUsersInput
    upsert?: AppUserUpsertWithoutFileUploadFileUploadCreatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput>, AppUserUncheckedUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput>
  }

  export type AppUserUpdateOneRequiredWithoutFileUploadFileUploadUpdatedByToappUsersNestedInput = {
    create?: XOR<AppUserCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutFileUploadFileUploadUpdatedByToappUsersInput
    upsert?: AppUserUpsertWithoutFileUploadFileUploadUpdatedByToappUsersInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput>, AppUserUncheckedUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentCreateNestedManyWithoutBlogPostInput
    appUserBlogPostUpdatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostUpdatedByToappUsersInput
  }

  export type BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutAppUserBlogPostCreatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput>
  }

  export type BlogPostCreateManyAppUserBlogPostCreatedByToappUserInputEnvelope = {
    data: BlogPostCreateManyAppUserBlogPostCreatedByToappUserInput | BlogPostCreateManyAppUserBlogPostCreatedByToappUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentCreateNestedManyWithoutBlogPostInput
    appUserBlogPostCreatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostCreatedByToappUsersInput
  }

  export type BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutAppUserBlogPostUpdatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput>
  }

  export type BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInputEnvelope = {
    data: BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInput | BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadUpdatedByToappUser: AppUserCreateNestedOneWithoutFileUploadFileUploadUpdatedByToappUsersInput
  }

  export type FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateOrConnectWithoutAppUserFileUploadCreatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput>
  }

  export type FileUploadCreateManyAppUserFileUploadCreatedByToappUserInputEnvelope = {
    data: FileUploadCreateManyAppUserFileUploadCreatedByToappUserInput | FileUploadCreateManyAppUserFileUploadCreatedByToappUserInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadCreatedByToappUser: AppUserCreateNestedOneWithoutFileUploadFileUploadCreatedByToappUsersInput
  }

  export type FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateOrConnectWithoutAppUserFileUploadUpdatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput>
  }

  export type FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInputEnvelope = {
    data: FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInput | FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedUpdateWithoutAppUserBlogPostCreatedByToappUserInput>
    create: XOR<BlogPostCreateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostCreatedByToappUserInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostCreatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAppUserBlogPostCreatedByToappUserInput, BlogPostUncheckedUpdateWithoutAppUserBlogPostCreatedByToappUserInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAppUserBlogPostCreatedByToappUserInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    thumbnail?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    createdBy?: UuidFilter<"BlogPost"> | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedBy?: UuidFilter<"BlogPost"> | string
    deletedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogPost"> | string | null
    metadata?: JsonNullableFilter<"BlogPost">
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedUpdateWithoutAppUserBlogPostUpdatedByToappUserInput>
    create: XOR<BlogPostCreateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedCreateWithoutAppUserBlogPostUpdatedByToappUserInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAppUserBlogPostUpdatedByToappUserInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAppUserBlogPostUpdatedByToappUserInput, BlogPostUncheckedUpdateWithoutAppUserBlogPostUpdatedByToappUserInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAppUserBlogPostUpdatedByToappUserInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserInput>
  }

  export type FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedUpdateWithoutAppUserFileUploadCreatedByToappUserInput>
    create: XOR<FileUploadCreateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadCreatedByToappUserInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadCreatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutAppUserFileUploadCreatedByToappUserInput, FileUploadUncheckedUpdateWithoutAppUserFileUploadCreatedByToappUserInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutAppUserFileUploadCreatedByToappUserInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: UuidFilter<"FileUpload"> | string
    url?: StringFilter<"FileUpload"> | string
    name?: StringFilter<"FileUpload"> | string
    type?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    createdBy?: UuidFilter<"FileUpload"> | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedBy?: UuidFilter<"FileUpload"> | string
    deletedAt?: DateTimeNullableFilter<"FileUpload"> | Date | string | null
    deletedBy?: UuidNullableFilter<"FileUpload"> | string | null
    metadata?: JsonNullableFilter<"FileUpload">
  }

  export type FileUploadUpsertWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedUpdateWithoutAppUserFileUploadUpdatedByToappUserInput>
    create: XOR<FileUploadCreateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedCreateWithoutAppUserFileUploadUpdatedByToappUserInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutAppUserFileUploadUpdatedByToappUserInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutAppUserFileUploadUpdatedByToappUserInput, FileUploadUncheckedUpdateWithoutAppUserFileUploadUpdatedByToappUserInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutAppUserFileUploadUpdatedByToappUserInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserInput>
  }

  export type BlogPostCreateWithoutBlogCommentsInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserBlogPostCreatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostCreatedByToappUsersInput
    appUserBlogPostUpdatedByToappUser: AppUserCreateNestedOneWithoutBlogPostBlogPostUpdatedByToappUsersInput
  }

  export type BlogPostUncheckedCreateWithoutBlogCommentsInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostCreateOrConnectWithoutBlogCommentsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBlogCommentsInput, BlogPostUncheckedCreateWithoutBlogCommentsInput>
  }

  export type BlogPostUpsertWithoutBlogCommentsInput = {
    update: XOR<BlogPostUpdateWithoutBlogCommentsInput, BlogPostUncheckedUpdateWithoutBlogCommentsInput>
    create: XOR<BlogPostCreateWithoutBlogCommentsInput, BlogPostUncheckedCreateWithoutBlogCommentsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutBlogCommentsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutBlogCommentsInput, BlogPostUncheckedUpdateWithoutBlogCommentsInput>
  }

  export type BlogPostUpdateWithoutBlogCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserBlogPostCreatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostCreatedByToappUsersNestedInput
    appUserBlogPostUpdatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostUpdatedByToappUsersNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBlogCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentCreateWithoutBlogPostInput = {
    id: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUncheckedCreateWithoutBlogPostInput = {
    id: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentCreateOrConnectWithoutBlogPostInput = {
    where: BlogCommentWhereUniqueInput
    create: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogCommentCreateManyBlogPostInputEnvelope = {
    data: BlogCommentCreateManyBlogPostInput | BlogCommentCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type AppUserCreateWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostUpdatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserUncheckedCreateWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserCreateOrConnectWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostCreatedByToappUsersInput>
  }

  export type AppUserCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserUncheckedCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserCreateOrConnectWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
  }

  export type BlogCommentUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: BlogCommentWhereUniqueInput
    update: XOR<BlogCommentUpdateWithoutBlogPostInput, BlogCommentUncheckedUpdateWithoutBlogPostInput>
    create: XOR<BlogCommentCreateWithoutBlogPostInput, BlogCommentUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogCommentUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: BlogCommentWhereUniqueInput
    data: XOR<BlogCommentUpdateWithoutBlogPostInput, BlogCommentUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogCommentUpdateManyWithWhereWithoutBlogPostInput = {
    where: BlogCommentScalarWhereInput
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type BlogCommentScalarWhereInput = {
    AND?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    OR?: BlogCommentScalarWhereInput[]
    NOT?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    id?: UuidFilter<"BlogComment"> | string
    postId?: UuidFilter<"BlogComment"> | string
    content?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    createdBy?: UuidFilter<"BlogComment"> | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedBy?: UuidFilter<"BlogComment"> | string
    deletedAt?: DateTimeNullableFilter<"BlogComment"> | Date | string | null
    deletedBy?: UuidNullableFilter<"BlogComment"> | string | null
    metadata?: JsonNullableFilter<"BlogComment">
  }

  export type AppUserUpsertWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    update: XOR<AppUserUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput>
    create: XOR<AppUserCreateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostCreatedByToappUsersInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput, AppUserUncheckedUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput>
  }

  export type AppUserUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutBlogPostBlogPostCreatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUpsertWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    update: XOR<AppUserUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
    create: XOR<AppUserCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput, AppUserUncheckedUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput>
  }

  export type AppUserUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutBlogPostBlogPostUpdatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserCreateWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserUncheckedCreateWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadUpdatedByToappUserInput
  }

  export type AppUserCreateOrConnectWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadCreatedByToappUsersInput>
  }

  export type AppUserCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
  }

  export type AppUserUncheckedCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    id: string
    sub: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostCreatedByToappUserInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedCreateNestedManyWithoutAppUserBlogPostUpdatedByToappUserInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedCreateNestedManyWithoutAppUserFileUploadCreatedByToappUserInput
  }

  export type AppUserCreateOrConnectWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
  }

  export type AppUserUpsertWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    update: XOR<AppUserUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput>
    create: XOR<AppUserCreateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadCreatedByToappUsersInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput, AppUserUncheckedUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput>
  }

  export type AppUserUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutFileUploadFileUploadCreatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadUpdatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserNestedInput
  }

  export type AppUserUpsertWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    update: XOR<AppUserUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
    create: XOR<AppUserCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedCreateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput, AppUserUncheckedUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput>
  }

  export type AppUserUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutFileUploadFileUploadUpdatedByToappUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogPostBlogPostCreatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserNestedInput
    blogPostBlogPostUpdatedByToappUsers?: BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserNestedInput
    fileUploadFileUploadCreatedByToappUsers?: FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserNestedInput
  }

  export type BlogPostCreateManyAppUserBlogPostCreatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostCreateManyAppUserBlogPostUpdatedByToappUserInput = {
    id: string
    title: string
    content: string
    thumbnail?: string | null
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateManyAppUserFileUploadCreatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateManyAppUserFileUploadUpdatedByToappUserInput = {
    id: string
    url: string
    name: string
    type: string
    size: number
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostUpdateWithoutAppUserBlogPostCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUpdateManyWithoutBlogPostNestedInput
    appUserBlogPostUpdatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostUpdatedByToappUsersNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutAppUserBlogPostCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutAppUserBlogPostCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogPostUpdateWithoutAppUserBlogPostUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUpdateManyWithoutBlogPostNestedInput
    appUserBlogPostCreatedByToappUser?: AppUserUpdateOneRequiredWithoutBlogPostBlogPostCreatedByToappUsersNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutAppUserBlogPostUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    blogComments?: BlogCommentUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutAppUserBlogPostUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUpdateWithoutAppUserFileUploadCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadUpdatedByToappUser?: AppUserUpdateOneRequiredWithoutFileUploadFileUploadUpdatedByToappUsersNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutAppUserFileUploadCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateManyWithoutAppUserFileUploadCreatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUpdateWithoutAppUserFileUploadUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUserFileUploadCreatedByToappUser?: AppUserUpdateOneRequiredWithoutFileUploadFileUploadCreatedByToappUsersNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutAppUserFileUploadUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateManyWithoutAppUserFileUploadUpdatedByToappUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentCreateManyBlogPostInput = {
    id: string
    content: string
    createdAt: Date | string
    createdBy: string
    updatedAt: Date | string
    updatedBy: string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BlogCommentUncheckedUpdateManyWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AppUserCountOutputTypeDefaultArgs instead
     */
    export type AppUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostCountOutputTypeDefaultArgs instead
     */
    export type BlogPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppUserDefaultArgs instead
     */
    export type AppUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogCommentDefaultArgs instead
     */
    export type BlogCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostDefaultArgs instead
     */
    export type BlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileUploadDefaultArgs instead
     */
    export type FileUploadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileUploadDefaultArgs<ExtArgs>

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