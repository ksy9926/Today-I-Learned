const getTime = (str) => {
  const hour = Number(str.split(':')[0]);
  const minute = Number(str.split(':')[1]);

  return hour * 60 + minute;
};

function solution(book_time) {
  let answer = 0;
  let rooms = [];
  let emptyRooms = 0;

  book_time.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });

  book_time.forEach((item) => {
    const [checkIn, checkOut] = item;
    const deletedIdx = [];

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] + 10 <= getTime(checkIn)) {
        emptyRooms++;
        deletedIdx.push(i);
      }
    }

    rooms = rooms.filter((_, index) => !deletedIdx.includes(index));

    rooms.push(getTime(checkOut));

    if (emptyRooms > 0) {
      emptyRooms--;
    } else {
      answer++;
    }
  });

  return answer;
}
