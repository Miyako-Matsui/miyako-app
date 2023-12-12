export class Sport {
  constructor(name, description) {
    this.name = name
    this.description = description
  }

  static createMockedSports() {
    return [
      new Sport(
        'Cycling',
        'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bicyclists", or "bikers". Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).'
      ),
      // ... other sports
      new Sport(
        'Volleyball',
        "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
      ),
      new Sport(
        'Football',
        "Football is a team sport that involves kicking a ball to score a goal. It is one of the world's most popular sports, played and watched by millions of people."
      ),
      new Sport(
        'Tennis',
        'Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles).'
      ),
      new Sport(
        'Swimming',
        'Swimming is an individual or team racing sport that takes place in pools or open water. It involves propelling oneself through the water using the arms and legs.'
      ),
    ]
  }
}
