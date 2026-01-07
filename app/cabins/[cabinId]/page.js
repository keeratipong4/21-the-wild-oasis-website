import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = { title: "cabin" };
export const revalidate = 0;

export async function generateMetadata({ params }) {
  try {
    const { name } = await getCabin(params.cabinId);
    return { title: `Cabin ${name}` };
  } catch (error) {
    return { title: "Cabin not found" };
  }
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  let cabin;
  try {
    cabin = await getCabin(params.cabinId);
  } catch (err) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Debug Error</h1>
        <p className="text-xl">{err.message}</p>
        <p className="mt-4 text-gray-400">
          Supabase URL Present: {process.env.SUPABASE_URL ? "Yes" : "No"}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
