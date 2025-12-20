import { z } from "zod";

export const statusSchema = z.object({
  OK: z.literal('ok'),
  ERROR: z.literal('error')
});

export const OK = 'ok';
export const ERROR = 'error';

export default {
  OK: 'ok',
  ERROR: 'error'
};

