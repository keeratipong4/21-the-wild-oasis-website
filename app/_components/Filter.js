"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams(); //to get the current params in the URL
  const router = useRouter(); //To replace the URL
  const pathname = usePathname(); //To read the path of the URL which is /cabins
  const activeFilter = searchParams.get("capacity") ?? "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); //is a web API that provides a few methods that we can use to manipulate the URL query parameters.
    params.set("capacity", filter); //to set the URL, but this is not the final step
    // console.log(params.toString());//log >> capacity=medium
    // console.log(pathname); //log >> /cabins
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); //{ scroll: false } prevent from scroll back up to the top
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleClick={handleFilter}
        activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button
        filter="small"
        handleClick={handleFilter}
        activeFilter={activeFilter}>
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleClick={handleFilter}
        activeFilter={activeFilter}>
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleClick={handleFilter}
        activeFilter={activeFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  );
}
function Button({ filter, handleClick, activeFilter, children }) {
  return (
    <button
      onClick={() => handleClick(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}>
      {children}
    </button>
  );
}

export default Filter;
