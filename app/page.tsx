import PageTitle from './components/PageTitle';
import StatsCard from './components/StatsCard';
import { CardStats } from './lib/constants';
import QuickActions from './components/QuickActions';
import RecentOrdersTable from './components/RecentOrdersTable';
import RecentActivity from './components/RecentActivity';
import MonthlyPerformance from './components/MonthlyPerformance';

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {CardStats.map((stat) => (
                    <StatsCard key={stat.title} stat={stat} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col gap-6 lg:col-span-2">
                    <RecentOrdersTable />
                    <MonthlyPerformance />
                </div>
                <div className="flex flex-col gap-6 lg:col-span-1">
                    <QuickActions />
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
