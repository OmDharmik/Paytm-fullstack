import Button from "./Button"

export default function Users(){
    return (<div>
        <div className="text-xl font-bold mt-8 mb-4">
            Users
        </div>
        <input className="w-full border border-gray-200 p-2 rounded" type="text" placeholder="Search users..."/>
        <div className="mt-10">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="rounded-full h-12 w-12 bg-slate-200">
                        <div className="flex flex-col justify-center h-full text-xl text-center">
                            U
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ml-5 text-xl font-bold">User 1</div>
                </div>
                <Button label={"Send Money"}></Button>
            </div>
        </div>
    </div>
    )
}