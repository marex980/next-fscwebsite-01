import './globals.css';
import localFont from 'next/font/local';

export const poppins = localFont({
  src: './fonts/Poppins-Regular.ttf',
  display: 'swap',
  weight: 'normal',
  style: 'normal',
});

export const metadata = {
  title: 'FSC | Creating fastest, safest and cheapest websites on the world!',
  description:
    'If you are looking for someone to create a fast, secure and cheap website for you, search no more! My name is Marko Radanović and this is my presentation!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${poppins.className} bg-primary-black overflow-x-hidden`}>{children}</body> */}
      <body className={`${poppins.className} bg-primary-black`}>{children}</body>
    </html>
  );
}
