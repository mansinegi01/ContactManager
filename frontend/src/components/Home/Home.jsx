import { motion } from 'framer-motion';
import { UserPlus, UserMinus, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
};

export default function Home() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Contact",
      icon: <UserPlus className="w-8 h-8" />,
      onClick: () => navigate("/add")
    },
    {
      title: "Remove Contact",
      icon: <UserMinus className="w-8 h-8" />,
      onClick: () => navigate("/remove")
    },
    {
      title: "View All Contacts",
      icon: <Users className="w-8 h-8" />,
      onClick: () => navigate("/view_all")
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 homepage">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 max-w-5xl w-full"
        initial="hidden"
        animate="visible"
      >
        {actions.map((action, i) => (
          <motion.div
            key={action.title}
            variants={cardVariants}
            custom={i}
            className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 cursor-pointer hover:scale-105 hover:bg-violet-500 transition-all "
            onClick={action.onClick}
          >
            <div className="text-indigo-600">{action.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{action.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
