import React from 'react';
import "./home.css";
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
