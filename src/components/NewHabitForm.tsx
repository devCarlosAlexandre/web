import { Check } from "phosphor-react";
import * as CheckBox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
export function NewHabitForm() {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([])
    const avaliableWeekDay = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ]

    function createNewHabit(event: FormEvent) {
        event.preventDefault()
    }

    function handleTogglleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDaysRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysRemovedOne)
        } else {
            const addWeekDayOne = [...weekDays, weekDay];
            setWeekDays(addWeekDayOne);
        }

    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6 ">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento
            </label>
            <input
                type="text"
                id="title"
                placeholder="ex.: Exercicios, dormir bem, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
                onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>
            <div className="flex flex-col gap-2 mt-3 ">
                {
                    avaliableWeekDay.map(((dayWeek, i) => (
                        <CheckBox.Root
                            key={dayWeek}
                            className='flex items-center gap-3 group '
                            onCheckedChange={() => handleTogglleWeekDay(i)}
                        >
                            <div
                                className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'
                            >
                                <CheckBox.Indicator>
                                    <Check size={20} className='text-white' />
                                </CheckBox.Indicator>
                            </div>

                            <span
                                className=' text-white leading-tight '
                            >
                                {dayWeek}
                            </span>
                        </CheckBox.Root>
                    )))
                }
            </div>

            <button
                type="submit"
                className="mt-6 rounded-lg gap-3 p-4 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}