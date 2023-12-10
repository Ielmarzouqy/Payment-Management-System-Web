export default function ClientInfo(){
    return (
        <>
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6 flex flex-row items-center space-y-0">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Client Profile</h3>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 ml-auto">
                Edit
              </button>
            </div>
            <div className="p-6 text-sm">
              <div className="grid gap-1">
                <div className="font-medium">John Doe</div>
                <div>10 total apartments</div>
              </div>
            </div>
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div>
            <div>
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Contact Information</h3>
              </div>
              <div className="p-6 text-sm">
                <div className="grid gap-1">
                  <a className="text-blue-600" href="#">
                    john@example.com
                  </a>
                  <div className="text-gray-500 dark:text-gray-400">+1 555 5555 5555</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}