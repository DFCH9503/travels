import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Search() {
    return (
        <div className="flex justify-center p-4 md:p-8 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <form action="" className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2">
                            <Label>Origen</Label>
                            <Input placeholder="Ciudad de origen"></Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Destino</Label>
                            <Input placeholder="Ciudad de destino"></Input>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2">
                            <Label>Fecha de salida</Label>
                            <Input type="date" placeholder="Selecciona fecha de salida"></Input>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <Label>Fecha de regreso</Label>
                            <Input type="date" placeholder="Selecciona fecha de regreso"></Input>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Pasajeros</Label>
                        <Select defaultValue="1">
                            <SelectTrigger className="w-16">
                                <SelectValue placeholder="Cantidad de pasajeros" />
                            </SelectTrigger>
                            <SelectContent>
                                {[...Array(8)].map((_, i) => (
                                    <SelectItem key={i + 1} value={(i + 1).toString()}>{i + 1}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="flex items-end">
                        <button type="submit" className="w-full bg-foreground text-secondary md:w-auto px-6 py-2 rounded-md hover:bg-violet-600 transition-colors text-white font-semibold">
                            Buscar
                        </button>
                    </div>
                    
                </form>

        </div>
    )
}

