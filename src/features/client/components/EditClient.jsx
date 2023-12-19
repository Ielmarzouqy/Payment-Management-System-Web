// import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice"

import Swal from "sweetalert2";
import {  useGetClientByIdQuery, useUpdateClientMutation } from "../redux/ClientApiSlice";
import { useState } from "react";
import { useParams } from "react-router";
import { useGetAllApartmentsQuery } from "../../appartement/redux/apartmentApiSlice";

export default function EditClient(){

    const {id} = useParams()
  const {data: client} = useGetClientByIdQuery(id)
  const {data: apartments} = useGetAllApartmentsQuery()


  const [updateClient] = useUpdateClientMutation()

const [clientData, setClientData] = useState({
  fullname: client?.result?.client?.fullname ,
  email: client?.result?.client?.email  ,
  phone: client?.result?.client?.phone ,
  apartment:  client?.result?.client?.apartment?.name ,
  startDate: client?.result?.client?.startDate,
  endDate: client?.result?.client?.endDate 
});


const handleInputChange = (e) => {
  const { id, value } = e.target;

  setClientData((prevData) => ({
    ...prevData,
    [id]:value
  }));
};


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0'); // Month is zero-based
    let day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };


const handleEditClient = async () => {
  try {
    await updateClient({clientId:id, clientData});

    console.log(clientData);
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
console.log(client)
    return (
        <>

<div
  // className="border text-card-foreground max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4"
  data-v0-t="card"
>
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="font-semibold tracking-tight text-2xl">Add New Client</h3>
    <p className="text-sm text-gray-500">Please fill in the necessary information below.</p>
  </div>
  <div className="p-6 space-y-4">
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="client-name"
      >
        Full Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="fullname"
        placeholder="John Doe"
        // required=""
        value={ clientData?.fullname || client?.result?.client?.fullname }
        
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="client-email"
      >
        Email
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="email"
        // placeholder="johndoe@example.com"
        // type="email"
        // required=""
        // value={clientData.email}
        value={clientData?.email || client?.result?.client?.email }

        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="client-phone"
      >
        Phone
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="phone"
        // placeholder="+1 234 567 890"
        // require§d=""
        // value={clientData.phone}
        value={ clientData?.phone || client?.result?.client?.phone }

        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="apartment-number"
      >
        Apartment Number
      </label>
     
      <select
           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
           id="apartment"
           value={clientData.apartment ||client?.result?.client?.apartment?.name }

           onChange={handleInputChange}
        // aria-hidden="true"
        >
        <option 
        //    value={clientData.apartment ||client?.result?.client?.apartment?.name   }

        >  
        {client?.result?.client?.apartment?.name}
         </option>
        {apartments &&
          apartments.apartments.map((apartment) => (
            <option key={apartment.id} 
            
          value={apartment._id}
            >
              {apartment.name}
            </option>
          ))}
      </select>
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="lease-start"
      >
        Lease Start Date
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="startDate"
        // required=""
        type="date"
        // value={clientData.startDate}
        value={ formatDate(clientData?.startDate || client?.result?.client?.startDate)  }

        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        // for="lease-end"
      >
        Lease End Date
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="endDate"
        // required=""
        type="date"
        // value={clientData.endDate}
        value={ formatDate(clientData?.endDate || client?.result?.client?.endDate) }

        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="flex items-center ">
    <button  
    onClick={handleEditClient}
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
      Add Client
    </button>
  </div>
</div>
        </>
    )
}