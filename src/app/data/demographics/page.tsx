'use client'
import GenderDonut from "../GenderDonut";
import AgeHistogram from "../AgeHistogram";
import MaritalStatusHistogram from "./maritalBar";

export default function DemographicsDashboard () {
   

  return (
    <main className="my-6">
        <div className="w-full text-center py-3">
            <h1 className="text-3xl uppercase font-extrabold">
            Demographics Dashboard 
            </h1>
        </div>
        <div className="my-10">
      <GenderDonut />
      </div>
      <AgeHistogram />
      <div className="py-10">
      <MaritalStatusHistogram />
      </div> 

    </main>
  );
}
