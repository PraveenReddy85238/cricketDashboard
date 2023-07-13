// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {matchesData: []}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props

    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/RCB`)
    const data = await response.json()
    const CaseConversionData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }

    this.setState({matchesData: CaseConversionData})
  }

  render() {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesData
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <h1 className="latest-match-heading">LatestMatches</h1>
        <LatestMatch matchDetails={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
