import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Messages() {
  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/messages";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const glassCard =
    "relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70";

  if (loading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#1C1C1C] text-xl"
      >
        Loading Messages...
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-8"
      >
        <h1 className="text-4xl font-black text-[#1C1C1C]">
          Messages
        </h1>

        <span className="bg-[#ECEBE4] text-[#1C1C1C] px-4 py-2 rounded-full font-medium
          shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]">
          {messages.length} Messages
        </span>
      </motion.div>

      {messages.length === 0 ? (
        <div className={glassCard}>
          <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-8 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">
            <p className="text-[#6B6B6B]">No messages received yet.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <AnimatePresence>
            {messages.map((message, i) => (
              <motion.div
                key={message._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative p-[1.5px] rounded-3xl"
                style={{
                  background: message.isRead
                    ? "linear-gradient(to bottom right, white, rgba(218,221,216,0.7))"
                    : "linear-gradient(to bottom right, white, rgba(28,28,28,0.4))",
                }}
              >
                <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

                  <div className="flex flex-col md:flex-row md:justify-between gap-4">

                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-[#1C1C1C]">
                          {message.name}
                        </h2>

                        {!message.isRead && (
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-xs bg-[#1C1C1C] text-[#FAFAFF] px-3 py-1 rounded-full font-bold"
                          >
                            NEW
                          </motion.span>
                        )}
                      </div>

                      <p className="text-[#4A4A4A] mt-1">
                        {message.email}
                      </p>

                      {message.subject && (
                        <p className="text-[#6B6B6B] mt-2">
                          Subject: {message.subject}
                        </p>
                      )}
                    </div>

                    <p className="text-[#8A8A8A] text-sm">
                      {new Date(message.createdAt).toLocaleString()}
                    </p>

                  </div>

                  <div className="mt-6 bg-[#ECEBE4]/60 rounded-xl p-5 shadow-[inset_2px_2px_6px_rgba(28,28,28,0.08),inset_-2px_-2px_6px_rgba(255,255,255,0.8)]">
                    <p className="text-[#4A4A4A] leading-7 whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">

                    {!message.isRead && (
                      <motion.button
                        onClick={() => markAsRead(message._id)}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ y: 1, scale: 0.96 }}
                        className="px-5 py-3 rounded-xl font-semibold text-[#FAFAFF]
                          bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
                          shadow-[0_3px_0_#000000,0_6px_12px_-2px_rgba(28,28,28,0.35)]"
                      >
                        ✓ Mark as Read
                      </motion.button>
                    )}

                    <motion.button
                      onClick={() => deleteMessage(message._id)}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ y: 1, scale: 0.96 }}
                      className="px-5 py-3 rounded-xl font-semibold text-[#FAFAFF]
                        bg-gradient-to-b from-rose-400 to-rose-600
                        shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                    >
                      🗑 Delete Message
                    </motion.button>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

    </div>
  );
}

export default Messages;