// src/app/layout.tsx
import Header from '../components/Header';
import '../styles/fonts.css'; 
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js Website</title>
        {/* Các thẻ meta, link hoặc script khác nếu cần */}
      </head>
      <body>
        <Header /> {/* Hiển thị Header */}
        <main>{children}</main> {/* Nội dung của trang */}
      </body>
    </html>
  );
}
