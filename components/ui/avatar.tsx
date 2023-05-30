import AvatarImage from "./avatarImage";
import AvatarComponentProps from "@/Interfaces/AvatarComponentProps";


export default function AvatarComponent({ src, alt, status }: AvatarComponentProps){

    const returnClasses = ():string => {
        let classes: string
        if(status == 'Idle'){
            classes = "rounded-full p-1 inline-block bg-gray-200"
        }else if(status == 'Active'){
            classes = "rounded-full p-1 inline-block bg-blue-500"
        }else if(status == 'Error'){
            classes = "rounded-full p-1 inline-block bg-red-500"
        }else{
            classes = "rounded-full p-1 inline-block bg-gray-200"
        }

        return classes
    }

    return(
        <div className={returnClasses()}>
            <div className="relative">
                <AvatarImage src={src} alt={alt}/>
            </div>            
        </div>
    )
}