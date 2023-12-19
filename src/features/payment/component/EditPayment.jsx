// import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice"
// import { useGetAllClientsQuery } from "../../client/redux/ClientApiSlice";

import Swal from "sweetalert2";
import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice";
import { useGetAllClientsQuery } from "../../client/redux/ClientApiSlice";
import { useGetPaymentByIdQuery, useUpdatePaymentMutation } from "../redux/PaymentApiSlice";
import { useState } from "react";
import { useParams } from "react-router";

export default function EditPayment(){

  const {data: apartments} = useGetAllApartmentsQuery();
  const {data:clients} = useGetAllClientsQuery();
//   const [creatPayment] = useCreatePaymentMutation()

  const {id} = useParams()

 const  {data : payment} = useGetPaymentByIdQuery(id)
 const [updatePayment] = useUpdatePaymentMutation()

 console.log(payment)
  const [paymentData, setPaymentData] = useState({
    client: payment?.result?.client ,
    apartment: payment?.result?.apartment,
    amount: payment?.result?.amount,
    month: payment?.result?.month,
 
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setPaymentData((prevData) => ({
      ...prevData,
      [id]:value
    }));
  };

    const handleAddClient = async () => {
      try {
        await updatePayment({paymentId:id, paymentData});

        console.log(paymentData);
        Swal.fire({
          title: 'create client sucess!',
          text: 'The client created.',
          icon: 'success',
        });
      } catch (error) {
        console.error('Failed to create client', error);

        Swal.fire({
          title: 'Error',
          text: 'Failed to create clint.',
          icon: 'error',
        });
      }
    };
    return (
       <>
       <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl mx-auto my-12"
        data-v0-t="card"
        >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="tracking-tight text-lg font-bold">Apartment Payment Form</h3>
          <p className="text-sm text-muted-foreground">Select an apartment, client, and make monthly payments.</p>
        </div>
        <div className="p-6 space-y-6">
        

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Apartment Number
      </label>
     
      <select
           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={handleInputChange}
        value={paymentData.apartment || payment?.result?.apartment?.name}
        id="apartment"
        aria-hidden="true"
        >
        <option value=""> {payment?.result?.apartment?.name}</option>
        {apartments &&
          apartments.apartments.map((apartment) => (
            <option key={apartment.id} value={apartment._id}>
              {apartment.name}
            </option>
          ))}
      </select>
    </div>
    
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="apartment-number"
      >
        Client  
        </label>
     
      <select
           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleInputChange}
            id="client"
            value={paymentData.client ||payment?.result?.client?.fullname}
        aria-hidden="true"
        >
        <option value="">  {payment?.result?.client?.fullname} </option>
        {clients &&
          clients.result.map((client) => (
            <option key={client._id} value={client._id}>
              {client.fullname}
            </option>
          ))}
      </select>
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="payment"
      >
        Payment Amount
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter payment amount"
        type="number"
            id="amount"
        value={paymentData.amount || payment?.result?.amount}
        onChange={handleInputChange}
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Client Payment Month  
        </label>
     
      <select
           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="month"
           
           onChange={handleInputChange}
            value={paymentData.month || payment?.result?.month}
        // aria-hidden="true"
        >
        <option value=""> {payment?.result?.month}</option>
      
          <option  value="January"> January</option>
          <option  value="February">February</option>
          <option  value="March">March</option>
          <option  value="April">April</option>
          <option  value="May">May</option>
          <option  value="Jun">Jun</option>
          <option  value="Jully">Jully</option>
          <option  value="Augest">Augest</option>
          <option  value="September">September</option>
          <option  value="October">October</option>
          <option  value="November">November</option>
          <option  value="December">December</option>

          
      </select>
    </div>
  </div>
  <div className="flex items-center p-6">
    <button
      onClick={handleAddClient}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
      Make Payment
    </button>
  </div>
</div>
       </>
    )
}