// @refresh reload
import { Meta } from "@solidjs/meta";
import { Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Body, FileRoutes, Head, Html, Scripts } from "solid-start/root";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
