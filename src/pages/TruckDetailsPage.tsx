import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTruckBuId } from "@/redux/trucks/operations";
import { selectTruckById, selectTrucks } from "@/redux/trucks/selectors";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export interface TruckDetailsPageProps {}

export default function TruckDetailsPage({}: TruckDetailsPageProps) {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) dispatch(fetchTruckBuId(id));
  }, [dispatch, id]);

  const truck = useAppSelector(selectTruckById);
  console.log(truck);
  return <main>Details</main>;
}
