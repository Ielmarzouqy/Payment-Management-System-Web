// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import SideBar from '../../admin/components/SideBar';
import Header from '../../admin/layout/Header';
import { useGetClientByIdQuery } from '../../client/redux/ClientApiSlice';
import { Link } from 'react-router-dom';

export default function DetailPay() {
  const { id } = useParams();
  const { data } = useGetClientByIdQuery(id);

  console.log(data);

  return (
    <>
      <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        {/* ***************** sidebar here*************** */}

        <SideBar />

        <div className="flex flex-col">
          {/******************* * header here *****************/}

          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
              <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Apartments
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&amp;_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[80px] hidden md:table-cell">
                              Image
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 max-w-[150px]">
                              Name
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                              Location
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                              Total Units
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"></th>
                          </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                          {data?.result.payment.map((payment) => (
                          <tr
                            key={payment._id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              {/* <img
                          src="/placeholder.svg"
                          width="64"
                          height="64"
                          alt="Apartment image"
                          className="aspect-square rounded-md object-cover"
                        /> */}
                            </td>
                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                              Skyline Towers
                            </td>
                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                              {payment.month}
                            </td>
                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                              {payment.amount}
                            </td>
                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                                  className="h-4 w-4"
                                >
                                  <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                  <polyline points="14 2 14 8 20 8"></polyline>
                                  <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                </svg>
                                <span className="sr-only">Edit</span>
                                {/* <Link></Link> */}
                                <Link to={`/payment/receipt/${payment._id}`}>receipt</Link>

                              </button>
                            </td>
                          </tr>

                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/****************  payment info here ************* */}

                {/* <PayInfo /> */}

                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Apartment Informations
                    </h3>
                  </div>
                  <div className="p-6 grid gap-4">
                    <div className="flex items-center">
                      <div>{data?.result.client.apartment.name}</div>
                      <div className="ml-auto"></div>
                    </div>
                    <div className="flex items-center">
                      <div>{data?.result.client.apartment.location}</div>
                      <div className="ml-auto"></div>
                    </div>
                    <div
                      data-orientation="horizontal"
                      role="none"
                      className="shrink-0 bg-gray-100 h-[1px] w-full"
                    ></div>
                    <div className="flex items-center font-medium">
                      <div>Total</div>
                      <div className="ml-auto">
                        {data?.result.client.apartment.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ****************client info here ********************* */}

              {/* <ClientInfo /> */}

              <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="p-6 flex flex-row items-center space-y-0">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Client Profile
                    </h3>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 ml-auto">
                      Edit
                    </button>
                  </div>
                  <div className="p-6 text-sm">
                    <div className="grid gap-1">
                      <div className="font-medium">
                        {data?.result.client.fullname}*
                      </div>
                      <div>10 total apartments</div>
                    </div>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-gray-100 h-[1px] w-full"
                  ></div>
                  <div>
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        Contact Information
                      </h3>
                    </div>
                    <div className="p-6 text-sm">
                      <div className="grid gap-1">
                        <a className="text-blue-600" href="#">
                          {data?.result?.client.email}
                        </a>
                        <div className="text-gray-500 dark:text-gray-400">
                          {data?.result.client.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}