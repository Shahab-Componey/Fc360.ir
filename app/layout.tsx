import "./globals.css";
import {ApolloProvider} from "@apollo/client";

import Header from "./Header";
import Footer from "./Footer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col section ">
          <NextTopLoader color="#FFFF" />
          <Header />
          <div className="flex-1 h-full my-10 mx-5 overflow-hidden">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
