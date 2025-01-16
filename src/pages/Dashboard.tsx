// Dashboard.tsx
import React from 'react';
import { faUsers, faTruck, faDollarSign, faLeaf } from '@fortawesome/free-solid-svg-icons';
import InfoCard from "../componet/DashBoardCards.tsx";
import PieChartComponent from "../componet/PieChart.tsx";
import LineChartComponent from "../componet/LineChart.tsx";

const Dashboard: React.FC = () => {
    return (

            <div style={{padding: '20px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif'}}>
                <h1 style={{textAlign: 'center', marginBottom: '20px', color: '#333'}}>Dashboard</h1>

                {/* Horizontal Cards Section */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        marginBottom: '30px',
                        marginLeft: "180px"
                    }}
                >
                    {/* Reusable Info Cards */}
                    <InfoCard value={100} label="Employees" icon={faUsers}/>
                    <InfoCard value="10+" label="Vehicles" icon={faTruck}/>
                    <InfoCard value="$4500" label="Earnings" icon={faDollarSign}/>
                    <InfoCard value="50+" label="Crops" icon={faLeaf}/>
                </div>

                {/* Charts Section */}
                <div style={{display: 'flex', justifyContent: 'center', columnGap: '130px'}}>
                    {/* Pie Chart */}
                    <div style={{flex: '1 1 500px', maxWidth: '500px'}}>
                        <h2 style={{textAlign: 'center', color: '#555'}}>System Data</h2>
                        <PieChartComponent/>
                    </div>

                    {/* Line Chart */}
                    <div style={{flex: '1 1 500px', maxWidth: '800px', height: '400px'}}> {/* Adjust the height here */}
                        <h2 style={{textAlign: 'center', color: '#555'}}>Growing Speed </h2>
                        <br/><br/>
                        <LineChartComponent/>
                    </div>
                </div>
            </div>
            );
            };

            export default Dashboard;
