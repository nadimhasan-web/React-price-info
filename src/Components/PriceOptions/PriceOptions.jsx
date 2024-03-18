import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Smartphone",
      price: 599.99,
      features: [
        "High-resolution display",
        "Dual-camera system",
        "Fingerprint sensor",
        "4G LTE connectivity",
        "Facial recognition unlock",
      ],
    },
    {
      id: 2,
      name: "Laptop",
      price: 1299.99,
      features: [
        "13-inch Retina display",
        "Intel Core i7 processor",
        "512GB SSD storage",
        "8GB RAM",
        "Backlit keyboard",
      ],
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 199.99,
      features: [
        "Heart rate monitor",
        "GPS tracking",
        "Water-resistant design",
        "Bluetooth connectivity",
        "Fitness activity tracking",
      ],
    },
    {
      id: 4,
      name: "Digital Camera",
      price: 799.99,
      features: [
        "24-megapixel sensor",
        "4K video recording",
        "Interchangeable lenses",
        "Touchscreen interface",
        "Wi-Fi and NFC connectivity",
      ],
    },
    {
      id: 5,
      name: "Wireless Headphones",
      price: 149.99,
      features: [
        "Active noise cancellation",
        "Bluetooth 5.0 connectivity",
        "20-hour battery life",
        "Built-in microphone",
        "Adjustable headband",
      ],
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-3xl text-center">Best Price</h2>
      <div className="grid grid-cols-3 gap-5 mx-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
