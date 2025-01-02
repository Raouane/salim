import Navbar from "../components/Navbar";
import ReservationForm from "../components/ReservationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Image */}
      <div className="pt-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <img
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
            alt="Plat traditionnel"
            className="rounded-lg object-cover w-full h-64 mb-8"
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-4">
              SALIM Traiteur
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos délicieux menus traditionnels pour vos événements
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Section */}
      <section id="reservation" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-center text-primary mb-12">
            Réservez votre menu
          </h2>
          <ReservationForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display text-primary mb-8">Contact</h2>
          <p className="text-gray-600">
            Pour toute question, n'hésitez pas à nous contacter
          </p>
          <div className="mt-4">
            <a href="tel:+33123456789" className="text-primary hover:underline">
              Téléphone : 01 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;