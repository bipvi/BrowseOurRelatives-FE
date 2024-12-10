import { Dropdown, Avatar } from "flowbite-react"
import { useSelector } from "react-redux"

export default function AvatarDropdown({classe}){
  const me = useSelector((s) => s.user)
    return (
        <>
        <Dropdown
                className={`${classe} bg-bg rounded-lg border border-txt`}
                arrowIcon={false}
                inline
                label={ me.avatar ?
                  <img
                  className="object-contain w-10 h-10 ring-2 ring-txt rounded-full"
                    alt='profile'
                    src={me.avatar}
                  /> : <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="profile" className="object-contain w-10 h-10 ring-2 ring-txt rounded-full"/>
                }
              >
                <Dropdown.Header className="text-txt hover:bg-myP hover:text-bg rounded-none">
                  <span className="block text-sm">{me.username}</span>
                </Dropdown.Header>
                <Dropdown.Item className="text-txt hover:bg-myP hover:text-ac rounded-none">
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item className="text-txt hover:bg-myP hover:text-ac rounded-none">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item className="text-txt hover:bg-myP hover:text-ac rounded-none">
                  Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-txt hover:bg-myP hover:text-ac rounded-none">
                  Sign out
                </Dropdown.Item>
              </Dropdown>
        </>
    )
}