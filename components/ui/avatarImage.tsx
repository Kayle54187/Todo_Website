import AvatarImageProps from "@/Interfaces/AvatarImageProps"



export default function AvatarImage({ src, alt }: AvatarImageProps){
    return(
        <img src={src} className="w-10 h-10 rounded-full object-cover" alt={alt}/>
    )
}