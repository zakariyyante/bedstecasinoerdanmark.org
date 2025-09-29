import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-14 pb-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <Image
                src="/img/Logo.svg"
                width={160}
                height={50}
                alt=" Logo"
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-white">bedsteonlinecasinoerdk.org</strong> hjælper
              dig med at finde de bedste danske online casinoer. Vi fokuserer på
              troværdighed, bonusser og underholdning – helt gratis og sikkert.
            </p>
          </div>

          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition">
                  Vilkår & Betingelser
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-400 transition"
                >
                  Privatlivspolitik
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-amber-300 font-semibold mb-4">
              Ansvarsfraskrivelse
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dette websted indeholder ikke spil med rigtige penge. Det er kun
              til underholdning og information. Du skal være 18+ år. Har du
              problemer med spil, besøg{" "}
              <a
                href="https://stopspillet.dk"
                target="_blank"
                rel="noopener"
                className="text-cyan-400 hover:underline"
              >
                StopSpillet.dk
              </a>{" "}
              for rådgivning.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4">
            Licens & Sikkerhed
          </h3>
          <ul className="space-y-2 flex flex-wrap gap-6 justify-left items-center">
            <Link href={"https://www.rofus.nu/"}>
              <Image src="/img/rofus.png" width={100} height={30} alt="Rofus" />
            </Link>
            <Link href={"https://www.stopspillet.dk/"}>
              <Image
                src="/img/spillet.svg"
                width={100}
                height={30}
                alt="spillet"
              />
            </Link>
            <Link href={"https://www.gambleaware.org/"}>
              <Image
                src="/img/begamble.png"
                width={100}
                height={30}
                alt="begamble"
              />
            </Link>

            <li>
              <Image src="/img/18.svg" width={60} height={30} alt="18+" />
            </li>
            <Link href={"https://www.ecogra.org/"}>
              <Image
                src="/img/e-cogra.png"
                width={80}
                height={30}
                alt="eCogra Certificeret"
              />
            </Link>
            <li>
              <Image
                src="/img/ssl-secure.svg"
                width={80}
                height={30}
                alt="SSL Sikker"
              />
            </li>
          </ul>
        </div>
        {/* Bottom Line */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} bedsteonlinecasinoerdk.org. Alle rettigheder
          forbeholdes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
