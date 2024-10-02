import { Card } from "@nextui-org/card";
import {
  FaMoneyBill,
  FaRegCalendarAlt,
  FaTachometerAlt,
  FaBookReader,
} from "react-icons/fa";

const features = [
  {
    title: "Wide Range of Information",
    description:
      "You can find wide range of information about pet food, shelter, nutrition and all kind of other staff about pet.",
    icon: <FaBookReader className="w-12 h-12 text-green-600" />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Enjoy premium contents with affordable subscription plans. You can gain so much knowledge about pet at a very low cost.",
    icon: <FaMoneyBill className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our friendly support team is always here to assist you with any of your problems, any time of day.",
    icon: <FaRegCalendarAlt className="w-12 h-12 text-purple-600" />,
  },
  {
    title: "Top-Quality Pet Contents",
    description:
      "All our bikes are regularly maintained and inspected to ensure a smooth and safe ride every time.",
    icon: <FaTachometerAlt className="w-12 h-12 text-yellow-600" />,
  },
];

const WhatDoWeDo = () => {
  return (
    <div className="max-w-6xl lg:mx-auto mx-5 py-10">
      <div className="mb-5">
        <h1 className="lg:text-5xl md:text-5xl font-bold uppercase mt-5 mb-10 text-center">
          What Do We Do
          <span className="text-teal-600 lg:text-6xl text-3xl"> ?</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card
            isBlurred
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhatDoWeDo;
