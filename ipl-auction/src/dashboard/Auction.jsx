import Sidepanel from "./Sidepanel";
const Auction = () => {
  return (
    <div className="bg-darkgrey">
      <div className="flex items-start justify-center h-screen font-poppins-medium text-white">
        <div className="basis-3/4 flex items-center justify-center h-screen">
          <div className="w-3/4 h-3/5 bg-litegrey rounded-xl">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/67cfbac60001d83c0575/files/67cfbb41003caf791104/view?project=67c99a5d002a056012a1"
              alt="players"
              className="rounded-xl object-fit"
            />
          </div>
        </div>
        <div className="basis-1/4 bg-litegrey h-screen text-black">
        <Sidepanel />
        </div>
      </div>
    </div>
  );
};

export default Auction;
