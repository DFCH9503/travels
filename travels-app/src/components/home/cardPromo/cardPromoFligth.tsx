import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function CardPromoFlight({}) {
    const data = {
        departure: {
            path: "BOG-SMR",
            date: "Jue. 17 jul 2025",
            time: "Hora",
            stopover: "Directo"
        },
        return: {
            path: "SMR-BOG",
            date: "Lun. 21 jul 2025",
            time: "Hora",
            stopover: "Directo"
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="flex flex-col">
                        <p>Departure</p>
                        <p>{data.departure.path}</p>
                        <p>{data.departure.date}</p>
                        <p>{data.departure.time} - {data.departure.stopover}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    )
}
