import { useGetAllClientsQuery } from "../redux/ClientApiSlice";

export default function AllClient(){
console.log("data")
  const { data } = useGetAllClientsQuery();

    console.log(data);
    return (
        <>
            <div className="w-full p-8">
  <div className="relative w-full overflow-auto">
    <table className="caption-bottom text-sm w-full text-gray-900">
      <thead className="[&amp;_tr]:border-b">
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
            Client
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
            Apartment
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[200px]">
            Payment Status
          </th>
          <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right w-[200px]">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="[&amp;_tr:last-child]:border-0">
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-4"
              src="/placeholder.svg?height=40&amp;width=40"
            ></span>
            John Doe
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apartment 101</td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-200 text-green-800">
              Paid
            </div>
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$1,200.00</td>
        </tr>
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-4"
              src="/placeholder.svg?height=40&amp;width=40"
            ></span>
            Jane Smith
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apartment 102</td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-200 text-yellow-800">
              Pending
            </div>
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$1,500.00</td>
        </tr>
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-4"
              src="/placeholder.svg?height=40&amp;width=40"
            ></span>
            Robert Johnson
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apartment 103</td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-red-200 text-red-800">
              Unpaid
            </div>
          </td>
          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$1,800.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </>
    )
}