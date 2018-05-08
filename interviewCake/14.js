// Write a function that takes an integer flightLength (in minutes)
// and an array of integers movieLengths (in minutes) and returns a 
// boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
function findMovies(minutes, movieLengths) {
  let complements = {}
  for (let i=0; i < movieLengths.length; i++) {
    let movie = movieLengths[i]
    console.log(movie)
    if (complements[movie]) {
      return true
    }
    complements[minutes-movie] = movie
    console.log(complements)
  }

  return false
}

console.log(findMovies(180, [30, 60, 90, 120, 150]))