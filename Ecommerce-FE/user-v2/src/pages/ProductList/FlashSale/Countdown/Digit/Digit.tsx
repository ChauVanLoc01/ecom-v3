import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'src/utils/utils.ts'

type DigitProps = {
    value: any
    digitClassName?: string
    text_color?: string
}

const Digit = ({ value, digitClassName, text_color }: DigitProps) => {
    return (
        <div style={{ width: 20, height: 20 }}>
            <AnimatePresence>
                <motion.div
                    key={value}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                        times: [0.2, 0.2, 0.45],
                        ease: 'linear'
                    }}
                    className={cn('absolute text-white text-sm font-semibold', text_color, digitClassName)}
                >
                    {value}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Digit
