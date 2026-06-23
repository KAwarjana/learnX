import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../ui/icons";
import type { TutorCard } from "../types";

type Props = {
  card: TutorCard;
  index?: number;
};

export function TutorCardItem({ card }: Props) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-md transition-all duration-300">
      {/* Background photo - zooms on hover */}
      <img
        src={card.image}
        alt={card.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Bottom-to-top gradient overlay on the image (default state) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sky-700/90 via-sky-600/50 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

      {/* DEFAULT state label: name + subject at bottom */}
      <div className="absolute inset-x-0 bottom-0 px-4 py-3 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
        <p className="text-base font-extrabold text-white drop-shadow-md">{card.name}</p>
        <p className="text-xs font-medium text-white/90 drop-shadow">{card.subject}</p>
      </div>

      {/* REVEALED state on hover: semi-transparent blue overlay so image shows through */}
      <div className="absolute inset-0 flex flex-col bg-gradient-to-t from-blue-900/85 via-sky-700/60 to-sky-500/30 p-4 text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <p className="text-lg font-extrabold leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">{card.name}</p>
          <p className="mt-1.5 text-xs font-semibold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            {card.subject}
          </p>
          <p className="text-xs font-medium leading-tight text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            {card.grade}
          </p>
        </div>

        <div className="my-3 h-px bg-white/20" />

        <ul className="space-y-1 text-[11px] font-medium leading-snug text-white/90">
          {card.certifications.map((cert, idx) => (
            <li key={`${card.id}-cert-${idx}`} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              {cert}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2.5 pt-4">
          {card.socials.facebook && (
            <a
              href={card.socials.facebook}
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur-sm transition hover:scale-110 hover:bg-white hover:text-sky-600"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          )}
          {card.socials.linkedin && (
            <a
              href={card.socials.linkedin}
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur-sm transition hover:scale-110 hover:bg-white hover:text-sky-600"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
          {card.socials.instagram && (
            <a
              href={card.socials.instagram}
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur-sm transition hover:scale-110 hover:bg-white hover:text-sky-600"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
          {card.socials.youtube && (
            <a
              href={card.socials.youtube}
              aria-label="YouTube"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur-sm transition hover:scale-110 hover:bg-white hover:text-sky-600"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
