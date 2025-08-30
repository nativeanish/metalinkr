import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/token/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/token/"!</div>;
}
