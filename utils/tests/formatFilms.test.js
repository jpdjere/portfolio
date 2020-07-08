import { formatFilms } from "./../formatFilms.js";

describe('Format films', function() {
  const data1 = [];
  it('should be an empty array if data is empty', function() {
    const formattedData1 = formatFilms(data1);
    expect(formattedData1).toStrictEqual([]);
  });

  const data2 = [
    ['El toro 3','2016-02-03', 'code1'],
    ['El toro 2','2016-02-03', 'code2'],
    ['El toro','2016-02-03', 'code3'],
    ['Batman','2016-02-01', 'code4'],
  ];
  it('should correctly transform the films array', function() {
    const formattedData2 = formatFilms(data2);
    expect(formattedData2).toStrictEqual(
      [
        {
          date:'2016-02-03',
          films:[
            {title: 'El toro 3', code: 'code1'},
            {title: 'El toro 2', code: 'code2'},
            {title: 'El toro', code: 'code3'}
          ],
          count: 3
        },
        {
          date:'2016-02-01',
          films:[{title: 'Batman', code: 'code4'}],
          count: 1
        }
      ]
    )
  });
});