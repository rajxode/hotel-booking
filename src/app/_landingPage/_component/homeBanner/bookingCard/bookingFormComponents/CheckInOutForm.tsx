
import React, { useEffect } from "react";
import { Props } from "@/types/landingPage/bookingTypes";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CheckInOutForm:React.FC<Props> = ({bookingData, setBookingData}) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  useEffect(() => {
    if(date && date.from && date.to) {
      setBookingData({
        ...bookingData,
        checkIn:{
          date: date.from.toString().slice(4,15),
          day: date.from.toString().slice(0,3)
        },
        checkOut:{
          date: date.to.toString().slice(4,15),
          day: date.to.toString().slice(0,3)
        }
      })
    }
  }, [date]);

  return (
    <div className="w-1/2 h-full">
      <Popover>
        <PopoverTrigger className="w-full flex h-full">
          <div className='w-1/2 flex flex-col justify-around p-2 border-gray-400 border-r h-full items-start'>
              <div className='text-sm'>
                  Check-In
                  &nbsp;
                  <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
              </div>
              <div className='text-xl'>
                  {bookingData?.checkIn?.date}
              </div>
              <div className='text-sm'>
                  {bookingData?.checkIn?.day}
              </div>
          </div>
          <div className='w-1/2 flex flex-col justify-around p-2 border-gray-400 border-r h-full items-start'>
              <div className='text-sm'>
                  Check-Out
                  &nbsp;
                  <span className='text-blue-400'><i className="fa-solid fa-chevron-down"></i></span>
              </div>
              <div className='text-xl'>
                  {bookingData?.checkOut?.date}
              </div>
              <div className='text-sm'>
                  {bookingData?.checkOut?.day}
              </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
    )
}

export default CheckInOutForm;
