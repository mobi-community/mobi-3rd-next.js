const ProfilePage = ({ params }) => {
    return (
        <>
            <h1>Profile</h1>
            <h2>{params.id}</h2>
            <h2>{params.slug}</h2>
        </>
    );
};
export default ProfilePage;
