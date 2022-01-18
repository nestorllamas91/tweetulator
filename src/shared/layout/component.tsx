import Footer from "@/shared/layout/footer/component";
import Header from "@/shared/layout/header/component";
import type { LayoutProps } from "@/shared/layout/types";

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col h-full">
    <div className="grow m-6 mq2:mx-14 mq2:my-10 mq3:mx-20 mq3:my-14">
      <Header />
      <main className="mt-2 mq2:mt-3 mq3:mt-5">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
