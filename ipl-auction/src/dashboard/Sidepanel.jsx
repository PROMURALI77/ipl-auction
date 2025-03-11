import { useEffect, useState } from "react"

const  tl = [
  {
    name  : "murali",
    balance : "100.000",
  },
  {
    name  : "murali2",
    balance : "100.000",
  },
  {
    name  : "murali3",
    balance : "100.000",
  },
  {
    name  : "murali4",
    balance : "100.000",
  },
]

const Sidepanel = () => {
  const [teamlist, setTeamList] = useState([])
  useEffect(() => {
    const teams = tl //localStorage.getItem("teams")
    setTeamList(teams)
  },[])
  return (
    <div className="text-black">
      { teamlist ?  (
        teamlist.map((teams, index) => (
          <div key={index} className="bg-sky-500 flex items-start justify-center px-3 py-2 m-1 rounded-md">{
            <div className="text-white">{teams.name}</div>
          }</div>
        ))
      ) : ( <h1>LOADING TEAMS</h1> ) 

      }
    </div>
  )
}

export default Sidepanel