import { z } from 'zod'

export const loginSchema = z
  .object({
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .email('Informe um email válido'),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .min(10, 'Min. 10 caracteres'),
    confirmPassword: z.string({ required_error: 'Campo obrigatório' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas são diferentes',
        path: ['confirmPassword'],
      })
    }
  })

export type LoginSchema = z.infer<typeof loginSchema>
