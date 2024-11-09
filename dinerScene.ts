import { Prick } from './prick'
import { Wallet } from './wallet'

const BAD_MOTHERFUCKER = 'Bad Motherfucker'

function playScene() {
  const jules: Prick = new Prick('Jules', [new Wallet(BAD_MOTHERFUCKER)])
  const vincent: Prick = new Prick('Vincent', [new Wallet()], true)
  const pumpkin: Prick = new Prick('Pumpkin')
  const honeyBunny: Prick = new Prick('HoneyBunny')
  const manager: Prick = new Prick('Manager')
  const pricks: Prick[] = Array.from({ length: 50 }, (_, i) => new Prick(`customer_prick_${i}`))

  if (pricks.some((prick: Prick) => prick.movesWhenTheyShouldnt())) {
    honeyBunny.executeEveryOneOfYouMotherfuckers([...pricks, manager, jules])
    console.log('a prick moved. every last one of you motherfuckers executed.')
  }

  if (manager.isHero()) {
    pumpkin.execute(manager)
    console.log('Manager was a hero. executed.')
  }

  pumpkin.collectWallets([...pricks, manager, jules])

  if (jules.isVigilante()) {
    pumpkin.execute(jules)
    console.log('Jules was being a vigilante. shot in face.')
  }

  pumpkin.pointGunAt(jules)
  jules.pointGunAt(pumpkin)
  honeyBunny.isCoolLikeFonzie = false
  honeyBunny.pointGunAt(jules)

  pumpkin.tellBitchToBeCool(honeyBunny)

  vincent.exitBathroom()
  vincent.pointGunAt(honeyBunny)
  honeyBunny.isCoolLikeFonzie = false
  honeyBunny.pointGunAt(vincent)

  pumpkin.tellBitchToBeCool(honeyBunny)
  honeyBunny.pointGunAt(jules)

  honeyBunny.hasToPeeAndWantsToGoHome = true

  pumpkin.giveWalletTo(jules, BAD_MOTHERFUCKER)
  jules.sayColdBloodedShit()

  pumpkin.leaveRestaurant()
  honeyBunny.leaveRestaurant()
  jules.leaveRestaurant()
  vincent.leaveRestaurant()
}

playScene()
