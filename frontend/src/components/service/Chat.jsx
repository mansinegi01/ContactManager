import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function Chat() {
    const [message, setMessage] = useState("");
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const location = useLocation();



    useEffect(() => {
        if (location.state) {
            setContact(location.state);
            setLoading(false);
        } else {
            const fetchContact = async () => {
                try {
                    const res = await axios.get(`http://localhost:8000/services/contact/${id}`, {
                        withCredentials: true,
                    });

                    if (res.status === 200 && res.data.data) {
                        setContact(res.data.data);
                    } else {
                        console.error("Contact not found");
                    }
                } catch (err) {
                    console.error("Error fetching contact:", err);
                } finally {
                    setLoading(false);
                }
            };

            fetchContact();
        }
    }, [id, location.state]);

    if (loading) return <p className="p-4">Loading...</p>;

    if (!contact) {
        return (
            <div className="p-4 text-red-600">
                Contact not found. Please go back to the contact list.
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col p-0.5 absolute">
            <div className=" p-4 rounded-lg mb-4 relative w-full h-1/6 flex gap-7 ">
                <img src={contact.profileImage || "../public/download.png"} alt="" className="w-10 h-10 border-0 rounded-full" />
                <p className="text-xl font-bold mt-1">{contact.name}</p>

            </div>

            <div className="flex gap-1 justify-center  items-center absolute bottom-3 w-full h-12">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 border p-2 rounded "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-indigo-600 text-white px-2 py-2 rounded">
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
