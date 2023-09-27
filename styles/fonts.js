import localFont from 'next/font/local'
 
const royale = localFont({
    src: '..app/fonts/ROYALERegular.woff2',
    display: 'swap',
    weight: 'normal',
    style: 'normal',
  })
  
const logirent = localFont({
    src: '..app/fonts/Logirent-Bold.ttf',
    display: 'swap',
    weight: 'bold',
    style: 'normal',
  })
  
const poppins = localFont({
    src: '..app/fonts/Poppins-Regular.ttf',
    display: 'swap',
    weight: 'normal',
    style: 'normal',
  })
  
 
export { royale, logirent, poppins }