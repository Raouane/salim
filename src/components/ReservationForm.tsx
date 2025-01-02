import { useState } from "react";
import MenuCard from "./MenuCard";
import FormFields from "./FormFields";

const menus = {
  tunisien: {
    entree: "Brik à l'œuf",
    plat: "Couscous aux légumes",
    dessert: "Zlabia",
    price: 30
  },
  marocain: {
    entree: "Pastilla",
    plat: "Tajine d'agneau",
    dessert: "Corne de gazelle",
    price: 35
  },
  algerien: {
    entree: "Bourek",
    plat: "Chakchouka",
    dessert: "Kalb el louz",
    price: 25
  },
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    guests: 50,
    date: "",
    time: "",
    selectedMenu: "",
  });

  const [showMenus, setShowMenus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Réservation envoyée avec succès !");
  };

  const selectedMenuPrice = formData.selectedMenu ? menus[formData.selectedMenu as keyof typeof menus].price : 30;
  const totalPrice = formData.guests * selectedMenuPrice;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormFields formData={formData} setFormData={setFormData} />

        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setShowMenus(!showMenus)}
            className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-xl font-display"
          >
            {showMenus ? "Masquer les menus" : "Choisissez votre menu"}
          </button>
          
          {showMenus && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {Object.entries(menus).map(([type, menu]) => (
                <MenuCard
                  key={type}
                  type={type.charAt(0).toUpperCase() + type.slice(1)}
                  entree={menu.entree}
                  plat={menu.plat}
                  dessert={menu.dessert}
                  price={menu.price}
                  selected={formData.selectedMenu === type}
                  onSelect={() => setFormData({ ...formData, selectedMenu: type })}
                />
              ))}
            </div>
          )}
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