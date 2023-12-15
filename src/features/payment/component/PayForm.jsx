// import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice"
// import { useGetAllClientsQuery } from "../../client/redux/ClientApiSlice";

import Swal from "sweetalert2";
import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice";
import { useGetAllClientsQuery } from "../../client/redux/ClientApiSlice";
import { useCreatePaymentMutation } from "../redux/PaymentApiSlice";
import { useState } from "react";

export default function PayForm(){

  const {data: apartments} = useGetAllApartmentsQuery();
  const {data:clients} = useGetAllClientsQuery();
  const [creatPayment] = useCreatePaymentMutation()
 
  const [paymentData, setPaymentData] = useState({
    client: '',
    apartment: '',
    amount: '',
    month: '',
 
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
        await creatPayment(paymentData);

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
        value={paymentData.apartment}
        id="apartment"
        aria-hidden="true"
        >
        <option value="">  Apartment Number</option>
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
            value={paymentData.client}
        aria-hidden="true"
        >
        <option value="">  Client</option>
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
        value={paymentData.amount}
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
            onChange={handleInputChange}
            value={paymentData.month}
            id="month"
        aria-hidden="true"
        >
        <option value=""> Payment Month</option>
      
          <option  value="october"> January</option>
          <option  value="october">February</option>
          <option  value="october">March</option>
          <option  value="october">April</option>
          <option  value="october">May</option>
          <option  value="october">Jun</option>
          <option  value="october">Jully</option>
          <option  value="october">Augest</option>
          <option  value="october">September</option>
          <option  value="october">October</option>
          <option  value="october">November</option>
          <option  value="october">December</option>

          
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