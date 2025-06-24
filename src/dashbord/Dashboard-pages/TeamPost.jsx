import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import { useForm } from "react-hook-form";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { createTeam, deleteTeam, readAllTeam, updateTeam } from "../../services/index/teamPost";


const TeamPost = () => {
      const { register, handleSubmit, reset } = useForm(); 
    const [speech, setSpeech] = useState([]);
   const [selectedTeamId, setSelectedTeamId] = useState(null);

   const refetchSchoolTeam = async () => {
     try {
       const { data } = await readAllTeam();
       setSpeech(data.data);
     } catch (error) {
       console.error(error);
     }
   };
    const onSubmit = async (data) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const imgbbApiKey = '2a78098a00ee689391905aab5c227fd8';
            
            if (data.image[0] instanceof File) {
            const imgbbResponse = await uploadImageToImgBB(data.image[0], imgbbApiKey);
            data.image = imgbbResponse.data.url;
            }
          if (selectedTeamId) {
            const result = await updateTeam(token, selectedTeamId, data); // Call updateTeacher function with selectedNavbarId and data
            toast.success('Team updated successfully!');
          } else {
            // Create new teacher
            const result = await createTeam({ token, formData: data });
            toast.success('Team created successfully!');
          }
          reset(); // Reset the form after submission
          refetchSchoolTeam()
        } catch (error) {
          console.error(error.message);
        }
      };
      const handleUpdate = async (iconId) => {
        try {
          // Fetch the teacher's information based on the iconId
          const token = "your_token_here"; // Replace with actual token retrieval logic
          const teacherInfo = await readAllTeam(token, iconId); // Implement a function to fetch teacher information
          reset(teacherInfo); // Assuming reset is a function to reset the form with new values
          setSelectedTeamId(iconId); // Set the selectedNavbarId when update button is clicked
        } catch (error) {
          console.error(error.message);
          // Handle error (e.g., show error message)
        }
      };
    const handleRemove = async (iconId) => {
        try {
          const token = "your_token_here"; // Replace with actual token retrieval logic
          await deleteTeam(token, iconId); // Call deleteTeacher function with iconId
          toast.success('Team removed successfully!');
          refetchSchoolTeam()
        } catch (error) {
          console.error(error.message);
        }
      };
      const uploadImageToImgBB = async (imageFile, apiKey) => {
        try {
          const formData = new FormData();
          formData.append('image', imageFile);
      
          const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
          });
      
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error(error.message);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllTeam();
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
           <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold capitalizemy-4">Team</h2>
             <h2 className="text-gray-900  mx-auto md:w-[30%] text-center w-[50%] my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl md:text-xl text-lg font-semibold ">Team Form</h2> 

            <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md md:mb-20 mb-10 md:px-3 px-1 md:py-3 py-1">
     
     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
       <div >
          <label className="font-semibold md:text-md text-sm">Name</label>
        <input className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("name", { required: true })} label="name" />
       </div>
       <div>
         <label className="font-semibold md:text-md text-sm">Designation</label>
         <textarea className="border py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("designation")} label="designation" />
        </div>
        <div>
        <label className="font-semibold md:text-md text-sm">image:</label>
      <input className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "   {...register("image", { required: true })} type="file" accept="image/*" />
        </div>
     </div>

     <button className="md:ml-0 ml-4 md:px-2 px-1 rounded md:py-2 py-1 md:mt-4 my-2 md:w-[200px] w-[140px] hover:bg-white gap-2 border border-[#1EB2A6] hover:text-[#1EB2A6] bg-[#1EB2A6] text-white md:text-md text-sm flex justify-center items-center" 
      type="submit">{selectedTeamId ? "Update Team" : "Create Team"}</button>
    
   </form>
  <h2 className="text-gray-900 mx-auto md:w-[30%]  w-[70%] text-center my-6 border-x-2 border-[#1eb2a6] px-2 lg:text-2xl  capitalize md:text-xl text-lg font-semibold ">Team Table</h2> 
   <div className="w-full overflow-x-scroll">
    <table className="w-full divide-y divide-[#457B9D] my-6 bg-white shadow-md">
    <thead className="bg-[#DCE8F5] text-[#457B9D]">
        <tr>
        <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Photo</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Designation</th>
            <th className="px-6 py-3 text-left md:text-sm text-xs font-semibold  uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    {speech && speech?.map((i, index) => ( 
    <tbody key={index} className="w-full divide-y divide-[#457B9D] my-6">
        <tr>
        <td className="px-6 py-4 "> <img src={i.image} className="w-[100px] h-[100px]"/></td>
            <td className="px-6 py-4 ">{i.name}</td>
            <td className="px-6 py-4 ">
            <div className="md:w-[300px] w-[150px] h-[100px] text-black overflow-y-scroll">
      <div>
        {i.designation}
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

export default TeamPost;