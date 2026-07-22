import { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/messages";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH MESSAGES
  // =========================

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Messages:", response.data);

      setMessages(response.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch messages:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // =========================
  // MARK AS READ
  // =========================

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API}/${id}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchMessages();
    } catch (error) {
      console.error(
        "Failed to mark message as read:",
        error.response?.data || error.message
      );
    }
  };

  // =========================
  // DELETE MESSAGE
  // =========================

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("🗑 Message Deleted");

      fetchMessages();
    } catch (error) {
      console.error(
        "Failed to delete message:",
        error.response?.data || error.message
      );

      alert("❌ Failed to delete message");
    }
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Messages...
      </div>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-black">
          Messages
        </h1>

        <span className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full">
          {messages.length} Messages
        </span>

      </div>

      {messages.length === 0 ? (

        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-8">

          <p className="text-gray-400">
            No messages received yet.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {messages.map((message) => (

            <div
              key={message._id}
              className={`bg-[#0f172a] border rounded-2xl p-6 ${
                message.isRead
                  ? "border-white/10"
                  : "border-cyan-400"
              }`}
            >

              {/* HEADER */}

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-2xl font-bold">
                      {message.name}
                    </h2>

                    {!message.isRead && (

                      <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-bold">
                        NEW
                      </span>

                    )}

                  </div>

                  <p className="text-cyan-400 mt-1">
                    {message.email}
                  </p>

                  {message.subject && (

                    <p className="text-gray-400 mt-2">
                      Subject: {message.subject}
                    </p>

                  )}

                </div>

                <p className="text-gray-500 text-sm">
                  {new Date(
                    message.createdAt
                  ).toLocaleString()}
                </p>

              </div>


              {/* MESSAGE */}

              <div className="mt-6 bg-[#020617] rounded-xl p-5">

                <p className="text-gray-300 leading-7 whitespace-pre-wrap">
                  {message.message}
                </p>

              </div>


              {/* ACTIONS */}

              <div className="flex flex-wrap gap-4 mt-6">

                {!message.isRead && (

                  <button
                    onClick={() =>
                      markAsRead(message._id)
                    }
                    className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-400 hover:text-black duration-300"
                  >
                    ✓ Mark as Read
                  </button>

                )}

                <button
                  onClick={() =>
                    deleteMessage(message._id)
                  }
                  className="border border-red-400/40 text-red-400 px-5 py-3 rounded-xl hover:bg-red-400 hover:text-black duration-300"
                >
                  🗑 Delete Message
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Messages;