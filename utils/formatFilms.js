const getHexCode = () => (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

export const formatFilms = (films) => {
  return films.reduce((acc, currentValue, currentIndex) => {
    const [title, date, code] = currentValue;
    const firstIndex = currentIndex === 0;
    const differentDate = acc[acc.length-1] && acc[acc.length-1].date !== date;
    const sameDate = acc[acc.length-1] && acc[acc.length-1].date === date;

    if (firstIndex || differentDate) {
      return acc.concat([{
        date: currentValue[1],
        films: [ {title, code, hexId: getHexCode() }]
      }])
    }
    else if(sameDate) {
      const lastFilms = [...acc].slice(-1)[0].films;
      const last = [...lastFilms, { title, code, hexId: getHexCode() }];
      const tempAcc = [...acc];
      tempAcc[tempAcc.length-1].films = last;
      return [...tempAcc]
    }
    return acc;
  }, []).map(film => {
      return {
        ...film,
        count: film.films.length
      }
  });
}