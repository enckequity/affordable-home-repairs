import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-bg px-4 py-20">
      <div className="mx-auto max-w-md text-center">
        {/* Brand mark */}
        <div className="mb-8 inline-flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-white">AHR</span>
          </div>
          <span className="font-heading text-lg font-bold text-primary-dark">
            {COMPANY.name}
          </span>
        </div>

        {/* 404 message */}
        <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl font-semibold text-text">
          Page Not Found
        </p>
        <p className="mt-2 text-text-light">
          We can fix just about everything around your house — but we
          couldn&apos;t find this page. Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Back to Home
          </Link>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
