import Link from "next/link";

type PostItemProps = {
  title: string;
  description: string;
  date: string;
  category: string;
  href: string;
}

export function PostItem({
  title,
  description,
  date,
  category,
  href,
}: PostItemProps) {
  return (
    <article className="group border-b py-8 first:pt-0 sm:py-10">
      <Link href={href} className="block">
        <div className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <time className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {date}
          </time>

          <span aria-hidden="true">·</span>

          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {category}
          </span>
        </div>

        <h2 className="max-w-3xl font-heading text-3xl leading-tight font-medium tracking-tight transition-colors group-hover:text-primary sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </Link>
    </article>
  )
}