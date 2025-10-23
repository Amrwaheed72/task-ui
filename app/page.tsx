'use client';

import { motion, AnimatePresence } from 'framer-motion';
import PageTitle from './components/PageTitle';
import StatsCard from './components/StatsCard';
import { dashboardData } from './lib/constants';
import QuickActions from './components/QuickActions';
import RecentOrdersTable from './components/RecentOrdersTable';
import RecentActivity from './components/RecentActivity';
import MonthlyPerformance from './components/MonthlyPerformance';
import { usePersonState } from './store/PersonStore';
import {
    Stat,
    OrderItem,
    PerformanceMetric,
    ActivityItem,
    QuickActionItem,
} from './types/types';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

const cardItemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 120,
            damping: 15,
        },
    },
};

export default function Home() {
    const { person } = usePersonState();

    const currentData =
        dashboardData[person as keyof typeof dashboardData] ||
        dashboardData['المدير'];

    const cardStats: Stat[] = currentData.cardStats;
    const recentOrders: OrderItem[] = currentData.recentOrders;
    const monthlyPerformance: PerformanceMetric[] =
        currentData.monthlyPerformance;
    const recentActivities: ActivityItem[] = currentData.recentActivities;
    const quickActions: QuickActionItem[] = currentData.quickActions;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={person}
                className="flex flex-col gap-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <PageTitle />
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                >
                    {cardStats.map((stat) => (
                        <motion.div
                            key={stat.title}
                            variants={cardItemVariants}
                        >
                            <StatsCard stat={stat} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex flex-col gap-6 lg:col-span-2"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <RecentOrdersTable orders={recentOrders} />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <MonthlyPerformance
                                performanceData={monthlyPerformance}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6 lg:col-span-1"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <QuickActions actions={quickActions} />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <RecentActivity activities={recentActivities} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
