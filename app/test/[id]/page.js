export default function Page({ params }) {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl font-bold text-green-500">
        TEST ROUTE WORKS. ID: {params.id}
      </h1>
      <p>If you see this, Dynamic Routing is functional.</p>
    </div>
  );
}
