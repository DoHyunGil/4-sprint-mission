export function create(req: any, res: any, next: any): void;
export function update(req: any, res: any, next: any): void;
export const createSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strict>;
export const updateSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
import { z } from "zod";
//# sourceMappingURL=article.d.ts.map