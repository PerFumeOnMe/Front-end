import SkeletonMyPageProfileImage from "./SkeletonMyPageProfileImage";
import SkeletonMyPageUserInfo from "./SkeletonMyPageUserInfo";
import MyPageUserInfo from "./MyPageUserInfo";
import MyPageProfileImage from "./MyPageProfileImage";
import EditPreferredScentButton from "./EditPreferredScentButton";
import type { ResponseUserInfoDto } from "../../types/apis/User";

type MyPageProfileSectionProps = {
    onClickSetting: () => void;
    userInfo: ResponseUserInfoDto | null;
};

const MyPageProfileSection = ({ onClickSetting, userInfo }: MyPageProfileSectionProps) => {
    const isLoading = !userInfo;

    return (
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            {isLoading ? (
                <>
                    <SkeletonMyPageProfileImage />
                    <SkeletonMyPageUserInfo />
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