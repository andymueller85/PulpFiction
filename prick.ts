import { Wallet } from './wallet'

export class Prick {
  constructor(name: string, wallets?: Wallet[], isInBathroom: boolean = false) {
    this.name = name
    this.alive = true
    this.wallets = wallets || [new Wallet()]
    this.isInBathroom = isInBathroom
  }

  name: string
  alive: boolean
  wallets: Wallet[]
  isCoolLikeFonzie: boolean = true
  pointingGunAt: Prick | undefined = undefined
  pointingGunAtMe: Prick[] = []
  hasToPeeAndWantsToGoHome: boolean = false
  isInRestaurant: boolean = true
  isInBathroom: boolean

  private simulateOdds(successProbability: number) {
    return Math.random() < successProbability
  }

  moves() {
    return this.simulateOdds(0.0001)
  }

  isHero() {
    return this.simulateOdds(0.0001)
  }

  isVigilante() {
    return this.simulateOdds(0.0001)
  }

  execute(prick: Prick) {
    prick.alive = false
  }

  executeEveryOneOfYouMotherfuckers(pricks: Prick[]) {
    pricks.forEach(this.execute)
  }

  collectWallets(pricks: Prick[]) {
    pricks.forEach(prick => {
      this.wallets.push(...prick.wallets)
      prick.wallets.length = 0
    })
  }

  pointGunAt(prick: Prick) {
    if (this.pointingGunAt) {
      const index = this.pointingGunAt.pointingGunAtMe.findIndex(p => p.name === this.name)

      if (index > -1) {
        this.pointingGunAt.pointingGunAtMe.splice(index, 1)
      }
    }
    this.pointingGunAt = prick
    prick.pointingGunAtMe.push(this)
  }

  tellBitchToBeCool(prick: Prick) {
    prick.isCoolLikeFonzie = true
  }

  giveWalletTo(prick: Prick, walletName: string) {
    const matchingWalletIndex = this.wallets.findIndex(w => w.name === walletName)

    if (matchingWalletIndex > -1) {
      prick.wallets.push(this.wallets[matchingWalletIndex])
      this.wallets.splice(matchingWalletIndex, 1)
    }
  }

  leaveRestaurant() {
    this.isInRestaurant = false
  }

  exitBathroom() {
    this.isInBathroom = false
  }

  sayColdBloodedShit() {
    console.log(`There’s a passage I got memorized.
Ezekiel 25:17. The path of the
righteous man is beset on all sides
by the inequities of the selfish
and the tyranny of evil men.
Blessed is he who, in the name of
charity and good will, shepherds
the weak through the valley of the
darkness. For he is truly his
brother's keeper and the finder of
lost children.
And I will strike down upon thee
with great vengeance and furious
anger those who attempt to poison
and destroy my brothers. And you
will know I am the Lord when I lay
my vengeance upon you.`)
  }
}
