// created as an exercise based on https://www.youtube.com/watch?v=3Q_oYDQ2whs
// without copying anything except the sample case

const convert = time => {
  const split = time.split(':');
  return split[0] * 60 + split[1];
};

convertAll = times => {
  return times.map(t => t.map(x => convert(x)));
};

const revert = time => {
  const r = Math.floor(time / 60 / 100);
  const l = (time % 60) + '';
  return `${r}:${l.length === 1 ? '0' + l : l}`;
};

const revertAll = times => {
  return times.map(time => time.map(t => revert(t)));
};

const combine = time1 => time2 => {
  return [...time1, ...time2];
};

const sort = times => {
  return times.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });
};

const eliminate = time => {
  return time.reduce((a, b) => {
    if (!a.length) {
      return [b];
    }

    if (+a[a.length - 1][1] >= +b[0]) {
      a[a.length - 1] = [a[a.length - 1][0], b[1]];
    } else if (+a[a.length - 1][1] < +b[0]) {
      a = [...a, b];
    }

    return a;
  }, []);
};

const spare = window => range => times => {
  const spares = checkStart([])(range)(times)(window);
  for (let i = 0; i < times.length; i++) {
    if (i + 1 !== times.length) {
      spares.push([times[i][1], times[i + 1][0]]);
    }
  }
  return checkEnd(spares)(range)(times)(window);
};

const checkStart = spares => range => times => window => {
  if (times[0][0] - range[0] >= window) {
    return [...spares, [range[0], times[0][0]]];
  } else {
    return [...spares];
  }
};

const checkEnd = spares => range => times => window => {
  if (range[1] - times[times.length - 1][1] >= window) {
    return [...spares, [times[times.length - 1][1], range[1]]];
  } else {
    return [...spares];
  }
};

const range = time1 => time2 => {
  const t1 = [convert(time1[0]), convert(time1[1])];
  const t2 = [convert(time2[0]), convert(time2[1])];
  return [t1[0] < t2[0] ? t2[0] : t1[0], t1[1] < t2[1] ? t1[1] : t2[1]];
};

const process = (p1time, p2time, p1range, p2range, window) => {
  return revertAll(
    spare(window)(range(p1range)(p2range))(
      eliminate(sort(combine(convertAll(p1time))(convertAll(p2time))))
    )
  );
};

// example case
const example = () => {
  const p1time = [
    ['9:00', '10:30'],
    ['12:00', '13:00'],
    ['16:00', '18:00']
  ];
  const p1range = ['9:00', '20:00'];
  const p2time = [
    ['10:00', '11:30'],
    ['12:30', '14:30'],
    ['14:30', '15:00'],
    ['16:00', '17:00']
  ];
  const p2range = ['10:00', '18:30'];
  const window = 30;

  const c = process(p1time, p2time, p1range, p2range, window);

  // log the result
  console.log(c);
};

example();
