"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  // console.log(formData);
  //1. check if user logged in
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  //2. get the input field from formData
  const nationalID = formData.get("nationalID");
  //3. To validate the national ID
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");
  const updateData = { nationality, countryFlag, nationalID };
  // console.log(updateData);

  //4. To update data on Supabase
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
  //5. to revalidate cache
  revalidatePath("/account/profile");
}
export async function deleteReservation(bookingId) {
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error("Manually set the delete to error"); 
  // 1. To make sure user is logged in
  const session = await auth();
  if (!session) throw new Error("You must logged in");
  //2.1 To prevenet malicous user from deleting any booking
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allow to delete this booking");

  //2.2 To delete booking on Supabase
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);
  if (error) {
    throw new Error("Booking could not be deleted");
  }
  //3. To revalidate cache
  revalidatePath("/account/reservations");
}
export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must logged in");
  // 2) Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allow to edit this booking");
  // 3) Building update data
  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 4) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();
  //5)Error handling
  if (error) {
    throw new Error("Booking could not be updated");
  }
  //6) To revalidate cache
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath(`/account/reservations`);
  //7) redirect to reservation
  redirect("/account/reservations");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
