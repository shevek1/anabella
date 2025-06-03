// components/HeaderForm.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // 

export default function HeaderForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ln58g9",        // ← tu Service ID
        "template_m2jt0v9",       // ← tu Template ID
        form.current,
        "k7bqRNkSR8P6OHuTE"       // ← tu Public Key
      )
       .then(
        () => {
          Swal.fire({
            icon: "success",
    title: "¡Consulta enviada!",
    text: "Nos comunicaremos a la brevedad.",
    confirmButtonText: "Ir a WhatsApp",
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#25D366", // color de WhatsApp
    cancelButtonColor: "#ccc",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://wa.me/1234567890?text=Hola%2C+los+contacto+desde+su+p%C3%A1gina+web.+Me+gustar%C3%ADa+hacer+una+consulta.", "_blank"); // reemplaza con tu número
    }
  });
  form.current.reset();
},
        (error) => {
          console.error("Error al enviar:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo enviar la consulta. Intenta nuevamente.",
            confirmButtonColor: "#e53e3e"
          });
        }
      );
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
        <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
<h2 className="mb-6 max-w-lg font-formal text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none mt-5 md:mt-0">
                Usuarios y Consumidores
              </h2>
<p
  className="mb-4 max-w-xl text-base md:text-lg font-formal"
  style={{
    color: 'white',
    textShadow: `
      0 0 3px rgba(113, 113, 113, 0.8),
      0 0 5px rgba(109, 106, 106, 0.6),
      0 0 7px rgba(168, 163, 163, 0.4)
    `,
  }}
>
  Defendemos tus derechos con firmeza y experiencia, logrando soluciones rápidas y efectivas.
</p>        

<a
  href="#servicios"
  className="inline-flex items-center rounded-sm gap-2 bg-[#d2a547] px-3 py-1.5 text-sm md:text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c89c3f] hover:shadow-lg"
>
  Más información
  <svg
    className="w-2 h-2"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
  </svg>
</a>
            </div>

            <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
              <div className="overflow-hidden rounded-xl border-t-4 border-[#d2a547] bg-white p-7 shadow-2xl shadow-[#d2a547] sm:p-8">
                <h3 className="text-xl font-bold text-emerald-900">💬 Deja tu consulta</h3>
                <h2 className="mb-4 text-base text-emerald-900 sm:mb-6">Completá el formulario y nos comunicaremos a la brevedad</h2>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      {/* <label className="inline-block font-medium text-emerald-900">Nombre</label> */}
                     <input   id="name"
  name="nombre"
  type="text"
  placeholder="Nombre"
  required
  maxLength={16}
  pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,16}"
  title="Solo letras (máx. 16 caracteres)"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  }}
                        className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1">
                      {/* <label className=" inline-block font-medium text-emerald-900">Teléfono</label> */}
                                   <input  id="phone"
  name="telefono"
  type="tel"
  placeholder="Teléfono"
  required
  maxLength={14}
  pattern="[0-9]{7,14}"
  title="Solo números, sin espacios ni guiones (7 a 14 dígitos)"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  }}
                        className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
  <input
    id="email"
    name="email"
    type="email"
    placeholder="Email"
    required
    maxLength={40}
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    title="Ingresá un email válido"
    className="h-12 w-full mb-1 rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
  />
</div>

                  <div className="mb-4">
                    <label className="mb-1 inline-block font-medium text-emerald-900">Asunto</label>
                    <select
                      name="asunto"
                      required
                      className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    >
              <option value="Estafa bancaria">Estafa bancaria o débito no autorizado</option>
              <option value="Credito no solicitado">Créditos o productos no solicitados</option>
              <option value="Veraz indebido">Inclusión indebida en Veraz u otros registros</option>
              <option value="Deuda falsa">Incumplimiento en la calidad de un producto o servicio</option>
              <option value="Tarjeta no solicitada">Cobros indebidos por parte de una prepaga</option>
              <option value="Aumento cuota">Reclamo contra aerolíneas {`(cancelación, demora, equipaje, etc.)`}</option>
              <option value="Cancelacion no procesada">Consulta general sobre mis derechos como consumidor</option>
              <option value="Cancelacion no procesada">Seguimiento de un caso ya iniciado</option>
              <option value="Cancelacion no procesada">Otros - Quiero iniciar un reclamo con el estudio</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="desc"
                      required
                      maxLength="200"
                      placeholder="Breve descripción"
                      className="h-22 w-full rounded resize-none border border-gray-300 bg-white px-4 py-3 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    ></textarea>
                  </div>

                  

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex cursor-pointer h-14 w-full items-center justify-center rounded-xl bg-green-400 px-6 font-medium tracking-wide text-white shadow-md ring-green-400 transition duration-200 hover:bg-green-300 focus:outline-none focus:ring"
                    >
                      Enviar Consulta
                    </button>
                  </div>

                  <div className="mt-6 flex justify-center items-center gap-6">
                    <img
                      src="https://i.ibb.co/MynSgJ6z/abogadoscap.png"
                      alt="Colegio de Abogados 1"
                      className="h-10 w-auto object-contain"
                    />
                    <img
                      src="https://i.ibb.co/tT0dyr6C/abogasquil.png"
                      alt="Colegio de Abogados 2"
                      className="h-10 w-auto object-contain"
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
