type LogoProps = { alt?: string };

export function Logo({ alt = 'ALLORA Spa & Wellness' }: LogoProps) {
  return (
    <span className="brand">
      <img className="brand-logo" src="/images/logo-allora.png" alt={alt} />
    </span>
  );
}
