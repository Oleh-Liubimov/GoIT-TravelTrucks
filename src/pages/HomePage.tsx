import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="bg-[url('./assets/hero-image.jpg')] bg-cover h-full flex flex-col justify-center w-full">
      <div className="flex flex-col justify-center items-start ml-16">
        <h1 className="text-white text-5xl">Campers of your dreams</h1>
        <span className="text-white text-2xl mb-10">
          You can find everything you want in our catalog
        </span>
        <Button
          className="rounded-3xl bg-red-600 hover:bg-red-500"
          size="lg"
          onClick={() => navigate("/campers")}
        >
          View Now
        </Button>
      </div>
    </main>
  );
}
