import InputProps from "@/Interfaces/InputProps"



export default function InputComponent(props: InputProps){
    // An onChange function will be passed through props
    // The on Value Change, The value will be returned
    // The specific Icon will be passed through props
    const is_icon: boolean = true

    const returnClasses = ():string => {
        let classes: string =  "bg-gray-100 flex justify-around px-4 py-2 rounded-md"
        is_icon ? classes = "bg-gray-100 flex justify-around px-4 py-2 rounded-md" : classes = "bg-gray-100 flex justify-around px-4 py-2 rounded-md"
        return classes
    }

    return(
        <div className={returnClasses()}>
            <input type="text" name="" id="" placeholder="placeholder" className="outline-none bg-inherit flex-1 text-sm"/>
            {
                is_icon && <p className="cursor-pointer px-2 h-full">icon</p>
            }
        </div>
    )
}