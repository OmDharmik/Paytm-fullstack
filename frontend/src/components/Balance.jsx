export default function Balance({value}){
    return <div className="flex">
        <div className="font-bold text-2xl">
            Your Balance
        </div>
        <div className="font-semibold ml-4 text-2xl">
            Rs {value}
        </div>
    </div>
}