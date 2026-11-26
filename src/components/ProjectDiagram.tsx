import { useId } from 'react'
import type { ProjectId } from '@/content/projects'
import type { Dictionary } from '@/i18n/dictionary'

// Schémas dessinés dans la même grammaire que le Parcours : boîtes, liaisons,
// zone en pointillés.

type BoxProps = {
  x: number
  y: number
  w: number
  h: number
  title: string
  detail?: string
}

function Box({ x, y, w, h, title, detail }: BoxProps) {
  const cx = x + w / 2
  const cy = y + h / 2

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        className="fill-paper stroke-rule-strong"
        strokeWidth={1}
      />
      {detail ? (
        <>
          <text x={cx} y={cy - 4} textAnchor="middle" className="fill-ink font-semibold">
            {title}
          </text>
          <text x={cx} y={cy + 13} textAnchor="middle" className="fill-ink-2">
            {detail}
          </text>
        </>
      ) : (
        <text x={cx} y={cy + 4} textAnchor="middle" className="fill-ink-2">
          {title}
        </text>
      )}
    </g>
  )
}

type LinkProps = { x1: number; y1: number; x2: number; y2: number; head?: boolean; marker: string }

function Link({ x1, y1, x2, y2, head = true, marker }: LinkProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-ink-3"
      strokeWidth={1.25}
      markerEnd={head ? `url(#${marker})` : undefined}
    />
  )
}

function Zone({ x, y, w, h, label }: Omit<BoxProps, 'title' | 'detail'> & { label: string }) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="none"
        className="stroke-rule-strong"
        strokeDasharray="4 4"
      />
      <text x={x + 12} y={y + h - 12} className="fill-ink-3 text-[12px]">
        {label}
      </text>
    </>
  )
}

function Bernstein({ d, marker }: { d: Dictionary['projects']['diagram']; marker: string }) {
  return (
    <>
      <Zone x={24} y={88} w={432} h={300} label={d.cluster} />
      <Link x1={240} y1={64} x2={240} y2={111} marker={marker} />
      <Link x1={240} y1={164} x2={240} y2={188} head={false} marker={marker} />
      <Link x1={120} y1={188} x2={360} y2={188} head={false} marker={marker} />
      <Link x1={120} y1={188} x2={120} y2={215} marker={marker} />
      <Link x1={360} y1={188} x2={360} y2={215} marker={marker} />
      <Link x1={120} y1={268} x2={120} y2={299} marker={marker} />
      <Link x1={360} y1={300} x2={360} y2={269} marker={marker} />
      <Link x1={200} y1={326} x2={279} y2={326} marker={marker} />
      <text x={240} y={316} textAnchor="middle" className="fill-ink-3 text-[12px]">
        worker
      </text>
      <Box x={170} y={24} w={140} h={40} title="Internet" />
      <Box x={140} y={112} w={200} h={52} title="Traefik" detail="reverse proxy, LB" />
      <Box x={40} y={216} w={160} h={52} title="Vote" detail={d.webService} />
      <Box x={280} y={216} w={160} h={52} title="Result" detail={d.webService} />
      <Box x={40} y={300} w={160} h={52} title="Redis" detail={d.queue} />
      <Box x={280} y={300} w={160} h={52} title="PostgreSQL" detail={d.storage} />
    </>
  )
}

function Nexus({ d, marker }: { d: Dictionary['projects']['diagram']; marker: string }) {
  return (
    <>
      <Zone x={100} y={148} w={280} h={240} label="Docker" />
      <Link x1={225} y1={96} x2={225} y2={175} marker={marker} />
      <Link x1={255} y1={176} x2={255} y2={97} marker={marker} />
      <text x={270} y={140} className="fill-ink-3 text-[12px]">
        WebSockets
      </text>
      <Link x1={240} y1={232} x2={240} y2={299} marker={marker} />
      <text x={252} y={270} className="fill-ink-3 text-[12px]">
        {d.history}
      </text>
      <Box x={140} y={40} w={200} h={56} title="Next.js" detail={d.client} />
      <Box x={140} y={176} w={200} h={56} title={d.server} detail={d.serverDetail} />
      <Box x={140} y={300} w={200} h={56} title="PostgreSQL, MongoDB" detail={d.storage} />
    </>
  )
}

const diagrams: Partial<
  Record<ProjectId, { Draw: typeof Bernstein; alt: keyof Dictionary['projects']['diagram'] }>
> = {
  bernstein: { Draw: Bernstein, alt: 'bernsteinAlt' },
  nexus: { Draw: Nexus, alt: 'nexusAlt' },
}

export function ProjectDiagram({ id, t }: { id: ProjectId; t: Dictionary }) {
  const marker = useId().replace(/:/g, '')
  const entry = diagrams[id]
  if (!entry) return null

  const d = t.projects.diagram
  const { Draw } = entry

  return (
    <figure className="min-w-0 border border-rule bg-plate p-4 sm:p-7 xl:p-4">
      <figcaption className="marker text-ink-3">{d.caption}</figcaption>

      {/* Sur mobile, le schéma garde une largeur minimale pour que ses textes restent
          lisibles (environ 11-12px) et défile horizontalement dans son cadre. */}
      <div className="-mx-4 mt-5 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
        <svg
          viewBox="16 16 448 380"
          role="img"
          aria-label={d[entry.alt]}
          className="mx-auto block h-auto w-full max-w-[480px] min-w-[26rem] font-mono text-[12.5px] sm:min-w-0"
        >
          <defs>
            <marker
              id={marker}
              viewBox="0 0 8 8"
              refX="8"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              markerUnits="userSpaceOnUse"
              orient="auto"
            >
              <path d="M0 0 L8 4 L0 8 z" className="fill-ink-3" />
            </marker>
          </defs>
          <Draw d={d} marker={marker} />
        </svg>
      </div>
    </figure>
  )
}
