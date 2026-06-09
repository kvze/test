type HeaderUserInfoProps = {
    userName: string;
};

const HeaderUserInfo = ({ userName }: HeaderUserInfoProps) => {
    return <div>HeaderUserInfo {userName}</div>;
};

export default HeaderUserInfo;
