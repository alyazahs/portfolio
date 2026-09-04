import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

import juniorCyberSecurity from '../../assets/certificates/junior-cyber-security.jpeg';
import juniorWebDeveloper from '../../assets/certificates/junior-web-developer.jpeg';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const certifications = [
    {
      id: 'junior-cyber-security',
      image: juniorCyberSecurity,
      alt: 'BNSP Junior Cyber Security Certificate',
      title: 'Junior Cyber Security',
      issuer: 'BNSP — Indonesia',
      issued: 'June 2025',
      credentialId: '193105881160-31',
      status: 'completed'
    },
    {
      id: 'junior-web-developer',
      image: juniorWebDeveloper,
      alt: 'BNSP Junior Web Developer Certificate',
      title: 'Junior Web Developer',
      issuer: 'BNSP — Indonesia',
      issued: 'July 2026',
      credentialId: '19387591160-4',
      status: 'completed'
    }
  ];

  return (
    <section
      id="certifications"
      className="py-12 relative"
      style={{
        background:
          themeColors.background.sections?.certifications ||
          themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
      }}
    >
      <div
        className="container mx-auto px-6 relative"
        style={{ zIndex: 2 }}
      >
        <h2
          className="text-4xl font-bold text-center mb-10"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500]
          }}
        >
          Certifications
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((certificate) => (
            <div
              key={certificate.id}
              className="group flex flex-col items-center"
            >
              {/* Certificate Image */}
              <div className="w-full max-w-md overflow-hidden rounded-xl shadow-md">
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Certificate Information */}
              <div className="text-center mt-5">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.pink[300]
                      : themeColors.colors.pink[500]
                  }}
                >
                  {certificate.title}
                </h3>

                <p
                  className="text-sm mb-1"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.dark[300]
                      : themeColors.colors.dark[600]
                  }}
                >
                  {certificate.issuer}
                </p>

                <p
                  className="text-sm"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.dark[300]
                      : themeColors.colors.dark[600]
                  }}
                >
                  Issued {certificate.issued}
                </p>

                <p
                  className="text-xs mt-2"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.dark[400]
                      : themeColors.colors.dark[500]
                  }}
                >
                  Credential ID: {certificate.credentialId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(
                180deg,
                transparent 0%,
                ${themeColors.background.gradientEnd} 100%
              )`
            : `linear-gradient(
                180deg,
                transparent 0%,
                ${themeColors.colors.pink[25]} 100%
              )`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;