import { useParams } from "react-router";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { useGetPaymentByIdQuery } from "../redux/PaymentApiSlice"

export default function Receipt(){

  const {id} = useParams()
  const {data} = useGetPaymentByIdQuery(id);

  console.log(data)

  const downloadReceipt = () => {
    const receipt = document.getElementById('receipt-container');
  
    html2canvas(receipt).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      // pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust width and height as needed

      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0); // Black text color
  
      pdf.addImage(imgData, 'PNG', 15, 15, 180, 267); // Adjust position and size
  
      // Add additional text or styling as needed
      pdf.text('Payment Receipt', 15, 10);

      pdf.save('receipt.pdf');
    });
  };
  

    return (
        <>

<div
id="receipt-container"
 className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xl mx-auto" data-v0-t="card">
  <div className="flex flex-col space-y-1.5 p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Payment Receipt</h3>
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-sm bg-green-500 text-white">
        Paid
      </div>
    </div>
    <p className="text-sm text-gray-600">Thank you for your payment</p>
  </div>
  <div className="p-6 space-y-4">
    <div className="flex items-center space-x-4">
      <span
        className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12"
        src="/placeholder.svg?height=50&amp;width=50"
        alt="User avatar"
      ></span>
      <div>
        <h3 className="text-lg font-semibold">

          {data?.result.client.fullname}
        </h3>
        <p className="text-gray-600">
        {data?.result.client.email}


        </p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-gray-600">Payment Details:</p>
      <div className="flex justify-between">
        <span>Apartment:</span>
        <span className="font-semibold">

        {data?.result.apartment.name}

        </span>
      </div>
      <div className="flex justify-between">
        <span>Amount:</span>
        <span className="font-semibold">
        {data?.result.amount}

        </span>
      </div>
      <div className="flex justify-between">
        <span>Payment Date:</span>
        <span className="font-semibold">08/12/2023</span>
      </div>
      <div className="flex justify-between">
        <span>Payment Method:</span>
        <span className="font-semibold">Credit Card</span>
      </div>
    </div>
  </div>
  <div className="flex items-center p-6">
   
    <button
    onClick={downloadReceipt}
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 ml-auto bg-blue-500 text-white">
      Download Receipt
    </button>
  </div>
</div>
        </>
    )
}