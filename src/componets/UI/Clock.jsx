import { useEffect, useState  } from "react"

export default function Clock() {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDovn = () => {
        const destination = new Date('Apr 10, 2023').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()

            const differint = destination - now;

            const day = Math.floor(differint / (1000 * 60 * 60* 24))
            const hour = Math.floor((differint % (1000 * 60 * 60* 24)) / (1000*60*60)  )
            const min = Math.floor((differint % (1000 * 60 * 60)) / (1000*60))
            const sec = Math.floor(differint % (1000 * 60 ) / (1000))


            if (destination < 0) {
                clearInterval(interval.current)
            }else{
                setDays(day)
                setHours(hour)
                setMinutes(min)
                setSeconds(sec)
            }
        });

    }

    useEffect(() => {
        countDovn()
    })
 
    return (
        <div className="clock__wraper d-flex align-items-center gap-3">
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 text-center mb-2">
                        {days}
                    </h1>
                    <h5 className="text-white fs-6">Days</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 text-center mb-2">
                        {hours}
                    </h1>
                    <h5 className="text-white fs-6">Hourse</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>


            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 text-center mb-2">
                        {minutes}
                    </h1>
                    <h5 className="text-white fs-6">Minutes</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 text-center mb-2">
                        {seconds}
                    </h1>
                    <h5 className="text-white fs-6">Seconds</h5>
                </div>

            </div>
        </div>
    )
}