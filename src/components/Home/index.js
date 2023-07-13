// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    iplTeamsData: [],
  }

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    const teamData = iplData.teams

    const caseConversionData = teamData.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({
      iplTeamsData: caseConversionData,
    })
  }

  render() {
    const {iplTeamsData} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="container">
          {iplTeamsData.map(each => (
            <TeamCard eachTeamData={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
