import { lazy } from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const CampersPage = lazy(() => import("./pages/CampersPage"));
const TruckDetailsPage = lazy(() => import("./pages/TruckDetailsPage"));
const Reviews = lazy(() => import("./components/Reviews"));
const Features = lazy(() => import("./components/Features"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CampersPage />} />
        <Route path="/campers/:id" element={<TruckDetailsPage />}>
          <Route path="/campers/:id/features" element={<Features />} />
          <Route path="/campers/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
