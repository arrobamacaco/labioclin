import { BackToHome } from "@/components/back-to-home";
import { Breadcrumb } from "@/components/breadcrumb";

type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="flex flex-1 flex-col bg-white px-6 pt-20 pb-16 sm:px-10 sm:pt-8 lg:px-16">
      <div className="mx-auto w-full max-w-3xl">
        <Breadcrumb current={title} />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className={description ? "mt-8" : "mt-4"}>{children}</div>
        ) : null}
        <BackToHome className="mt-12 border-t border-zinc-100 pt-10" />
      </div>
    </div>
  );
}
