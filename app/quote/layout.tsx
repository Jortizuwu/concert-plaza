export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">
      {children}
    </main>
  )
}