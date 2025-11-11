import { AlertTriangle } from "lucide-react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError() as Error | undefined;
  const message = error?.message ?? "Unknown error.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-6 py-12 text-center text-slate-900">
      <div className="flex flex-col items-center gap-3">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </span>

        <h1 className="text-2xl font-semibold">Something went wrong</h1>

        <p className="max-w-md text-sm text-slate-600">
          We couldn’t load this page. Please refresh or try again later.
        </p>
      </div>

      <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm">
        <pre className="whitespace-pre-wrap wrap-break-word font-mono text-xs text-slate-700">
          {message}
        </pre>
      </div>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorElement;
