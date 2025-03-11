import Sidepanel from "./Sidepanel";
import { toast } from "sonner";
import { teams, playerImage } from "../admin/Adminpanel";
const Auction = () => {
  return <Auctiondashboard />;
};

const Auctiondashboard = () => {

  return (
    <div className="bg-darkgrey">
      <div className="flex items-start justify-center h-screen font-poppins-medium text-white">
        <div className="basis-3/4 flex items-center justify-center h-screen">
          <div className="w-11/12 h-3/4 bg-litegrey rounded-xl">
            <img
              src={playerImage}
              alt="player image"
              className="rounded-xl object-fit h-full w-full"
              onError={() => toast.error("Failed to load player image")}
            />
          </div>
        </div>
        <div className="basis-1/4 bg-litegrey h-screen text-black py-3 px-2">
          <Sidepanel Teams={teams} />
        </div>
      </div>
    </div>
  );
};

export default Auction;
