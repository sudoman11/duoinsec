import { type PartnerLogoProps } from '../../types/partners';

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <img src={logo} alt={name} className="h-12 object-contain grayscale hover:grayscale-0 transition" />
    </div>
  );
}