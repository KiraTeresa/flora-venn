import { MOCK_PLANT_DATA } from "@/src/constants/MOCK-plant-data";
import { StatsList } from "@/components/stats/statsList";
import { InfoBox } from "@/components/infoBox";
import { CareSection } from "@/components/care/careSection";
import { CareHistory } from "@/components/care/careHistory";

export default function PlantDetail({ params }: { params: { plantId: string } }) {
    const { plantId } = params;
    const plantDetails = MOCK_PLANT_DATA.find((plant) => plant.id === plantId);

    if (!plantDetails) {
        return <div>Sorry, we couldn't find a plant with id {plantId} in your possession</div>;
    }

    return (
        <>
            <div className="mx-5 xl:mx-0 md:flex md:gap-10 md:justify-between">
                <div className="h-80 flex flex-col justify-between">
                    <h2 className="font-semibold text-xl pt-6 xl:ps-5">{plantDetails.name}</h2>
                    <img src={plantDetails.image} alt={`image of ${plantDetails.name}`} className="h-3/4 self-end" />
                </div>
                <div>
                    <InfoBox headline="plant bio" content={plantDetails.description} className="max-w-sm lg:max-w-xl md:mt-40" />
                    <StatsList plantDetails={plantDetails} className="max-w-sm md:mt-20" />
                </div>
                <CareHistory historyArr={plantDetails.careHistory} className="hidden md:block" />
            </div>
            <CareSection careHistory={plantDetails.careHistory} careInstructions={plantDetails.careInstructions} />
        </>
    )
}