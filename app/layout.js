import './globals.css'

export default function RootLayout({ children }) {
  const header =(
    <header className='fixed w-screen z-10 shadow-xl bg-slate-200 px-10 py-3'>
      <h1 className='text-3xl font-bold'>bLoG</h1>
    </header>
  )

  const footer =(
    <footer className='border-t border-slate-500 mt-6 py-6 text-center text-slate-400'>
      <div>
        <br/>
        <h3>develop by Eli</h3>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          {header}
          <div className='mx-auto max-w-2xl px-6 pt-32'>
          {children}
          </div>

          {footer}
        </main>
        </body>
    </html>
  )
}
