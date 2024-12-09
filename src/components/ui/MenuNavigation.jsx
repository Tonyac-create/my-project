// eslint-disable-next-line react/prop-types
export default function MenuNavigation({ setIsMenuOpen }) {
  const navigation = [
    { name: "Accueil", href: "#heroSection" },
    { name: "Projets", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "/contact" },
  ];

  const scroolToSection = (href) => {
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };
  return (
    <>
      {navigation.map((item) => (
        <li key={item.name} onClick={() => scroolToSection(item.href)}>
          <a
            href={item.href}
            className="text-marianBlue text-lg hover:underline hover:underline-offset-4 hover:text-black px-3 py-2 font-medium md:text-xl "
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
}
