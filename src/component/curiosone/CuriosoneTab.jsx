import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import SingleTab from "./SingleTab";

export default function CuriosoneTabs() {


  return (
    <>
        <Tabs aria-label="Tabs with icons" variant="underline" className="w-screen">
      <Tabs.Item title="Regno">
        <SingleTab tipo={'Regno'} key={"Regno"}/>
      </Tabs.Item>
      <Tabs.Item title="Phylum">
      <SingleTab tipo={'Phylum'} key={"Phylum"}/>
      </Tabs.Item>
      <Tabs.Item title="Classe">
      <SingleTab tipo={'Classe'} key={"Classe"}/>
      </Tabs.Item>
      <Tabs.Item title="Ordine">
      <SingleTab tipo={'Ordine'} key={"Ordine"}/>
      </Tabs.Item>
      <Tabs.Item title="Famiglia">
      <SingleTab tipo={'Famiglia'} key={"Famiglia"}/>
      </Tabs.Item>
      <Tabs.Item title="Genere">
      <SingleTab tipo={'Genere'} key={"Genere"}/>
      </Tabs.Item>
      <Tabs.Item title="Specie">
      <SingleTab tipo={'Specie'} key={"Specie"}/>
      </Tabs.Item>
        </Tabs>
    </>
  );
}
