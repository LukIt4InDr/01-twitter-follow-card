import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App () {
  return (
    <>
      <div className='tw-follow-card-suggest'>
        <header className='tw-follow-card-header'>
          <h2>Tal vez te guste</h2>
        </header>

        <TwitterFollowCard userName={"shirakamifubuki"} name={"白上フブキ🌽フブキングダム👑"} isFollowing></TwitterFollowCard>
        <TwitterFollowCard userName={"shirakamifubuki"} name={"白上フブキ🌽フブキングダム👑"} isFollowing={false}></TwitterFollowCard>
        <TwitterFollowCard userName={"shirakamifubuki"} name={"白上フブキ🌽フブキングダム👑"} isFollowing></TwitterFollowCard>

        <footer className='tw-follow-card-footer'>
          <span>Mostrar más</span>
        </footer>
      </div>
    </>
  )
}
