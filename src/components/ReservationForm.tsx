import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import MenuCard from "./MenuCard";

const menus = {
  tunisien: {
    entree: "Brik à l'œuf",
    plat: "Couscous aux légumes",
    dessert: "Zlabia",
  },
  marocain: {
    entree: "Pastilla",
    plat: "Tajine d'agneau",
    dessert: "Corne de gazelle",
  },
  algerien: {
    entree: "Bourek",
    plat: "Chakchouka",
    dessert: "Kalb el louz",
  },
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    guests: 50,
    date: "",
    time: "",
    selectedMenu: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Réservation envoyée avec succès !");
  };

  const totalPrice = formData.guests * 30;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          alt="Plat traditionnel"
          className="rounded-lg object-cover w-full h-64"
        />
        <img
          src="https://images.unsplash.com/photo-1540914124281-342587941389"
          alt="Service traiteur"
          className="rounded-lg object-cover w-full h-64"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom et Prénom
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Adresse
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de personnes
            </label>
            <input
              type="number"
              min="50"
              max="1000"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Date
            </label>
            <input
              type="date"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline-block w-4 h-4 mr-2" />
              Heure
            </label>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Sélectionnez une heure</option>
              {Array.from({ length: 15 }, (_, i) => i + 8).map((hour) => (
                <option key={hour} value={`${hour}:00`}>
                  {hour}:00
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-display text-primary">Choisissez votre menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(menus).map(([type, menu]) => (
              <MenuCard
                key={type}
                type={type.charAt(0).toUpperCase() + type.slice(1)}
                entree={menu.entree}
                plat={menu.plat}
                dessert={menu.dessert}
                selected={formData.selectedMenu === type}
                onSelect={() => setFormData({ ...formData, selectedMenu: type })}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            Prix total estimé : <span className="text-primary">{totalPrice}€</span>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Réserver
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;