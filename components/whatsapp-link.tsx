import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Props = {
  message: string;
  children?: React.ReactNode;
  className?: string;
  icon?: boolean;
  label?: string;
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppLink({ message, children, className = "button button-primary", icon = true, label }: Props) {
  return (
    <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children ?? "Enquire on WhatsApp"}
      {icon && <MessageCircle size={17} aria-hidden="true" />}
      {!icon && <ArrowUpRight size={17} aria-hidden="true" />}
    </a>
  );
}
