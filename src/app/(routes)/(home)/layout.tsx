import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="lg:ml-72 flex-1">
        <section className="m-auto w-full lg:w-[52rem] py-6 lg:py-10 px-4 lg:px-0 space-y-6">
          {children}
        </section>
      </main>
    </>
  )
}
