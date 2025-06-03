import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // 
import {EnvelopeSimple, FacebookLogo, InstagramLogo } from "phosphor-react";


export default function ContactForm() {
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
    <div id="contacto" className="p-4">
      <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mt-10 mb-10 mx-auto max-w-4xl bg-purple-100 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div>
          <h1 className="text-[#6b4a5f] text-3xl font-semibold">¿Te quedó alguna duda?</h1>
          <p className="text-md text-slate-500 mt-4 leading-relaxed">
            Dejanos tu consulta y un abogado de nuestro estudio <span className="underline">se pondrá en contacto con vos</span> a la brevedad.
          </p>

          <div className="mt-12">
            <h2 className="text-slate-700 text-base font-semibold">Correo electrónico</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-orange-300/20 text-orange-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  {/* ícono de mail */}
                  <EnvelopeSimple size={20}  />
                </div>
                <a href="mailto:contacto@usuariosyconsumidores.com.ar" className="text-sm ml-4">
                  <small className="block text-slate-900">Mail</small>
                  <span className="text-[#6b4a5f] font-medium">contacto@usuariosyconsumidores.com.ar</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <ul className="flex mt-4 space-x-4">
      <div>
  <h2 className="text-slate-700 text-base font-semibold">Redes Sociales</h2>
   <ul className="flex mt-4 space-x-4">
          
              <li className="bg-orange-300/20 text-blue-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
  <a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">
      <FacebookLogo size={20}  />
  </a>
</li>
              <li className="bg-orange-300/20 text-pink-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/" target="_blank">
                    <InstagramLogo size={20}  />
                </a>
              </li>
            </ul>
</div>
            </ul>
          </div>
        </div>

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
  );
}
