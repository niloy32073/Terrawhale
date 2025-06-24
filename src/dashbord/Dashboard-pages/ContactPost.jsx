import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import { useForm } from "react-hook-form";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createContact, deleteContact, readAllContact, updateContact } from "../../services/index/contactPost";
import { CONTACT_DATA } from "../../data";


const ContactPost = () => {
      const { register, handleSubmit, reset } = useForm(); 
    const [speech, setSpeech] = useState([]);
   const [selectedContactId, setSelectedContactId] = useState(null);

   const refetchSchoolContact = async () => {
     try {
       const { data } = await readAllContact();
       setSpeech(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          
          if (selectedContactId) {
            await updateContact(token, selectedContactId, data); // Call updateTeacher function with selectedNavbarId and data
            toast.success('Contact updated successfully!');
          } else {
            // Create new teacher
            await createContact({ token, formData: data });
            toast.success('Contact created successfully!');
          }
          reset(); // Reset the form after submission
          refetchSchoolContact()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (iconId) => {
        try {
          // Fetch the teacher's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllContact(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedContactId(iconId); // Set the selectedNavbarId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteContact(token, iconId); // Call deleteTeacher function with iconId
          toast.success('Contact removed successfully!');
          refetchSchoolContact()
        } catch (error) {
          console.error(error.message);
        }
      };
      

      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllContact();
            //console.log(data)
            setSpeech(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
    return (
        <div>
           <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4"> Contact</h2>
             <h2 className="text-gray-900  mx-auto md:w-[30%] text-center w-[50%] my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold "> Contact Form</h2> 

            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">Contact Email</label>
        <input className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("email", { required: true })} label="email" />
       </div>
       <div >
          <label className="font-semibold md:text-md text-sm">Contact Address</label>
        <input className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("address", { required: true })} label="address" />
       </div>
       <div >
          <label className="font-semibold md:text-md text-sm">Contact Number</label>
        <input className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("number", { required: true })} label="number" />
       </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedContactId ? "Update Contact" : "Create Contact"}</button>
    
   </form>
  <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold "> Contact Table</h2> 
   <div className="w-full overflow-x-scroll">
    <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-md">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">email</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">number</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    {speech && speech?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
            <td className="px-6 py-4 ">{CONTACT_DATA.PHONE}</td>
            <td className="px-6 py-4 ">{CONTACT_DATA.EMAIL}</td>
            <td className="px-6 py-4 ">
            <div className="md:w-[300px] w-[150px] h-[100px] text-black overflow-y-scroll">
      <div>
        {i.address}
      </div>
    </div>
            </td>
             <td className="py-4 flex justify-start items-center gap-1">
         <button onClick={() => handleUpdate(i._id)} className="text-slate-800 hover:bg-slate-800 hover:text-white border-solid border-[1px] rounded-md px-2 py-1 border-slate-800 flex justify-center items-center gap-1 ">
        <FaEdit /> Edit 
      </button>
         <button onClick={() => handleRemove(i._id)} className="text-[#e53935] hover:text-white hover:bg-[#e53935] border-solid border-[1px] rounded-md px-2 py-1 border-[#e53935] flex justify-center items-center gap-1 ">
        <MdDeleteForever /> Delete 
      </button>
        </td> 
        </tr>
    </tbody>
    ))} 
</table>
</div>
        </div>
    );
};

export default ContactPost;