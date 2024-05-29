import Swal from 'sweetalert2';
import router from '../router';

export const alertInstance = (duracao, mensagem, icon, redirecionamento = null) => {
  const alert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: duracao,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    willClose: (toast) => {
      if (redirecionamento != null) {
        if (typeof redirecionamento === 'function')
          return router.push(redirecionamento())
        router.push(redirecionamento)
      }
    }
  })
  alert.fire({
    icon: icon,
    title: mensagem
  });
}

export const alertModal = (title, html, icon) => {
  let alert = Swal.fire({
    title,
    html,
    icon
  });
}