import { Button } from "@/common/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      Home{" "}
      <Button className="transition-colors bg-blue-500 hover:bg-blue-700 text-white">
        Click me
      </Button>
    </div>
  );
}
