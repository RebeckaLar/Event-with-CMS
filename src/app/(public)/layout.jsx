import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"

function PublicLayout({ children }) {
  return (
    <div className="wrapper min-h-screen grid grid-rows-[auto_1fr_auto]">
      <NavBar />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout