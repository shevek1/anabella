import {
  Bank,
  CreditCard,
  FileText,
  Wrench,
  Money,
  Airplane,
  WhatsappLogo,
  Scales
} from "phosphor-react";

export default function Servicios() {
  const servicios = [
    {
      icon: <Bank size={24} weight="regular" />,
      title: "Estafa bancaria o débito no autorizado",
      description: (
        <>
          Asesoramiento para{" "}
          <span className="text-gray-600 font-bold">
            identificar y reclamar movimientos bancarios sospechosos o no
            reconocidos.
          </span>
        </>
      ),
    },
    {
      icon: <CreditCard size={24} weight="regular" />,
      title: "Créditos o productos no solicitados",
      description: (
        <>
          Reclamos por{" "}
          <span className="text-gray-600 font-bold">
            créditos, seguros u otros productos financieros sin tu consentimiento.
          </span>
        </>
      ),
    },
    {
      icon: <FileText size={24} weight="regular"  />,
      title: "Inclusión indebida en Veraz u otros registros",
      description: (
        <>
          Te ayudamos a gestionar{" "}
          <span className="text-gray-600 font-bold">
            la exclusión de informes negativos que no corresponden a tu historial
            crediticio.
          </span>
        </>
      ),
    },
    {
      icon: <Wrench size={24} weight="regular" />,
      title: "Incumplimiento en la calidad de un producto o servicio",
      description: (
        <>
          Defensa frente a{" "}
          <span className="text-gray-600 font-bold">
            productos defectuosos o servicios mal prestados
          </span>{" "}
          para hacer valer tus derechos.
        </>
      ),
    },
    {
      icon: <Money size={24} weight="regular" />,
      title: "Cobros indebidos por parte de una prepaga",
      description: (
        <>
          Reclamos relacionados con{" "}
          <span className="text-gray-600 font-bold">
            facturaciones erróneas o cargos no autorizados en tu obra social o
            prepaga.
          </span>
        </>
      ),
    },
    {
      icon: <Airplane size={24} weight="regular" />,
      title: "Reclamos contra aerolíneas",
      description: (
        <>
          Asistencia para gestionar compensaciones por{" "}
          <span className="text-gray-600 font-bold">
            retrasos, cancelaciones o pérdida de equipaje.
          </span>
        </>
      ),
    },
  ];

  return (
    <div id="servicios"className="max-w-4xl mx-auto px-5 mt-16 mb-16">
      <div className="text-center">
  <div className="flex items-center justify-center mb-2 space-x-2">
  {/* <Scales size={32} className="text-[#6b4a5f]" /> */}
  <h2 className="text-4xl font-bold text-[#6b4a5f] text-center">
    Nuestros servicios
  </h2>
</div>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          Asesoría legal especializada en defensa al consumidor para <span className="underline">defender tus derechos</span> de forma efectiva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-18">
        {servicios.map(({ icon, title, description }, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <span className="text-orange-500 bg-orange-300/20 p-3 rounded-full inline-flex items-center justify-center shadow-sm">
              {icon}
            </span>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
              <p className="mt-1 text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}
