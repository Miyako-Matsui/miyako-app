import { Sport } from './Sport'

export class ContentRepository {
  getFeaturedSports() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Sport.createMockedSports())
      }, 100)
    })
  }
}
