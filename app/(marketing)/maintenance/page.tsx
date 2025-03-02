import Image from "next/image";

import truckImage from "./truck.jpeg";

export default function Maintenance() {
  return (
    <div className="space-y-12 text-center">
      <h1 className="text-4xl font-light">We are in maintenance mode</h1>

      <div className="flex justify-center">
        <Image src={truckImage} alt="Truck" />
      </div>

      <p className="text-2xl font-thin text-gray-600">
        We are performing some updates on the website. Please come back later.
      </p>
    </div>
  );
}
