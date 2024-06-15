import FacebookIcon from "@/components/svg/icons/facebook";
import InstagramIcon from "@/components/svg/icons/instagram";
import { WhiteLogo } from "@/components/svg/logo";
import { type ReactNode } from "react";

const FOOTER_LINKS = [
  {
    icon: <InstagramIcon className="w-6 fill-white" />,
    to: "https://www.instagram.com/plasec/",
    text: "PlaSeC",
  },
  {
    icon: <FacebookIcon className="w-6 fill-white" />,
    to: "https://www.facebook.com/plasec/",
    text: "PlaSeC",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white flex flex-col gap-4 mt-24">
      <div className="flex justify-between flex-wrap mx-auto content-center w-full lg:max-w-[70%] gap-2 md:gap-12">
        <div className="min-h-[30vh]">
          <a
            className="flex gap-2 text-[5rem] items-center flex-1 justify-center lg:justify-start p-2 md:p-5"
            href="/"
          >
            <WhiteLogo className="w-[100px] h-[100px] fill-white stroke-white" />
            <span className="font-sans-accent text-center">PlaSeC</span>
          </a>
          <div className="px-5 flex flex-col gap-2 items-start mt-4 md:mt-8">
            <p className="text-2xl font-regular font-sans-accent text-center md:text-start">
              Comienza a proteger la seguridad desde hoy.
            </p>
            <a
              href="/sign-in"
              className="text-blue-600 hover:bg-slate-200 px-4 py-2 bg-white rounded-md text-xl mx-auto md:mx-0 mt-1"
            >
              Descarga ahora
            </a>
          </div>
        </div>
        <div className="py-10 flex gap-14 justify-center md:justify-star w-full lg:w-auto">
          <div className="flex flex-col gap-5 justify-center md:justify-start">
            <h2 className="text-2xl font-bold">Compañía</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/about">Sobre nosotros</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Redes sociales</h2>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => {
                return (
                  <FooterLink key={link.to} to={link.to}>
                    {link.icon} {link.text}
                  </FooterLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100/50 col-span-2 flex justify-around md:justify-between items-center px-2 py-2 md:p-5 mt-8 w-full">
        <div className="w-1/2">
          <p>© 2024 PlaSeC</p>
        </div>
        <div className="flex gap-4 md:gap-7 w-1/2">
          <p>Términos y condiciones</p>
          <p>Políticas de privacidad</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink(props: { children?: ReactNode; to: string }) {
  return (
    <a href={props.to} className="flex gap-3 text-white">
      {props.children}
    </a>
  );
}
