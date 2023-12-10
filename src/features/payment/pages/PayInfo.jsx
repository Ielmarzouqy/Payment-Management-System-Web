export default function PayInfo(){

    return (
        <>
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Payments</h3>
            </div>
            <div className="p-6 grid gap-4">
              <div className="flex items-center">
                <div>Total Collected</div>
                <div className="ml-auto">$50,000</div>
              </div>
              <div className="flex items-center">
                <div>Outstanding</div>
                <div className="ml-auto">$10,000</div>
              </div>
              <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div>
              <div className="flex items-center font-medium">
                <div>Total</div>
                <div className="ml-auto">$60,000</div>
              </div>
            </div>
          </div>
        </>
    )

}