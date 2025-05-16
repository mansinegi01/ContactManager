import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

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
        console.error("Error fetching contacts:", error);
        alert("Something went wrong");
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
              <td className="p-2 w-1/3 border-2 border-gray-400 ">{contact.name}</td>
              <td className="p-2 w-1/3 border-2 border-gray-400 ">{contact.phone}</td>
              <td className="p-2 w-1/3   space-x-2 border-2 border-gray-400 ">
                <button type="button" class="btn btn-primary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
