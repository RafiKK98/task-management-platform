import useAuth from "../hooks/useAuth"

const DashboardHome = () => {

    const { user } = useAuth();

    return (
        <div className="">
            <h2 className="text-3xl"> { user.displayName} </h2>
        </div>
    )
}

export default DashboardHome