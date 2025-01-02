import { Calendar, Clock, MapPin } from "lucide-react";

interface FormFieldsProps {
  formData: {
    eventType: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    guests: number;
    date: string;
    time: string;
  };
  setFormData: (data: any) => void;
}

const FormFields = ({ formData, setFormData }: FormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type d'événement
        </label>
        <select
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          value={formData.eventType}
          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
        >
          <option value="">Sélectionnez le type d'événement</option>
          <option value="mariage">Mariage</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="bapteme">Baptême</option>
          <option value="autre">Autre</option>
        </select>
      </div>
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
  );
};

export default FormFields;