"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, CalendarDays, Check, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";
import { allCourses, courseCounts, FIELDS, LEVELS, UNIVERSITIES, type Course } from "@/lib/courses";

const PAGE = 24;

/** Group the many study modes into a handful people actually recognise. */
function modeGroup(mode: string) {
  const m = mode.toLowerCase();
  if (m.includes("evening")) return "Evening";
  if (m.includes("weekend")) return "Weekend";
  if (m.includes("dl") || m.includes("online") || m.includes("distance")) return "Online";
  if (m.includes("blended") || m.includes("flexi") || m.includes("flexible")) return "Blended";
  if (m.includes("day") || m.includes("weekday")) return "Daytime";
  return "Other";
}
const MODE_GROUPS = ["Daytime", "Evening", "Weekend", "Blended", "Online"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.85rem] font-medium transition-all duration-200 ${
        active
          ? "border-brand bg-brand text-paper"
          : "border-mist bg-paper text-quiet hover:border-quiet/40 hover:text-ink"
      }`}
    >
      {active ? <Check size={13} aria-hidden /> : null}
      {children}
    </button>
  );
}

export function CourseFinder({ initialField }: { initialField?: string }) {
  const reduce = useReducedMotion();
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<string | null>(null);
  const [field, setField] = React.useState<string | null>(initialField ?? null);
  const [mode, setMode] = React.useState<string | null>(null);
  const [university, setUniversity] = React.useState<string | null>(null);
  // Reset paging when the filters change, derived rather than done in an effect.
  const filterKey = `${query}|${level}|${field}|${mode}|${university}`;
  const [paging, setPaging] = React.useState({ key: filterKey, n: PAGE });
  const shown = paging.key === filterKey ? paging.n : PAGE;

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return allCourses.filter((c) => {
      if (level && c.level !== level) return false;
      if (field && c.field !== field) return false;
      if (university && c.university !== university) return false;
      if (mode && modeGroup(c.mode) !== mode) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.university.toLowerCase().includes(q) ||
        c.field.toLowerCase().includes(q) ||
        c.campuses.some((x) => x.toLowerCase().includes(q))
      );
    });
  }, [query, level, field, mode, university]);

  const active = [level, field, mode, university].filter(Boolean).length + (query ? 1 : 0);
  const clearAll = () => {
    setQuery("");
    setLevel(null);
    setField(null);
    setMode(null);
    setUniversity(null);
  };

  return (
    <Container>
      {/* search */}
      <div className="rounded-3xl border border-mist bg-paper p-5 sm:p-7">
        <label htmlFor="course-search" className="label text-quiet">
          Search {courseCounts.total} courses
        </label>
        <div className="relative mt-3">
          <Search
            size={18}
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-quiet"
          />
          <input
            id="course-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try business, law, nursing, computing, London"
            className="h-13 w-full rounded-2xl border border-mist bg-paper-2 py-3.5 pl-12 pr-4 text-[1rem] text-ink transition-colors placeholder:text-quiet/70 focus:border-brand"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <FilterRow label="Level">
            {LEVELS.map((l) => (
              <Chip key={l} active={level === l} onClick={() => setLevel(level === l ? null : l)}>
                {l}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Subject">
            {FIELDS.map((f) => (
              <Chip key={f} active={field === f} onClick={() => setField(field === f ? null : f)}>
                {f}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="How you study">
            {MODE_GROUPS.map((m) => (
              <Chip key={m} active={mode === m} onClick={() => setMode(mode === m ? null : m)}>
                {m}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="University">
            {UNIVERSITIES.map((u) => (
              <Chip
                key={u}
                active={university === u}
                onClick={() => setUniversity(university === u ? null : u)}
              >
                {u}
              </Chip>
            ))}
          </FilterRow>
        </div>
      </div>

      {/* result count */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 text-[0.95rem] text-quiet">
          <SlidersHorizontal size={16} className="text-brand" aria-hidden />
          <span>
            <strong className="font-semibold text-ink">{results.length}</strong>{" "}
            {results.length === 1 ? "course" : "courses"} found
          </span>
        </p>
        {active > 0 ? (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 rounded-full border border-mist bg-paper px-3.5 py-2 text-[0.85rem] font-medium text-quiet transition-colors hover:border-quiet/40 hover:text-ink"
          >
            <X size={13} aria-hidden />
            Clear filters
          </button>
        ) : null}
      </div>

      {results.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-mist bg-paper-2 p-10 text-center">
          <p className="display-md text-ink">Nothing matches that just yet</p>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-quiet">
            Try fewer filters, or message us and we will look for you. New courses are added all the
            time.
          </p>
          <a
            href={whatsappLink(`Hello ${site.name}, I am looking for a course and cannot find it on your site.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#1fa855] px-6 font-semibold text-paper transition-colors hover:bg-[#1a8f48]"
          >
            <WhatsAppIcon size={18} />
            Ask us to find it
          </a>
        </div>
      ) : (
        <>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.slice(0, shown).map((c, i) => (
              <motion.li
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i % PAGE, 8) * 0.03 }}
                className="h-full"
              >
                <CourseCard course={c} />
              </motion.li>
            ))}
          </ul>

          {shown < results.length ? (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setPaging({ key: filterKey, n: shown + PAGE })}
                className="inline-flex h-12 items-center rounded-full border border-mist bg-paper px-7 font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Show more courses
              </button>
              <p className="mt-3 text-[0.85rem] text-quiet">
                Showing {shown} of {results.length}
              </p>
            </div>
          ) : null}
        </>
      )}
    </Container>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-2.5 text-quiet">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const ask = whatsappLink(
    `Hello ${site.name}, I would like to know more about ${course.name} at ${course.university}.`,
  );
  const intakes = course.running.length ? course.running : course.onDemand;

  return (
    <article className="card-lift flex h-full flex-col rounded-3xl border border-mist bg-paper p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="label rounded-full bg-brand-100 px-3 py-1.5 text-brand">{course.level}</span>
        {course.fee ? (
          <span className="text-right text-[0.8rem] font-medium text-quiet">{course.fee}</span>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-[1.12rem] font-bold leading-snug tracking-[-0.015em] text-ink">
        {course.name}
      </h3>

      <ul className="mt-4 flex flex-1 flex-col gap-2 text-[0.85rem] text-quiet">
        <li className="flex items-start gap-2.5">
          <Building2 size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
          {course.university}
        </li>
        {course.campuses.length ? (
          <li className="flex items-start gap-2.5">
            <MapPin size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            <span>{course.campuses.slice(0, 4).join(", ")}
              {course.campuses.length > 4 ? ` and ${course.campuses.length - 4} more` : ""}
            </span>
          </li>
        ) : null}
        {intakes.length ? (
          <li className="flex items-start gap-2.5">
            <CalendarDays size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            <span>
              {course.running.length ? "Intakes: " : "Subject to demand: "}
              {intakes.join(", ")}
            </span>
          </li>
        ) : null}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-mist pt-5">
        {course.mode ? (
          <span className="rounded-full bg-paper-2 px-2.5 py-1 text-[0.75rem] font-medium text-quiet">
            {course.mode}
          </span>
        ) : null}
        <span className="rounded-full bg-paper-2 px-2.5 py-1 text-[0.75rem] font-medium text-quiet">
          {course.field}
        </span>
        <a
          href={ask}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex h-9 items-center gap-2 rounded-full bg-[#1fa855] px-4 text-[0.82rem] font-semibold text-paper transition-colors hover:bg-[#1a8f48]"
        >
          <WhatsAppIcon size={14} />
          Ask
        </a>
      </div>
    </article>
  );
}
