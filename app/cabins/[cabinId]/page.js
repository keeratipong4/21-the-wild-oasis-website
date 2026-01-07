export const revalidate = 0;

export default function Page({ params }) {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-500">
        DEBUG: Hello World V2. ID: {params.cabinId}
      </h1>
      <p className="text-xl">Timestamp: {new Date().toISOString()}</p>
      <p>If you see this, routing works.</p>
    </div>
  );
}
