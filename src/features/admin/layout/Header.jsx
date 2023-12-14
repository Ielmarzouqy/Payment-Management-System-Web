export default function Header(){
    return (
        <>
             <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <a className="lg:hidden" href="#">
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
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
        <span className="sr-only">Home</span>
      </a>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
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
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search"
              type="search"
            />
          </div>
        </form>
      </div>
      <button
        className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
        type="button"
        id="radix-:rs:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        {/* <img
          src="/placeholder.svg"
          width="32"
          height="32"
          className="rounded-full"
          alt="Avatar"
          style="aspect-ratio: 32 / 32; object-fit: cover;"
        /> */}
        <span className="sr-only">Toggle user menu</span>
      </button>
    </header>
        </>
    )
}