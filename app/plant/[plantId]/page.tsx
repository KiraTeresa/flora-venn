import { MOCK_PLANT_DATA } from "@/src/constants/MOCK-plant-data";
import { StatsList } from "@/components/stats/statsList";
import { InfoBox } from "@/components/infoBox";
import { CareSection } from "@/components/care/careSection";

export default function PlantDetail({ params }: { params: { plantId: string } }) {
    const { plantId } = params;
    const plantDetails = MOCK_PLANT_DATA.find((plant) => plant.id === plantId);

    if (!plantDetails) {
        return <div>Sorry, we couldn't find a plant with id {plantId} in your possession</div>;
    }

    return (
        <>
            <div className="h-80 flex flex-col justify-between">
                <h2 className="font-semibold text-xl pt-6">{plantDetails.name}</h2>
                <img src={plantDetails.image} alt={`image of ${plantDetails.name}`} className="h-3/4 self-end" />
            </div>
            <InfoBox headline="plant bio" content={plantDetails.description} />
            <StatsList plantDetails={plantDetails} />
            <CareSection careHistory={plantDetails.careHistory} careInstructions={plantDetails.careInstructions} />
        </>
    )
}