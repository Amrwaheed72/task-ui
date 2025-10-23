import { AiOutlineSafety } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { CiShoppingTag } from 'react-icons/ci';
import { IoBagOutline, IoGiftOutline, IoPersonOutline } from 'react-icons/io5';
import { LuNotebookText } from 'react-icons/lu';
import { MdOutlineShoppingCart, MdPeopleOutline } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';

export const navLinks = [
    {
        label: 'لوحة التحكم',
        logo: <PiHouse />,
        link: 'home',
    },
    {
        label: 'الموردين',
        logo: <IoBagOutline />,
        link: 'agents',
    },
    {
        label: 'العملاء',
        logo: <MdPeopleOutline />,
        link: 'clients',
    },
    {
        label: 'الطلبات',
        logo: <LuNotebookText />,
        link: 'orders',
    },
];

export const searchLinks = [
    {
        label: 'الموردين',
        logo: <IoBagOutline />,
        link: '#',
        description: 'البحث عن موردين',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        label: 'الاصناف',
        logo: <CiShoppingTag />,
        link: '#',
        description: 'تصنيفات المنتجات',
        color: 'text-purple-700',
        bgColor: 'bg-purple-50',
    },
    {
        label: 'التعريف',
        logo: <CgNotes />,
        link: '#',
        description: 'ملفات التعريف',
        color: 'text-green-700',
        bgColor: 'bg-green-50',
    },
    {
        label: 'طلب الشراء',
        logo: <MdOutlineShoppingCart />,
        link: '#',
        description: 'طلبات الشراء',
        color: 'text-orange-700',
        bgColor: 'bg-orange-50',
    },
    {
        label: 'العروض',
        logo: <IoGiftOutline />,
        link: '#',
        description: 'العروض والخصومات',
        color: 'text-pink-700',
        bgColor: 'bg-pink-50',
    },
];

export const selectOptions = [
    {
        label: 'المدير',
        icon: <AiOutlineSafety />,
        color: 'text-blue-600',
    },
    {
        label: 'المورد',
        icon: <IoBagOutline />,
        color: 'text-purple-700',
    },
    {
        label: 'العميل',
        icon: <IoPersonOutline />,
        color: 'text-green-700',
    },
];
