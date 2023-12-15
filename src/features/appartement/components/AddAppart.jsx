import { useState } from "react";
import { useCreateApartmentMutation } from "../redux/apartmentApiSlice";
import Swal from 'sweetalert2';
import imageCompression from "browser-image-compression";


export default function AddAppart(){


const [createApartment] = useCreateApartmentMutation()

const [apartmentData, setApartmentData] = useState({
  name: '',
  location: '',
  price: '',
  description: '',
  image:null
});



const handleFileChange = async (e) => {
  const imageFile = e.target.files[0];

  // Compress the image before setting it in the state
  const compressedImage = await compressImage(imageFile);
  
  setApartmentData((prevData) => ({
    ...prevData,
    image: compressedImage,
  }));
};

const compressImage = async (file) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 800,
    useWebWorker: true,
  };

  try {
    const compressedImage = await imageCompression(file, options);
    return compressedImage;
  } catch (error) {
    console.error("Error compressing image:", error);
    return file; // If compression fails, use the original file
  }
};







const handleInputChange = (e) => {
  const { id, value } = e.target;
  setApartmentData((prevData) => ({
    ...prevData,
    [id]: value,
  }));
};

const handleAddApartment = async () => {
  try {


    const formData = new FormData();
    formData.append("name", apartmentData.name);
    formData.append("location", apartmentData.location);
    formData.append("price", apartmentData.price);
    formData.append("description", apartmentData.description);
    formData.append("image", apartmentData.image);


    await createApartment(formData);

    console.log(apartmentData);
    Swal.fire({
      title: 'create aprt!',
      text: 'The Apartment created.',
      icon: 'success',
    });
  } catch (error) {
    console.error('Failed to create aprt', error);

    Swal.fire({
      title: 'Error',
      text: 'Failed to create apartment.',
      icon: 'error',
    });
  }
};
 
    return (
        <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl mx-auto p-6" data-v0-t="card">
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="font-semibold tracking-tight text-2xl">Add Apartment Details</h3>
    <p className="text-sm text-muted-foreground">Fill out the information below to add a new apartment listing.</p>
  </div>
  <div className="p-6 space-y-4">
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Enter apartment name"
        required=""
        value={apartmentData.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Location
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="location"
        placeholder="Enter apartment location"
        required=""
        value={apartmentData.location}
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Price
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="price"
        placeholder="Enter apartment price"
        required=""
        type="number"
        value={apartmentData.price}
        onChange={handleInputChange}
        

      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Description
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="description"
        placeholder="Enter apartment description"
        required=""
        value={apartmentData.description}
        onChange={handleInputChange}
      />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

      >
        Picture
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="file"
        id="file-input"
onClick={handleFileChange}
      />
    </div>
  </div>
  <div className="flex items-center p-6">
    <button  onClick={handleAddApartment} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
      Add Apartment
    </button>
  </div>
</div>

        </>
    )
}
