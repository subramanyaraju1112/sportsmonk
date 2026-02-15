import { RefreshCw } from "lucide-react"
import { Button } from "./ui/button"
import SportsMonkLogo from "../../public/assets/images/sportsmonk-logo.png"
import Image from "next/image"

const Header: React.FC = () => {
    return (
        <header className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Image src={SportsMonkLogo} alt="sportsmonk-logo" width={32} height={32} />
                <h2 className="text-white text-2xl font-bold italic">Sportsmonk</h2>
            </div>
            <Button variant="outline"
                className="flex items-center gap-2 bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600">
                <RefreshCw
                    className="w-4 h-4"
                />
                Refresh
            </Button>
        </header>
    )
}

export default Header