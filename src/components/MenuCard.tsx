interface MenuCardProps {
  type: string;
  entree: string;
  plat: string;
  dessert: string;
  selected: boolean;
  onSelect: () => void;
}

const MenuCard = ({ type, entree, plat, dessert, selected, onSelect }: MenuCardProps) => {
  return (
    <div
      className={`border rounded-lg p-6 cursor-pointer transition-all ${
        selected
          ? "border-primary bg-primary/10 shadow-lg"
          : "border-gray-200 hover:border-primary/50"
      }`}
      onClick={onSelect}
    >
      <h3 className="font-display text-xl mb-4 text-primary">Menu {type}</h3>
      <div className="space-y-2 text-gray-600">
        <p><span className="font-semibold">Entrée :</span> {entree}</p>
        <p><span className="font-semibold">Plat :</span> {plat}</p>
        <p><span className="font-semibold">Dessert :</span> {dessert}</p>
      </div>
      <div className="mt-4 text-right">
        <span className="text-lg font-semibold text-primary">30€ / personne</span>
      </div>
    </div>
  );
};

export default MenuCard;