export function create(req: any, res: any, next: any): void;
export function update(req: any, res: any, next: any): void;
export const updateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
import { z } from "zod";
//# sourceMappingURL=product.d.ts.map