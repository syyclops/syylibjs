import React, { useEffect } from "react";
import moment from "moment";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { BsCalendar4 } from "react-icons/bs";
import { DatePickerProps } from "../types/datePicker";

const zeroPad = (num: string) => {
  return Number(num) < 10 ? `0${num}` : `${num}`;
};

const DatePicker = ({
  value,
  onSet,
  inputWidth = "w-[12rem]",
  inputHeight = "w-auto",
  pickerWidth = "w-[16rem]",
  pickerHeight = "h-[16rem]",
}: DatePickerProps) => {
  const daysInChars = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = moment().clone().date();
  const currentMonth = moment().clone().month();
  const [date, setDate] = React.useState(parseInt(value.d));
  const [month, setMonth] = React.useState(parseInt(value.m));
  const [year, setYear] = React.useState(parseInt(value.y));
  const [previousMonth, setPreviousMonth] = React.useState(
    month === 0 ? 12 : month
  );
  const [previousYear, setPreviousYear] = React.useState(
    month === 0 ? year - 1 : year
  );
  const [nextMonth, setNextMonth] = React.useState(
    month === 11 ? 1 : month + 2
  );
  const [nextYear, setNextYear] = React.useState(
    month === 11 ? year + 1 : year
  );

  const [showMonthsYearList, setShowMonthsYearList] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(false);

  const [textYear, setTextYear] = React.useState("");
  const [textMonth, setTextMonth] = React.useState("");
  const [textDate, setTextDate] = React.useState("");

  const monthRef = React.useRef<HTMLInputElement>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);
  const yearRef = React.useRef<HTMLInputElement>(null);

  const renderDates = (
    m: number,
    d: number,
    y: number,
    pm: number,
    py: number,
    nm: number,
    ny: number
  ) => {
    const getLastDateOfMonth = moment(`${y}-${m + 1}`, "YYYY-M")
      .clone()
      .daysInMonth();

    const getLastDateOfPreviousMonth = moment(`${py}-${pm}`, "YYYY-M")
      .clone()
      .daysInMonth();

    const getDateList = Array.from(
      [...Array(getLastDateOfMonth).keys()],
      (date) => date + 1
    );

    const getStartDayNumber = moment(`${y}-${m + 1}-1}`, "YYYY-M-D")
      .clone()
      .day();

    const getStartDayOfNextMonthNumber = moment(`${ny}-${nm}-1`, "YYYY-M-D")
      .clone()
      .day();

    const startDummyDates = Array.from(
      [...Array(getStartDayNumber).keys()],
      (d, i) => (getLastDateOfPreviousMonth - i).toString()
    ).sort();

    const endDummyDates = Array.from(
      [...Array(7 - getStartDayOfNextMonthNumber).keys()],
      (d, i) => (i + 1).toString()
    ).sort();

    setDateList([...startDummyDates, ...getDateList, ...endDummyDates]);

    if (date > getLastDateOfMonth) {
      setDate(currentDate);
      setTextDate(zeroPad(currentDate.toString()));
    }
  };

  const [dateList, setDateList] = React.useState<(string | number)[]>([]);

  useEffect(() => {
    renderDates(
      month,
      date,
      year,
      previousMonth,
      previousYear,
      nextMonth,
      nextYear
    );
  }, []);

  return (
    <div className="relative">
      <div
        className={classnames(
          "flex justify-between items-center bg-light-neutral-100 rounded-2xl overflow-hidden pl-3 py-3",
          inputWidth,
          inputHeight
        )}
      >
        <div className="relative flex bg-light-neutral-100 text-sm text-dark-neutral-300">
          <input
            ref={monthRef}
            className="w-7 outline-none font-bold placeholder:text-xs bg-light-neutral-200 text-dark-neutral-300 focus:bg-primary-light px-1 rounded text-center"
            type="text"
            value={textMonth}
            placeholder="MM"
            maxLength={2}
            onChange={(e) => {
              if (/^-?\d+$/.test(e.target.value) || e.target.value === "") {
                setTextMonth(e.target.value);
                onSet({
                  d: textDate,
                  m: e.target.value.toString(),
                  y: textYear,
                });
              }
            }}
            onFocus={() => setShowCalendar(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dateRef.current!.focus();
              }
            }}
          />
          <div className="mx-0.5">/</div>
          <input
            ref={dateRef}
            className="w-7 outline-none font-bold placeholder:text-xs bg-light-neutral-200 text-dark-neutral-300 focus:bg-primary-light px-1 rounded text-center"
            type="text"
            value={textDate}
            placeholder="DD"
            maxLength={2}
            onChange={(e) => {
              if (/^-?\d+$/.test(e.target.value) || e.target.value === "") {
                setTextDate(e.target.value);
                onSet({
                  d: e.target.value.toString(),
                  m: textMonth,
                  y: textYear,
                });
              }
            }}
            onFocus={() => setShowCalendar(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                yearRef.current!.focus();
              }
            }}
          />
          <div className="mx-0.5">/</div>
          <input
            ref={yearRef}
            className="w-11 outline-none font-bold placeholder:text-xs bg-light-neutral-200 text-dark-neutral-300 focus:bg-primary-light px-1 rounded text-center"
            type="text"
            value={textYear}
            placeholder="YYYY"
            maxLength={4}
            onChange={(e) => {
              if (/^-?\d+$/.test(e.target.value) || e.target.value === "") {
                setTextYear(e.target.value);
                onSet({
                  d: textDate,
                  m: textMonth,
                  y: e.target.value.toString(),
                });
              }
            }}
            onFocus={() => setShowCalendar(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                monthRef.current!.focus();
              }
            }}
          />
        </div>
        <div
          className="flex justify-center w-[30%] cursor-pointer"
          onClick={() => {
            if (
              moment(`${textMonth}/${textDate}/${textYear}}`, "MM/DD/YYYY")
                .clone()
                .isValid()
            ) {
              const m =
                parseInt(textMonth) >= 10
                  ? parseInt(textMonth) - 1
                  : parseInt(textMonth.charAt(1)) - 1;
              const d =
                parseInt(textDate) >= 10
                  ? parseInt(textDate)
                  : parseInt(textDate.charAt(1));
              const y = parseInt(textYear);
              const pm = m === 0 ? 12 : m;
              const py = m === 0 ? y - 1 : y;
              const nm = m === 11 ? 1 : m + 2;
              const ny = m === 11 ? y + 1 : y;
              setMonth(m);
              setDate(d);
              setYear(y);
              setPreviousMonth(pm);
              setPreviousYear(py);
              setNextMonth(nm);
              setNextYear(ny);
              renderDates(m, d, y, pm, py, nm, ny);
            }
            if (textDate === "" && textMonth === "" && textYear === "") {
              setTextMonth(zeroPad((month + 1).toString()));
              setTextDate(zeroPad(date.toString()));
              setTextYear(year.toString());
              onSet({
                d: zeroPad(date.toString()),
                m: zeroPad((month + 1).toString()),
                y: year.toString(),
              });
            }
            setShowCalendar(!showCalendar);
          }}
        >
          <BsCalendar4 className="text-lg text-primary" />
        </div>
      </div>
      {showCalendar && (
        <div
          className={twMerge(
            classnames(
              "absolute top-[3rem] left-0 bg-light-neutral-100 py-4 px-4 rounded-2xl overflow-hidden",
              pickerWidth,
              pickerHeight
            )
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <TfiAngleLeft
              className="cursor-pointer text-dark-neutral-300"
              onClick={() => {
                const currMonth = month;
                const prevMonth = previousMonth;
                const nexMonth = nextMonth;

                if (month === 1) {
                  setPreviousMonth(12);
                }
                if (month === 0) {
                  setMonth(11);
                  setTextMonth(zeroPad(`12`).toString());
                  setPreviousMonth(9);
                  setPreviousYear(year - 1);
                  setNextMonth(1);
                  setNextYear(year);
                  setYear(year - 1);
                  setTextYear((year - 1).toString());
                  onSet({
                    d: zeroPad(date.toString()),
                    m: zeroPad((12).toString()),
                    y: (year - 1).toString(),
                  });
                } else {
                  if (month === 11 && nextYear !== year) {
                    setNextMonth(12);
                    setNextYear(year);
                    setPreviousMonth(10);
                    setMonth(10);
                    setTextMonth(zeroPad(`12`).toString());
                    onSet({
                      d: zeroPad(date.toString()),
                      m: zeroPad((12).toString()),
                      y: year.toString(),
                    });
                  } else {
                    setNextMonth(nexMonth - 1);
                    if (month !== 1) {
                      setPreviousMonth(prevMonth - 1);
                    }
                    setMonth(currMonth - 1);
                    setTextMonth(zeroPad(`${currMonth}`).toString());
                    onSet({
                      d: zeroPad(date.toString()),
                      m: zeroPad(currMonth.toString()),
                      y: (year - 1).toString(),
                    });
                  }
                }
              }}
            />
            <div
              className="flex items-center"
              onClick={() => {
                setShowMonthsYearList(true);
              }}
            >
              <div className="text-sm font-bold mr-1.5 text-primary bg-light-neutral-200 px-2 py-0.5 rounded cursor-pointer">
                {months[month]} {year}
              </div>
            </div>
            <TfiAngleRight
              className="cursor-pointer text-dark-neutral-300"
              onClick={() => {
                const currMonth = month;
                const prevMonth = previousMonth;
                const nexMonth = nextMonth;

                if (currMonth === 11) {
                  setMonth(0);
                  setTextMonth(zeroPad(`1`).toString());
                  setYear(year + 1);
                  setTextYear((year + 1).toString());
                  setPreviousMonth(12);
                  setPreviousYear(year);
                  setNextMonth(nexMonth + 1);
                  setNextYear(year + 1);
                  onSet({
                    d: zeroPad(date.toString()),
                    m: zeroPad((1).toString()),
                    y: (year + 1).toString(),
                  });
                } else {
                  if (currMonth === 0) {
                    setPreviousMonth(1);
                    setPreviousYear(year);
                    setNextMonth(nexMonth + 1);
                    setMonth(currMonth + 1);
                    setTextMonth(zeroPad(`${currMonth + 2}`).toString());
                    onSet({
                      d: zeroPad(date.toString()),
                      m: zeroPad((currMonth + 2).toString()),
                      y: year.toString(),
                    });
                  } else {
                    if (nextMonth === 12) {
                      setNextMonth(1);
                      setNextYear(year + 1);
                    } else {
                      setNextMonth(nexMonth + 1);
                    }
                    setPreviousMonth(prevMonth + 1);
                    setMonth(currMonth + 1);
                    setTextMonth(zeroPad(`${currMonth + 2}`).toString());
                    onSet({
                      d: zeroPad(date.toString()),
                      m: zeroPad((currMonth + 2).toString()),
                      y: year.toString(),
                    });
                  }
                }
              }}
            />
          </div>
          <div className="w-full h-[calc(100%-3.5rem)]">
            <div className={twMerge(classnames("w-full flex"))}>
              {daysInChars.map((d, i) => (
                <div
                  className="flex justify-center items-center w-[14%] h-[14%] font-bold text-xs text-center text-mid-neutral-100"
                  key={i}
                >
                  {d}
                </div>
              ))}
            </div>
            <div
              className={twMerge(
                classnames(
                  "w-full h-full flex flex-wrap justify-start items-center"
                )
              )}
            >
              {dateList.map((d, i) => (
                <div
                  className={classnames(
                    "flex justify-center items-center w-[14%] h-[14%] font-semibold text-sm rounded-md",
                    currentDate === d
                      ? "border !border-dark-neutral-300"
                      : "text-mid-neutral-100",
                    typeof d === "string"
                      ? "text-mid-neutral-100"
                      : "!text-dark-neutral-300 cursor-pointer hover:bg-light-neutral-200 hover:border hover:border-primary-light",
                    date === d
                      ? "!bg-primary !text-light-neutral-100 hover:border-primary"
                      : ""
                  )}
                  key={i}
                  onClick={() => {
                    if (typeof d !== "string") {
                      setDate(d);
                      setTextMonth(zeroPad((month + 1).toString()));
                      setTextDate(zeroPad(d.toString()));
                      setTextYear(year.toString());
                      onSet({
                        d: zeroPad(d.toString()),
                        m: zeroPad((month + 1).toString()),
                        y: year.toString(),
                      });
                    }
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
          {showMonthsYearList && (
            <div className="absolute top-0 left-0 w-full h-full bg-light-neutral-100 py-4 px-4">
              <div className="flex justify-between items-center mb-6">
                <TfiAngleLeft
                  className="cursor-pointer text-dark-neutral-300"
                  onClick={() => {
                    setPreviousYear(year - 1);
                    setNextYear(year - 1);
                    setYear(year - 1);
                    setTextYear((year - 1).toString());
                    setDate(currentDate);
                    setTextDate(zeroPad(currentDate.toString()));
                    setMonth(currentMonth);
                    setTextMonth(zeroPad(`${currentMonth + 1}`).toString());
                    onSet({
                      d: zeroPad(currentDate.toString()),
                      m: zeroPad((currentMonth + 1).toString()),
                      y: (year - 1).toString().toString(),
                    });
                  }}
                />
                <div className="flex items-center">
                  <div
                    className="text-sm font-bold mr-1.5 bg-light-neutral-200 text-dark-neutral-300 px-2 py-0.5 rounded cursor-pointer"
                    onClick={() => setShowMonthsYearList(false)}
                  >
                    {year}
                  </div>
                </div>
                <TfiAngleRight
                  className="cursor-pointer text-dark-neutral-300"
                  onClick={() => {
                    setPreviousYear(year + 1);
                    setNextYear(year + 1);
                    setYear(year + 1);
                    setTextYear((year + 1).toString());
                    setDate(currentDate);
                    setTextDate(zeroPad(currentDate.toString()));
                    setMonth(currentMonth);
                    setTextMonth(zeroPad(`${currentMonth + 2}`).toString());
                    onSet({
                      d: zeroPad(currentDate.toString()),
                      m: zeroPad((currentMonth + 2).toString()),
                      y: (year + 1).toString().toString(),
                    });
                  }}
                />
              </div>
              <div className="w-full h-[calc(100%-3.5rem)] flex flex-wrap justify-start items-center">
                {months.map((m, i) => (
                  <div
                    key={i}
                    className={classnames(
                      "flex justify-center items-center w-[calc(28%-1rem)] h-[15%] font-semibold text-sm rounded-md cursor-pointer mx-1",
                      i === currentMonth
                        ? "border !border-dark-neutral-300"
                        : "text-dark-neutral-300",
                      i === month
                        ? "!bg-light-neutral-200 !text-primary hover:border-primary"
                        : ""
                    )}
                    onClick={() => {
                      setShowMonthsYearList(false);
                      setDate(currentDate);
                      setTextDate(zeroPad(currentDate.toString()));
                      if (i === 0) {
                        setPreviousYear(year - 1);
                        setPreviousMonth(12);
                        setMonth(0);
                        setTextMonth(zeroPad(`1`).toString());
                        setNextMonth(i + 2);
                        onSet({
                          d: zeroPad(currentDate.toString()),
                          m: zeroPad((1).toString()),
                          y: year.toString().toString(),
                        });
                      } else if (i === 11) {
                        setPreviousMonth(i - 2);
                        setNextMonth(1);
                        setNextYear(year + 1);
                        setMonth(i);
                        setTextMonth(zeroPad(`${i + 1}`).toString());
                        onSet({
                          d: zeroPad(currentDate.toString()),
                          m: zeroPad((i + 1).toString()),
                          y: year.toString().toString(),
                        });
                      } else {
                        setMonth(i);
                        setTextMonth(zeroPad(`${i + 1}`).toString());
                        setPreviousMonth(i);
                        setNextMonth(i + 2);
                        onSet({
                          d: zeroPad(currentDate.toString()),
                          m: zeroPad((i + 1).toString()),
                          y: year.toString().toString(),
                        });
                      }
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
