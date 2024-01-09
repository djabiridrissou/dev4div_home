
import Layout from "../layout/Layout";
import Newsletter from "../components/Newsletter";

const Dashboard = () => {
    return (
        <>
            <div>
                <Layout children={ <Newsletter /> } />
            </div>
        </>
    )
}

export default Dashboard;