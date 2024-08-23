import { Dictionary } from 'lodash'
import { SalePromotion, StoreWithProductSalePromotion } from 'src/types/sale.type'
import Calendar from './Calendar'

type CalendarProps = {
    promotionObjs: Dictionary<SalePromotion>
    onSelectEvent: (event: SalePromotion) => () => void
    storePromotionObj: Dictionary<StoreWithProductSalePromotion>
    currentDate: Date
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const CalendarEvent = ({
    promotionObjs,
    onSelectEvent,
    storePromotionObj,
    currentDate,
    setCurrentDate
}: CalendarProps) => {
    return (
        <Calendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            promotionObjs={promotionObjs}
            onSelectEvent={onSelectEvent}
            storePromotionObj={storePromotionObj}
        />
    )
}

export default CalendarEvent
