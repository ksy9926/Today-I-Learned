const strToTime = (str) => {
  return Number(str.slice(0, 2)) * 60 + Number(str.slice(3));
};

const solution = (fees, records) => {
  const answer = [];
  const recordsObj = {};
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  records.forEach((record) => {
    const [time, id, status] = record.split(" ");

    recordsObj[id] = recordsObj[id]
      ? [...recordsObj[id], [time, status]]
      : [[time, status]];
  });

  for (let [key, value] of Object.entries(recordsObj).sort(
    (a, b) => a[0] - b[0]
  )) {
    const reducedObj = value.reduce(
      (acc, cur) => {
        const time = cur[0];
        const status = cur[1];

        if (status === "IN") {
          acc.now = time;
        } else {
          acc.sum += strToTime(time) - strToTime(acc.now);
        }

        return acc;
      },
      { now: 0, sum: 0 }
    );

    if (value.length % 2 !== 0) {
      reducedObj.sum += strToTime("23:59") - strToTime(reducedObj.now);
    }

    answer.push(
      reducedObj.sum <= basicTime
        ? basicFee
        : basicFee +
            Math.ceil((reducedObj.sum - basicTime) / unitTime) * unitFee
    );
  }

  return answer;
};
