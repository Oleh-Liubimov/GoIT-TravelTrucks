import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="bg-[url('./assets/hero-image.jpg')] bg-cover bg-no-repeat min-h-screen overflow-hidden flex flex-col justify-center">
      <div className="flex flex-col justify-center items-start ml-16">
        <h1 className="text-white text-5xl">Campers of your dreams</h1>
        <span className="text-white text-2xl mb-10">
          You can find everything you want in our catalog
        </span>
        <Button className="rounded-3xl bg-red-600 hover:bg-red-500" size="lg">
          View Now
        </Button>
      </div>
    </main>
  );
}
