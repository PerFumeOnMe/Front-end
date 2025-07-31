import SkeletonMyPageProfileImage from "./SkeletonMyPageProfileImage";
import SkeletonMyPageUserInfo from "./SkeletonMyPageUserInfo";
import MyPageUserInfo from "./MyPageUserInfo";
import MyPageProfileImage from "./MyPageProfileImage";
import EditPreferredScentButton from "./EditPreferredScentButton";
import type { ResponseUserInfoDto } from "../../types/apis/User";
import { useEffect, useState } from "react";

type MyPageProfileSectionProps = {
    onClickSetting: () => void;
    userInfo: ResponseUserInfoDto | null;
};

const MyPageProfileSection = ({ onClickSetting, userInfo }: MyPageProfileSectionProps) => {
    const [isLoading,setIsLoading] = useState(!userInfo);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            {isLoading ? (
                <>
                    <SkeletonMyPageProfileImage />
                    <SkeletonMyPageUserInfo />
                    <EditPreferredScentButton onClickSetting={onClickSetting} />
                </>
            ) : (
                <>
                    <MyPageProfileImage />
                    <MyPageUserInfo />
                    <EditPreferredScentButton onClickSetting={onClickSetting} />
                </>
            )}
        </div>
    );
};

export default MyPageProfileSection;