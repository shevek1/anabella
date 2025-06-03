import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { CheckCircle, ChatCenteredDots,  Scales , Handshake,Trophy, EnvelopeSimple } from "phosphor-react";

export default function HeaderForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ln58g9",
        "template_m2jt0v9",
        form.current,
        "k7bqRNkSR8P6OHuTE"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Consulta enviada!",
          text: "Nos comunicaremos a la brevedad.",
          confirmButtonText: "Ir a WhatsApp",
          showCancelButton: true,
          cancelButtonText: "Cerrar",
          confirmButtonColor: "#25D366",
          cancelButtonColor: "#ccc",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(
              "https://wa.me/1234567890?text=Hola%2C+los+contacto+desde+su+p%C3%A1gina+web.+Me+gustar%C3%ADa+hacer+una+consulta.",
              "_blank"
            );
          }
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar la consulta. Intenta nuevamente.",
          confirmButtonColor: "#e53e3e",
        });
      });
  };

  return (
    <div className="relative">
      <img
        width="600"
        height="600"
        src="https://i.postimg.cc/NM6c17sp/bg-uyc-5.png"
        alt="Abogados y Clientes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative bg-opacity-1">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
   <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
  <h2
    className="mb-6 max-w-lg font-formal text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none mt-5 md:mt-0 animate-fade-in"
    style={{
      color: "#ffffff",
      textShadow:
        "0 1px 3px rgba(255, 255, 255, 0.2), 0 2px 6px rgba(0, 0, 0, 0.3)",
    }}
  >
    Usuarios y Consumidores
  </h2>

  <p
    className="mb-6 max-w-xl text-base md:text-lg font-formal"
    style={{
      color: "white",
      textShadow:
        "0 0 3px rgba(113, 113, 113, 0.8), 0 0 5px rgba(109, 106, 106, 0.6), 0 0 7px rgba(168, 163, 163, 0.4)",
    }}
  >
    Recuperamos <span className="underline text-[#d2a547]">lo que te corresponde</span> con firmeza y resultados.{" "}
    <span className=""
      style={{
        color: "white",
        fontWeight: "bold",
        textShadow:
          "0 0 6px rgba(208, 203, 203, 0.8), 0 0 12px rgba(14, 13, 13, 0.96)",
      }}
    >
      Sabemos defenderte en serio.
    </span>
  </p>

  <div className="flex flex-wrap gap-6 text-white text-sm md:text-base font-medium">
    <div className="flex items-center gap-2">
      <Scales size={20} weight="bold" className="text-orange-300" />
      <span>Experienca</span>
    </div>
    <div className="flex items-center gap-2">
      <Handshake size={20} weight="bold" className="text-orange-300" />
      <span>Compromiso</span>
    </div>
    <div className="flex items-center gap-2">
      <Trophy size={20} weight="bold" className="text-orange-300" />
      <span>Resultados</span>
    </div>
  </div>
</div>


            <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
              <div className="overflow-hidden rounded-xl border-t-4 border-[#d2a547] bg-white p-7 shadow-2xl shadow-[#d2a547] sm:p-8">
                <h3 className="flex items-center text-xl font-bold text-emerald-900 gap-2">
  <ChatCenteredDots size={20} />
  Deja tu consulta
</h3>
                <h2 className="mb-4 text-base text-emerald-900 sm:mb-6">
                  Completá el formulario y nos comunicaremos a la brevedad
                </h2>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      required
                      maxLength={16}
                      pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,16}"
                      title="Solo letras"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(
                          /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,
                          ""
                        ))
                      }
                      className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    />
                    <input
                      name="telefono"
                      type="tel"
                      placeholder="Teléfono"
                      required
                      maxLength={14}
                      pattern="[0-9]{7,14}"
                      title="Solo números"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                      }
                      className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    maxLength={40}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Email válido"
                    className="h-12 w-full mb-4 rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  />

                  <select
                    name="asunto"
                    required
                    className="h-12 w-full mb-4 rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  >
                    <option value="">Selecciona el Asunto</option>
                    <option value="Estafa bancaria">Estafa bancaria</option>
                    <option value="Credito no solicitado">
                      Crédito no solicitado
                    </option>
                    <option value="Veraz indebido">Veraz indebido</option>
                    <option value="Deuda falsa">Deuda falsa</option>
                    <option value="Tarjeta no solicitada">
                      Tarjeta no solicitada
                    </option>
                    <option value="Aumento cuota">Aumento cuota</option>
                    <option value="Consulta general">
                      Consulta general
                    </option>
                    <option value="Seguimiento caso">
                      Seguimiento de un caso
                    </option>
                    <option value="Otros">Otros</option>
                  </select>

                  <textarea
                    name="desc"
                    required
                    maxLength="200"
                    placeholder="Breve descripción"
                    className="h-22 w-full mb-4 rounded resize-none border border-gray-300 bg-white px-4 py-3 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  ></textarea>

             <button
  type="submit"
  className="inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#d2a547] px-6 font-bold tracking-wide text-white shadow-md ring-[#d2a547] transition duration-200 hover:bg-[#b8973f] focus:outline-none focus:ring"
>
  <EnvelopeSimple size={16} weight="bold" />
  Iniciar Reclamo Ahora
</button>
    <div className="mt-3 mb-[-20px] flex justify-center items-center gap-6">
                    <img
                      src="https://i.ibb.co/MynSgJ6z/abogadoscap.png"
                      alt="Colegio de Abogados 1"
                      className="h-8 w-auto object-contain"
                    />
                    <img
                      src="https://i.ibb.co/tT0dyr6C/abogasquil.png"
                      alt="Colegio de Abogados 2"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
