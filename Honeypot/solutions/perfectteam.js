// Task 2
// Perfect Team

function perfectTeam(skills) {
  let skillsCount = {}

  skills.split('').map(skill => {

    if (skillsCount[skill]) {
      skillsCount[skill] = skillsCount[skill] + 1
    } else {
      skillsCount[skill] = 1
    }

  })

  if (Object.keys(skillsCount).length < 5) {
    return 0
  }

  return Math.min.apply(Math, Object.values(skillsCount))
}

console.log(perfectTeam('pcmbzpcmbz')) // return 2
console.log(perfectTeam('mppzbmbpzcbmpbmczcz')) // return 3
