import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  Star,
  ShieldCheck,
  AirplaneTilt,
  CheckCircle,
  CalendarCheck,
  FileText,
  WhatsappLogo,
  CurrencyCircleDollar,
} from "phosphor-react";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Tomás Villagrán",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", // ✅ Ruta a la imagen
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Estafa bancaria y Veraz",
    text:
      "Tomás, uno de nuestros clientes, descubrió que había sido incluido en Veraz por una deuda originada en una tarjeta de crédito que jamás solicitó. El banco emitió el plástico sin su consentimiento y fue usado sin su conocimiento.",
    resultPoints: [
      "Que se anule la deuda ilegítima.",
      "Que el banco emita libre deuda.",
      "Que se ordene la baja inmediata en Veraz.",
      "Que se le otorgue una reparación económica a favor del consumidor.",
    ],
    finalResult:
      "Tomás no solo recuperó su tranquilidad, sino que además fue resarcido económicamente. Hoy su historial crediticio está limpio y validado.",
  },
  {
    name: "Claudia Reynoso",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <AirplaneTilt size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Cambio de vuelo sin aviso",
    text:
      "Claudia compró su pasaje con meses de anticipación para un congreso y la aerolínea modificó la fecha sin avisarle, impidiéndole llegar a tiempo.",
    resultPoints: [
      "La restitución total del importe del pasaje.",
      "Una compensación económica por gastos perdidos y daños ocasionados.",
    ],
    finalResult:
      "Claudia fue plenamente indemnizada y la empresa reconoció su responsabilidad. El caso sentó un precedente útil para otras personas.",
  },
  {
    name: "Facundo Pereyra",
    image: "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Estafa bancaria y Veraz",
    text:
      "Carlos fue incluido en Veraz por una deuda en una tarjeta que nunca solicitó. El banco emitió el plástico sin su consentimiento y lo usaron sin su conocimiento.",
    resultPoints: [
      "Que se anule la deuda ilegítima.",
      "Que el banco emita libre deuda.",
      "Que se ordene la baja inmediata en Veraz.",
      "Que se le otorgue una reparación económica a favor del consumidor.",
    ],
    finalResult:
      "Facundo recuperó su tranquilidad y fue resarcido económicamente. Hoy su historial crediticio está limpio y validado.",
  },
  {
    name: "Agostina Figueroa",
    image: "https://static.vecteezy.com/system/resources/thumbnails/057/704/776/small/young-woman-with-glasses-smiles-confidently-during-classroom-session-photo.jpg",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Producto defectuoso y garantía incumplida",
    text:
      "Agostina compró un electrodoméstico que se rompió a los pocos días. La tienda se negó a aceptar la garantía ni a cambiar el producto.",
    resultPoints: [
      "Reclamamos formalmente la garantía ante la empresa.",
      "Exigimos el cambio inmediato del producto defectuoso.",
      "Obtuvimos una compensación por los inconvenientes causados.",
    ],
    finalResult:
      "Agostina recibió un electrodoméstico nuevo y una compensación. Se garantizó el cumplimiento de sus derechos como consumidora.",
  },
];

const steps = [
  {
    title: "Reservá tu consulta",
    description:
      "Coordinamos una llamada para entender tu caso y definir si podemos ayudarte.",
    icon: <CalendarCheck size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Análisis y estrategia",
    description:
      "Nuestro equipo analiza tu situación legal y te explica los pasos a seguir.",
    icon: <FileText size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Contacto directo",
    description:
      "Te mantenemos al tanto por WhatsApp y resolvemos todas tus dudas en el camino.",
    icon: <WhatsappLogo size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Cierre exitoso",
    description:
      "Buscamos siempre una solución rápida, justa y con compensación económica.",
    icon: <CurrencyCircleDollar size={28} className="text-[#6b4a5f]" />,
  },
];

export default function HowWeWorkAndReviews() {
  return (
    <div id="como-trabajamos" className="bg-[#fdfdfb] px-4">
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            width: 28px;
            height: 28px;
            color: #6b4a5f;
            top: 45% !important;
            z-index: 10;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 28px;
            font-weight: bold;
          }
          .swiper-button-next {
            right: -40px;
          }
          .swiper-button-prev {
            left: -40px;
          }
          .fixed-height-card {
            height: 360px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .review-text {
            margin-bottom: 0.5rem;
            line-height: 1.3;
            font-size: 0.9rem;
            color: #4a4a4a;
          }
          .result-points {
            margin-bottom: 0.5rem;
            padding-left: 0;
            list-style: none;
          }
          .result-points li {
            display: flex;
            align-items: center;
            margin-bottom: 0.3rem;
            font-size: 0.9rem;
            color: #4a4a4a;
          }
          .result-points svg {
            margin-right: 6px;
            flex-shrink: 0;
            color: #6b4a5f;
          }
          .final-result {
            font-style: italic;
            font-weight: 500;
            color: #333333;
            font-size: 0.9rem;
          }
        `}
      </style>

      {/* Cómo trabajamos */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-[#6b4a5f] mb-2">
          ¿Cómo trabajamos?
        </h2>
        <p className="text-center text-[#6b4a5f] mb-12 max-w-2xl mx-auto text-lg">
          Brindamos un asesoramiento <span className="underline ">claro y profesional</span> para defender tus derechos y
          obtener los mejores resultados en cada caso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 duration-300 transform bg-white border border-[#d2a547] rounded shadow-sm hover:-translate-y-2 transition"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-[#6b4a5f]">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separador */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-20 bg-[#6b4a5f] mt-4 mb-16 rounded-full" />
      </div>

      {/* Casos de Éxito */}
      <section className="max-w-6xl mx-auto pb-20 relative">
        <h2 className="text-4xl font-bold text-center text-[#6b4a5f] mb-2">
          Casos de Éxito
        </h2>
        <p className="text-center text-[#6b4a5f] mb-12 max-w-3xl mx-auto text-lg">
          Con experiencia y dedicación, logramos resolver situaciones complejas y
          <span className="underline"> defender los derechos</span> de nuestros clientes.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          spaceBetween={20}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-6 rounded-xl border border-[#d2a547] shadow-md fixed-height-card transition-all hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover border border-[#6b4a5f]"
                  />
                  <div>
                    <div className="flex items-center text-[#6b4a5f] font-semibold">
                      <span>{review.name}</span>
                    </div>
                    <div className="flex text-yellow-500 mt-1">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star key={i} weight="fill" size={16} />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#6b4a5f] mb-2 flex items-center">
                  {review.title}
                </h3>

                <p className="review-text">{review.text}</p>

                <ul className="result-points">
                  {review.resultPoints.map((point, i) => (
                    <li key={i}>
                      <CheckCircle size={16} weight="bold" color="#22c55e" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="final-result">"{review.finalResult}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
