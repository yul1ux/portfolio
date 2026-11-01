import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string().min(1).regex(/\S/),
      description: z.string().min(1).regex(/\S/),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string().min(1).regex(/\S/)).default([]),
      draft: z.boolean().default(false),
      coverImage: z.url().optional(),
      coverImageAlt: z.string().min(1).regex(/\S/).optional(),
    })
    .superRefine((data, context) => {
      if (data.coverImage && !data.coverImageAlt) {
        context.addIssue({
          code: 'custom',
          path: ['coverImageAlt'],
          message: 'coverImageAlt is required when coverImage is provided.',
        });
      }
    }),
});

export const collections = { blog };
