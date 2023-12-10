// import Link from "next/link"
// import { button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6] text-gray-900">
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <a className="flex items-center justify-center" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" x2="4" y1="22" y2="15"></line>
        </svg>
        <span className="sr-only">Brand Name</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/home">
          Home
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
          Dashboard
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Pricing
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </a>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
              <img
                src="/img.png"
                alt="Hero"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                // style="aspect-ratio: 800 / 600; object-fit: cover;"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Welcome to Our Solution</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                A short description of the product or service being advertised on the landing page.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 h-10 px-6 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Get Started
                </button>
                <a
                  className="h-10 px-6 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-gray-100"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              A short description of the features offered by the product or service.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">Feature 1</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Brief description of Feature 1.</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">Feature 2</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Brief description of Feature 2.</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-bold">Feature 3</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Brief description of Feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-gray-300">
      <p>© Brand Name. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm hover:underline underline-offset-4" href="#">
          Terms of Service
        </a>
        <a className="text-sm hover:underline underline-offset-4" href="#">
          Privacy Policy
        </a>
      </nav>
    </footer>
  </div>
  )
}

