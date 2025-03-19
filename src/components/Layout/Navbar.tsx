import Image from 'next/image';
import Themes from '@/components/Layout/Themes';
import { useRouter } from 'next/navigation';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { SidebarListItemProps } from '@/types/Sidebar/Sidebar';

import {
  InformationCircleIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ListData: SidebarListItemProps[] = [
    {
      text: "我的帳戶",
      icon: UserCircleIcon,
      disabled: true,
      link: "/account",
    },
    {
      text: "課程表",
      icon:  PresentationChartBarIcon,
      disabled: false,
      link: "/agenda",
    },
    {
      text: "官方驗證",
      icon:  ShieldCheckIcon,
      disabled: true,
      link: "/verify",
    },
    // {
    //   text: "市場行情",
    //   icon: ChartBarSquareIcon,
    //   link: "/market",
    //   // chip: {
    //   //   value: "新",
    //   //   size: "sm",
    //   //   color: "light-green",
    //   // }
    // },
    {
      text: "交易所",
      icon: CurrencyDollarIcon,
      disabled: false,
      link: "/exchange",
    },
    {
      text: "關於我們",
      icon: InformationCircleIcon,
      disabled: true,
      link: "/about",
    },
    {
      text: "設定",
      disabled: true,
      icon: Cog6ToothIcon,
      link: "/settings",
    },
  ]

  return (
    <>
      <nav className="bg-[rgba(41,44,53,0.1)] dark:bg-[rgba(41,44,53,0.3)]">
        <div className="mx-auto px-2 sm:px-6 lg:px-5">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <></>
            </div>
            {/* Logo */}
            <div className="flex flex-1 sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <button onClick={() => router.push('/')}>
                  <Image
                    src="https://cdn.sunary.tw/sunary_with_icon.png"
                    alt="逐日交易聯盟"
                    width={1920}
                    height={1000}
                    className="h-8 w-auto drop-shadow-three dark:drop-shadow-none lg:mr-0"
                  />
                  {/* 逐日交易聯盟 */}
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* 切換主題 */}
              <div className="relative ml-3">
                <Themes></Themes>
              </div>
              {/* 搜尋 */}
              {/* <div className="relative ml-3">
                <SearchBtn></SearchBtn>
              </div> */}
              {/* 更多 */}
              <div className="relative ml-3">
                <IconButton
                  variant="text"
                  size="lg"
                  onClick={() => setIsDrawerOpen(true)}
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Bars3Icon className="h-8 w-8 stroke-2 dark:invert" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <Sidebar
          ListData={ListData}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        ></Sidebar>

        <div className="sm:hidden" id="mobile-menu">
        </div>
      </nav>

    </>
  )
}

export default Navbar;
