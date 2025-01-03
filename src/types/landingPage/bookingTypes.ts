export interface LocationType {
    city:string;
    country:string;
}

interface DayAndDateType {
    date:string;
    day:string;
}

interface RoomAndGuestType {
    room:string;
    guest:string;
}

export interface BookingDataType {
    location:LocationType;
    checkIn:DayAndDateType;
    checkOut:DayAndDateType;
    roomAndGuest:RoomAndGuestType;
}

export interface Props {
    bookingData:BookingDataType;
    setBookingData:React.Dispatch<React.SetStateAction<BookingDataType>>
}