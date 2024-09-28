import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return <main className="flex flex-col px-12 pb-8 pt-24 justify-center items-center">
    <h1>404</h1>
    <h2>Sorry, page is not found. Please return to home page.</h2>
    <Button variant="outline" className="rounded" onClick={()=> navigate('/')} >Go home</Button>
  </main>;
}
