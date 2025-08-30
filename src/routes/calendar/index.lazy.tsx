import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/calendar/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/calendar/"!</div>
}
