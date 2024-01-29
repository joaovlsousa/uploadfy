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

export const projectSchema = z.object({
  title: z.string({ required_error: 'Campo obrigatório' }),
  description: z.string({ required_error: 'Campo obrigatório' }),
  githubUrl: z
    .string({ required_error: 'Campo obrigatório' })
    .url('URL inválida'),
  deployUrl: z
    .string({ required_error: 'Campo obrigatório' })
    .url('URL inválida')
    .optional(),
  pinned: z.boolean({ required_error: 'Campo obrigatório' }).default(false),
})

export type ProjectSchema = z.infer<typeof projectSchema>
