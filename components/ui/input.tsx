import InputProps from "@/Interfaces/InputProps"



const InputComponent: React.FC<InputProps> = ({ Placeholder, is_icon, Icon, status, onChange }) => {
    // An onChange function will be passed through props
    // The on Value Change, The value will be returned
    // The specific Icon will be passed through props

    const returnClasses = ():string => {
        let classes: string =  "bg-gray-100 flex justify-around px-4 py-2 rounded-md"
        is_icon ? classes = "bg-gray-100 flex justify-around px-4 py-2 rounded-md" : classes = "bg-gray-100 flex justify-around px-4 py-2 rounded-md"
        return classes
    }

    const returnColor = ():string => {
        let color: string = "rgb(59, 130, 246)"

        if(status === 'Primary'){
            color = "rgb(59, 130, 246)"
        }else if(status === 'Error'){
            color = "rgb(239, 68, 68)"
        }else if(status === 'Idle'){
            color = "rgb(75, 85, 99)"
        }
        
        return color
    }

    return(
        <div className={returnClasses()}>
            <input type="text" name="" id="" placeholder={Placeholder} className="outline-none bg-inherit flex-1 text-sm" onChange={(e) => onChange(e)}/>
            {
                is_icon && 
                <p className=" bg-gray cursor-pointer px-2 h-full flex justify-center items-center flex-col">
                    {Icon && <Icon size={20} color={returnColor()}/>}
                </p>
            }
        </div>
    )
}

export default InputComponent