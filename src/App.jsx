import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App () {
  return (
    <>
      <div className='tw-follow-card-suggest'>
        <header className='tw-follow-card-header'>
          <h2>Tal vez te guste</h2>
        </header>

        <TwitterFollowCard userName={"shirakamifubuki"} name={"白上フブキ🌽フブキングダム👑"}></TwitterFollowCard>
        <TwitterFollowCard userName={"ookamimio"} name={"大神ミオ🌲ホロライブゲーマーズ🐺"}></TwitterFollowCard>
        <TwitterFollowCard userName={"nekomataokayu"} name={"猫又おかゆ🍙"}></TwitterFollowCard>
        <TwitterFollowCard userName={"inugamikorone"} name={"戌神ころね🥐本物"}></TwitterFollowCard>
 
        <footer className='tw-follow-card-footer'>
          <span>Mostrar más</span>
        </footer>
      </div>
    </>
  )
}
