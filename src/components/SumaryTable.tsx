import { generateDateFromYear } from "../Utils/generate-from-dates-year"
import { HabitDay } from "./HabitDay"

export function SumaryTable() {
    const weekDays = [
        'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
    ]

    const summaryDates = generateDateFromYear()
    const minimumSumaryDatesSizes = 18 * 7;
    const amountOfDaysToFill = minimumSumaryDatesSizes - summaryDates.length;
    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map((Day, i) => (
                        <div
                            key={`${Day}-${i}`}
                            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
                        >
                            {Day}
                        </div>
                    ))
                }
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3 ">
                {
                    summaryDates.map((day) => (
                        <HabitDay key={day.toString()} />
                    ))
                }

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className="w-10 h-10 bg-zinc-900  border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed "
                        />
                    )
                })}
            </div>
        </div>
    )
}