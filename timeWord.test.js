const timeWord = require('./timeWord');
const makeRange = require('./timeWord')

// TODO: write block so that we can enter input into terminal



describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("midnight", () => {
    expect(timeWord("00-00")).toEqual('midnight')
  })

  test("test 00:01", () => {
    expect(timeWord("00-01")).toEqual("twelve oh one am")
  })

  test("test afternoon", () => {
    expect(timeWord("12-13")).toEqual("twelve thirteen pm")
  })

  test("test twenties minutes", () => {
    expect(timeWord("20-22")).toEqual("eight twentytwo pm")
  })

  test("test fifty minutes", () => {
    expect(timeWord('04-58')).toEqual("four fiftyeight am")
  })

  test("test minutes when multiples of 10", () => {
    expect(timeWord("15-40")).toEqual("three forty pm")
  })

  test("test 10:10 am", () => {
    expect(timeWord("10-10")).toEqual("ten ten am")
  })

  test("test o'clock", () => {
    expect(timeWord("10-00")).toEqual("ten o'clock am")
  })


  test("hour and minute variables working", () => {
    let date = '11-02'
    console.log(timeWord(date))
    let hour = +(date).split('-')[0]
    console.log(typeof hour)
    let minute = +(date.split('-')[1])
    expect(typeof hour).toBe('number')
    expect(typeof minute).toBe('number')
    expect(hour).toEqual(11)
    expect(minute).toEqual(2)

  })
});

// Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o’clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm