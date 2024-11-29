import { Dropdown, Avatar } from "flowbite-react"

export default function AvatarDropdown({classe}){
    return (
        <>
        <Dropdown
                className={`${classe} bg-myP`}
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header className="text-txt hover:bg-myP hover:text-bg rounded-none">
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
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