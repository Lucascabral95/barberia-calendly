import toast from 'react-hot-toast'

export const showComingSoonToast = (): void => {
  toast.error('¡Pronto en línea!', {
    icon: '🏗️',
    duration: 3000,
    style: {
      backgroundColor: '#F7F5F0',
      color: '#414141',
      fontWeight: 'bolder',
      fontSize: '16px',
    },
    position: 'bottom-left',
  })
}
