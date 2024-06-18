import { AvatarImage } from "@/components/shadcn/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import SuspiciousManIcon from "@/components/svg/icons/suspicious-.man";
import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";

export default function Hero() {
  return (
    <div className="flex justify-start md:justify-center items-center w-full h-full">
      <div className="grid grid-cols-1 grid-rows-[300_px_1fr] lg:grid-cols-2 lg:grid-rows-1 mx-6 md:mx-[10rem] min-h-[90vh] pt-8 md:pt-0">
        <div className="flex flex-col justify-center items-center md:items-start">
          <hgroup className="flex flex-col text-center lg:text-start">
            <h2 className="text-[90px] leading-[1] md:text-[100px] text-bold font-sans-accent text-blue-600 mb-5">
              Protege tu seguridad
            </h2>
            <p className="text-xl font-sans font-thin lg:me-20">
              Previene a tu comunidad de hechos delictivos, envía alertas en
              tiempo real y recibe ayuda de la policía. PlaSeC es una plataforma
              de seguridad comunitaria que te permite prevenir y actuar en
              situaciones de riesgo, protegiéndote a ti mismo y a la comunidad.
            </p>
          </hgroup>
          <a className="text-white hover:bg-blue-700 px-4 py-2 my-5 bg-blue-600 rounded-md text-xl mx-auto lg:mx-0 cursor-pointer" href="#download-tutorial">
            Descargar ahora
          </a>
        </div>
        <HeroImage />
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="group flex justify-center items-center relative *:duration-200 *:transition-transform">
      <div className="bg-blue-600/50 absolute h-[60%] w-[60%] top-32 left-1/2 -translate-x-1/3 -z-1 rounded-full shadow-sm"></div>
      <img
        src="/phone-with-map.png"
        alt="Mapa en un teléfono"
        className="peer h-[400px] md:h-[500px] object-cover animate-in fade-in-5 ms-[12rem] -z-1 hover:scale-110 drop-shadow-lg"
      />
      <HeroCard
        username="Roberto Gómez"
        since="Hace 2 horas"
        text="He estado viendo un hombre joven mirando dentro de las casas. Tengan cuidado."
        type="Persona sospechosa"
      />
    </div>
  );
}

type HeroCardProps = {
  username: string;
  since: string;
  text: string;
  type: string;
};

function HeroCard(props: HeroCardProps) {
  return (
    <Card className="absolute top-28 left-8 w-[70%] md:w-[50%] max-h-4xl rounded-md shadow-md hover:scale-110 peer-hover:scale-110">
      <CardHeader className="flex flex-row items-center gap-2 border-b mb-2 py-4">
        <Avatar className="w-12 rounded-full overflow-hidden">
          <img src="/profile-photo.jpg" alt="" />
        </Avatar>
        <div>
          <CardTitle className="rounded-full">{props.username}</CardTitle>
          <CardDescription>
            <span className="text-xs">Hace 2 horas</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardHeader className="m-0 p-0 ps-6 py-2 flex flex-row items-center gap-2">
        <SuspiciousManIcon className="w-7 h-7 bg-black fill-white p-1 rounded-full" />
        <p className="font-bold mb-2 w-fit">Persona sospechosa</p>
      </CardHeader>
      <CardContent className="">
        <p>
          He estado viendo un hombre joven mirando dentro de las casas. Tengan
          cuidado.
        </p>
      </CardContent>
    </Card>
  );
}


