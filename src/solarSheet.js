export class SolarCalc {
  constructor (year){
    this.year = year,
    this.earthAge = '',
    this.mercury = '',
    this.venus = '',
    this.mars = '',
    this.jupiter = ''
  }

  ageMaker () {
    const getYear = new Date(this.year) // gets full year with junk
    const yearBorn = getYear.getFullYear()// extracts Actual year born
    const currentDay = new Date //creates a new date
    const currentYear = currentDay.getFullYear()// gets actual year for new date
    this.earthAge = currentYear - yearBorn - 1 //gets actual age
    }

  mercuryAge () {
    this.mercury = this.earthAge / .24
  }

  venusAge () {
    this.venus = this.earthAge / .62
  }

  marsAge () {
    this.mars = this.earthAge / 1.88
  }

  jupiterAge () {
    this.jupiter = this.earthAge / 11.86
  }
};

let mike = new SolarCalc ('1984')
