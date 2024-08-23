import { cn } from 'src/utils/utils.ts'
import Digit from '../Digit'

type DigitsProps = {
    value: number
    classNames?: string
    text_color?: string
}

const Digits = ({ value, classNames, text_color }: DigitsProps) => {
    const d1 = Math.floor(value / 10)
    const d2 = Math.floor(value - d1 * 10)
    return (
        <div
            className={cn(
                'bg-[#000000] rounded-6 flex justify-evenly overflow-hidden relative items-center',
                classNames
            )}
        >
            <Digit digitClassName='right-[56%]' value={d1} text_color={text_color} />
            <Digit digitClassName='left-[56%]' value={d2} text_color={text_color} />
        </div>
    )
}

export default Digits
