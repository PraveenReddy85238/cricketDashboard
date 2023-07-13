// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamData} = props
  const {id, name, teamImageUrl} = eachTeamData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-logo-name-container">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
