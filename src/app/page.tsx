import { Header, Leagues } from "@/components"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700 shadow-lg sticky top-0 z-10">
        <Header />
      </div>
      <main className="py-10">
        <Leagues />
      </main>
    </div>
  )
}

export default Home