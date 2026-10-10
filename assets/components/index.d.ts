/** Kate Cabarcas Peluquería — window.KC. Cada componente devuelve un string HTML; insértalo con KC.mount(el, html). */
export type IconName = 'corte' | 'rizos' | 'lisos' | 'keratina' | 'color' | 'brushing' | 'tratamiento' | 'agenda' | 'reloj' | 'ubicacion' | 'mensaje' | 'diamante' | 'flecha' | 'cerrar' | 'menu';
export interface ButtonProps { label?: string; variant?: 'primario' | 'claro' | 'hebra' | 'hebra-claro'; size?: 'compacto'; href?: string; type?: 'button' | 'submit'; disabled?: boolean }
export interface FieldProps { label: string; placeholder?: string; type?: string; options?: string[]; multiline?: boolean; hint?: string; error?: string; value?: string; name?: string; id?: string }
export interface TagProps { label?: string; tone?: 'rizos' | 'lisos' | 'nuevo' }
export interface OrnamentProps { name?: 'hebras' | 'esquina' | 'medallon'; word?: string }
export interface MedallionProps { icon?: IconName; size?: number }
export interface HeaderProps { izquierda?: string[]; derecha?: string[]; actual?: string; cta?: string; sobre?: boolean; ciudad?: string; horario?: string; telefono?: string; monogram?: string }
export interface HeroProps { fotoRizos?: string; fotoLisos?: string; altRizos?: string; altLisos?: string; intro?: string; frase?: FraseProps; nav?: boolean; creditos?: string }
export interface ServiceCardProps { icon?: IconName; title: string; text: string; price: string; duration?: string; tag?: TagProps }
export interface PriceMenuProps { eyebrow?: string; title: string; items: { name: string; price: string; detail?: string }[] }
export interface TestimonialProps { quote: string; name: string; service?: string; foto?: string; alt?: string; ficha?: { textura?: string; servicio?: string; duracion?: string; desde?: string } }
export interface DualityProps { rizos?: { title?: string; text?: string; cta?: string }; lisos?: { title?: string; text?: string; cta?: string } }
export interface BookingBarProps { title?: string; text?: string; cta?: string; turnos?: { dia: string; hora: string; lleno?: boolean }[] }
export declare function Button(p?: ButtonProps): string;
export declare function Field(p: FieldProps): string;
export declare function Tag(p?: TagProps): string;
export declare function Ornament(p?: OrnamentProps): string;
export declare function Medallion(p?: MedallionProps): string;
export declare function Header(p?: HeaderProps): string;
export declare function Hero(p?: HeroProps): string;
export declare function ServiceCard(p: ServiceCardProps): string;
export declare function PriceMenu(p: PriceMenuProps): string;
export declare function Testimonial(p: TestimonialProps): string;
export declare function Duality(p?: DualityProps): string;
export declare function BookingBar(p?: BookingBarProps): string;
/** Utilidades de dibujo: colores leídos de los tokens del tema activo. */
export declare function icon(name: IconName, opts?: { size?: number; stroke?: number }): string;
export declare function ornament(name: 'hebras' | 'esquina' | 'medallon'): string;
export declare function marble(canvas: HTMLCanvasElement, opts?: { seed?: number; theme?: 'marmol' | 'noche'; scale?: number }): void;
export declare function strands(canvas: HTMLCanvasElement, opts?: { mode?: 'rizos' | 'lisos'; seed?: number }): void;
export declare function hydrate(root?: ParentNode): void;
export declare function mount(el: HTMLElement, html: string): HTMLElement;
export declare const assets: { logo: string; logoNoche: string; monograma: string; fotoRizos: string; fotoLisos: string; fotoOscuro: string; marmolClaro: string; marmolNoche: string; oroFoil: string };
export interface FraseProps { texturas?: string[]; dias?: string[]; franjas?: string[]; cta?: string }
export declare function Frase(p?: FraseProps): string;
export declare function Fab(p?: { href?: string; label?: string }): string;
