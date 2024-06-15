import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu";

import { Logo } from "@/components/svg/logo";
import { cn } from "@/lib/utils";
import { Contact, User } from "lucide-react";
import Offcanvas from "./offcanvas";

const TABS = [
  { label: "Sobre nosotros", href: "/about", icon: User },
  { label: "Contacto", href: "/contact", icon: Contact },
];

// We pass the offcanvas component as children on index.astro to render the offcanvas menu
// and hydrate it with the navigation links
export default function Header(props: { children: React.ReactNode }) {
  return (
    <header className="flex flex-wrap items-center justify-between border border-slate-200 px-2 md:px-4 py-2 text-4xl">
      <a
        className="flex gap-2 text-[2.5rem] items-center text-blue-600 flex-1 justify-center lg:justify-start"
        href="/"
      >
        <Logo className="w-[60px] h-[60px]" />
        <h1 className="font-sans-accent text-center">
          PlaSeC
          <span className="sr-only">Plataforma de seguridad comunitaria</span>
        </h1>
      </a>
      {props.children}
    </header>
  );
}

export function HeaderContent() {
  return (
    <>
      <Offcanvas>
        <NavigationMenu className="w-full flex flex-col justify-center h-full px-8 max-w-none">
          <div className="w-full h-full py-10">
            <ul className="list-none">
              <PageLinks />
            </ul>
          </div>
          <div className="mt-auto w-full h-fit py-10">
            <ul className="list-none flex flex-col gap-4">
              <LoginLinks />
            </ul>
          </div>
        </NavigationMenu>
      </Offcanvas>
      <div className="hidden md:flex md:items-stretch content-center justify-items-center md:justify-center w-full lg:w-auto">
        <NavigationMenu
          className="flex gap-6 h-100 items-center justify-center h-full list-none"
        >
          <ul className="flex gap-2 items-stretch">
            <PageLinks />
            <LoginLinks />
          </ul>
        </NavigationMenu>
      </div>
    </>
  );
}

export function LoginLinks() {
  const importantLinksClass = "border border-slate-200 md:px-4 w-full";
  return (
    <>
      <NavigationMenuItem
        key={"/sign-up"}
        className="w-full h-full flex items-center ms-4"
      >
        <NavigationMenuLink
          href={"/sign-in"}
          className={`${cn(
            navigationMenuTriggerStyle(),
            importantLinksClass,
            "text-lg"
          )}`}
        >
          Registrarse
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem key={"/sign-in"} className="w-full flex items-center">
        <NavigationMenuLink
          href={"/sign-in"}
          className={`${cn(
            navigationMenuTriggerStyle(),
            "bg-blue-500 text-white hover:bg-blue-600 hover:text-white w-full md:w-max text-lg h-auto"
          )}`}
        >
          Iniciar sesión
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}

export function PageLinks() {
  return (
    <>
      {TABS.map((tab) => {
        return (
          <NavigationMenuItem key={tab.href}>
            <NavigationMenuLink
              href={tab.href}
              className={`${cn(
                navigationMenuTriggerStyle(),
                "w-full h-full md:w-max text-lg flex gap-2 items-center"
              )}`}
            >
              {<tab.icon />}
              {tab.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </>
  );
}
