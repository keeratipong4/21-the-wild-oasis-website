import Link from "next/link";
export const metadata = {
  title: "The Wild Oasis",
};

export default function page() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
