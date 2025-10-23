import { Stat } from '../utils/constants';

const StatsCard = ({ stat }: Stat) => {
    const { icon, badgeColor, title, mainValue, subtitle } = stat;
    return (
        <div className="rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
            <div className="flex flex-col items-start gap-2 px-6 py-8">
                <div className={`rounded-xl ${badgeColor} p-2`}>{icon}</div>
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-900">{mainValue}</p>
                <p className="text-sm font-semibold text-gray-500">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default StatsCard;
