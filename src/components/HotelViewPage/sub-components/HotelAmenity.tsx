import { Badge } from "@/components/ui/badge";
import { Car, Dumbbell, Utensils, Wifi } from "lucide-react";
import React from "react";

const amenityIcons = {
  "Free Wi-Fi": Wifi,
  Parking: Car,
  Restaurant: Utensils,
  "Fitness Center": Dumbbell,
};

const HotelAmenity: React.FC<{ amenities?: string[] }> = ({ amenities }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Amenities</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {amenities?.map((amenity) => {
          const IconComponent =
            amenityIcons[amenity as keyof typeof amenityIcons];
          return (
            <Badge
              key={amenity}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              {amenity}
            </Badge>
          );
        })}
      </div>
    </>
  );
};

export default HotelAmenity;
