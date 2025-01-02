import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
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
    guests: 1,
    date: "",
    time: "",
    selectedMenu: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
    console.log(formData);
    alert("Réservation envoyée avec succès !");
  };

  const totalPrice = formData.guests * 30;

  return (
    <div className="max-w-4xl mx-auto p-6">
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
              Nombre de personnes
            </label>
            <input
              type="number"
              min="1"
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
            <input
              type="time"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
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