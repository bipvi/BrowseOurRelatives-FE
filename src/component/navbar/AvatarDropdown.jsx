import { Dropdown, Avatar } from "flowbite-react"
import { useSelector } from "react-redux"

export default function AvatarDropdown({classe}){
  const me = useSelector((s) => s.user)
    return (
        <>
        <Dropdown
                className={`${classe} bg-bg rounded-lg border border-txt p-0`}
                arrowIcon={false}
                inline
                label={
                  <Avatar
                  className="object-cover"
                    alt="User settings"
                    img={me.avatar}
                    rounded
                  />
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