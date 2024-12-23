'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Plus, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

const roomSchema = z.object({
  name: z.string().min(1, "Room name is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  price: z.number().min(0, "Price must be non-negative"),
  description: z.string().min(1, "Room description is required"),
})

const hotelSchema = z.object({
  name: z.string().min(1, "Hotel name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(1, "Location is required"),
  price: z.number().min(0, "Price must be non-negative"),
  amenities: z.array(z.string()).min(1, "At least one amenity is required"),
  customAmenities: z.string(),
  images: z
    .array(z.instanceof(File))
    .refine((files) => files.length > 0, "At least one image is required")
    .refine(
      (files) => files.every((file) => file.size <= MAX_FILE_SIZE),
      `Image size should be less than 5MB`
    )
    .refine(
      (files) => files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
      "Only .jpg, .png, and .webp formats are supported"
    ),
  rooms: z.array(roomSchema).min(1, "At least one room is required"),
})

type HotelFormValues = z.infer<typeof hotelSchema>

const basicAmenities = [
  "Free Wi-Fi",
  "Parking",
  "Air Conditioning",
  "Restaurant",
  "Room Service",
  "Fitness Center",
  "Swimming Pool",
  "Spa",
  "Pet-Friendly",
  "Wheelchair Accessible"
]

export default function AddHotel() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<HotelFormValues>({
    resolver: zodResolver(hotelSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      price: 0,
      amenities: [],
      customAmenities: "",
      images: [],
      rooms: [{ name: "", capacity: 1, price: 0, description: "" }],
    },
  })

  async function onSubmit(data: HotelFormValues) {
    setIsSubmitting(true)
    try {
      // Combine selected amenities with custom amenities
      const allAmenities = [
        ...data.amenities,
        ...data.customAmenities.split(',').map(item => item.trim()).filter(item => item !== '')
      ]
      const submissionData = {
        ...data,
        amenities: allAmenities,
      }
    //   delete submissionData.customAmenities

      // Here you would typically send the data to your backend API
      console.log(submissionData)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push('/host/homestays')
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Hotel</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter hotel name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your hotel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter hotel location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Starting Price per Night</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="0.01" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amenities"
            render={() => (
              <FormItem>
                <FormLabel>Amenities</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {basicAmenities.map((amenity) => (
                    <FormField
                      key={amenity}
                      control={form.control}
                      name="amenities"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={amenity}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(amenity)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, amenity])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== amenity
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {amenity}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customAmenities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Amenities</FormLabel>
                <FormControl>
                  <Input placeholder="Enter custom amenities (comma-separated)" {...field} />
                </FormControl>
                <FormDescription>
                  Enter any additional amenities not listed above, separated by commas
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".jpg,.png,.webp"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || [])
                      field.onChange(files)
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Upload images of your hotel (max 5MB each, .jpg, .png, or .webp)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Rooms</h2>
            {form.watch('rooms').map((room, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name={`rooms.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Room Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter room name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`rooms.${index}.capacity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Capacity</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`rooms.${index}.price`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price per Night</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.01" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`rooms.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe the room" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => {
                        const rooms = form.getValues('rooms')
                        form.setValue('rooms', rooms.filter((_, i) => i !== index))
                      }}
                    >
                      <X className="w-4 h-4 mr-2" /> Remove Room
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const rooms = form.getValues('rooms')
                form.setValue('rooms', [...rooms, { name: "", capacity: 1, price: 0, description: "" }])
              }}
            >
              <Plus className="w-4 h-4 mr-2" /> Add Room
            </Button>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Add Hotel'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

