import PageTitle from './components/PageTitle';
import StatsCard from './components/StatsCard';
import { CardStats } from './utils/constants';
import QuickActions from './components/QuickActions';
import RecentOrdersTable from './components/RecentOrdersTable';
import RecentActivity from './components/RecentActivity';
import MonthlyPerformance from './components/MonthlyPerformance';

export default function Home() {
    return (
        <div className="space-y-12">
            <PageTitle />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {CardStats.map((stat) => (
                    <StatsCard key={stat.badgeColor} stat={stat} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <RecentOrdersTable />
                    <MonthlyPerformance />
                </div>
                <div className="flex flex-col gap-4 lg:col-span-1">
                    <QuickActions />
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}

{
    /* <StatsCard
      badgeColor="bg-orange-600"
      icon={<TbClockCheck />}
      title="معدل النجاح"
      mainValue="94.5%"
      subtitle="323 طلب مكتمل"
  />
  <StatsCard
      badgeColor="bg-green-600"
      icon={<IoTrash className="" />}
      title="إجمالي الطلبات"
      mainValue="342"
      subtitle="+28 هذا الأسبوع"
  />
  <StatsCard
      badgeColor="bg-purple-600"
      icon={<IoPeople className="" />}
      title="إجمالي العملاء"
      mainValue="127"
      subtitle="12 طلب معلّق"
  />
  <StatsCard
      badgeColor="bg-blue-600"
      icon={<IoLockClosed className="" />}
      title="إجمالي الموردين"
      mainValue="48"
      subtitle="+5 هذا الشهر"
  /> */
}
