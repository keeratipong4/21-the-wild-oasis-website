import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

// export async function GET() {
//     return Response.json({ test: "test" });
//   }

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookdates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookdates });
  } catch {
    return Response.json({ message: "Cabin is not found" });
  }
}
