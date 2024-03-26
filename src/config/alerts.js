import Swal from 'sweetalert2';

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
        window.location = redirecionamento;
      }
    }
  })
  alert.fire({
    icon: icon,
    title: mensagem
  });
}

export const alertModal = (title, html, icon) => {
  const alert = Swal.fire({
    title,
    html,
    icon
  });
}