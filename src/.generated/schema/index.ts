import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.DbNull;
  if (v === 'JsonNull') return Prisma.JsonNull;
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
    z.object({ toJSON: z.function(z.tuple([]), z.any()) }),
    z.record(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AppUserScalarFieldEnumSchema = z.enum(['id','sub','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const BlogCommentScalarFieldEnumSchema = z.enum(['id','postId','content','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const BlogPostScalarFieldEnumSchema = z.enum(['id','title','content','thumbnail','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const FileUploadScalarFieldEnumSchema = z.enum(['id','url','name','type','size','createdAt','createdBy','updatedAt','updatedBy','deletedAt','deletedBy','metadata']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.JsonNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// APP USER SCHEMA
/////////////////////////////////////////

export const AppUserSchema = z.object({
  id: z.string(),
  sub: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string(),
  deletedAt: z.coerce.date().nullable(),
  deletedBy: z.string().nullable(),
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
