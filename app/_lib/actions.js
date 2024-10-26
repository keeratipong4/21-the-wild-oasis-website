"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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
  console.log(updateData);

  //4. To update data on Supabase
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
  //5. to revalidate cache
  revalidatePath("/account/profile");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
