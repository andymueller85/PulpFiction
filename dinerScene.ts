class Wallet {
  constructor(name: string | undefined = undefined) {
    this.name = name
  }

  name: string | undefined
}


class Prick {
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
  pointingGunAtMe: Prick | undefined = undefined
  hasToPeeAndWantsToGoHome: boolean = false
  isInRestaurant: boolean = true
  isInBathroom: boolean

  private simulateOdds(successProbability: number) {
    return Math.random() < successProbability
  }

  movesWhenTheyShouldnt() {
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
    this.pointingGunAt = prick
    prick.pointingGunAtMe = this
  }

  stopPointingGunAt(prick: Prick) {
    this.pointingGunAt = undefined
    prick.pointingGunAtMe = undefined
  }

  tellBitchToBeCool(prick: Prick) {
    prick.isCoolLikeFonzie = true
  }

  giveWalletTo(prick: Prick, walletName: string) {
    const matchingWalletIndex = this.wallets.findIndex(w => w.name === walletName)

    if (matchingWalletIndex > -1) {
      prick.wallets.push(this.wallets[matchingWalletIndex])
      this.wallets = this.wallets.splice(matchingWalletIndex, 1)
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

const BAD_MOTHERFUCKER = 'Bad Motherfucker'


function playScene() {
  const jules: Prick = new Prick("Jules", [new Wallet(BAD_MOTHERFUCKER)])
  const vincent: Prick = new Prick("Vincent", [new Wallet()], true)
  const pumpkin: Prick = new Prick("Pumpkin")
  const honeyBunny: Prick = new Prick("HoneyBunny")
  const manager: Prick = new Prick("Manager")
  const pricks: Prick[] = Array.from({ length: 50 }, (_, i) => new Prick(`customer_prick_${i}`))

  if (pricks.some((prick: Prick) => prick.movesWhenTheyShouldnt())) {
    honeyBunny.executeEveryOneOfYouMotherfuckers(pricks)
  }

  if (manager.isHero()) {
    pumpkin.execute(manager)
  }

  pumpkin.collectWallets([...pricks, manager, jules])

  if (jules.isVigilante()) {
    pumpkin.execute(jules)
  }

  pumpkin.pointGunAt(jules)
  jules.pointGunAt(pumpkin)
  honeyBunny.isCoolLikeFonzie = false
  honeyBunny.pointGunAt(jules)

  pumpkin.tellBitchToBeCool(honeyBunny)
  pumpkin.stopPointingGunAt(jules)

  vincent.exitBathroom()
  vincent.pointGunAt(honeyBunny)
  honeyBunny.isCoolLikeFonzie = false
  honeyBunny.stopPointingGunAt(jules)
  honeyBunny.pointGunAt(vincent)

  pumpkin.tellBitchToBeCool(honeyBunny)
  honeyBunny.stopPointingGunAt(vincent)
  honeyBunny.pointGunAt(jules)

  honeyBunny.hasToPeeAndWantsToGoHome = true

  pumpkin.giveWalletTo(jules, BAD_MOTHERFUCKER)
  jules.sayColdBloodedShit()

  jules.stopPointingGunAt(pumpkin)
  honeyBunny.stopPointingGunAt(jules)
  pumpkin.leaveRestaurant()

  honeyBunny.leaveRestaurant()
  jules.leaveRestaurant()
  vincent.leaveRestaurant()
}
