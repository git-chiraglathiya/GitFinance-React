import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const FloatingActionButton = ({ Icon }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="default"
                className={`
                    fixed z-50 bottom-4
                    left-1/2 -translate-x-1/2
                    rounded-full w-14 h-14
                    sm:left-auto sm:right-6 sm:translate-x-0
                    sm:rounded-md sm:w-14 sm:h-14
                    md:right-10
                    flex items-center justify-center
                `}
                >
                <Icon className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Bottom Sheet Content</h2>
                <p>This is your bottom sheet content.</p>
                </div>
            </SheetContent>
        </Sheet>
    )
};