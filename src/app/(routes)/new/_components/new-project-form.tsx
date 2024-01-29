'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { createProject } from '@/actions/create-project'
import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ProjectSchema, projectSchema } from '@/schemas'
import { toast } from 'sonner'

export function NewProjectForm() {
  const router = useRouter()

  const form = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    mode: 'all',
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form

  async function onSubmit(data: ProjectSchema) {
    const { error, projectId } = await createProject(data)

    if (error) {
      toast.error(error)
    }

    if (projectId) {
      toast.success('sucesso')

      router.push(`/projects/${projectId}/upload-image`)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">Nome do projeto</FormLabel>
              <Input id="title" disabled={isSubmitting} {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Descrição do projeto</FormLabel>
              <FormControl>
                <Textarea id="description" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="githubUrl">Link do repositório</FormLabel>
              <Input id="githubUrl" disabled={isSubmitting} {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="deployUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="deployUrl">Link da aplicação</FormLabel>
              <Input id="deployUrl" disabled={isSubmitting} {...field} />
              <FormDescription>Campo opcional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="pinned"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 py-4">
              <FormControl>
                <Checkbox
                  id="pinned"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                htmlFor="pinned"
                className="text-sm font-medium text-muted-foreground"
              >
                Fixar na página inicial?
              </FormLabel>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <Loader message="Salvando projeto..." />
          ) : (
            'Salvar projeto'
          )}
        </Button>
      </form>
    </Form>
  )
}
