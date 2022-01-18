import LogoSymbol from "@/shared/icons/logo-symbol/component";

const Footer = () => (
  <footer className="flex flex-col items-center py-3 bg-blue-200 mq2:space-y-2 mq2:py-5 mq3:space-y-2 mq3:py-5">
    <LogoSymbol className="h-10 mq2:h-14 mq3:h-14" />
    <div>
      <span>&copy;</span>
      &nbsp;
      <span>{new Date().getFullYear()}</span>
      &nbsp;
      <span>Néstor Llamas</span>
    </div>
  </footer>
);

export default Footer;
