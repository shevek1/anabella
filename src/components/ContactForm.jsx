import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // 

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
      <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mt-10 mb-10 mx-auto max-w-4xl bg-purple-50 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div>
          <h1 className="text-[#6b4a5f] text-3xl font-semibold">¿Te quedó alguna duda?</h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Dejanos tu consulta y un abogado de nuestro estudio se pondrá en contacto con vos a la brevedad.
          </p>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold">Correo electrónico</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  {/* ícono de mail */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#6b4a5f" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                  </svg>
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
  <h2 className="text-slate-900 text-base font-semibold">Redes Sociales</h2>
   <ul className="flex mt-4 space-x-4">
              
              {/* <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6b4a5f'
                    viewBox="0 0 511 512">
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000" />
                  </svg>
                </a>
              </li> */}
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
  <a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#6b4a5f" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V11h2.3l-.4 3H14v7A10 10 0 0 0 22 12Z"/>
    </svg>
  </a>
</li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6b4a5f'
                    viewBox="0 0 24 24">
                    <path
                      d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
</div>
            </ul>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Nombre y Teléfono */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="mb-1 inline-block font-medium text-emerald-900">Nombre</label>
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
                className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] transition duration-200 focus:border-[#d2a547] focus:outline-none focus:ring text-slate-900" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="mb-1 inline-block font-medium text-emerald-900">Teléfono</label>
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
                className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] transition duration-200 focus:border-[#d2a547] focus:outline-none focus:ring text-slate-900" />
            </div>
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="subject" className="mb-1 inline-block font-medium text-emerald-900">Asunto</label>
            <select id="subject" name="asunto" required
              className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] transition duration-200 focus:border-[#d2a547] focus:outline-none focus:ring text-slate-900">
              <option value="Estafa bancaria">Estafa bancaria</option>
              <option value="Credito no solicitado">Crédito no solicitado</option>
              <option value="Veraz indebido">Veraz indebido</option>
              <option value="Deuda falsa">Deuda falsa</option>
              <option value="Tarjeta no solicitada">Tarjeta no solicitada</option>
              <option value="Aumento cuota">Aumento injustificado</option>
              <option value="Cancelacion no procesada">Cancelación no procesada</option>
              <option value="Otro">Otro...</option>
            </select>
          </div>

          {/* Mensaje */}
          <textarea placeholder="Breve descripción" rows="6" name="desc" maxLength="200"
            className="h-22 w-full rounded resize-none border border-gray-300 bg-white px-4 py-3 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"></textarea>

          {/* Botón */}
          <button type="submit"
            className="text-white bg-green-400 hover:bg-[#d2a555] rounded-md text-[15px] font-medium px-4 py-2 w-full cursor-pointer !mt-6">
            Enviar consulta
          </button>
           <div className="mt-6 flex justify-center items-center gap-6">
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
