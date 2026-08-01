type IconProps = React.SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const ArrowRight = (props: IconProps) => <IconBase {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></IconBase>;
export const Check = (props: IconProps) => <IconBase {...props}><path d="m20 6-11 11-5-5" /></IconBase>;
export const CheckCircle2 = (props: IconProps) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></IconBase>;
export const Grid2X2 = (props: IconProps) => <IconBase {...props}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></IconBase>;
export const Home = (props: IconProps) => <IconBase {...props}><path d="m3 10 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></IconBase>;
export const Mail = (props: IconProps) => <IconBase {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></IconBase>;
export const MapPin = (props: IconProps) => <IconBase {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></IconBase>;
export const Menu = (props: IconProps) => <IconBase {...props}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></IconBase>;
export const Package = (props: IconProps) => <IconBase {...props}><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></IconBase>;
export const Phone = (props: IconProps) => <IconBase {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L9 10.6a16 16 0 0 0 4.4 4.4l1.17-1.15a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z" /></IconBase>;
export const Search = (props: IconProps) => <IconBase {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></IconBase>;
export const ShieldCheck = (props: IconProps) => <IconBase {...props}><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" /><path d="m9 12 2 2 4-4" /></IconBase>;
export const Ship = (props: IconProps) => <IconBase {...props}><path d="M2 20a6 6 0 0 0 4 0 6 6 0 0 1 4 0 6 6 0 0 0 4 0 6 6 0 0 1 4 0 6 6 0 0 0 4 0" /><path d="M4 18 3 8h18l-1 10" /><path d="M8 8V4h8v4" /></IconBase>;
export const Sparkles = (props: IconProps) => <IconBase {...props}><path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5L12 3Z" /></IconBase>;
export const UsersRound = (props: IconProps) => <IconBase {...props}><path d="M18 21a6 6 0 0 0-12 0" /><circle cx="12" cy="11" r="4" /><path d="M22 21a4 4 0 0 0-3-3.87" /><path d="M2 21a4 4 0 0 1 3-3.87" /></IconBase>;
export const X = (props: IconProps) => <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
