import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate()

  const handleEdit = (e)=>{
      const [name,value] = e.target;
      setContacts((prev)=>({
        ...prev,
        [name] : value
      }))

    }


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/services/view_all", {
          withCredentials: true
        });

        if (response.status === 200) {
          setContacts(response.data.data);
          console.log("All contacts fetched");
        } else {
          alert(response.data.message || "Empty list");
        }
      } catch (error) {
        console.error("Cookies not generated", error);
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected error occurred");
        }
        navigate('/login')
      }
    };

    
    fetchContacts();
  }, []);

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">All Contacts</h1>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="flex justify-evenly">
            <th className="p-2 text-left w-1/3">Name</th>
            <th className="p-2 text-left w-1/3">Phone</th>
            <th className="p-2 text-left w-1/3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} className="flex justify-center border-b ">
              <td className="p-2 w-1/3 border-2 border-gray-400 ">{contact.name} {contact.profileImage}</td>
              <td className="p-2 w-1/3 border-2 border-gray-400 ">{contact.phone}</td>
              <td className="p-2 w-1/3   space-x-2 border-2 border-gray-400  ">
                <button type="button" class="btn btn-primary m-2" onClick={handleEdit}>Edit</button>
                <button type="button" class="btn btn-primary ">Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
