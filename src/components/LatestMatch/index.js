// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetails
  return (
    <div>
      <p>{competingTeam}</p>
    </div>
  )
}

export default LatestMatch


Uncaught TypeError: Cannot destructure property 'umpires' of 'matchDetails' as it is undefined.