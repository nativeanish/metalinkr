import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/design/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/design/"!</div>;
}
