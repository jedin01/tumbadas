import { useLoaderData } from "react-router-dom";
import EditData from "../components/EditData";

const EditDataWrapper = () => {
  const { slug, id } = useLoaderData() as { slug: string; id: string };
  console.log("okok");

  return <EditData slug={slug} id={id} isOpen={true} setIsOpen={() => {}} />;
};

export default EditDataWrapper;
