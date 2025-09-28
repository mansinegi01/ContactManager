import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const location = useLocation();
   

    
    useEffect(() => {
    
        const fetchContact = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/services/contact/${id}`, {
                    withCredentials: true,
                });
                if (res.status === 200 && res.data.data) {
                    setContact(res.data.data);
                }
            } catch (err) {
                console.error("Error fetching contact:", err);
            } finally {
                setLoading(false);
            }
        };

        if (location.state) {
            setContact(location.state);
            setLoading(false);
        } else {
            fetchContact();
        }
    }, [id, location.state]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const msgObj = {
                sender: contact.name,
                message: message,
            };
            socketRef.current.emit("send-message", msgObj);
            setMessages((prev) => [...prev, msgObj]);
            setMessage("");
        }
    };

    if (loading) return <p className="p-4">Loading...</p>;
    if (!contact) return <div className="p-4 text-red-600">Contact not found.</div>;

    return (
        <div className="w-full h-screen flex flex-col p-2 ">
            <div className="p-1 flex items-center gap-4  w-full h-1/6">
                <img src={contact.profileImage || "/download.png"} alt="" className="w-10 h-10 rounded-full" />
                <p className="text-xl font-bold">{contact.name}</p>
            </div>

            <div className=" bg-gray-500 rounded-xl mb-4 w-full h-5/6">
                {messages.map((msg, idx) => (
                    <div key={idx} className="m-2 p-2 bg-white rounded shadow">
                        <strong>{msg.sender}:</strong> {msg.message}
                    </div>
                ))}
            </div>

            <div className="flex gap-2 w-full h-15">
                <input
                    type="textarea"
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded border"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage} className="bg-indigo-600 text-white px-4 py-2 rounded">
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
