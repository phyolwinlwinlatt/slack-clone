import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div>
        <Image
          src="/ameritrade-logo@2x.png"
          alt="Ameritrade logo"
          width={120}
          height={30}
        />
      </div>
      <div>
        <Image
          src="/target-logo@2x.png"
          alt="Target Logo"
          width={35}
          height={35}
        />
      </div>
      <div>
        <Image src="/uber@2x.png" alt="Uber Logo" width={80} height={30} />
      </div>
      <div>
        <Image
          src="/logo-onemedical@2x.png"
          alt="One Medical"
          width={120}
          height={30}
        />
      </div>
      <div>
        <Image
          src="/logo-netflix@2x.png"
          alt="Netflix Logo"
          width={90}
          height={30}
        />
      </div>
      <div>
        <Image
          src="/us-department-of-veteran-affairs@2x.png"
          alt="Veteran Affairs"
          width={220}
          height={40}
        />
      </div>
      <div>
        <Image src="/intuit@2x.png" alt="Intuit Logo" width={130} height={30} />
      </div>
      <div>
        <Image
          src="/logo-expedia@2x.png"
          alt="Expedia"
          width={120}
          height={30}
        />
      </div>
    </div>
  );
}
