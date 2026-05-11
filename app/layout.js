import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: "Swasthya - Modern Doctor Booking",
  description: "Premium healthcare appointment booking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ClientLayout>
              <PageTransition>
                {children}
              </PageTransition>
            </ClientLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
