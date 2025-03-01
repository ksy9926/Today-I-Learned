function solution(genres, plays) {
  const genreMap = new Map();
  const combinedArr = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    combinedArr[i] = [genre, play, i];

    genreMap.set(
      genre,
      genreMap.has(genre) ? genreMap.get(genre) + play : play
    );
  }

  combinedArr.sort((a, b) => {
    if (genreMap.get(a[0]) === genreMap.get(b[0])) {
      if (b[1] === a[1]) return a[2] - b[2];

      return b[1] - a[1];
    }

    return genreMap.get(b[0]) - genreMap.get(a[0]);
  });

  let temp = 1;
  const answer = [combinedArr[0][2]];

  for (let i = 1; i < combinedArr.length; i++) {
    if (combinedArr[i][0] === combinedArr[i - 1][0] && temp !== 2) {
      answer.push(combinedArr[i][2]);
      temp += 1;
    } else if (combinedArr[i][0] !== combinedArr[i - 1][0]) {
      answer.push(combinedArr[i][2]);
      temp = 1;
    }
  }

  return answer;
}
