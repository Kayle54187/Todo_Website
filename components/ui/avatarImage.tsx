import AvatarImageProps from "@/Interfaces/AvatarImageProps"



const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
    return(
        <img src={src} className="w-10 h-10 rounded-full object-cover" alt={alt}/>
    )
}

export default AvatarImage