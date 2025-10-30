import { toast } from 'sonner'

export const showComingSoonSonner = (): void => {
  toast.error('¡Pronto en línea!', {
    duration: 3000,
    icon: '🏗️',
    style: {
      maxWidth: 'fit-content',
      backgroundColor: '#F7F5F0',
      color: '#414141',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    position: 'bottom-left',
  })
}
