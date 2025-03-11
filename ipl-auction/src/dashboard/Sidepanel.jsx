import { useEffect, useState } from "react";

const Sidepanel = ({Teams}) => {
  const [teamlist, setTeamList] = useState([]);
  useEffect(() => {
    const teams = Teams //localStorage.getItem("teams")
    setTeamList(teams);
  });
  return (
    <div className="text-black">
      {teamlist ? (
        teamlist.map((teams, index) => (
          <div
            key={index}
            className="bg-sky-600 flex items-start justify-between px-2 py-4 my-2.5 mx-1.5 rounded-md"
          >
            <h1 className="text-white/90 font-rubik-medium text-xl uppercase">
              {teams.name}
            </h1>
            <h1 className="text-white/90">balance : {teams.balance} INR</h1>
          </div>
        ))
      ) : (
        <h1>LOADING TEAMS</h1>
      )}
    </div>
  );
};

export default Sidepanel;
