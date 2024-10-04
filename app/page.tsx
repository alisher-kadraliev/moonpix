import { getPopUp } from "../action/popup";
import { Dashboard } from "./_components/main";

export default async function Home() {
  const popUp = await getPopUp()

  if (popUp === "No popup available") {
    return <div>No popup available</div>;
  }


  return (
    <main >
      <div className="max-md:hidden">
        <Dashboard />
      </div>
    </main>
  );
}
