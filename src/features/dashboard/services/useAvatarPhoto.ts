import { useUserStore } from "../../../stores/useUserStore";

export default function useAvatarPhoto () {
    const userImageUrl = useUserStore((state) => state.imageUrl);
    const highQualityAvatarUrl = userImageUrl?.includes("_normal") ? userImageUrl?.replace("_normal", "_400x400") : userImageUrl;
    return {highQualityAvatarUrl, getAvatar};
}

function getAvatar (imageUrl : string) {
    if (!imageUrl)
      return "https://api.dicebear.com/9.x/bottts/svg?size=32&baseColor=f4511e";
    return imageUrl;
}