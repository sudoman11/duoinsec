
export default function Partners() {
  // Partners data with name, image URL, and link
  const partners = [
    {
      name: "Embosys",
      image: "", // Replace with the actual image path
      url: "",   // Replace with the partner's website URL
    },
    {
      name: "Partner 2",
      image: "",
      url: "",
    },
    {
      name: "Partner 3",
      image: "",
      url: "",
    },
    {
      name: "Partner 4",
      image: "",
      url: "",
    },
    // Add more partners as needed
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations worldwide to deliver exceptional value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-28 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
