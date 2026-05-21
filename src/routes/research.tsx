import { createFileRoute, Outlet} from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/research")({
  component: () => <Outlet />,
});