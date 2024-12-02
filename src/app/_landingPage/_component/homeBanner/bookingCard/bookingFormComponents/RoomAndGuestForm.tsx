import React from "react";
import { Props } from "@/types/landingPage/bookingTypes";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RoomAndGuestForm: React.FC<Props> = ({ bookingData, setBookingData }) => {
  const handleRoomChange = (value: string) => {
    setBookingData({
      ...bookingData,
      roomAndGuest: {
        ...bookingData.roomAndGuest,
        room: value,
      },
    });
  };
  const handleGuestChange = (value: string) => {
    setBookingData({
      ...bookingData,
      roomAndGuest: {
        ...bookingData.roomAndGuest,
        guest: value,
      },
    });
  };
  return (
    <div className="w-1/4 flex flex-col justify-around p-2">
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-sm cursor-pointer">
            Room and Guest &nbsp;
            <span className="text-blue-400">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </PopoverTrigger>
        <div className="flex flex-start">
          <div>
            <span className="text-xl font-bold">
              {bookingData?.roomAndGuest?.room}
            </span>
            <span> Room</span>
          </div>
          &nbsp;
          <div>
            <span className="text-xl font-bold">
              {bookingData?.roomAndGuest?.guest}
            </span>
            <span> Guests</span>
          </div>
        </div>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="room">Room: </Label>
                <Select
                  defaultValue={bookingData.roomAndGuest.room}
                  onValueChange={handleRoomChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={bookingData.roomAndGuest.room} />
                  </SelectTrigger>
                  <SelectContent>
                    {new Array(10).fill(0).map((_, i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="guest">Guests: </Label>
                <Select
                  defaultValue={bookingData.roomAndGuest.guest}
                  onValueChange={handleGuestChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={bookingData.roomAndGuest.guest} />
                  </SelectTrigger>
                  <SelectContent>
                    {new Array(10).fill(0).map((_, i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default RoomAndGuestForm;
