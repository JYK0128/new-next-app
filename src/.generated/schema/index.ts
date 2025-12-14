import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.NullTypes.DbNull;
  if (v === 'JsonNull') return Prisma.NullTypes.JsonNull;
  return v;
};

export const JsonValueSchema= z.custom<Prisma.JsonValue>();
export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.any() }),
    z.record(z.string(), z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','accountId','providerId','accessToken','refreshToken','accessTokenExpiresAt','refreshTokenExpiresAt','scope','idToken','password','createdAt','updatedAt','metadata']);

export const AppUserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','createdAt','updatedAt','metadata']);

export const BlogCommentScalarFieldEnumSchema = z.enum(['id','postId','content','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const BlogPostScalarFieldEnumSchema = z.enum(['id','title','content','thumbnail','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const FileUploadScalarFieldEnumSchema = z.enum(['id','url','name','type','size','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const SessionScalarFieldEnumSchema = z.enum(['id','userId','token','expiresAt','ipAddress','userAgent','createdAt','updatedAt','metadata']);

export const VerificationScalarFieldEnumSchema = z.enum(['id','identifier','value','expiresAt','createdAt','updatedAt','metadata']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  accessTokenExpiresAt: z.coerce.date().nullable(),
  refreshTokenExpiresAt: z.coerce.date().nullable(),
  scope: z.string().nullable(),
  idToken: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  metadata: JsonValueSchema.nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// APP USER SCHEMA
/////////////////////////////////////////

export const AppUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  metadata: JsonValueSchema.nullable(),
})

export type AppUser = z.infer<typeof AppUserSchema>

/////////////////////////////////////////
// BLOG COMMENT SCHEMA
/////////////////////////////////////////

export const BlogCommentSchema = z.object({
  id: z.string(),
  postId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string(),
  deletedAt: z.coerce.date().nullable(),
  deletedBy: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
})

export type BlogComment = z.infer<typeof BlogCommentSchema>

/////////////////////////////////////////
// BLOG POST SCHEMA
/////////////////////////////////////////

export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().nullable(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string(),
  deletedAt: z.coerce.date().nullable(),
  deletedBy: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
})

export type BlogPost = z.infer<typeof BlogPostSchema>

/////////////////////////////////////////
// FILE UPLOAD SCHEMA
/////////////////////////////////////////

export const FileUploadSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string(),
  deletedAt: z.coerce.date().nullable(),
  deletedBy: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
})

export type FileUpload = z.infer<typeof FileUploadSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  metadata: JsonValueSchema.nullable(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  metadata: JsonValueSchema.nullable(),
})

export type Verification = z.infer<typeof VerificationSchema>
