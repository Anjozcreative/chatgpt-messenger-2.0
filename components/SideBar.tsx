
import Logout from "./Logout";
import NewChat from "./NewChat";
function SideBar() {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/* NewChat */}
                    <NewChat />
                    <div>
                        {/* ModelSelection */}
                    </div>

                    {/* Map through the ChatRowa */}
                </div>
            </div>
            <Logout />
        </div>
    );
}

export default SideBar;